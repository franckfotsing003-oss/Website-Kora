import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="border-y border-amber-500/20 bg-[#090a0d] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 whitespace-nowrap">
            <Globe className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.proof.title}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {t.proof.countries.map((c, i) => (
              <div 
                key={i}
                className="inline-flex items-center gap-1.5 bg-zinc-900/90 border border-white/10 hover:border-amber-500/40 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-200 transition-colors shadow-sm"
              >
                <span className="text-sm">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
