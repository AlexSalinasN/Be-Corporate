import React from 'react';
import { Target, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SOLUCION_OBJETIVOS } from '../data';

interface SolutionSectionProps {
  onOpenBooking: () => void;
  onExploreSystem?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenBooking, onExploreSystem }) => {
  return (
    <section id="solucion" className="py-20 lg:py-28 bg-white border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono mb-3">
            Marco Metodológico
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            High-Performance Meetings™
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#0052CC] mb-6">
            Una capacidad organizacional para convertir la comunicación en ejecución.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            High-Performance Meetings™ es una intervención estructurada diseñada para desarrollar en líderes y equipos
            las capacidades necesarias para planear, conducir y capitalizar cada interacción de negocio.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: 7 Execution Capabilities */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-8 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0052CC] flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Capacidades que Desarrolla el Programa</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">7 Competencias Clave</span>
            </div>

            <div className="space-y-3.5">
              {SOLUCION_OBJETIVOS.map((objetivo, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs hover:border-[#0052CC] transition-colors">
                  <div className="w-6 h-6 rounded bg-blue-50 text-[#0052CC] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    0{index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{objetivo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Principle & Architecture */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#051C2C] text-white p-8 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] mb-3">
                Principio de Diseño
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
                "El valor de una reunión no se mide por su duración, sino por la calidad de las decisiones y la velocidad de los acuerdos."
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                Be Corporate traslada las mejores prácticas de comités ejecutivos globales hacia la operación diaria de su
                equipo directivo.
              </p>
              <div className="pt-4 border-t border-slate-700/80 space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-[#38BDF8] font-medium">
                  <Check className="w-4 h-4 text-[#00A3E0]" />
                  <span>Enfoque en resultados de negocio verificables.</span>
                </div>
                <div className="flex items-center gap-2 text-[#38BDF8] font-medium">
                  <Check className="w-4 h-4 text-[#00A3E0]" />
                  <span>Mínima teoría, 100% práctica deliberada.</span>
                </div>
                <div className="flex items-center gap-2 text-[#38BDF8] font-medium">
                  <Check className="w-4 h-4 text-[#00A3E0]" />
                  <span>Adopción inmediata desde la primera semana.</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-2xl shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#051C2C] mb-2">
                ¿Por qué funciona el modelo?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Porque no es una charla motivacional. Es un sistema de transferencia de habilidades con retroalimentación
                y evidencias en el puesto de trabajo.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Agendar diagnóstico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
