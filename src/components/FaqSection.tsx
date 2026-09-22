import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialFaqItems } from '../data/initialFaq';
import { 
  Sparkles, 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Search 
} from 'lucide-react';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const { t, language } = useLanguage();
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
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.faq.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
            {t.faq.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            {t.faq.subtitle}
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-900/90 border-amber-500/40 shadow-xl shadow-amber-950/20' 
                    : 'bg-zinc-900/50 border-white/10 hover:border-amber-500/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-400 bg-amber-950/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Specific Question CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              {t.faq.moreQuestionsTitle}
            </h4>
            <p className="text-xs text-zinc-400">
              Notre équipe éditoriale vous répond sous quelques minutes sur WhatsApp au {siteConfig.whatsappDisplay}.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Bonjour Kôra Studio, j'ai une question spécifique à vous poser :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl shadow-lg shadow-amber-950/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>{t.faq.moreQuestionsBtn}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
