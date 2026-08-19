import React, { useState, useEffect } from 'react';
import { Header, SectionKey } from './components/Header';
import { Hero } from './components/Hero';
import { ChallengeSection } from './components/ChallengeSection';
import { SolutionSection } from './components/SolutionSection';
import { SystemSection } from './components/SystemSection';
import { PilotSection } from './components/PilotSection';
import { ResultsSection } from './components/ResultsSection';
import { AboutSection } from './components/AboutSection';
import { AudienceSection } from './components/AudienceSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Eye, Layers, ArrowRight, X, Sparkles } from 'lucide-react';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>('inicio');
  const [showAllSections, setShowAllSections] = useState(false);

  // Set of specifically revealed non-default sections
  const [revealedSections, setRevealedSections] = useState<Set<SectionKey>>(new Set());

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectSection = (key: SectionKey) => {
    setActiveSection(key);

    // If it's a non-default section (2, 3, 5, 6, 7, 8), reveal it
    const defaultSections: SectionKey[] = ['inicio', 'sistema', 'faq', 'contacto'];
    if (!defaultSections.includes(key)) {
      setRevealedSections((prev) => new Set(prev).add(key));
    }

    // Scroll to the target element
    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleExplorePilot = () => {
    handleSelectSection('piloto');
  };

  const handleExploreSolution = () => {
    handleSelectSection('solucion');
  };

  const handleExploreSystem = () => {
    handleSelectSection('sistema');
  };

  const handleResetToDefaultView = () => {
    setRevealedSections(new Set());
    setShowAllSections(false);
    setActiveSection('inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isVisible = (key: SectionKey): boolean => {
    if (showAllSections) return true;
    if (key === 'inicio' || key === 'sistema' || key === 'faq' || key === 'contacto') {
      return true;
    }
    return revealedSections.has(key);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter'] selection:bg-[#0052CC] selection:text-white flex flex-col">
      {/* Navigation Header with larger black & white logo */}
      <Header
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenBooking={handleOpenBooking}
        showAllSections={showAllSections}
        onToggleShowAll={() => setShowAllSections(!showAllSections)}
      />

      {/* Floating View Control Banner when non-default sections are expanded */}
      {(revealedSections.size > 0 || showAllSections) && (
        <div className="bg-[#051C2C] text-white py-2 px-4 sticky top-[68px] z-30 border-b border-slate-700/80 shadow-md">
          <div className="container-corporate flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
              <span className="font-semibold text-slate-200">
                {showAllSections
                  ? 'Visualizando todas las 10 páginas de la firma'
                  : `Secciones adicionales activadas: ${Array.from(revealedSections).join(', ')}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetToDefaultView}
                className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-[#0052CC] text-white rounded text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Restablecer Vista Esencial (Págs 1, 4, 9, 10)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* PAGE 1: INICIO / HERO (Always visible in default view) */}
        {isVisible('inicio') && (
          <Hero onOpenBooking={handleOpenBooking} onExplorePilot={handleExplorePilot} />
        )}

        {/* PAGE 2: EL DESAFÍO (Hidden by default, visible on nav click) */}
        {isVisible('desafio') && (
          <ChallengeSection onExploreSolution={handleExploreSolution} />
        )}

        {/* PAGE 3: LA SOLUCIÓN (Hidden by default, visible on nav click) */}
        {isVisible('solucion') && (
          <SolutionSection onOpenBooking={handleOpenBooking} onExploreSystem={handleExploreSystem} />
        )}

        {/* PAGE 4: THE BE SYSTEM™ (Always visible in default view) */}
        {isVisible('sistema') && (
          <SystemSection onExplorePilot={handleExplorePilot} />
        )}

        {/* PAGE 5: EL PILOTO (Hidden by default, visible on nav click) */}
        {isVisible('piloto') && (
          <PilotSection onOpenBooking={handleOpenBooking} />
        )}

        {/* PAGE 6: RESULTADOS (Hidden by default, visible on nav click) */}
        {isVisible('resultados') && (
          <ResultsSection />
        )}

        {/* PAGE 7: SOBRE BE CORPORATE (Hidden by default, visible on nav click) */}
        {isVisible('nosotros') && (
          <AboutSection />
        )}

        {/* PAGE 8: AUDIENCIA Y CRITERIOS (Hidden by default, visible on nav click) */}
        {isVisible('audiencia') && (
          <AudienceSection onOpenBooking={handleOpenBooking} />
        )}

        {/* PAGE 9: PREGUNTAS FRECUENTES & GOBERNANZA (Always visible in default view) */}
        {isVisible('faq') && (
          <FAQSection />
        )}

        {/* PAGE 10: CONTACTO & AGENDAMIENTO (Always visible in default view) */}
        {isVisible('contacto') && (
          <ContactSection onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal (Zoom 20 min) */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Interactive AI Chatbot Widget */}
      <ChatbotWidget onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;
