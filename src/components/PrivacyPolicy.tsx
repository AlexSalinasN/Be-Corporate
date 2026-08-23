import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Mail, ExternalLink, Globe, Lock, FileText, CheckCircle2 } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparencia y Protección Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              Aviso de Privacidad
            </h1>
            <p className="text-sm font-medium text-slate-500">
              Fecha de última actualización: 23 de agosto de 2026
            </p>
          </div>

          {/* Intro statement */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-[15px] leading-relaxed">
            <p className="text-slate-700 bg-slate-50 p-5 rounded-xl border border-slate-200/80 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">Be Corporate</strong>, con domicilio en Ciudad de México, en su carácter de Responsable del tratamiento de sus datos personales, pone a su disposición el presente Aviso de Privacidad, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
            </p>

            {/* Section 1 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  1
                </span>
                <span>Datos Personales Recabados</span>
              </h2>
              <p className="text-slate-600 pl-9">
                Los datos de carácter personal que recabamos de usted a través del formulario de registro en nuestro sitio web{' '}
                <a
                  href="https://www.becorporate.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052CC] font-semibold underline underline-offset-2 hover:text-[#003E99] inline-flex items-center gap-0.5"
                >
                  https://www.becorporate.mx
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>{' '}
                son: nombre completo, número de teléfono y dirección de correo electrónico.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  2
                </span>
                <span>Finalidades del Tratamiento</span>
              </h2>
              <p className="text-slate-600 pl-9">
                Sus datos personales serán tratados para las siguientes finalidades:
              </p>

              <div className="pl-9 space-y-4">
                {/* 2.1 Finalidades Necesarias */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                    <span>Finalidades necesarias para la relación jurídica (sin las cuales no podríamos atenderle):</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm pl-2">
                    <li>Incluirle en la lista de espera (waitlist) y notificarle sobre el lanzamiento oficial y programas de Be Corporate.</li>
                    <li>Enviarle información relevante sobre las funcionalidades y disponibilidad de la plataforma.</li>
                  </ul>
                </div>

                {/* 2.2 Finalidades Voluntarias */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Finalidades voluntarias (que requieren su consentimiento expreso):</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm pl-2">
                    <li>Envío de comunicaciones comerciales, promociones y boletines informativos sobre productos o servicios relacionados con Be Corporate.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  3
                </span>
                <span>Consentimiento</span>
              </h2>
              <p className="text-slate-600 pl-9 leading-relaxed">
                Al proporcionar sus datos a través del formulario de registro y marcar la casilla correspondiente, usted otorga su consentimiento tácito para el tratamiento de sus datos conforme a las finalidades necesarias descritas. Para las finalidades voluntarias, se requerirá una acción afirmativa independiente mediante una casilla específica no pre-marcada.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  4
                </span>
                <span>Derechos ARCO y Revocación del Consentimiento</span>
              </h2>
              <div className="text-slate-600 pl-9 space-y-3 leading-relaxed">
                <p>
                  Usted tiene el derecho de Acceso, Rectificación, Cancelación y Oposición al tratamiento de sus datos personales, así como de revocar el consentimiento otorgado.
                </p>
                <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-sm text-slate-800">
                  <p>
                    Para ejercer estos derechos, envíe una solicitud por correo electrónico a{' '}
                    <a
                      href="mailto:contacto@becorporate.mx"
                      className="text-[#0052CC] font-bold underline underline-offset-2 hover:text-[#003E99]"
                    >
                      contacto@becorporate.mx
                    </a>
                    , indicando claramente el derecho que desea ejercer, sus datos de contacto y adjuntando copia de una identificación oficial. Atenderemos su solicitud en un plazo máximo de 20 días hábiles.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  5
                </span>
                <span>Transferencias de Datos</span>
              </h2>
              <p className="text-slate-600 pl-9 leading-relaxed">
                Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP. En caso de que Be Corporate requiera compartir sus datos con proveedores de servicios (por ejemplo, servicios de mensajería o plataformas de envío de correos electrónicos), estos actuarán bajo nuestras instrucciones y con las mismas medidas de seguridad y confidencialidad exigidas por la ley.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  6
                </span>
                <span>Uso de Cookies y Tecnologías Similares</span>
              </h2>
              <p className="text-slate-600 pl-9 leading-relaxed">
                Nuestro sitio web utiliza cookies y otras tecnologías de seguimiento para fines estadísticos y de mejora de la experiencia de navegación. Usted puede desactivar las cookies desde la configuración de su navegador. Le informamos que también utilizamos herramientas de analítica web (como Google Analytics) que pueden recabar datos anónimos sobre su interacción con el sitio.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  7
                </span>
                <span>Cambios al Aviso de Privacidad</span>
              </h2>
              <p className="text-slate-600 pl-9 leading-relaxed">
                Cualquier modificación a este Aviso de Privacidad se publicará en esta misma página, indicando la fecha de última actualización. Le recomendamos consultarlo periódicamente.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052CC] text-xs flex items-center justify-center font-black">
                  8
                </span>
                <span>Autoridad Reguladora</span>
              </h2>
              <p className="text-slate-600 pl-9 leading-relaxed">
                Para cualquier queja o denuncia relacionada con el tratamiento de sus datos personales, puede acudir ante la Secretaría Anticorrupción y Buen Gobierno (antes INAI). Para más información, visite su sitio oficial.
              </p>
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
