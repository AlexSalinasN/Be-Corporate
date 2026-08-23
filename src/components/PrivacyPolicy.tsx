import React, { useEffect } from 'react';
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter'] flex flex-col selection:bg-[#0052CC] selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md px-6 py-4 shadow-2xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            id="privacy-back-button"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0052CC] transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </button>

          <button
            onClick={onBackToHome}
            className="cursor-pointer flex items-center"
            title="Ir a página principal"
          >
            <Logo size="md" className="h-10 sm:h-11 w-auto" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-14 space-y-10">
          {/* Header Title Section */}
          <div className="border-b border-slate-100 pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              AVISO DE PRIVACIDAD
            </h1>
            <p className="text-sm font-medium text-slate-500">
              Fecha de última actualización: 23 de agosto de 2026
            </p>
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-[15px] leading-relaxed">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-4">
              <p className="text-slate-800 leading-relaxed font-normal">
                <strong className="text-slate-950 font-semibold">BC CORPORATE SOLUTIONS</strong>, que opera comercialmente bajo el nombre <strong className="text-slate-950 font-semibold">Be Corporate™</strong>, con domicilio en Ciudad de México, México, es responsable del tratamiento y protección de sus datos personales.
              </p>
              <p className="text-slate-700 leading-relaxed font-normal">
                El presente Aviso de Privacidad se pone a su disposición de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás disposiciones aplicables.
              </p>
            </div>

            {/* 1. DATOS PERSONALES RECABADOS */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  1
                </span>
                <span>DATOS PERSONALES RECABADOS</span>
              </h2>
              <p className="text-slate-700 pl-9">
                Be Corporate™ podrá recabar directamente, mediante el formulario disponible en{' '}
                <a
                  href="https://becorporate.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052CC] font-semibold underline underline-offset-2 hover:text-[#003E99] inline-flex items-center gap-0.5"
                >
                  https://becorporate.mx
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
                , los siguientes datos personales:
              </p>
              <ul className="space-y-1.5 text-slate-700 pl-9 text-sm sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Nombre completo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Dirección de correo electrónico corporativo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Nombre de la empresa u organización.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Cargo o función profesional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Número telefónico o WhatsApp de contacto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Tamaño estimado del equipo o cohorte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Fecha y horario preferidos para una conversación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">—</span>
                  <span>Principal desafío de comunicación identificado en sus reuniones.</span>
                </li>
              </ul>
              <p className="text-slate-600 pl-9 text-sm leading-relaxed pt-2">
                También podrán generarse datos técnicos relacionados con la navegación, como dirección IP, tipo de navegador, dispositivo, fecha y hora de acceso y registros técnicos necesarios para la operación y seguridad del sitio.
              </p>
              <div className="ml-9 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
                <strong>Nota de seguridad:</strong> Be Corporate™ no solicita datos personales sensibles, patrimoniales o financieros mediante el formulario de contacto. Le pedimos no incluir esta clase de información en los campos disponibles.
              </div>
            </section>

            {/* 2. FINALIDADES DEL TRATAMIENTO */}
            <section className="space-y-4 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  2
                </span>
                <span>FINALIDADES DEL TRATAMIENTO</span>
              </h2>
              <p className="text-slate-700 pl-9">
                Sus datos personales serán tratados para las siguientes finalidades primarias y necesarias:
              </p>
              <ul className="space-y-1.5 text-slate-700 pl-9 text-sm sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Recibir, registrar y atender su solicitud de diagnóstico o información.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Contactarle para conocer las necesidades de su empresa u organización.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Evaluar preliminarmente la pertinencia de High-Performance Meetings™ u otras soluciones de Be Corporate™.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Coordinar una conversación, sesión de diagnóstico o reunión comercial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Preparar y presentar una propuesta ejecutiva.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Dar seguimiento a las comunicaciones relacionadas con su solicitud.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Prestar, administrar y evaluar los servicios que eventualmente sean contratados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Cumplir las obligaciones derivadas de una relación comercial o contractual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052CC] font-bold">—</span>
                  <span>Mantener la seguridad, disponibilidad y funcionamiento del sitio web.</span>
                </li>
              </ul>

              <div className="pl-9 pt-3 space-y-3">
                <p className="text-slate-700">
                  De manera adicional, Be Corporate™ podrá tratar sus datos para las siguientes finalidades secundarias:
                </p>
                <ul className="space-y-1.5 text-slate-600 text-sm sm:text-[15px]">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Enviar información sobre contenidos, soluciones, eventos o novedades de Be Corporate™.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Realizar actividades de mercadotecnia, publicidad y prospección comercial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Solicitar retroalimentación o aplicar encuestas relacionadas con nuestros servicios.</span>
                  </li>
                </ul>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 space-y-2 mt-3">
                  <p>
                    Las finalidades secundarias no son necesarias para atender su solicitud ni para establecer una relación comercial.
                  </p>
                  <p>
                    Si no desea que sus datos sean utilizados para finalidades secundarias, puede comunicarlo en cualquier momento escribiendo a{' '}
                    <a
                      href="mailto:contacto@becorporate.mx?subject=Negativa%20para%20finalidades%20secundarias"
                      className="text-[#0052CC] font-bold underline underline-offset-2 hover:text-[#003E99]"
                    >
                      contacto@becorporate.mx
                    </a>{' '}
                    con el asunto <em>“Negativa para finalidades secundarias”</em>.
                  </p>
                  <p className="text-xs text-slate-500">
                    La negativa no afectará la atención de su solicitud ni los servicios que pudiera contratar.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. CONSENTIMIENTO */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  3
                </span>
                <span>CONSENTIMIENTO</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3">
                <p>
                  Al proporcionar sus datos mediante el formulario y poner a su disposición el presente Aviso de Privacidad, usted consiente su tratamiento para las finalidades primarias señaladas.
                </p>
                <p>
                  Para las finalidades secundarias, Be Corporate™ deberá solicitar una manifestación independiente de consentimiento o permitirle expresar su negativa mediante los mecanismos establecidos en este Aviso.
                </p>
                <p>
                  Usted podrá revocar su consentimiento en cualquier momento conforme al procedimiento indicado en la siguiente sección.
                </p>
              </div>
            </section>

            {/* 4. DERECHOS ARCO Y REVOCACIÓN DEL CONSENTIMIENTO */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  4
                </span>
                <span>DERECHOS ARCO Y REVOCACIÓN DEL CONSENTIMIENTO</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3">
                <p>Usted tiene derecho a:</p>
                <ul className="space-y-1.5 text-slate-700 text-sm sm:text-[15px]">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Acceder a sus datos personales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Solicitar su rectificación cuando sean inexactos o estén desactualizados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Solicitar su cancelación cuando considere que no se requieren para las finalidades señaladas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Oponerse a su tratamiento para fines específicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Revocar el consentimiento previamente otorgado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">—</span>
                    <span>Limitar el uso o divulgación de sus datos personales.</span>
                  </li>
                </ul>

                <p className="pt-2">
                  Para ejercer estos derechos deberá enviar una solicitud a{' '}
                  <a
                    href="mailto:contacto@becorporate.mx?subject=Solicitud%20de%20derechos%20ARCO"
                    className="text-[#0052CC] font-bold underline underline-offset-2 hover:text-[#003E99]"
                  >
                    contacto@becorporate.mx
                  </a>{' '}
                  con el asunto <em>“Solicitud de derechos ARCO”</em>.
                </p>

                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-5 text-sm text-slate-800 space-y-3 mt-3">
                  <p className="font-bold text-slate-900">La solicitud deberá incluir:</p>
                  <ul className="space-y-1.5 text-slate-700 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Nombre completo del titular.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Medio para comunicarle la respuesta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Descripción clara del derecho que desea ejercer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Descripción de los datos personales involucrados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Documentos que acrediten su identidad o representación legal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">—</span>
                      <span>Cualquier elemento que facilite la localización de sus datos.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 pt-2">
                  Be Corporate™ comunicará la determinación adoptada dentro de los veinte días hábiles siguientes a la recepción de una solicitud completa. Si resulta procedente, la hará efectiva dentro de los quince días hábiles posteriores, de conformidad con la legislación aplicable.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Estos plazos podrán ampliarse una sola vez cuando las circunstancias del caso lo justifiquen.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  La revocación del consentimiento no tendrá efectos retroactivos ni procederá cuando exista una obligación legal o contractual que requiera conservar o continuar tratando determinada información.
                </p>
              </div>
            </section>

            {/* 5. TRANSFERENCIAS Y REMISIONES DE DATOS */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  5
                </span>
                <span>TRANSFERENCIAS Y REMISIONES DE DATOS</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  Be Corporate™ no venderá, alquilará ni comercializará sus datos personales.
                </p>
                <p>
                  Sus datos podrán ser tratados por proveedores que presten servicios de alojamiento web, infraestructura tecnológica, correo electrónico, mensajería, gestión de contactos, agenda, videoconferencia o soporte administrativo. Dichos proveedores actuarán por cuenta de Be Corporate™ y estarán sujetos a obligaciones de confidencialidad y protección de datos.
                </p>
                <p>
                  También podrán realizarse transferencias sin consentimiento cuando sean necesarias para cumplir una obligación legal, contractual o judicial, o cuando se actualice alguna de las excepciones previstas en la legislación aplicable.
                </p>
                <p>
                  Si en el futuro se requiere una transferencia que necesite su consentimiento, éste será solicitado previamente.
                </p>
              </div>
            </section>

            {/* 6. SEGURIDAD Y CONSERVACIÓN DE LOS DATOS */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  6
                </span>
                <span>SEGURIDAD Y CONSERVACIÓN DE LOS DATOS</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  Be Corporate™ implementará medidas administrativas, técnicas y físicas razonables para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.
                </p>
                <p>
                  Los datos se conservarán únicamente durante el tiempo necesario para atender las finalidades descritas, cumplir obligaciones legales o contractuales y responder ante posibles responsabilidades.
                </p>
                <p>
                  Cuando la información deje de ser necesaria, será eliminada o sometida a un proceso de disociación, salvo que exista una obligación legal que requiera conservarla.
                </p>
              </div>
            </section>

            {/* 7. COOKIES Y TECNOLOGÍAS SIMILARES */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  7
                </span>
                <span>COOKIES Y TECNOLOGÍAS SIMILARES</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  El sitio podrá utilizar tecnologías estrictamente necesarias para su funcionamiento, seguridad y correcta visualización.
                </p>
                <p>
                  Si posteriormente se incorporan herramientas de analítica, publicidad, seguimiento o elaboración de perfiles que recopilen información mediante cookies u otras tecnologías similares, Be Corporate™ informará su utilización y, cuando corresponda, solicitará el consentimiento del usuario.
                </p>
                <p>
                  El usuario puede limitar o desactivar las cookies desde la configuración de su navegador. La desactivación de determinadas tecnologías puede afectar el funcionamiento del sitio.
                </p>
              </div>
            </section>

            {/* 8. ENLACES Y SERVICIOS DE TERCEROS */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  8
                </span>
                <span>ENLACES Y SERVICIOS DE TERCEROS</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  El sitio puede incluir enlaces o integraciones con servicios externos, como plataformas de agenda, videoconferencia, correo electrónico o redes profesionales.
                </p>
                <p>
                  El tratamiento realizado directamente por dichos terceros se regirá por sus propios avisos y políticas de privacidad. Be Corporate™ recomienda consultarlos antes de proporcionar información personal.
                </p>
              </div>
            </section>

            {/* 9. CAMBIOS AL AVISO DE PRIVACIDAD */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  9
                </span>
                <span>CAMBIOS AL AVISO DE PRIVACIDAD</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  Be Corporate™ podrá modificar o actualizar este Aviso de Privacidad como consecuencia de cambios legales, nuevas prácticas de tratamiento, incorporación de servicios o modificaciones operativas.
                </p>
                <p>
                  Cualquier cambio será publicado en:{' '}
                  <a
                    href="https://becorporate.mx/aviso-de-privacidad"
                    className="text-[#0052CC] font-semibold underline underline-offset-2 hover:text-[#003E99]"
                  >
                    https://becorporate.mx/aviso-de-privacidad
                  </a>
                </p>
                <p className="text-sm text-slate-600">
                  La fecha de última actualización aparecerá al inicio del documento. Cuando una modificación requiera un nuevo consentimiento, éste será solicitado por el medio correspondiente.
                </p>
              </div>
            </section>

            {/* 10. CONTACTO Y AUTORIDAD COMPETENTE */}
            <section className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black shrink-0">
                  10
                </span>
                <span>CONTACTO Y AUTORIDAD COMPETENTE</span>
              </h2>
              <div className="text-slate-700 pl-9 space-y-3 leading-relaxed">
                <p>
                  Para cualquier pregunta relacionada con este Aviso de Privacidad o con el tratamiento de sus datos personales, puede comunicarse mediante:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-sm text-slate-800">
                  <p className="flex items-center gap-2">
                    <strong className="text-slate-950 font-semibold">Correo electrónico:</strong>{' '}
                    <a
                      href="mailto:contacto@becorporate.mx"
                      className="text-[#0052CC] font-bold underline underline-offset-2 hover:text-[#003E99]"
                    >
                      contacto@becorporate.mx
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <strong className="text-slate-950 font-semibold">Teléfono:</strong>{' '}
                    <a href="tel:5535813240" className="text-slate-800 hover:text-[#0052CC]">
                      55 3581 3240
                    </a>
                  </p>
                  <p>
                    <strong className="text-slate-950 font-semibold">Domicilio:</strong> Ciudad de México, México
                  </p>
                </div>
                <p className="text-sm text-slate-600 pt-2">
                  Si considera que su derecho a la protección de datos personales ha sido vulnerado, podrá acudir ante la Secretaría Anticorrupción y Buen Gobierno o ante la autoridad competente conforme a la legislación vigente.
                </p>
              </div>
            </section>
          </div>

          {/* Action Back To Home Button at Bottom */}
          <div className="border-t border-slate-100 pt-8 flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la página principal</span>
            </button>

            <a
              href="mailto:contacto@becorporate.mx"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0052CC] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#0052CC]" />
              <span>contacto@becorporate.mx</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer component */}
      <Footer onOpenPrivacyPolicy={() => {}} />
    </div>
  );
};
