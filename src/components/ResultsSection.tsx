import React from 'react';
import { TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { RESULTADOS_ITEMS } from '../data';

export const ResultsSection: React.FC = () => {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono">
              Página 06 · Impacto Organizacional
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            Resultados Esperados
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#0052CC] mb-6">
            Indicadores observables de desempeño tras las 4 semanas del piloto.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            El éxito del programa no se mide por la satisfacción subjetiva de los participantes, sino por el cambio
            observable en la disciplina, claridad y velocidad de las reuniones de trabajo.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {RESULTADOS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl hover:border-[#0052CC] transition-all group shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#0052CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  INDICADOR {item.id}
                </span>
                <TrendingUp className="w-4 h-4 text-slate-400 group-hover:text-[#86BC25] transition-colors" />
              </div>
              <h3 className="text-base font-bold text-[#051C2C] mb-2 group-hover:text-[#0052CC] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Executive Benchmark Summary */}
        <div className="bg-[#051C2C] text-white p-8 rounded-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-xl">
          <div className="p-4 border-b md:border-b-0 md:border-r border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-[#86BC25] font-mono mb-1">-30%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Tiempo de Juntas</div>
            <div className="text-[11px] text-slate-400 mt-1">Reducción de juntas redundantes</div>
          </div>

          <div className="p-4 border-b md:border-b-0 md:border-r border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-[#38BDF8] font-mono mb-1">+60%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Claridad de Acuerdos</div>
            <div className="text-[11px] text-slate-400 mt-1">Responsables y fechas de entrega claras</div>
          </div>

          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-[#FFE600] font-mono mb-1">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Evidencias Reales</div>
            <div className="text-[11px] text-slate-400 mt-1">Medido en las juntas operativas del equipo</div>
          </div>
        </div>
      </div>
    </section>
  );
};
