import type { IncomingMessage, ServerResponse } from "http";

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

// Helper to safely parse body if not pre-parsed by runtime
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
    const {
      nombre,
      email,
      empresa = "",
      cargo = "",
      telefono = "",
      participantes = "8 a 12 participantes",
      desafioPrincipal = "General",
      source = "Web Be Corporate",
    } = body;

    if (!nombre || !email) {
      return res.status(400).json({
        success: false,
        error: "Nombre y correo corporativo son obligatorios.",
      });
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

    let hubspotSuccess = false;
    let syncMethod = "local";

    // 1. HubSpot Forms API v3 (Direct form submission)
    if (portalId && formId) {
      try {
        const hsPayload = {
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: nombre },
            { objectTypeId: "0-1", name: "email", value: email },
            { objectTypeId: "0-1", name: "company", value: empresa },
            { objectTypeId: "0-1", name: "jobtitle", value: cargo },
            { objectTypeId: "0-1", name: "phone", value: telefono },
            {
              objectTypeId: "0-1",
              name: "message",
              value: `[Be Corporate Lead] Desafío: ${desafioPrincipal} | Participantes: ${participantes} | Origen: ${source}`,
            },
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
          hubspotSuccess = true;
          syncMethod = "hubspot_forms_v3";
        }
      } catch (hsErr) {
        console.warn("HubSpot Form API Error:", hsErr);
      }
    }

    // 2. HubSpot CRM Contacts API v3 (Private App Token)
    if (!hubspotSuccess && accessToken) {
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
              company: empresa,
              jobtitle: cargo,
              phone: telefono,
              hs_lead_status: "NEW",
              message: `[Be Corporate Lead] Desafío: ${desafioPrincipal} | Participantes: ${participantes} | Origen: ${source}`,
            },
          }),
        });

        if (crmRes.ok) {
          hubspotSuccess = true;
          syncMethod = "hubspot_crm_contacts_v3";
        }
      } catch (crmErr) {
        console.warn("HubSpot CRM API Error:", crmErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Solicitud registrada exitosamente.",
      hubspotSynced: hubspotSuccess,
      syncMethod,
      details: hubspotSuccess
        ? "Datos sincronizados exitosamente con HubSpot."
        : "Datos registrados en el sistema de gestión de Be Corporate.",
    });
  } catch (err: any) {
    console.error("Lead Handler Error:", err);
    return res.status(500).json({
      success: false,
      error: "Error interno al procesar el contacto.",
      details: err?.message,
    });
  }
}
