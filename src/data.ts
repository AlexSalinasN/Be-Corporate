import { SystemStage, FAQItem } from './types';

export const THE_BE_SYSTEM_STAGES: SystemStage[] = [
  {
    n: '01',
    name: 'Discover™',
    desc: 'Identificamos los retos, las prioridades y el punto de partida del equipo mediante diagnóstico directo.',
    deliverable: 'Diagnóstico de brechas y mapa de fricciones comunicativas.',
  },
  {
    n: '02',
    name: 'Design™',
    desc: 'Definimos el foco de desempeño y la ruta de implementación personalizada del piloto.',
    deliverable: 'Plan de intervención adaptado al contexto operativo.',
  },
  {
    n: '03',
    name: 'Develop™',
    desc: 'Los participantes practican capacidades mediante experiencias estructuradas, coaching y retroalimentación.',
    deliverable: '8 sesiones estructuradas y coaching de ejecución.',
  },
  {
    n: '04',
    name: 'Apply™',
    desc: 'Las capacidades desarrolladas se transfieren a reuniones y situaciones reales de trabajo.',
    deliverable: 'Workplace Performance Evidence™ en juntas reales.',
  },
  {
    n: '05',
    name: 'Grow™',
    desc: 'Revisamos la evidencia de aplicación y definimos las siguientes prioridades de desarrollo.',
    deliverable: 'Síntesis de avances y hoja de ruta de continuidad.',
  },
];

export const DESAFIO_SENALES = [
  {
    title: 'Decisiones lentas',
    desc: 'Decisiones que tardan más de lo necesario por falta de estructura, síntesis y foco estratégico.',
  },
  {
    title: 'Prioridades desalineadas',
    desc: 'Prioridades interpretadas de manera diferente entre líderes y áreas operativas.',
  },
  {
    title: 'Acuerdos sin ejecución',
    desc: 'Acuerdos que se diluyen y no se convierten en compromisos concretos ni accionables.',
  },
  {
    title: 'Ambigüedad de roles',
    desc: 'Responsables y fechas poco claros al término de cada sesión ejecutiva.',
  },
  {
    title: 'Reuniones redundantes',
    desc: 'Conversaciones que deben repetirse porque no se cerraron adecuadamente.',
  },
  {
    title: 'Seguimiento inconsistente',
    desc: 'Falta de disciplina para dar seguimiento a los entregables comprometidos.',
  },
  {
    title: 'Retrabajo operativo',
    desc: 'Retrabajo provocado directamente por una comunicación insuficiente.',
  },
];

export const SOLUCION_OBJETIVOS = [
  'Comunicar información y actualizaciones con claridad y síntesis ejecutiva.',
  'Participar activamente en conversaciones y debates estratégicos de negocio.',
  'Conducir reuniones orientadas estrictamente a resultados.',
  'Construir acuerdos claros y sin ambigüedades.',
  'Definir acciones, responsables específicos y fechas límite precisas.',
  'Dar seguimiento riguroso y efectivo a los compromisos adquiridos.',
  'Mejorar la coordinación transversal entre equipos y departamentos.',
];

export const PILOTO_SPECS = [
  { label: 'Solución', value: 'High-Performance Meetings™' },
  { label: 'Track de Intervención', value: 'Team Track™' },
  { label: 'Duración del Programa', value: '4 semanas' },
  { label: 'Sesiones de Trabajo', value: '8 sesiones estructuradas' },
  { label: 'Learning Hours', value: '12 horas de formación aplicada' },
  { label: 'Tamaño del Equipo', value: 'De 8 a 12 participantes' },
  { label: 'Modalidad de Entrega', value: 'Presencial, virtual o híbrida' },
  { label: 'Inversión Corporativa', value: 'Propuesta personalizada por cohorte' },
];

export const PILOTO_ENTREGABLES = [
  'Diagnóstico inicial y definición de prioridades de comunicación.',
  'Programa estructurado de cuatro semanas con enfoque 100% aplicado.',
  'Recursos de aprendizaje requeridos para toda la experiencia.',
  'Práctica guiada, coaching ejecutivo y retroalimentación individual y grupal.',
  'Learning Performance Evidence™ para evaluar el dominio de herramientas.',
  'Workplace Performance Evidence™ obtenida en situaciones reales de trabajo.',
  'Síntesis ejecutiva de avances, hallazgos y recomendaciones de continuidad.',
];

export const RESULTADOS_ITEMS = [
  {
    id: '01',
    title: 'Claridad Ejecutiva',
    desc: 'Comunicación más clara, sintética y relevante durante cada interacción.',
  },
  {
    id: '02',
    title: 'Decisiones Precisas',
    desc: 'Objetivos y decisiones estratégicas sustancialmente mejor definidos.',
  },
  {
    id: '03',
    title: 'Accountability Claro',
    desc: 'Responsables, acciones concretas y siguientes pasos sin lugar a dudas.',
  },
  {
    id: '04',
    title: 'Disciplina de Seguimiento',
    desc: 'Mayor consistencia y rigor en el cumplimiento de acuerdos.',
  },
  {
    id: '05',
    title: 'Alineación Interdepartamental',
    desc: 'Coordinación fluida y ágil entre distintas áreas y líderes.',
  },
  {
    id: '06',
    title: 'Eficiencia Operativa',
    desc: 'Menor riesgo de malentendidos, reducción de juntas y cero retrabajo.',
  },
];

export const AUDIENCIA_CRITERIOS = [
  'Organizaciones que dependen de reuniones recurrentes para coordinar, alinear y ejecutar.',
  'Equipos o áreas multifuncionales que necesitan trabajar de manera más articulada.',
  'Empresas que experimentan decisiones lentas, acuerdos ambiguos o seguimiento inconsistente.',
  'Grupos con un equipo natural de 8 a 12 participantes clave.',
  'Cuentan con un sponsor o líder dispuesto a impulsar y respaldar la aplicación en el trabajo.',
  'Organizaciones que buscan resolver una prioridad concreta de efectividad en los próximos 90 días.',
];

export const CLIENT_LOGOS = [
  'KAVAK',
  'RAPPI',
  'BBVA SPARK',
  'CLIP',
  'BITSO',
  'KUESKI',
  'JÜSTO',
  'MINU',
  'CLARA',
  'NOWPORTS',
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: '¿Por qué un piloto de 4 semanas en lugar de un taller puntual?',
    a: 'Porque la comunicación efectiva y la disciplina en reuniones no son conceptos teóricos que se resuelven en un curso de 4 horas; son capacidades que requieren diseño contextual, práctica deliberada en situaciones reales de negocio y retroalimentación estructurada para transformarse en hábitos organizacionales permanentes.',
  },
  {
    q: '¿Cómo medimos el retorno y los resultados del programa?',
    a: 'A través de nuestro sistema dual de evidencias: Learning Performance Evidence™ (que evalúa la adquisición de marcos metodológicos durante las sesiones) y Workplace Performance Evidence™ (que documenta la aplicación efectiva, la reducción de tiempos y la claridad de acuerdos en reuniones reales del equipo).',
  },
  {
    q: '¿Qué nivel de involucramiento requiere del líder del equipo o sponsor?',
    a: 'El sponsor participa en el diagnóstico inicial (30 min), en la apertura de la primera sesión, y en la sesión ejecutiva de entrega de resultados y síntesis de avances. El diseño minimiza la fricción para asegurar máximo impacto sin saturar la agenda directiva.',
  },
  {
    q: '¿Cuál es el tamaño idóneo de equipo para el piloto?',
    a: 'El piloto corporativo está calibrado específicamente para cohortes de 8 a 12 participantes. Esta escala permite retroalimentación individualizada de alta calidad, dinámicas de grupo rigurosas y la masa crítica necesaria para cambiar la cultura de reuniones en un área.',
  },
  {
    q: '¿Puede impartirse en formato 100% remoto para equipos distribuidos?',
    a: 'Sí. El programa está optimizado tanto para formato presencial en sala de juntas corporativa como para sesiones en vivo de alta interacción vía Zoom/Teams, así como modelos híbridos con herramientas digitales de colaboración.',
  },
];
