import type { IncomingMessage, ServerResponse } from "http";

interface VercelReq extends IncomingMessage {
  body: any;
  method?: string;
}

interface VercelRes extends ServerResponse {
  status: (code: number) => VercelRes;
  json: (data: any) => void;
}

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nombre, email, empresa, cargo, telefono, participantes, desafioPrincipal } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({ success: false, error: "Nombre y correo son obligatorios" });
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

    let hubspotSuccess = false;

    if (portalId && formId) {
      try {
        const hsRes = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [
                { objectTypeId: "0-1", name: "firstname", value: nombre },
                { objectTypeId: "0-1", name: "email", value: email },
                { objectTypeId: "0-1", name: "company", value: empresa || "" },
                { objectTypeId: "0-1", name: "jobtitle", value: cargo || "" },
                { objectTypeId: "0-1", name: "phone", value: telefono || "" },
                { objectTypeId: "0-1", name: "message", value: `Participantes: ${participantes || "8 a 12"} | Desafío: ${desafioPrincipal || "General"}` },
              ],
            }),
          }
        );
        if (hsRes.ok) hubspotSuccess = true;
      } catch (err) {
        console.warn("HubSpot form submission err:", err);
      }
    }

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
              company: empresa || "",
              jobtitle: cargo || "",
              phone: telefono || "",
              message: `Participantes: ${participantes || "8 a 12"} | Desafío: ${desafioPrincipal || "General"}`,
            },
          }),
        });
        if (crmRes.ok) hubspotSuccess = true;
      } catch (err) {
        console.warn("HubSpot CRM API err:", err);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Información recibida exitosamente",
      hubspotSynced: hubspotSuccess,
    });
  } catch (e: any) {
    return res.status(500).json({ success: false, error: e?.message });
  }
}
