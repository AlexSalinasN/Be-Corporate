import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: SectionKey; label: string }[] = [
    { key: 'inicio', label: 'Inicio' },
    { key: 'desafio', label: 'Desafío' },
    { key: 'solucion', label: 'Solución' },
    { key: 'sistema', label: 'The Be System™' },
    { key: 'piloto', label: 'El Piloto' },
    { key: 'resultados', label: 'Resultados' },
    { key: 'nosotros', label: 'Nosotros' },
    { key: 'faq', label: 'FAQ' },
    { key: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (key: SectionKey) => {
    onSelectSection(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all font-['Inter'] shadow-xs">
      <div className="max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 lg:gap-6">
        {/* LOGO: Clean executive framing */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center group cursor-pointer focus:outline-none shrink-0 py-0.5"
          aria-label="Ir a inicio de Be Corporate"
        >
          <Logo size="lg" className="h-11 sm:h-12 lg:h-[50px] w-auto" />
        </button>

        {/* Desktop Navigation Links - Balanced spacing, no crowding */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-[13px] font-medium text-slate-700">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#0052CC] bg-blue-50/80 font-bold'
                    : 'text-slate-600 hover:text-[#0052CC] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded-md transition-all flex items-center gap-2 shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>Conversemos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-black rounded-md hover:bg-slate-100 transition-colors"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-1.5 font-['Inter'] shadow-xl animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold flex items-center justify-between transition-colors ${
                activeSection === item.key
                  ? 'bg-blue-50 text-[#0052CC]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#0052CC]'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
          <div className="pt-3.5 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-md text-center transition-colors shadow-xs"
            >
              Conversemos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
