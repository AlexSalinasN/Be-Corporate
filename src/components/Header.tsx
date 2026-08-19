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
    { key: 'desafio', label: 'El Desafío' },
    { key: 'solucion', label: 'La Solución' },
    { key: 'sistema', label: 'The Be System™' },
    { key: 'piloto', label: 'El Piloto' },
    { key: 'resultados', label: 'Resultados' },
    { key: 'nosotros', label: 'Nosotros' },
    { key: 'faq', label: 'Preguntas Frecuentes' },
    { key: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (key: SectionKey) => {
    onSelectSection(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 transition-all font-['Inter'] shadow-xs">
      {/* Main Executive Navbar */}
      <div className="container-corporate py-4 flex items-center justify-between">
        {/* LOGO: Single line, black background with pure white typography */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center group cursor-pointer focus:outline-none shrink-0"
        >
          <Logo size="lg" />
        </button>

        {/* Desktop Navigation Links - Clean, no page numbers */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-semibold text-slate-700">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#0052CC] bg-blue-50 font-bold'
                    : 'text-slate-700 hover:text-[#0052CC] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all flex items-center gap-2 shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
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
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold flex items-center justify-between hover:bg-slate-50 hover:text-[#0052CC]"
            >
              <span className={activeSection === item.key ? 'text-[#0052CC] font-bold' : 'text-slate-800'}>
                {item.label}
              </span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-md text-center"
            >
              Conversemos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
