import React, { useState } from 'react';

// Data types
export interface SystemStage {
  n: string;
  name: string;
  tagline: string;
  body: string;
  deliverable: string;
}

export interface ProgramItem {
  name: string;
  flag: string;
  duration: string;
  body: string;
  mode: string;
}

export interface TestimonialItem {
  q: string;
  who: string;
  where: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const SYSTEM_STAGES: SystemStage[] = [
  {
    n: '01',
    name: 'Discover',
    tagline: 'Descubrimos la brecha real',
    body: 'No hacemos exámenes de nivel genéricos. Realizamos un Communication Gap Analysis: una auditoría de comunicación corporativa que identifica las situaciones exactas donde el idioma está limitando el crecimiento de tu empresa.',
    deliverable: 'Documento con situaciones críticas, nivel actual y consecuencias de negocio.',
  },
  {
    n: '02',
    name: 'Design',
    tagline: 'Diseñamos la ruta a medida',
    body: 'Cada equipo es distinto. Cada industria también. Diseñamos un Team Learning Roadmap con metas semanales, contenidos sectoriales y objetivos alineados con tu negocio. Nada de programas genéricos.',
    deliverable: 'Plan de desarrollo personalizado, presentado y acordado contigo antes de iniciar.',
  },
  {
    n: '03',
    name: 'Develop',
    tagline: 'Desarrollamos la capacidad en contexto real',
    body: 'Aquí es donde otros dan clases. Nosotros creamos experiencias 100% aplicadas al rol de cada participante. Usamos sus propias presentaciones, correos reales y casos de negocio. Cada viernes recibes un reporte de progreso individual.',
    deliverable: 'Reporte semanal con metas cumplidas, fortalezas y áreas de mejora.',
  },
  {
    n: '04',
    name: 'Apply',
    tagline: 'La competencia se vuelve hábito',
    body: 'No evaluamos con exámenes. Creamos Impact Labs: simulaciones de alta presión que replican situaciones reales de tu negocio. Presentaciones ante un panel. Negociaciones grabadas y analizadas. Llamadas internacionales reales.',
    deliverable: 'Evaluación cualitativa de desempeño en situaciones reales de comunicación.',
  },
  {
    n: '05',
    name: 'Grow',
    tagline: 'Medimos el impacto y preparamos el siguiente nivel',
    body: 'Cerramos cada ciclo con un Organizational Growth Report que compara la brecha inicial con los resultados finales. Te decimos qué capacidad se desarrolló, qué impacto tiene en el negocio y cuál podría ser el siguiente paso. Sin permanencia forzosa.',
    deliverable: 'Reporte ejecutivo con indicadores, evidencias y recomendaciones.',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    name: 'Be Communication System',
    flag: 'Programa insignia',
    duration: '8–12 semanas',
    body: 'Para equipos que necesitan comunicarse en inglés como herramienta de trabajo diaria: reuniones, presentaciones, correos, negociaciones.',
    mode: 'Presencial · Online · Híbrido',
  },
  {
    name: 'Be Executive',
    flag: '1:1 directivos',
    duration: '6–8 semanas',
    body: 'Preparación intensiva para líderes y directivos que operan en mercados internacionales. Enfoque en comunicación estratégica y relaciones de alto nivel.',
    mode: 'Presencial · Exclusivo',
  },
  {
    name: 'Be Team',
    flag: 'Equipos naturales',
    duration: '8 semanas',
    body: 'Desarrollo de equipos que ya colaboran en proyectos globales. Se trabaja sobre sus propios proyectos, reuniones y entregables.',
    mode: 'Comercial · Producto · Tech · Finanzas',
  },
  {
    name: 'Be Global',
    flag: 'Multinacional',
    duration: 'A medida',
    body: 'Estandarización de competencias de comunicación para organizaciones con operaciones en varios países. Un solo estándar para todos tus mercados.',
    mode: 'Multi-país · Multi-idioma',
  },
];

export const CAPABILITIES = [
  {
    img: '/assets/sales.jpg',
    tag: 'Comunicación ejecutiva',
    body: 'Líderes que presentan, negocian e inspiran sin barreras.',
  },
  {
    img: '/assets/tech.jpg',
    tag: 'Colaboración internacional',
    body: 'Equipos que trabajan fluidamente entre países y husos horarios.',
  },
  {
    img: '/assets/finance.jpg',
    tag: 'Confianza en entornos globales',
    body: 'Talento preparado para representar a tu empresa en cualquier mercado.',
  },
  {
    img: '/assets/about.jpg',
    tag: 'Liderazgo multicultural',
    body: 'Gerentes que gestionan equipos diversos sin fricciones culturales.',
  },
];

export const CLIENT_LOGOS = [
  'KAVAK',
  'RAPPI',
  'BBVA SPARK',
  'CLIP',
  'BITSO',
  'KUESKI',
  'JÜSTO',
  'FRACTAL',
  'PLATZI',
  'RUNA',
  'BELVO',
  'MERCADO LIBRE',
  'NUBANK',
  'STORI',
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    q: 'En 8 semanas nuestro equipo comercial pasó de evitar llamadas en inglés a cerrar negocios con clientes en Estados Unidos. El reporte semanal fue clave para que RR.HH. viera el avance.',
    who: 'Director Comercial',
    where: 'Empresa de tecnología',
  },
  {
    q: 'Por primera vez tengo un documento que le muestra al Comité de Dirección el impacto real de la inversión en formación. No son horas de clase, son capacidades instaladas.',
    who: 'VP de Recursos Humanos',
    where: 'Grupo industrial',
  },
  {
    q: 'Lo que más valoro es que no nos vendieron un curso. Nos ayudaron a descubrir qué brecha de comunicación teníamos y luego diseñaron algo a medida.',
    who: 'CEO',
    where: 'Fintech latinoamericana',
  },
];

export const FAQS: FAQItem[] = [
  {
    q: '¿Esto es una academia de inglés?',
    a: 'No. Be Corporate es un Sistema de Aprendizaje Corporativo. Desarrollamos competencias de comunicación aplicadas al negocio. El idioma es la herramienta, no el fin. No damos clases tradicionales. No tenemos planes de estudio genéricos. No preparamos para exámenes internacionales. Preparamos a tu equipo para comunicarse con confianza donde tu negocio lo necesita.',
  },
  {
    q: '¿Hay suscripción o permanencia?',
    a: 'No. Trabajamos con ciclos de desarrollo de tiempo limitado. Cada ciclo tiene un inicio y un cierre con resultados medibles. Si al terminar quieres trabajar otra competencia, diseñas un nuevo ciclo. Si no, no hay ninguna obligación.',
  },
  {
    q: '¿Cómo miden el impacto si no hacen exámenes?',
    a: 'Cada ciclo cierra con un Organizational Growth Report que incluye: comparativa de la brecha inicial vs. resultados finales, evaluación cualitativa de los Impact Labs, indicadores de participación y cumplimiento de metas, y recomendaciones para sostener la capacidad. No medimos notas. Medimos si tu equipo ahora puede hacer algo que antes no podía.',
  },
  {
    q: '¿Presencial, online o híbrido?',
    a: 'Tú decides según la operación de tu empresa. Podemos ir a tus oficinas, trabajar 100% online o combinar ambas modalidades. El sistema es el mismo. La modalidad la adaptamos a ti.',
  },
  {
    q: '¿Qué nivel de inglés necesitan los participantes?',
    a: 'Cualquiera. The Be System™ se adapta desde un nivel A2 hasta un C1. Lo importante no es el nivel, es la brecha entre lo que saben y lo que necesitan hacer con lo que saben. Eso es lo que diagnosticamos y trabajamos.',
  },
  {
    q: '¿Tienen profesores nativos?',
    a: 'Nuestros facilitadores no son solo profesores. Son profesionales con experiencia corporativa real, certificados en facilitación de aprendizaje y formados en The Be System™. No enseñan gramática. Entrenan competencias de comunicación en contextos de negocio.',
  },
  {
    q: '¿Cómo sé si mi empresa está lista para esto?',
    a: 'Si tu empresa tiene equipos que interactúan con clientes, proveedores, colegas o socios en inglés —y sientes que esa comunicación no fluye como debería—, estás listo. Solicita el diagnóstico gratuito y te diremos exactamente cuál es tu punto de partida.',
  },
];

const NAV_SYSTEM_ITEMS = [
  {
    title: '① Discover',
    desc: 'Communication Gap Analysis — auditoría de comunicación corporativa.',
  },
  {
    title: '② Design',
    desc: 'Team Learning Roadmap con metas semanales y contenidos sectoriales.',
  },
  {
    title: '③ Develop',
    desc: 'Experiencias 100% aplicadas al rol con reporte semanal.',
  },
  {
    title: '④ Apply',
    desc: 'Impact Labs: simulaciones de alta presión de tu negocio real.',
  },
  {
    title: '⑤ Grow',
    desc: 'Organizational Growth Report con indicadores y recomendaciones.',
  },
];

const NAV_PROGRAM_ITEMS = [
  {
    title: 'Be Communication System',
    desc: '8 a 12 semanas. Inglés como herramienta diaria de trabajo.',
  },
  {
    title: 'Be Executive',
    desc: '6 a 8 semanas 1:1 para líderes y directivos.',
  },
  {
    title: 'Be Team',
    desc: '8 semanas para equipos naturales que colaboran en proyectos globales.',
  },
  {
    title: 'Be Global',
    desc: 'Estandarización multinacional. Duración a medida.',
  },
];

// Sub-components

function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" id="logo-link" className={`flex items-center gap-3 ${className}`}>
      <img
        src="/be-corporate-logo.png"
        alt="BE Corporate"
        className="h-10 md:h-11 w-auto"
      />
    </a>
  );
}

function NavDropdown({
  label,
  isOpen,
  onOpen,
  items,
  anchor,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  items: { title: string; desc: string }[];
  anchor: string;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen}>
      <button
        type="button"
        className="px-4 py-2 inline-flex items-center gap-1.5 hover:text-[color:var(--brand)] transition-colors"
      >
        <span>{label}</span>
        <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[440px] z-50 animate-in fade-in slide-in-from-top-1">
          <div className="rounded-xl border border-border bg-card shadow-xl p-2">
            {items.map((item) => (
              <a
                key={item.title}
                href={anchor}
                className="block rounded-lg px-4 py-3 hover:bg-secondary transition-colors"
              >
                <div className="font-medium text-foreground text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<'s' | 'p' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <nav
          className="hidden lg:flex items-center gap-1 text-sm font-sans"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <NavDropdown
            label="The Be System™"
            isOpen={openDropdown === 's'}
            onOpen={() => setOpenDropdown('s')}
            items={NAV_SYSTEM_ITEMS}
            anchor="#system"
          />
          <NavDropdown
            label="Programas"
            isOpen={openDropdown === 'p'}
            onOpen={() => setOpenDropdown('p')}
            items={NAV_PROGRAM_ITEMS}
            anchor="#programas"
          />
          <a
            href="#nosotros"
            className="px-4 py-2 hover:text-[color:var(--brand)] transition-colors"
          >
            Quiénes somos
          </a>
          <a
            href="#faq"
            className="px-4 py-2 hover:text-[color:var(--brand)] transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 hover:text-[color:var(--brand)] transition-colors"
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            id="header-cta-diagnostic"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[color:var(--brand)]/90 transition shadow-sm"
          >
            <span>Diagnóstico gratuito</span>
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            id="mobile-menu-toggle"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <div className="h-px w-6 bg-foreground mb-1.5 transition-all"></div>
            <div className="h-px w-6 bg-foreground mb-1.5 transition-all"></div>
            <div className="h-px w-4 bg-foreground transition-all"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-lg">
          <div className="container-x py-5 flex flex-col gap-4 text-sm font-medium">
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[color:var(--brand)]"
            >
              The Be System™
            </a>
            <a
              href="#programas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[color:var(--brand)]"
            >
              Programas
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[color:var(--brand)]"
            >
              Quiénes somos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[color:var(--brand)]"
            >
              FAQ
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[color:var(--brand)]"
            >
              Contacto
            </a>
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-medium text-white"
              >
                Diagnóstico gratuito →
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="text-center rounded-full border border-foreground/20 px-5 py-2 text-sm"
              >
                Agendar videollamada
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="top" className="container-x pt-16 lg:pt-24 pb-20">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-6">
            <span className="text-[color:var(--brand)]">Language.</span> Leadership.{' '}
            <span className="text-[color:var(--brand)]">Global Impact.</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.2rem] leading-[1.02] tracking-[-0.02em] text-foreground">
            El idioma no es una materia.
            <br />
            Es una{' '}
            <span className="italic text-[color:var(--brand)]">competencia profesional</span>.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed font-sans">
            Desarrollamos las capacidades de comunicación que preparan a tu organización para
            colaborar, liderar y crecer sin fronteras. Sin cursos genéricos. Sin suscripciones. Con
            resultados medibles en cada ciclo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--brand)]/90 transition shadow-sm"
            >
              <span>Solicita un diagnóstico de comunicación gratuito →</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              id="hero-cta-schedule"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/60 transition"
            >
              Agendar videollamada
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ['5', 'etapas del sistema'],
              ['0', 'suscripciones / permanencia'],
              ['100%', 'aplicado a tu negocio real'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-foreground">{val}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src="/assets/hero.jpg"
              alt="Equipo corporativo internacional en sesión de comunicación ejecutiva"
              width={1600}
              height={1200}
              className="w-full h-[520px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-xl max-w-[280px]">
              <div className="eyebrow mb-2 text-[color:var(--brand)]">Tagline</div>
              <p className="text-sm leading-snug text-foreground">
                Convertimos la comunicación en una{' '}
                <span className="italic font-display text-base text-[color:var(--brand)]">
                  ventaja competitiva
                </span>{' '}
                para tu organización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyLogos() {
  const doubleLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="py-14 border-y border-border bg-secondary/40 overflow-hidden">
      <div className="container-x mb-8 flex items-center justify-between">
        <div className="eyebrow">Empresas que ya trabajan con nosotros</div>
        <span className="text-xs text-muted-foreground">LATAM · multinacionales · scale-ups</span>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {doubleLogos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl md:text-3xl text-foreground/40 tracking-wider hover:text-foreground/70 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-y border-border bg-secondary/50 py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">El problema que nadie nombra</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
            Tu empresa invierte en inglés. Pero,{' '}
            <span className="italic text-[color:var(--brand)]">
              ¿realmente se comunica mejor?
            </span>
          </h2>
        </div>

        <div className="lg:col-span-7 text-lg text-muted-foreground leading-relaxed font-sans">
          <p>
            La mayoría de las organizaciones viven una paradoja silenciosa: pagan años de formación
            en idiomas y, aun así, sus equipos se bloquean al liderar una reunión internacional,
            redactar una propuesta comercial o negociar con un proveedor extranjero.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'Colaboradores que entienden inglés pero no lo usan con confianza cuando importa.',
              'Inversión en cursos que no se traduce en mejor desempeño.',
              'Imposibilidad de medir el impacto real de la formación.',
              'Equipos globales que no colaboran con la fluidez que tu negocio necesita.',
            ].map((text) => (
              <li key={text} className="flex gap-3 text-foreground">
                <span className="mt-2 h-px w-5 bg-[color:var(--brand)] shrink-0"></span>
                <span className="text-base">{text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-display text-2xl text-foreground leading-snug">
            Hay una brecha entre <span className="italic">saber</span> inglés y{' '}
            <span className="italic">usar</span> el inglés como herramienta de negocio. Nosotros la
            cerramos.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="container-x py-24 lg:py-32 text-center max-w-4xl">
      <div className="eyebrow mb-6">No somos lo que esperas. Somos lo que necesitas.</div>
      <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
        Be Corporate no es una academia. No es una consultora. No es una plataforma tecnológica.
      </h2>
      <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-sans">
        Somos un <strong className="text-foreground font-semibold">Sistema de Aprendizaje Corporativo</strong>. El
        primero diseñado específicamente para desarrollar la comunicación como una capacidad
        organizacional, no como una materia que se estudia.
      </p>

      <blockquote className="mt-12 border-l-2 border-[color:var(--brand)] pl-6 text-left font-display text-2xl lg:text-3xl leading-snug max-w-2xl mx-auto text-foreground">
        "El idioma no es una materia. Es una competencia profesional. Y las competencias
        desarrollan organizaciones."
      </blockquote>

      <p className="mt-10 text-muted-foreground font-sans">
        No vendemos cursos. No vendemos clases. No vendemos horas de capacitación.
        <br />
        <span className="text-foreground font-medium">
          Desarrollamos equipos preparados para un mundo global.
        </span>
      </p>
    </section>
  );
}

function TheBeSystem() {
  return (
    <section id="system" className="bg-foreground text-background py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <div className="eyebrow text-background/60 mb-4">Sistema propietario</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-background">
              The <span className="italic text-[color:var(--brand-soft)]">Be System</span>™
            </h2>
          </div>
          <div className="lg:col-span-6 self-end text-background/75 text-lg leading-relaxed font-sans">
            Un ciclo cerrado de 5 etapas. Cada etapa asegura que la inversión en comunicación se
            traduzca en desempeño medible — no en conocimiento pasivo.
          </div>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
          {SYSTEM_STAGES.map((stage) => (
            <div key={stage.n} className="bg-foreground p-7 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display text-[color:var(--brand-soft)] text-3xl">
                    {stage.n}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-background/40 font-semibold">
                    Etapa
                  </span>
                </div>
                <h3 className="font-display text-2xl text-background">{stage.name}</h3>
                <p className="mt-1 text-sm text-[color:var(--brand-soft)] italic">{stage.tagline}</p>
                <p className="mt-4 text-sm text-background/70 leading-relaxed font-sans">
                  {stage.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-background/10 text-xs text-background/60">
                <div className="eyebrow text-background/40 mb-1">Entregable</div>
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm text-background/60 leading-relaxed font-sans">
          Cada programa de Be Corporate recorre estas 5 etapas. Tiene un inicio claro y un cierre con
          resultados medibles. Sin suscripciones automáticas. Sin contratos indefinidos.
        </p>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-4">Qué desarrollamos en tu organización</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
            Capacidades que se traducen en{' '}
            <span className="italic text-[color:var(--brand)]">negocio</span>.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap) => (
          <article
            key={cap.tag}
            className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={cap.img}
                alt={cap.tag}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl leading-snug text-foreground">{cap.tag}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-sans">
                {cap.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programas" className="bg-secondary/50 border-y border-border py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Programas BE Corporate</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
              Ciclos de tiempo limitado.{' '}
              <span className="italic text-foreground">Sin permanencia.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 self-end text-muted-foreground text-lg leading-relaxed font-sans">
            Tú decides si después haces otro. Cada programa atraviesa The Be System™ de principio a fin,
            con resultados medibles al cierre.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMS.map((prog) => (
            <article
              key={prog.name}
              className="rounded-2xl border border-border bg-card p-8 hover:border-[color:var(--brand)]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-[color:var(--brand)] font-semibold font-sans">
                    {prog.flag}
                  </span>
                  <span className="text-xs text-muted-foreground font-sans">{prog.duration}</span>
                </div>
                <h3 className="font-display text-3xl leading-tight text-foreground">{prog.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed font-sans">{prog.body}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground font-sans">
                {prog.mode}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToStartSection() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">Cómo empezar</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
            El primer paso no es un curso.
            <br />
            Es un <span className="italic text-[color:var(--brand)]">diagnóstico</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
            Solicita un <strong className="text-foreground font-semibold">Communication Gap Analysis</strong>{' '}
            sin costo para tu empresa. En una o dos sesiones de trabajo, identificaremos las situaciones
            reales donde la comunicación está limitando tu crecimiento y te entregaremos un roadmap de
            desarrollo preliminar.
          </p>
          <p className="mt-4 text-muted-foreground font-sans">
            Sin compromiso. Sin costo. Solo claridad sobre dónde estás y qué necesita tu
            organización.
          </p>
          <a
            href="#contacto"
            id="how-to-start-cta"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--brand)]/90 transition shadow-sm"
          >
            Solicitar diagnóstico gratuito →
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="eyebrow mb-4 text-[color:var(--brand)]">Qué obtienes</div>
            <ul className="space-y-4 text-sm font-sans">
              {[
                'Mapa de situaciones críticas de comunicación.',
                'Nivel actual de preparación del equipo evaluado.',
                'Consecuencias de negocio de no cerrar la brecha.',
                'Roadmap preliminar de desarrollo a medida.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-4 bg-[color:var(--brand)] shrink-0"></span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="eyebrow mb-4">Lo que dicen las empresas que ya trabajan con nosotros</div>
      <h2 className="font-display text-4xl lg:text-5xl leading-tight max-w-3xl mb-14 text-foreground">
        Resultados que el comité de dirección{' '}
        <span className="italic text-[color:var(--brand)]">puede leer en un PDF</span>.
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <figure
            key={idx}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between shadow-sm"
          >
            <blockquote className="font-display text-xl leading-snug flex-1 text-foreground">
              "{t.q}"
            </blockquote>
            <figcaption className="mt-8 pt-5 border-t border-border text-sm">
              <div className="font-medium text-foreground font-sans">{t.who}</div>
              <div className="text-muted-foreground text-xs mt-0.5 font-sans">{t.where}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary/50 border-y border-border py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <img
            src="/assets/about.jpg"
            alt="Equipo de Be Corporate facilitando una sesión ejecutiva"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full h-[520px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="eyebrow mb-4">Quiénes somos</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
            Un sistema, no una academia.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed font-sans">
            Be Corporate es un Sistema de Aprendizaje Corporativo creado para organizaciones que ya
            entendieron que el inglés no se enseña: se instala como capacidad. Combinamos diagnóstico
            ejecutivo, facilitadores con experiencia corporativa real y metodologías propietarias
            enfocadas 100% al desempeño de negocio.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 font-sans">
            {[
              ['Modelo', 'Sistema de Aprendizaje Corporativo'],
              ['Sistema propietario', 'The Be System™ · 5 etapas'],
              ['Facilitadores', 'Profesionales con experiencia corporativa real'],
              ['Cobertura', 'LATAM · modalidad híbrida o global'],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-4">
                <div className="eyebrow text-xs">{label}</div>
                <div className="mt-1 text-sm text-foreground font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container-x py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="eyebrow mb-4">Preguntas frecuentes</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground">
            Lo que RR.HH., finanzas y dirección <span className="italic">siempre</span> preguntan.
          </h2>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left hover:text-[color:var(--brand)] transition-colors"
                  >
                    <span className="font-display text-xl lg:text-2xl leading-snug text-foreground">
                      {faq.q}
                    </span>
                    <span
                      className={`mt-1 text-2xl text-[color:var(--brand)] transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 pr-12 text-muted-foreground leading-relaxed font-sans text-base">
                      {faq.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2 text-xs">
        {label} {required && <span className="text-[color:var(--brand)]">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    teamSize: '1-10',
    modality: 'Híbrido',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-foreground text-background py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5" id="agendar">
          <div className="eyebrow text-background/60 mb-4">Quiero mi diagnóstico gratuito</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-background">
            Tu organización no necesita{' '}
            <span className="italic text-[color:var(--brand-soft)]">más cursos</span>.
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed font-sans">
            Necesita una capacidad de comunicación que la haga más fuerte, más rápida y más global.
            No esperes al próximo presupuesto de formación: descubre primero qué brecha está
            frenando a tu empresa. Luego decides.
          </p>

          <div className="mt-10 space-y-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full text-left flex items-center justify-between rounded-xl border border-background/20 bg-background/5 p-5 hover:border-[color:var(--brand-soft)] hover:bg-background/10 transition-all cursor-pointer"
            >
              <div>
                <div className="font-display text-xl text-background">Agendar videollamada</div>
                <div className="text-sm text-background/60 mt-0.5 font-sans">
                  20 min · Zoom · sin compromiso
                </div>
              </div>
              <span className="text-xl text-[color:var(--brand-soft)]">→</span>
            </button>

            <a
              href="mailto:ventas@becorporate.com"
              className="flex items-center justify-between rounded-xl border border-background/20 bg-background/5 p-5 hover:border-[color:var(--brand-soft)] hover:bg-background/10 transition-all"
            >
              <div>
                <div className="font-display text-xl text-background">Escribir a ventas</div>
                <div className="text-sm text-background/60 mt-0.5 font-sans">
                  ventas@becorporate.com
                </div>
              </div>
              <span className="text-xl text-[color:var(--brand-soft)]">→</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-background text-foreground border border-background/20 p-8 lg:p-10 shadow-xl"
          >
            <div className="eyebrow mb-6">Formulario · Communication Gap Analysis</div>

            {submitted ? (
              <div className="py-14 text-center">
                <div className="font-display text-3xl mb-3 text-foreground">
                  Gracias, {formData.name.split(' ')[0]}.
                </div>
                <p className="text-muted-foreground font-sans max-w-md mx-auto">
                  Recibimos tu solicitud para <strong className="text-foreground">{formData.company}</strong>. Un
                  asesor te contactará en menos de 24 horas hábiles para coordinar el diagnóstico.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-[color:var(--brand)] hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5 font-sans">
                <FormField label="Nombre completo" required>
                  <input
                    required
                    maxLength={80}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="Ej. Roberto Martínez"
                  />
                </FormField>

                <FormField label="Empresa" required>
                  <input
                    required
                    maxLength={80}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input"
                    placeholder="Ej. Empresa Global S.A."
                  />
                </FormField>

                <FormField label="Email corporativo" required>
                  <input
                    required
                    type="email"
                    maxLength={120}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="nombre@empresa.com"
                  />
                </FormField>

                <FormField label="Cargo">
                  <input
                    maxLength={80}
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="input"
                    placeholder="Ej. VP Human Resources"
                  />
                </FormField>

                <FormField label="Tamaño del equipo">
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="input cursor-pointer"
                  >
                    <option>1-10</option>
                    <option>11-30</option>
                    <option>31-80</option>
                    <option>80+</option>
                  </select>
                </FormField>

                <FormField label="Modalidad preferida">
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="input cursor-pointer"
                  >
                    <option>Presencial en oficina</option>
                    <option>Online</option>
                    <option>Híbrido</option>
                  </select>
                </FormField>

                <div className="sm:col-span-2">
                  <FormField label="¿Qué brecha de comunicación quieres resolver?">
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input resize-none"
                      placeholder="Describe los desafíos que enfrenta tu equipo al comunicarse en inglés..."
                    />
                  </FormField>
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <p className="text-xs text-muted-foreground">
                    Al enviar aceptas nuestra política de privacidad. Sin spam.
                  </p>
                  <button
                    type="submit"
                    id="submit-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--brand)]/90 transition shadow-sm cursor-pointer"
                  >
                    Solicitar diagnóstico →
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src="/be-corporate-logo.png" alt="BE Corporate" className="h-12 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed font-sans">
              Sistema de Aprendizaje Corporativo. Desarrollamos equipos preparados para un mundo
              global.
            </p>
            <p className="mt-3 text-xs eyebrow">
              <span className="text-[color:var(--brand)]">Language.</span> Leadership.{' '}
              <span className="text-[color:var(--brand)]">Global Impact.</span>
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4">Compañía</div>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#nosotros" className="hover:text-[color:var(--brand)] transition-colors">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#system" className="hover:text-[color:var(--brand)] transition-colors">
                  The Be System™
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[color:var(--brand)] transition-colors">
                  Programas
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4">Recursos</div>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#faq" className="hover:text-[color:var(--brand)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[color:var(--brand)] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#agendar" className="hover:text-[color:var(--brand)] transition-colors">
                  Agendar llamada
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Contacto</div>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li>
                <a
                  href="mailto:ventas@becorporate.com"
                  className="hover:text-[color:var(--brand)] transition-colors"
                >
                  ventas@becorporate.com
                </a>
              </li>
              <li>LinkedIn · @becorporate</li>
              <li>LATAM · operación global</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-sans">
          <span>© 2026 BE Corporate. Sistema de Aprendizaje Corporativo.</span>
          <span>The Be System™ es marca registrada de BE Corporate.</span>
        </div>
      </div>
    </footer>
  );
}

// Interactive Video Call Booking Modal
function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<'pick' | 'confirmed'>('pick');
  const [selectedDate, setSelectedDate] = useState('2026-08-20');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [bookName, setBookName] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookCompany, setBookCompany] = useState('');

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookEmail) return;
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-card border border-border p-6 md:p-8 shadow-2xl text-foreground">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
          aria-label="Cerrar"
        >
          ×
        </button>

        {step === 'pick' ? (
          <div>
            <div className="eyebrow text-[color:var(--brand)] mb-2">Agendar videollamada</div>
            <h3 className="font-display text-2xl text-foreground">
              Diagnóstico inicial de 20 minutos
            </h3>
            <p className="text-sm text-muted-foreground mt-1 mb-6 font-sans">
              Reunión por Zoom con un especialista de BE Corporate para analizar las necesidades de tu empresa.
            </p>

            <form onSubmit={handleBook} className="space-y-4 font-sans text-sm">
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs text-muted-foreground block mb-1 font-medium">Fecha</span>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input"
                  >
                    <option value="2026-08-20">Jueves, 20 Agosto</option>
                    <option value="2026-08-21">Viernes, 21 Agosto</option>
                    <option value="2026-08-24">Lunes, 24 Agosto</option>
                    <option value="2026-08-25">Martes, 25 Agosto</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs text-muted-foreground block mb-1 font-medium">Horario</span>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="input"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="text-xs text-muted-foreground block mb-1 font-medium">Tu nombre *</span>
                  <input
                    required
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    className="input"
                    placeholder="Ej. Carolina Gómez"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="text-xs text-muted-foreground block mb-1 font-medium">Email corporativo *</span>
                  <input
                    required
                    type="email"
                    value={bookEmail}
                    onChange={(e) => setBookEmail(e.target.value)}
                    className="input"
                    placeholder="carolina@empresa.com"
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="text-xs text-muted-foreground block mb-1 font-medium">Empresa</span>
                  <input
                    type="text"
                    value={bookCompany}
                    onChange={(e) => setBookCompany(e.target.value)}
                    className="input"
                    placeholder="Nombre de la empresa"
                  />
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-border text-xs font-medium hover:bg-secondary"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[color:var(--brand)] text-white text-xs font-medium hover:bg-[color:var(--brand)]/90 shadow-sm"
                >
                  Confirmar reunión →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)] flex items-center justify-center mx-auto mb-4 text-2xl">
              ✓
            </div>
            <h3 className="font-display text-2xl text-foreground">¡Videollamada agendada!</h3>
            <p className="text-sm text-muted-foreground mt-2 font-sans max-w-sm mx-auto">
              Te hemos enviado la invitación con el enlace de Zoom a{' '}
              <strong className="text-foreground">{bookEmail}</strong> para el {selectedDate} a las {selectedTime}.
            </p>
            <button
              type="button"
              onClick={() => {
                setStep('pick');
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[color:var(--brand)] text-white text-xs font-medium hover:bg-[color:var(--brand)]/90"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Application Component
export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-[color:var(--brand)] selection:text-white">
      <Header onOpenBooking={() => setBookingModalOpen(true)} />
      <main className="flex-1">
        <HeroSection onOpenBooking={() => setBookingModalOpen(true)} />
        <CompanyLogos />
        <ProblemSection />
        <PhilosophySection />
        <TheBeSystem />
        <CapabilitiesSection />
        <ProgramsSection />
        <HowToStartSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection onOpenBooking={() => setBookingModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
