import type { IncomingMessage, ServerResponse } from "http";
import { GoogleGenAI } from "@google/genai";
import { BE_CORPORATE_SYSTEM_PROMPT, getAdvisorResponse, cleanBotResponse } from "../src/lib/advisorEngine";

interface VercelReq extends IncomingMessage {
  body: any;
  method?: string;
  headers: Record<string, string | string[] | undefined>;
}

interface VercelRes extends ServerResponse {
  status: (code: number) => VercelRes;
  json: (data: any) => void;
  setHeader: (name: string, value: string | number | readonly string[]) => this;
}

async function getParsedBody(req: VercelReq): Promise<any> {
  if (req.body) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        return {};
      }
    }
    return req.body;
  }

  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        resolve({});
      }
    });
    req.on("error", () => resolve({}));
  });
}

export default async function handler(req: VercelReq, res: VercelRes) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = await getParsedBody(req);
    const { message, conversationHistory } = body;

    if (!message) {
      return res.status(400).json({ error: "Mensaje requerido" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        response: getAdvisorResponse(message),
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { "User-Agent": "aistudio-build" } },
    });

    const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
    if (Array.isArray(conversationHistory)) {
      for (const item of conversationHistory.slice(-8)) {
        if (item.sender === "user") {
          formattedContents.push({ role: "user", parts: [{ text: item.text }] });
        } else if (item.sender === "bot") {
          formattedContents.push({ role: "model", parts: [{ text: item.text }] });
        }
      }
    }
    formattedContents.push({ role: "user", parts: [{ text: message }] });

    // Try standard stable models in sequence (gemini-2.5-flash -> gemini-2.5-pro -> gemini-3.7-flash)
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-3.7-flash"];
    let responseText: string | null = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: formattedContents,
          config: {
            systemInstruction: BE_CORPORATE_SYSTEM_PROMPT,
            temperature: 0.4,
            topP: 0.95,
          },
        });
        if (response.text && response.text.trim().length > 0) {
          responseText = response.text;
          break;
        }
      } catch (modelErr: any) {
        console.warn(`Model ${modelName} unavailable in Vercel function (${modelErr?.status || modelErr?.message}), attempting fallback...`);
      }
    }

    if (!responseText) {
      responseText = getAdvisorResponse(message);
    }

    return res.status(200).json({
      response: cleanBotResponse(responseText),
    });
  } catch (error: any) {
    console.error("Vercel /api/chat error:", error);
    return res.status(200).json({
      response: cleanBotResponse(getAdvisorResponse(req.body?.message || "")),
    });
  }
}
