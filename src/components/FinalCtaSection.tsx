import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { MessageCircle, Mail, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#090a0d] relative overflow-hidden text-center border-t border-amber-500/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-950/80 to-zinc-900 border border-amber-500/40 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-amber-950/50">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-bold text-amber-200">
            « {siteConfig.leitmotiv} »
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white font-display mb-6 leading-tight max-w-3xl mx-auto">
          {t.finalCta.title}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.finalCta.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-cta-whatsapp"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-amber-950/60 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>{t.finalCta.ctaBtn}</span>
          </a>

          <a
            id="final-cta-email"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Projet d'ouvrage avec Kôra Studio")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-base font-semibold px-7 py-4 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{t.finalCta.emailBtn}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% en ligne & sans frontières
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Plus de 230 auteurs accompagnés
          </span>
        </div>

      </div>
    </section>
  );
};
