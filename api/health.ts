import type { IncomingMessage, ServerResponse } from "http";

interface VercelReq extends IncomingMessage {
  method?: string;
}

interface VercelRes extends ServerResponse {
  status: (code: number) => VercelRes;
  json: (data: any) => void;
  setHeader: (name: string, value: string | number | readonly string[]) => this;
}

export default function handler(req: VercelReq, res: VercelRes) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json({
    status: "ok",
    app: "Be Corporate Advisory API",
    timestamp: new Date().toISOString(),
    env: {
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
      hasHubSpotPortal: Boolean(process.env.HUBSPOT_PORTAL_ID),
      hasHubSpotForm: Boolean(process.env.HUBSPOT_FORM_ID),
      hasHubSpotToken: Boolean(process.env.HUBSPOT_ACCESS_TOKEN),
    },
  });
}
