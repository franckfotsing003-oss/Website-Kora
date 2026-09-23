import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { KoraLogo } from './KoraLogo';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Globe, 
  Settings, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin }) => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined nav links matching the essential sections
  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.portfolio || "Nos Créatives", href: "#portfolio" },
    { label: t.nav.pricing, href: "#tarifs" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.testimonials, href: "#temoignages" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" }
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#090a0d]/95 backdrop-blur-md border-b border-amber-400/20 shadow-2xl py-3' 
          : 'bg-[#090a0d]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Kôra Studio Brand Logo */}
          <a 
            id="brand-logo"
            href="#hero" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          >
            <KoraLogo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                id={`nav-link-${idx}`}
                href={link.href}
                className="text-xs font-semibold text-zinc-300 hover:text-amber-300 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-zinc-900/90 border border-white/10 rounded-lg p-0.5 text-xs font-semibold text-zinc-300">
              <button
                id="btn-lang-fr"
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded transition-all text-xs ${
                  language === 'fr' 
                    ? 'btn-gold text-black font-extrabold shadow-sm' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <button
                id="btn-lang-en"
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-all text-xs ${
                  language === 'en' 
                    ? 'btn-gold text-black font-extrabold shadow-sm' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Admin CMS Trigger */}
            <button
              id="header-admin-trigger"
              type="button"
              onClick={onOpenAdmin}
              className="p-2 rounded-xl text-zinc-400 hover:text-amber-300 hover:bg-white/5 border border-white/10 transition-colors"
              title="Gérer les réalisations du portfolio"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp CTA Button with Metallic Gold Gradient */}
            <a
              id="header-whatsapp-cta"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold text-black font-extrabold text-xs px-4 py-2.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>{t.nav.chatOnWhatsapp}</span>
            </a>

          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg btn-gold text-black"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0e] border-b border-amber-400/20 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="pb-2 border-b border-white/10">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
              « {siteConfig.leitmotiv} »
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-300 hover:text-amber-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            {/* Mobile Lang switch */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Globe className="w-3.5 h-3.5" />
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`font-bold ${language === 'fr' ? 'text-amber-300 font-extrabold' : 'text-zinc-500'}`}
              >
                FR
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`font-bold ${language === 'en' ? 'text-amber-300 font-extrabold' : 'text-zinc-500'}`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 p-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Gérer Portfolio</span>
            </button>
          </div>

          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 btn-gold text-black font-extrabold py-3 rounded-xl text-xs mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-current text-black" />
            <span>Discuter sur WhatsApp (+237 670 84 75 66)</span>
          </a>
        </div>
      )}
    </header>
  );
};
