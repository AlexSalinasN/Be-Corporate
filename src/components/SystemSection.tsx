import React from 'react';
import { Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { THE_BE_SYSTEM_STAGES } from '../data';

interface SystemSectionProps {
  onExplorePilot?: () => void;
}

export const SystemSection: React.FC<SystemSectionProps> = ({ onExplorePilot }) => {
  return (
    <section id="sistema" className="py-20 lg:py-28 bg-[#051C2C] text-white border-b border-slate-800 font-['Inter'] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-corporate relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              Página 04 · Metodología Propietaria
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The Be System™
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#38BDF8] mb-6">
            El marco metodológico detrás de cada intervención de Be Corporate.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Un proceso estructurado de cinco etapas diseñado para diagnosticar, desarrollar, aplicar y sostener
            capacidades de comunicación y efectividad en equipos de alta responsabilidad.
          </p>
        </div>

        {/* 5 Stages Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {THE_BE_SYSTEM_STAGES.map((stage) => (
            <div
              key={stage.n}
              className="bg-[#0B253A] border border-slate-700/80 hover:border-[#38BDF8] p-6 rounded-xl transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#86BC25] bg-[#86BC25]/15 px-2.5 py-1 rounded border border-[#86BC25]/30">
                    ETAPA {stage.n}
                  </span>
                  <Layers className="w-4 h-4 text-slate-500 group-hover:text-[#38BDF8] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {stage.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{stage.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-700/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] block mb-1">
                  Entregable
                </span>
                <span className="text-xs text-slate-200 font-medium">{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#0B253A] to-[#082032] border border-slate-700 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#86BC25] mb-2">
              <Sparkles className="w-4 h-4 text-[#FFE600]" />
              <span>Enfoque en Evidencias de Desempeño</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Aprendizaje basado en situaciones reales de trabajo
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              No simulamos escenarios hipotéticos. Aplicamos las herramientas directamente en las juntas de planeación,
              comités y revisiones de negocio de su propia organización.
            </p>
          </div>
          {onExplorePilot && (
            <button
              onClick={onExplorePilot}
              className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Ver arquitectura del piloto (Pág. 05)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
