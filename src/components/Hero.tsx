import React from 'react';
import { ArrowRight, Award, Clock, Calendar, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { CLIENT_LOGOS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePilot }) => {
  return (
    <section id="inicio" className="relative bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 overflow-hidden font-['Inter']">
      {/* Background Architectural Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0052cc_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-corporate relative z-10">
        {/* Practice Tag */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 bg-[#051C2C] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
            <span>Communication That Drives Business</span>
          </div>
        </div>

        {/* Hero Top Grid: Title and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#051C2C] tracking-tight leading-[1.12] mb-6 font-['Inter']">
              Convierta sus reuniones en una{' '}
              <span className="text-[#0052CC]">ventaja competitiva</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8 max-w-2xl">
              Ayudamos a líderes y comités directivos a transformar sus reuniones en conversaciones más claras,
              decisiones mejor definidas y compromisos que se convierten en acciones estratégicas medibles.
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExplorePilot}
                className="bg-[#0052CC] hover:bg-[#003E99] text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-md transition-all text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Conozca el piloto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenBooking}
                className="border-2 border-[#051C2C] hover:border-[#0052CC] text-[#051C2C] hover:text-[#0052CC] bg-white hover:bg-slate-50 text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Agenda una conversación</span>
                <Calendar className="w-4 h-4 text-[#0052CC]" />
              </button>
            </div>
          </div>

          {/* Top Right: Metric Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#051C2C] text-white p-5 rounded-lg border border-slate-800 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Programa</span>
              </div>
              <div className="text-lg font-black text-white">High-Performance Meetings™</div>
              <div className="text-xs text-slate-300 mt-1">Intervención práctica en juntas reales</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100/60 p-5 rounded-lg border border-blue-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Estructura</span>
              </div>
              <div className="text-lg font-black text-[#051C2C]">4 Semanas · 12 Horas</div>
              <div className="text-xs text-slate-600 mt-1">4 sesiones de práctica deliberada</div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs sm:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Capacidad Organizacional</div>
                  <div className="text-sm font-extrabold text-[#051C2C]">Equipos de 8 a 12 participantes</div>
                </div>
              </div>
              <div className="text-right font-mono text-xs font-bold text-[#0052CC] bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Team Track™
              </div>
            </div>
          </div>
        </div>

        {/* STRIKING IMAGE HERO (Deloitte/McKinsey Hero Visual) */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-[#051C2C] mb-12 group">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
            <img
              src="/assets/hero_striking.jpg"
              alt="Líderes ejecutivos en sesión estratégica en sala de consejo"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/30 to-transparent" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:right-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 text-white">
            <div className="max-w-2xl bg-[#051C2C]/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/80 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A3E0] mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Liderazgo de Alto Impacto</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                "Donde los comités ejecutivos transforman la conversación en tracción de negocio inmediata."
              </h3>
              <p className="text-xs text-slate-300 mt-2 font-normal">
                Metodología validada en organizaciones líderes de alta exigencia estratégica.
              </p>
            </div>
          </div>
        </div>

        {/* Client Ticker */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
              <span>Líderes de organizaciones de alto crecimiento confían en Be Corporate</span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Corporativos · Fintech · Unicornios · Firmas Globales
            </div>
          </div>
          <div className="overflow-hidden relative w-full pt-2">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-slate-600 text-sm font-extrabold tracking-wider">
              {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded shadow-xs hover:border-[#0052CC] transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></span>
                  <span className="font-['Inter'] text-slate-800 font-bold">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
