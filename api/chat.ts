import type { IncomingMessage, ServerResponse } from "http";
import { GoogleGenAI } from "@google/genai";

interface VercelReq extends IncomingMessage {
  body: any;
  method?: string;
}

interface VercelRes extends ServerResponse {
  status: (code: number) => VercelRes;
  json: (data: any) => void;
}

const BE_CORPORATE_KNOWLEDGE_BASE = `
TÚ ERES: "Be Corporate Advisor AI", el asesor ejecutivo virtual de Be Corporate (Strategic Advisory en Efectividad Organizacional y Comunicación B2B).
Tu tono es ejecutivo, profesional, sobrio, analítico, directo y fundamentado, al estilo de consultoría estratégica de primer nivel (McKinsey, Deloitte, EY).

INFORMACIÓN INSTITUCIONAL DE BE CORPORATE:
- Nombre: Be Corporate (siempre escribe "Be Corporate").
- Slogan / Propósito: "Communication That Drives Business."
- Propuesta de valor: Convierta sus reuniones en una ventaja competitiva. Ayudamos a líderes y equipos a transformar sus reuniones en conversaciones más claras, decisiones mejor definidas y compromisos que se convierten en acciones.

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
1. Discover (Diagnóstico de dinámicas actuales)
2. Design (Adaptación del marco metodológico)
3. Develop (Sesiones interactivas y práctica deliberada)
4. Apply (Implementación en reuniones reales con retroalimentación)
5. Grow (Medición de impacto y sostenibilidad)

EL PROGRAMA PILOTO CORPORATIVO (High-Performance Meetings™):
- Duración: 4 semanas (12 horas totales, 4 sesiones de 3 hrs).
- Cohorte: 8 a 12 participantes.
- Inversión: Propuesta personalizada según la escala y necesidades de la organización.
- 7 Entregables: Diagnóstico inicial, 4 sesiones de desarrollo, kit de herramientas/plantillas, protocolos personalizados, sesiones de feedback sobre reuniones reales, evaluación de adopción, reporte ejecutivo de resultados.

CONTACTO Y LIDERAZGO:
- Líder de Práctica: Manuel Alejandro Salinas Núñez (asalinas@becorporate.mx | Tel: 55 3581 3240).
- Agendamiento: Sesión ejecutiva de 20 minutos vía Zoom.
`;

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, conversationHistory } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Mensaje requerido" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      response: "Gracias por contactar a Be Corporate. High-Performance Meetings™ es nuestro programa piloto de 4 semanas para 8-12 líderes con propuesta a la medida. Para coordinar una llamada ejecutiva con Manuel Alejandro Salinas Núñez, escriba a asalinas@becorporate.mx o llame al 55 3581 3240.",
      sources: ["High-Performance Meetings™", "The Be System™"],
    });
  }

  try {
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

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: formattedContents,
      config: {
        systemInstruction: BE_CORPORATE_KNOWLEDGE_BASE,
        temperature: 0.4,
      },
    });

    return res.status(200).json({
      response: response.text || "Disculpe, no he podido procesar la respuesta en este momento.",
      sources: ["High-Performance Meetings™", "The Be System™"],
    });
  } catch (error: any) {
    return res.status(500).json({ error: "Error en asistente virtual", details: error?.message });
  }
}
