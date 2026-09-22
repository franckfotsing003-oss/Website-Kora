import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MessageCircle, 
  FileText, 
  Search, 
  Palette, 
  RefreshCw, 
  MailCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';

export const ProcessTimeline: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <MessageCircle className="w-5 h-5 text-amber-400" />,
    <FileText className="w-5 h-5 text-amber-400" />,
    <Search className="w-5 h-5 text-amber-400" />,
    <Palette className="w-5 h-5 text-amber-400" />,
    <RefreshCw className="w-5 h-5 text-amber-400" />,
    <MailCheck className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="processus" className="py-20 lg:py-28 bg-[#0c0d11] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.process.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-4">
            {t.process.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            {t.process.subtitle}
          </p>
        </div>

        {/* 6-Step Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {t.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-zinc-900 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>

                  <span className="text-2xl font-black font-display text-zinc-700 group-hover:text-amber-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator pill */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-zinc-500 font-semibold">
                <span>Étape {idx + 1} sur 6</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to start Step 1 */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite démarrer l'Étape 1 et vous présenter mon manuscrit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-950/40 text-sm hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Démarrer l'Étape 1 : Échanger sur WhatsApp (+237 670 84 75 66)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
