import React from 'react';
import { AlertCircle, ArrowDown } from 'lucide-react';
import { DESAFIO_SENALES } from '../data';

interface ChallengeSectionProps {
  onExploreSolution?: () => void;
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({ onExploreSolution }) => {
  return (
    <section id="desafio" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono mb-3">
            Diagnóstico de Efectividad
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            El problema no son las reuniones.
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#0052CC] mb-6">
            Es la ausencia de una capacidad compartida para convertirlas en resultados.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Las reuniones son uno de los principales espacios donde las organizaciones coordinan equipos, toman
            decisiones y ejecutan iniciativas estratégicas. Sin embargo, cuando la comunicación carece de claridad,
            alineación y seguimiento, las reuniones se convierten en una fuente constante de fricción operativa.
          </p>
        </div>

        {/* 7 Signals Matrix */}
        <div className="mb-14">
          <div className="flex items-center justify-between border-b border-slate-300 pb-3 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#051C2C] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#0052CC]" />
              <span>7 Señales Críticas de Fricción Comunicativa en Equipos</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Matriz de Diagnóstico</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESAFIO_SENALES.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 p-6 rounded-xl hover:border-[#0052CC] transition-all group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#0052CC] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                    SEÑAL 0{index + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#0052CC] transition-colors" />
                </div>
                <h4 className="text-base font-bold text-[#051C2C] mb-2 group-hover:text-[#0052CC] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* Impact Box */}
            <div className="bg-[#051C2C] text-white p-6 rounded-xl flex flex-col justify-between border border-slate-800 shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                  Impacto Acumulado
                </span>
                <h4 className="text-base font-bold text-white mt-2 mb-2">El Costo Organizacional</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Menor velocidad de respuesta, pérdida de tracción en iniciativas críticas y desgaste en los líderes más
                  valiosos de la organización.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-[#38BDF8] font-semibold">
                <span>Capacidad de Ejecución</span>
                <span className="font-mono font-bold">-35% Eficiencia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition callout */}
        <div className="bg-white border border-slate-300 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center shrink-0">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#051C2C]">
                Mejorar las reuniones no es cuestión de reducir su número arbitrariamente.
              </div>
              <div className="text-xs text-slate-600">
                Es cuestión de elevar la calidad de las conversaciones que ocurren en ellas.
              </div>
            </div>
          </div>
          {onExploreSolution && (
            <button
              onClick={onExploreSolution}
              className="text-xs font-bold uppercase tracking-wider text-[#0052CC] hover:text-[#051C2C] whitespace-nowrap cursor-pointer"
            >
              Ver la solución metodológica →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
