import React from 'react';
import { Target, Compass, Users, CheckCircle, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono">
              Página 07 · Firma Consultora
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            Sobre Be Corporate
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#0052CC] mb-6">
            Strategic Advisory en Comunicación, Efectividad Organizacional y Ejecución.
          </p>
        </div>

        {/* 2 Column Layout with C-Level CEO Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Boardroom CEO Meeting Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-[#051C2C]">
              <img
                src="/assets/ceo_meeting.jpg"
                alt="Director General y Comité C-Level en sesión de alineación estratégica"
                className="w-full h-[420px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#051C2C]/95 via-[#051C2C]/70 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#86BC25] mb-1">
                  <span>Comité Ejecutivo & Dirección General</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  Alineación estratégica y toma de decisiones de alta velocidad en salas de juntas directivas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Institutional Philosophy */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs hover:border-[#0052CC] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#051C2C]">Nuestra Misión</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ayudar a las organizaciones a convertir sus conversaciones en resultados, transformando las reuniones de
                trabajo en espacios de alta claridad, decisiones precisas y ejecución implacable.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs hover:border-[#0052CC] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#051C2C]">Nuestra Visión</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ser la firma de consultoría y desarrollo de capacidades líder en efectividad de reuniones para equipos
                corporativos y empresas de alto crecimiento en Iberoamérica.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs hover:border-[#0052CC] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#051C2C]">Nuestro Enfoque</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No creemos en capacitaciones genéricas ni en fórmulas rígidas. Trabajamos directamente sobre la realidad
                operativa del equipo, midiendo el cambio de comportamiento con evidencias de desempeño en situaciones
                reales de negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
