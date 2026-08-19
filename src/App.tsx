import React, { useState } from 'react';
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

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>('inicio');

  // Set of revealed non-default sections
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

  const isVisible = (key: SectionKey): boolean => {
    if (key === 'inicio' || key === 'sistema' || key === 'faq' || key === 'contacto') {
      return true;
    }
    return revealedSections.has(key);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter'] selection:bg-[#0052CC] selection:text-white flex flex-col">
      {/* Navigation Header with single-line white on black logo & clean links */}
      <Header
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenBooking={handleOpenBooking}
      />

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

        {/* PAGE 9: PREGUNTAS FRECUENTES (Always visible in default view) */}
        {isVisible('faq') && (
          <FAQSection />
        )}

        {/* PAGE 10: CONTACTO (Always visible in default view) */}
        {isVisible('contacto') && (
          <ContactSection onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Interactive AI Chatbot Widget */}
      <ChatbotWidget onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;
