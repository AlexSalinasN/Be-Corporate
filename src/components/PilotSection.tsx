import React from 'react';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { PILOTO_SPECS, PILOTO_ENTREGABLES } from '../data';

interface PilotSectionProps {
  onOpenBooking: () => void;
}

export const PilotSection: React.FC<PilotSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="piloto" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono mb-3">
            Programa Piloto Corporativo
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            High-Performance Meetings™
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#0052CC] mb-4">
            Piloto corporativo · 4 semanas · 8 a 12 participantes
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Una intervención estructurada de alto impacto diseñada para validar la metodología en un equipo específico
            antes de una adopción organizacional más amplia.
          </p>
        </div>

        {/* Commercial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Specifications Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-base font-extrabold text-[#051C2C]">Ficha Técnica del Programa</h3>
                <span className="text-xs text-slate-500 font-medium">Parámetros operativos</span>
              </div>
              <span className="font-mono text-xs font-bold text-[#0052CC] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                TEAM TRACK™
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {PILOTO_SPECS.map((spec, index) => (
                <div key={index} className="py-3.5 flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-600 font-medium">{spec.label}</span>
                  <span
                    className={`font-bold ${
                      spec.label.includes('Inversión') ? 'text-[#0052CC] text-sm font-semibold' : 'text-[#051C2C]'
                    }`}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Solicitar diagnóstico para cohorte</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 7 Tangible Deliverables */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-base font-extrabold text-[#051C2C]">7 Entregables Tangibles</h3>
                <span className="text-xs text-slate-500 font-medium">Learning & Workplace Performance Evidence™</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-3.5">
              {PILOTO_ENTREGABLES.map((entregable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {entregable}
                  </span>
                </div>
              ))}
            </div>

            {/* Note on enterprise alignment */}
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-[#051C2C]">Alcance Institucional: </span>
              Propuesta adaptada a la escala y objetivos de su organización. Incluye diagnóstico inicial, facilitación
              ejecutiva, materiales de trabajo y reporte final de resultados.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
