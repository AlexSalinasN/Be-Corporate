import React from 'react';
import { CheckSquare2, Users2, ArrowRight } from 'lucide-react';
import { AUDIENCIA_CRITERIOS } from '../data';

interface AudienceSectionProps {
  onOpenBooking: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="audiencia" className="py-20 lg:py-28 bg-white border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono">
                Página 08 · Criterios de Idoneidad
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
              ¿Para quién es este piloto?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              El piloto corporativo High-Performance Meetings™ genera el máximo retorno cuando se implementa en equipos
              que cumplen con las siguientes condiciones operativas:
            </p>

            <div className="space-y-3.5 mb-8">
              {AUDIENCIA_CRITERIOS.map((criterio, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckSquare2 className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{criterio}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Validar idoneidad de mi equipo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Typical Teams Matrix */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200 p-8 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-6">
              <Users2 className="w-4 h-4" />
              <span>Momentos Clave de Implementación</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#0052CC] transition-colors">
                <div className="text-xs font-extrabold text-[#051C2C] mb-1">Equipos Directivos y C-Level</div>
                <div className="text-xs text-slate-600">
                  Comités ejecutivos que necesitan tomar decisiones estratégicas con mayor velocidad y síntesis.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#0052CC] transition-colors">
                <div className="text-xs font-extrabold text-[#051C2C] mb-1">Liderazgo Transversal (Tech / Product / Ops)</div>
                <div className="text-xs text-slate-600">
                  Áreas que coordinan proyectos interdependientes y sufren de reuniones redundantes y desalineación.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#0052CC] transition-colors">
                <div className="text-xs font-extrabold text-[#051C2C] mb-1">Equipos Comerciales y Finanzas</div>
                <div className="text-xs text-slate-600">
                  Equipos de alta presión que requieren fijar compromisos claros y dar seguimiento riguroso a metas.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#0052CC] transition-colors">
                <div className="text-xs font-extrabold text-[#051C2C] mb-1">Procesos de Escala o Reorganización</div>
                <div className="text-xs text-slate-600">
                  Organizaciones en crecimiento acelerado que necesitan institucionalizar la disciplina de comunicación.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
