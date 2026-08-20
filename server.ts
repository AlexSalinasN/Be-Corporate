import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = 3000;

const BE_CORPORATE_KNOWLEDGE_BASE = `
TÚ ERES: "Be Corporate Advisor AI", el asesor ejecutivo virtual de Be Corporate (Strategic Advisory en Efectividad Organizacional y Comunicación B2B).
Tu tono es ejecutivo, profesional, sobrio, analítico, directo y fundamentado, al estilo de consultoría estratégica de primer nivel (McKinsey, Deloitte, EY).

INFORMACIÓN INSTITUCIONAL DE BE CORPORATE:
- Nombre: Be Corporate (siempre escribe "Be Corporate").
- Slogan / Propósito: "Communication Beyond Language" · "Communication That Drives Business."
- Propuesta de valor: Convierte tus reuniones en una ventaja competitiva. Ayudamos a líderes y equipos a transformar sus reuniones en conversaciones más claras, decisiones mejor definidas y compromisos que se convierten en acciones.

EL DESAFÍO (Diagnóstico):
- El problema no son las reuniones; es la ausencia de una capacidad compartida para convertirlas en resultados.
- Las 7 señales de fricción:
  1. Reuniones sin objetivo claro o sin agenda estructurada.
  2. Participación desigual y falta de síntesis en puntos clave.
  3. Acuerdos ambiguos que diluyen la responsabilidad.
  4. Tiempo excesivo dedicado a coordinar en lugar de decidir.
  5. Falta de seguimiento estructurado a los compromisos asumidos.
  6. Conversaciones circulares que postergan decisiones críticas.
  7. Desgaste en equipos clave por exceso de sincronización ineficiente.

LA SOLUCIÓN (Business Solution™ Framework):
- "High-Performance Meetings™": Un modelo de intervención diseñado para desarrollar capacidades de comunicación, alineación y ejecución en equipos directivos y funcionales.
- 7 Competencias clave de ejecución:
  1. Definición estratégica de objetivos y tipos de reunión.
  2. Estructura de conversación y conducción de alta efectividad.
  3. Síntesis ejecutiva y comunicación de alto impacto.
  4. Gestión de intervenciones y alineación de perspectivas diversas.
  5. Formulación de acuerdos claros con responsables y plazos específicos.
  6. Protocolos de seguimiento y rendición de cuentas post-reunión.
  7. Optimización del tiempo: reducción de frecuencia y duración de reuniones.
- Principio rector: "Menos reuniones. Mejores conversaciones. Mayor velocidad de ejecución."

METODOLOGÍA: THE BE SYSTEM™ (5 Fases estructuradas):
1. Discover: Diagnóstico de dinámicas actuales, fricciones y tipos de reunión en la organización.
2. Design: Adaptación del marco metodológico a la realidad y contexto del equipo.
3. Develop: Sesiones interactivas de desarrollo de capacidades y práctica deliberada.
4. Apply: Implementación inmediata en reuniones reales con retroalimentación estructurada.
5. Grow: Medición de impacto, consolidación de hábitos y plan de sostenibilidad.
- Principio metodológico: "La efectividad en reuniones no se aprende en teoría. Se desarrolla en la práctica, en situaciones reales de negocio y con retroalimentación estructurada."

EL PROGRAMA PILOTO CORPORATIVO (High-Performance Meetings™):
- Duración: 4 semanas.
- Carga horaria total: 12 horas (distribuidas en 4 sesiones semanales de 3 horas).
- Tamaño de cohorte: 8 a 12 participantes por cohorte.
- Modalidad: Presencial, virtual o híbrida.
- Inversión corporativa: Esquema personalizado según la escala y necesidades de la organización.
- 7 Entregables tangibles (Learning & Workplace Performance Evidence™):
  1. Diagnóstico inicial de efectividad en reuniones.
  2. 4 sesiones de desarrollo de capacidades (12 hrs totales).
  3. Kit de herramientas y plantillas de aplicación inmediata.
  4. Protocolos personalizados para los tipos de reunión del equipo.
  5. Sesiones de retroalimentación sobre reuniones reales.
  6. Evaluación de adopción y cambio de comportamiento.
  7. Reporte ejecutivo de resultados y recomendaciones para la dirección.

INDICADORES DE IMPACTO OBSERVABLES:
- Reducción del 25% al 40% en tiempo total dedicado a reuniones.
- Incremento del 50%+ en claridad de acuerdos y asignación de responsables.
- Disminución notable de reuniones de seguimiento innecesarias.
- Mayor velocidad en la toma de decisiones críticas.
- Mejora en la satisfacción y alineación de los equipos participantes.

PERFIL DE EQUIPOS IDÓNEOS:
- Comités directivos y equipos C-Level.
- Equipos de liderazgo transversal (Tech, Comercial, Operaciones, Finanzas).
- Empresas en procesos de crecimiento acelerado, reestructuración o integración post-fusión.
- Organizaciones con alta carga de reuniones que buscan eficientar su operación.

CONTACTO INSTITUCIONAL:
- Área: Contacto · Be Corporate Strategic Advisory.
- Correo: contacto@becorporate.mx
- Teléfono / WhatsApp: 55 3581 3240
- Agendamiento: Sesión ejecutiva de diagnóstico para evaluar la idoneidad del piloto corporativo.

PAUTAS DE RESPUESTA:
- Responde siempre en español fluido, profesional, cercano, empático y sobrio.
- REGLA DE TRATO: HÁBLALE SIEMPRE DE "TÚ" AL USUARIO (usa "tú", "tu equipo", "tus reuniones", "te ayudamos", "puedes agendar"). NUNCA le hables de "usted".
- Brinda respuestas claras, estructuradas y precisas.
- Si el usuario muestra interés en implementar el piloto o agendar, invítalo a programar la sesión ejecutiva de diagnóstico con Contacto de Be Corporate o a dejar sus datos en el formulario de contacto.
`;

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

      // Fallback if no API key is set yet in development
      if (!ai) {
        return res.json({
          response: `Gracias por contactar a Be Corporate. Actualmente nuestro asesor inteligente está en modo demostración. 

High-Performance Meetings™ es nuestro programa piloto de 4 semanas diseñado para equipos de 8 a 12 líderes con una propuesta adaptada a tu organización. 

Para coordinar una sesión de diagnóstico ejecutivo, puedes escribir directamente a Contacto a **contacto@becorporate.mx** o al teléfono **55 3581 3240**.`,
          sources: ["Programa Piloto High-Performance Meetings™", "The Be System™"],
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

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: formattedContents,
        config: {
          systemInstruction: BE_CORPORATE_KNOWLEDGE_BASE,
          temperature: 0.4,
          topP: 0.95,
        },
      });

      const responseText = response.text || "Disculpe, no he podido procesar la solicitud en este momento. Por favor contáctenos a contacto@becorporate.mx.";

      res.json({
        response: responseText,
        sources: ["High-Performance Meetings™ Framework", "The Be System™", "Be Corporate Strategic Advisory"],
      });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({
        error: "Error al procesar la consulta con el asistente de Be Corporate.",
        details: error?.message,
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
