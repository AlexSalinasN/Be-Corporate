import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { BE_CORPORATE_SYSTEM_PROMPT, getAdvisorResponse } from "./src/lib/advisorEngine";

dotenv.config();

const PORT = 3000;

let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route: Health Check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", app: "Be Corporate Advisory API" });
  });

  // API Route: AI Chatbot powered by Gemini
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "El mensaje es requerido." });
      }

      const ai = getGenAI();

      // Intelligent contextual response if Gemini API key is not present
      if (!ai) {
        const contextualResponse = getAdvisorResponse(message);
        return res.json({
          response: contextualResponse,
        });
      }

      // Format previous history for Gemini
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
          console.warn(`Model ${modelName} unavailable (${modelErr?.status || modelErr?.message}), attempting fallback...`);
        }
      }

      if (!responseText) {
        responseText = getAdvisorResponse(message);
      }

      res.json({
        response: responseText,
      });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      // Even in case of API error, provide dynamic contextual knowledge response
      const fallbackResponse = getAdvisorResponse(req.body?.message || "");
      res.json({
        response: fallbackResponse,
      });
    }
  });

  // API Route: Lead Capture & Form Submission (both /api/leads and /api/leads/hubspot)
  app.post(["/api/leads", "/api/leads/hubspot"], async (req: Request, res: Response) => {
    try {
      const {
        nombre,
        email,
        empresa,
        cargo,
        telefono,
        participantes,
        desafioPrincipal,
        fecha,
        hora,
        source = "Website Form",
      } = req.body;

      if (!nombre || !email) {
        return res.status(400).json({
          success: false,
          error: "Nombre y correo corporativo son obligatorios.",
        });
      }

      const portalId = process.env.HUBSPOT_PORTAL_ID;
      const formId = process.env.HUBSPOT_FORM_ID;
      const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

      let crmSuccess = false;

      const formattedNotes = `[Registro Be Corporate]
- Fecha seleccionada en calendario: ${fecha ? `${fecha}${hora ? ` (${hora})` : ''}` : 'Por definir con el equipo'}
- Principal desafío de comunicación en reuniones: ${desafioPrincipal || "No especificado"}
- Tamaño de cohorte: ${participantes || "8 a 12 participantes"}
- Rol del cliente que se registra: ${cargo || "No especificado"}
- Empresa: ${empresa || "No especificada"}
- Teléfono: ${telefono || "No proporcionado"}
- Origen: ${source}`;

      // 1. If Form ID and Portal ID are provided, submit directly
      if (portalId && formId) {
        try {
          const hsPayload = {
            fields: [
              { objectTypeId: "0-1", name: "firstname", value: nombre },
              { objectTypeId: "0-1", name: "email", value: email },
              { objectTypeId: "0-1", name: "company", value: empresa || "" },
              { objectTypeId: "0-1", name: "jobtitle", value: cargo || "" },
              { objectTypeId: "0-1", name: "phone", value: telefono || "" },
              { objectTypeId: "0-1", name: "message", value: formattedNotes },
            ],
            context: {
              pageUri: "https://becorporate.mx",
              pageName: "High-Performance Meetings™ - Be Corporate",
            },
          };

          const hsRes = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(hsPayload),
            }
          );

          if (hsRes.ok) {
            crmSuccess = true;
          }
        } catch (hsErr) {
          console.warn("CRM Form submit error:", hsErr);
        }
      }

      // 2. Alternatively, if Access Token is provided, create CRM contact
      if (!crmSuccess && accessToken) {
        try {
          const crmRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              properties: {
                firstname: nombre,
                email: email,
                company: empresa || "",
                jobtitle: cargo || "",
                phone: telefono || "",
                hs_lead_status: "NEW",
                message: formattedNotes,
              },
            }),
          });

          if (crmRes.ok) {
            crmSuccess = true;
          }
        } catch (crmErr) {
          console.warn("CRM API error:", crmErr);
        }
      }

      // Log lead for executive advisory team
      console.log("[Be Corporate Lead Received]", {
        timestamp: new Date().toISOString(),
        nombre,
        email,
        empresa,
        cargo,
        telefono,
        participantes,
        desafioPrincipal,
        source,
        synced: crmSuccess,
      });

      return res.json({
        success: true,
        message: "Información recibida correctamente. Nos comunicaremos a la brevedad.",
        synced: crmSuccess,
        details:
          "Su solicitud ha sido registrada exitosamente. El equipo directivo de Be Corporate se comunicará en menos de 24 horas hábiles.",
      });
    } catch (err: any) {
      console.error("Error handling lead submission:", err);
      return res.status(500).json({
        success: false,
        error: "Ocurrió un error al procesar los datos de contacto.",
      });
    }
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Be Corporate Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
