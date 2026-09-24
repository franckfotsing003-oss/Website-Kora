import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCoversShowcase } from './components/FeaturedCoversShowcase';
import { PortfolioGallery } from './components/PortfolioGallery';
import { PricingSection } from './components/PricingSection';
import { KoraServicesSection } from './components/KoraServicesSection';
import { AboutKoraSection } from './components/AboutKoraSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { FloatingKoralieAssistant } from './components/KoralieMascot';
import { PortfolioModal } from './components/PortfolioModal';
import { AdminPortfolioModal } from './components/AdminPortfolioModal';
import { PortfolioItem } from './types';
import { usePortfolio } from './context/PortfolioContext';

const MainContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const { publishedItems } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Sticky Header with Kôra Logo, Nav & WhatsApp */}
      <Header onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Streamlined, High-Impact Flow focused on the essentials */}
      <main className="flex-1">
        {/* 1. Hero: Title, value proposition, Leitmotiv & Primary CTAs */}
        <Hero />

        {/* MODIFICATION 01: 5 Couvertures de livre (Première de couverture) en arc 3D entre Hero et Nos Créatives */}
        <FeaturedCoversShowcase />

        {/* 2. Nos Créatives: Gallerie avec double rangée immersive à sens inverse */}
        <PortfolioGallery 
          onSelectProject={(item) => setSelectedProject(item)} 
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 3. Pricing & Turnkey Packages: Essentiel 150k, Standard 275k, Premium 450k */}
        <PricingSection />

        {/* 5. Complete Editorial Services of Kôra Studio */}
        <KoraServicesSection />

        {/* 6. About Kôra Studio: 100% Online, Author-Financed, 1 Interlocutor */}
        <AboutKoraSection />

        {/* 7. Real Testimonials from African Authors */}
        <TestimonialsSection />

        {/* 8. Essential Interactive FAQ */}
        <FaqSection />

        {/* 9. Express Brief & WhatsApp Contact Form */}
        <ContactFormSection />
      </main>

      {/* Footer with Official Kôra Branding & Contacts */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* MODIFICATION 02: Assistant flottant stratégique avec la mascotte Koralie */}
      <FloatingKoralieAssistant />

      {/* Lightbox Modal for 10 Book Covers details */}
      <PortfolioModal
        item={selectedProject}
        items={publishedItems.slice(0, 10)}
        onClose={() => setSelectedProject(null)}
        onNavigate={(item) => setSelectedProject(item)}
      />

      {/* In-Browser Portfolio CMS Manager */}
      <AdminPortfolioModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <PortfolioProvider>
        <MainContent />
      </PortfolioProvider>
    </LanguageProvider>
  );
}

export default App;
