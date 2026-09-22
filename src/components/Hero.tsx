import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Clock, 
  ShieldCheck, 
  Globe2,
  Users,
  CheckCircle2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#08090b] via-[#0d0e13] to-[#090a0d]">
      
      {/* Ambient Metallic Gold Lighting (No harsh orange) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#d4a038]/12 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#c8922e]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle geometric luxury pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dfb76c12_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Badges: Brand & Leitmotiv */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1c170e] to-black border border-amber-400/40 px-3.5 py-1.5 rounded-full shadow-lg shadow-amber-950/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-amber-200">
                {t.hero.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-black/80 border border-amber-400/30 px-3.5 py-1.5 rounded-full shadow-md text-xs font-extrabold text-amber-300">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>« {siteConfig.leitmotiv} »</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-display">
            {t.hero.titleMain}{' '}
            <span className="italic text-gold-gradient font-black">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Credibility Key Metrics Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8 max-w-4xl mx-auto text-xs sm:text-sm text-zinc-300 font-medium">
          <div className="flex items-center gap-2 bg-black/60 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
            <Award className="w-4 h-4 text-amber-300" />
            <span>{t.hero.stats.authors}</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
            <Globe2 className="w-4 h-4 text-amber-300" />
            <span>{t.hero.stats.online}</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>{t.hero.stats.team}</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.hero.stats.satisfaction}</span>
          </div>
        </div>

        {/* Primary & Secondary Call to Actions with true Gold Gradient */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 max-w-lg mx-auto">
          <a
            id="hero-primary-whatsapp-btn"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 btn-gold text-base sm:text-lg font-extrabold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-current text-black" />
            <span>{t.hero.ctaPrimary}</span>
          </a>

          <a
            id="hero-secondary-pricing-btn"
            href="#tarifs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-amber-400/30 hover:border-amber-400 text-base sm:text-lg font-semibold px-7 py-4 rounded-xl transition-all duration-200"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>
        </div>

        {/* Reassurance Micro-banner */}
        <div className="inline-flex items-center gap-6 text-xs text-zinc-400 font-medium pt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
            100% Vos Droits d'Auteur
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
            Paiement échelonné 50/50
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
            Fichiers prêts pour l'imprimeur
          </span>
        </div>

      </div>
    </section>
  );
};
