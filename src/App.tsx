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
import { ChatbotWidget } from './components/ChatbotWidget';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>('inicio');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);

  // Set of revealed non-default sections
  const [revealedSections, setRevealedSections] = useState<Set<SectionKey>>(new Set());

  // Check URL hash on load and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#aviso-de-privacidad' || window.location.pathname === '/aviso-de-privacidad') {
        setShowPrivacyPolicy(true);
      } else if (showPrivacyPolicy && window.location.hash !== '#aviso-de-privacidad') {
        setShowPrivacyPolicy(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [showPrivacyPolicy]);

  const handleOpenPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
    window.location.hash = '#aviso-de-privacidad';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowPrivacyPolicy(false);
    if (window.location.hash === '#aviso-de-privacidad') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    if (showPrivacyPolicy) {
      setShowPrivacyPolicy(false);
    }
    handleSelectSection('contacto');
    setTimeout(() => {
      const dateEl = document.getElementById('fecha-diagnostico');
      if (dateEl) {
        dateEl.focus();
        dateEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleSelectSection = (key: SectionKey) => {
    if (showPrivacyPolicy) {
      setShowPrivacyPolicy(false);
    }
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

  if (showPrivacyPolicy) {
    return (
      <>
        <PrivacyPolicy onBackToHome={handleBackToHome} />
        <ChatbotWidget onOpenBooking={handleOpenBooking} />
      </>
    );
  }

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
      <Footer onOpenPrivacyPolicy={handleOpenPrivacyPolicy} />

      {/* Interactive AI Chatbot Widget */}
      <ChatbotWidget onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;
