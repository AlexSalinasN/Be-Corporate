import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, FileText } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    if (onOpenPrivacyPolicy) {
      e.preventDefault();
      onOpenPrivacyPolicy();
    }
  };

  return (
    <footer className="bg-[#051C2C] text-slate-400 font-['Inter'] pt-16 pb-12 border-t border-slate-800">
      <div className="container-corporate">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <Logo size="xl" className="h-14 sm:h-16 lg:h-18 w-auto" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Communication Beyond Language · Communication That Drives Business. Ayudamos a líderes y equipos directivos a
              transformar sus reuniones en conversaciones más claras, decisiones mejor definidas y compromisos que se
              convierten en acciones.
            </p>
            <div className="text-xs font-mono text-[#38BDF8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>High-Performance Meetings™ · The Be System™</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#desafio" className="hover:text-white transition-colors">
                  El Desafío
                </a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-white transition-colors">
                  La Solución
                </a>
              </li>
              <li>
                <a href="#sistema" className="hover:text-white transition-colors">
                  The Be System™
                </a>
              </li>
              <li>
                <a href="#piloto" className="hover:text-white transition-colors">
                  El Piloto Corporativo
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#aviso-de-privacidad"
                  onClick={handlePrivacyClick}
                  id="footer-nav-aviso-privacidad"
                  className="hover:text-[#38BDF8] transition-colors text-slate-300 font-medium inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-[#38BDF8]" />
                  <span>Aviso de Privacidad</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Leadership & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contacto Directivo</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="font-bold text-white block">Contacto</span>
                <span className="text-[11px] text-slate-400">Be Corporate Strategic Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href="mailto:contacto@becorporate.mx" className="hover:text-white transition-colors">
                  contacto@becorporate.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href="tel:5535813240" className="hover:text-white transition-colors">
                  55 3581 3240
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Ciudad de México · Cobertura Internacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Be Corporate. Todos los derechos reservados. High-Performance Meetings™ y The
            Be System™ son marcas de Be Corporate.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#aviso-de-privacidad"
              onClick={handlePrivacyClick}
              id="footer-bottom-aviso-privacidad"
              className="text-slate-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Aviso de Privacidad
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
