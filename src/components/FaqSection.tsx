import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialFaqItems } from '../data/initialFaq';
import { 
  Sparkles, 
  ChevronDown, 
  MessageCircle, 
  ExternalLink
} from 'lucide-react';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const { t, language } = useLanguage();
  // By default, open question 1 & question 3 to showcase answers immediately
  const [openIds, setOpenIds] = useState<string[]>(['faq-01', 'faq-03']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090a0d] border-t border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Questions Fréquentes · Confiance & Fonctionnement
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
            Tout comprendre sur Kôra Studio
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Retrouvez les réponses claires et transparentes sur notre accompagnement éditorial, nos tarifs et notre méthode de travail.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {initialFaqItems.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const question = faq.question[language] || faq.question.fr;
            const answer = faq.answer[language] || faq.answer.fr;

            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-900/90 border-amber-400/50 shadow-xl shadow-amber-950/20 ring-1 ring-amber-400/20' 
                    : 'bg-zinc-900/50 border-white/10 hover:border-amber-400/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-300 bg-amber-400/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                    <div className="whitespace-pre-line text-zinc-200 font-normal">
                      {answer}
                    </div>

                    {/* Official Facebook Proof Link for Question 3 */}
                    {faq.hasFacebookButton && (
                      <div className="pt-2">
                        <a
                          href={siteConfig.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#70aeff] hover:text-white border border-[#1877F2]/40 px-4 py-2 rounded-xl text-xs font-bold transition-all group"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>Voir nos réalisations sur Facebook</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/80 border border-amber-400/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Une autre question sur votre projet de livre ?
            </h4>
            <p className="text-xs text-zinc-400">
              Notre équipe éditoriale vous répond avec bienveillance sur WhatsApp au {siteConfig.whatsappDisplay}.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Bonjour Kôra Studio, j'ai une question spécifique concernant la préparation de mon ouvrage :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl shadow-lg shadow-amber-950/40 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Parler à Kôra sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
