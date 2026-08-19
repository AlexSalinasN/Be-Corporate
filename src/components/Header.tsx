import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { Logo } from './Logo';

export type SectionKey =
  | 'inicio'
  | 'desafio'
  | 'solucion'
  | 'sistema'
  | 'piloto'
  | 'resultados'
  | 'nosotros'
  | 'audiencia'
  | 'faq'
  | 'contacto';

interface HeaderProps {
  activeSection: string;
  onSelectSection: (section: SectionKey) => void;
  onOpenBooking: () => void;
  showAllSections: boolean;
  onToggleShowAll: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenBooking,
  showAllSections,
  onToggleShowAll,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: SectionKey; label: string; pageNum: number; isDefault: boolean }[] = [
    { key: 'inicio', label: 'Inicio', pageNum: 1, isDefault: true },
    { key: 'desafio', label: 'El Desafío', pageNum: 2, isDefault: false },
    { key: 'solucion', label: 'La Solución', pageNum: 3, isDefault: false },
    { key: 'sistema', label: 'The Be System™', pageNum: 4, isDefault: true },
    { key: 'piloto', label: 'El Piloto', pageNum: 5, isDefault: false },
    { key: 'resultados', label: 'Resultados', pageNum: 6, isDefault: false },
    { key: 'nosotros', label: 'Nosotros', pageNum: 7, isDefault: false },
    { key: 'faq', label: 'Preguntas Frecuentes', pageNum: 9, isDefault: true },
    { key: 'contacto', label: 'Contacto', pageNum: 10, isDefault: true },
  ];

  const handleNavClick = (key: SectionKey) => {
    onSelectSection(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all font-['Inter'] shadow-xs">
      {/* Top Utility Bar (Deloitte Green dot + McKinsey Electric Blue accents) */}
      <div className="bg-[#051C2C] text-slate-300 py-1.5 px-4 text-[11px] border-b border-slate-800">
        <div className="container-corporate flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Deloitte-style signature vibrant green pulse */}
            <span className="w-2 h-2 rounded-full bg-[#86BC25] inline-block animate-pulse" />
            <span className="font-bold text-white tracking-wide">Be Corporate Strategic Advisory</span>
            <span className="hidden md:inline text-slate-400">· Práctica de Efectividad y Comunicación C-Level</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onToggleShowAll}
              className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-[#0052CC] text-sky-300 hover:text-white transition-colors text-[10px] font-semibold font-mono"
            >
              <Layers className="w-3 h-3" />
              <span>{showAllSections ? 'Modo: Todas las Secciones' : 'Modo: Esencial (Págs 1, 4, 9, 10)'}</span>
            </button>

            <a
              href="mailto:asalinas@becorporate.mx"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#38BDF8]" />
              <span>asalinas@becorporate.mx</span>
            </a>
            <a
              href="tel:5535813240"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#86BC25]" />
              <span>55 3581 3240</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Executive Navbar */}
      <div className="container-corporate py-3.5 flex items-center justify-between">
        {/* BIGGER LOGO: Solid black background with pure white typography */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
        >
          <Logo size="xl" />
          <div className="hidden xl:flex flex-col border-l border-slate-300 pl-3 py-0.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#051C2C]">
              Strategic Practice
            </span>
            <span className="text-[10px] text-slate-500 font-medium font-mono">B2B Advisory</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-semibold text-slate-700">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-2.5 py-1.5 rounded transition-all flex items-center gap-1.5 relative cursor-pointer ${
                  isActive
                    ? 'text-[#0052CC] bg-sky-50/80 font-bold'
                    : 'text-slate-700 hover:text-[#0052CC] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.isDefault ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86BC25]" title="Visible en vista esencial" />
                ) : (
                  <span className="text-[9px] font-mono px-1 py-0.2 bg-slate-100 text-slate-500 rounded border border-slate-200">
                    p.{item.pageNum}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all duration-150 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Conversemos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-black rounded"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-2 font-['Inter'] shadow-xl">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pb-2 border-b border-slate-100">
            Navegación de Secciones
          </div>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold flex items-center justify-between hover:bg-slate-50 hover:text-[#0052CC]"
            >
              <span className={activeSection === item.key ? 'text-[#0052CC] font-bold' : 'text-slate-800'}>
                {item.label}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">
                Pág. {item.pageNum}
              </span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider py-3 rounded text-center"
            >
              Conversemos (Agendar 20 min)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
