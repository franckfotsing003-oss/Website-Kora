import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { koraIndividualServices } from '../data/pricingData';
import { createWhatsAppLink } from '../config/siteConfig';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileCheck2,
  FileSpreadsheet
} from 'lucide-react';

export const KoraServicesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0b0c10] relative overflow-hidden border-t border-amber-500/20">
      
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.servicesSection.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
            {t.servicesSection.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* PROMINENT CALLOUT: Prestation individuelle sur devis */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17140e] via-[#221c13] to-[#17140e] border-2 border-amber-500/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full border border-amber-500/30">
              <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Sur-mesure & Flexibilité</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {t.servicesSection.individualQuoteBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              <strong>Nous pouvons gérer chaque service de façon individuelle sur devis</strong>. Que vous ayez seulement besoin d'une création de couverture, d'une relecture minutieuse ou de démarches ISBN, nous adaptons notre intervention à votre demande précise.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite un devis personnalisé pour un service individuel à la carte :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-950/40 text-xs sm:text-sm transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>{t.servicesSection.individualQuoteBanner.btn}</span>
          </a>
        </div>

        {/* Services Grid - All cards have the exact same uniform shape and styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {koraIndividualServices.map((svc, idx) => {
            const title = svc.title[language] || svc.title.fr;
            const desc = svc.desc[language] || svc.desc.fr;

            return (
              <div
                key={svc.id}
                className="relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group bg-zinc-900/70 border border-white/10 hover:border-amber-500/40 hover:bg-zinc-900"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {svc.emoji}
                    </div>

                    <span className="text-[11px] font-bold text-amber-400/90 bg-amber-950/50 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      Service {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-semibold">
                    Sur devis ou formule
                  </span>

                  <a
                    href={createWhatsAppLink(svc.quotePreset)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Demander</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action bar */}
        <div className="text-center pt-2">
          <p className="text-xs text-zinc-400 mb-4">
            Vous ne savez pas quelle formule choisir ? Écrivez-nous pour un diagnostic rapide et sans engagement de votre manuscrit.
          </p>
          <a
            href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite un diagnostic gratuit pour savoir quel accompagnement convient le mieux à mon livre.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/40 font-bold px-7 py-3 rounded-xl text-xs sm:text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Demander un diagnostic gratuit de mon livre sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
