import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { koraEditorialPackages } from '../data/pricingData';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';
import { PricingComparisonTable } from './PricingComparisonTable';
import { 
  Sparkles, 
  Check, 
  MessageCircle, 
  Printer, 
  PlusCircle, 
  Coins, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  Info
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-[#08090b] relative overflow-hidden border-t border-amber-500/20">
      
      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header exactly matching image 03 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.editorialOffers.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            {t.editorialOffers.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            {t.editorialOffers.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-black/60 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
            <span>✨ Chaque service peut également être commandé de façon individuelle sur devis</span>
          </div>
        </div>

        {/* 3 Main Editorial Formula Cards (From Image 03) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {koraEditorialPackages.map((pkg) => {
            const isStandard = pkg.id === 'kora-standard';
            const name = pkg.name[language] || pkg.name.fr;
            const subtitle = pkg.subtitle[language] || pkg.subtitle.fr;
            const target = pkg.targetAudience[language] || pkg.targetAudience.fr;
            const features = pkg.features[language] || pkg.features.fr;
            const msg = pkg.whatsappPresetMessage[language] || pkg.whatsappPresetMessage.fr;

            return (
              <div
                key={pkg.id}
                id={`card-${pkg.id}`}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? 'bg-gradient-to-b from-[#1c1810] via-zinc-900 to-[#14100a] border-2 border-amber-500 shadow-2xl shadow-amber-950/50 scale-[1.02] z-20'
                    : 'bg-zinc-900/80 border border-white/10 hover:border-amber-500/30 shadow-xl'
                }`}
              >
                {/* Recommended Badge (Standard Formula) */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-6 z-30">
                    <span className="btn-gold text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                      {pkg.badge[language] || pkg.badge.fr}
                    </span>
                  </div>
                )}

                {/* Card Top Section */}
                <div>
                  <div className="text-center pb-6 border-b border-white/10 mb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                      {name}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                      {subtitle}
                    </h3>

                    {/* Price Header */}
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                        {t.editorialOffers.startingFrom}
                      </span>
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-gradient font-display">
                          {pkg.priceFcfa.toLocaleString()}
                        </span>
                        <span className="text-sm font-bold text-white">
                          FCFA
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-zinc-400">
                        ≈ {pkg.approxUsd} $
                      </div>
                    </div>
                  </div>

                  {/* Target Audience Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <BookOpen className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>{t.editorialOffers.forWhom}</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      "{target}"
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                      {t.editorialOffers.includedHeading}
                    </span>

                    <ul className="space-y-3">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 leading-snug">
                          <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ad Budget Note for Premium Package */}
                  {pkg.adBudgetNote && (
                    <div className="mb-6 p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
                      <Coins className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pkg.adBudgetNote[language] || pkg.adBudgetNote.fr}</span>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button - All packages get the authentic Gold Gradient button */}
                <div className="pt-4 border-t border-white/10 mt-4">
                  <a
                    id={`cta-package-${pkg.id}`}
                    href={createWhatsAppLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold btn-gold text-black shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-black" />
                    <span>Choisir cette formule sur WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom 2 Details Cards (From Image 03: IMPRESSION & NON INCLUS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* IMPRESSION Card */}
          <div className="bg-zinc-900/90 border border-amber-500/20 rounded-3xl p-6 sm:p-7 flex items-start gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Printer className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {t.editorialOffers.impressionCard.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.editorialOffers.impressionCard.desc}
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-black/40 px-3 py-1.5 rounded-lg border border-amber-500/20">
                  <Printer className="w-3.5 h-3.5" />
                  {t.editorialOffers.impressionCard.sub}
                </span>
              </div>
            </div>
          </div>

          {/* NON INCLUS Card */}
          <div className="bg-zinc-900/90 border border-amber-500/20 rounded-3xl p-6 sm:p-7 flex items-start gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {t.editorialOffers.notIncludedCard.title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-amber-300">
                {t.editorialOffers.notIncludedCard.items}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.editorialOffers.notIncludedCard.desc}
              </p>
            </div>
          </div>

        </div>

        {/* Gold Ribbon Footer Tagline */}
        <div className="rounded-2xl bg-gold-metallic text-black py-4 px-6 text-center shadow-2xl mb-10">
          <p className="text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            {t.editorialOffers.taglineBar}
          </p>
        </div>

        {/* Toggle Detailed Comparison Table */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-amber-500/30 font-bold px-6 py-3 rounded-xl transition-colors text-xs sm:text-sm"
          >
            <span>{showComparison ? "Masquer le comparatif détaillé des 3 formules" : "Voir le comparatif complet des 3 formules"}</span>
            <ArrowRight className={`w-4 h-4 text-amber-400 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Comparison Table Section */}
        {showComparison && (
          <div className="mt-10 animate-in fade-in duration-300">
            <PricingComparisonTable />
          </div>
        )}

      </div>
    </section>
  );
};
