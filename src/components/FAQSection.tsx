import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 font-['Inter']">
      <div className="container-corporate">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono">
              Página 09 · Gobernanza & Preguntas Frecuentes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Respuestas a las dudas más comunes de directores generales, comités de RR.HH. y líderes operativos sobre el
            piloto de Be Corporate.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 shadow-xs ${
                  isOpen ? 'border-[#0052CC] ring-1 ring-[#0052CC]/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#051C2C] flex items-center gap-3">
                    <span className="font-mono text-xs text-[#0052CC] font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      0{index + 1}
                    </span>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#0052CC] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed pl-14">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
