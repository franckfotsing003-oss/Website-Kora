import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Check, 
  X, 
  Sparkles, 
  Palette, 
  Type, 
  Printer, 
  MessageCircle 
} from 'lucide-react';
import { createWhatsAppLink } from '../config/siteConfig';

export const AiPositioningSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-[#0c0d11] to-[#090a0d] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {t.aiPositioning?.badge || "Direction Artistique Humaine"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mb-4 leading-tight">
              {t.aiPositioning?.title || "Pourquoi l'artisanat éditorial surpasse l'IA générique"}
            </h2>

            <p className="text-base text-zinc-300">
              {t.aiPositioning?.subtitle || "Une vraie direction artistique sensible aux nuances culturelles, techniques et littéraires de votre ouvrage."}
            </p>
          </div>

          {/* Comparison Matrix: Generic AI vs Human Art Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            
            {/* Generic AI Box */}
            <div className="rounded-2xl bg-black/40 border border-zinc-800 p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-zinc-400 font-bold text-sm uppercase tracking-wider">
                <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700">
                  <X className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <span>Génération IA brute & amateur</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-500 font-bold shrink-0">✕</span>
                  <span>Typographies génériques sans compréhension de votre public cible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-500 font-bold shrink-0">✕</span>
                  <span>Incompatibilité avec les normes d'impression (CMJN, fond perdu, tranche exacte)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-500 font-bold shrink-0">✕</span>
                  <span>Aucune relecture ni cohérence éditoriale globale du livre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-500 font-bold shrink-0">✕</span>
                  <span>Impression de « déjà-vu » pénalisant les ventes et la crédibilité</span>
                </li>
              </ul>
            </div>

            {/* Kôra Studio Direction */}
            <div className="rounded-2xl bg-amber-950/30 border border-amber-500/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm uppercase tracking-wider">
                <div className="w-6 h-6 rounded-full bg-amber-900/60 flex items-center justify-center border border-amber-500">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <span>L'Accompagnement Kôra Studio</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>Direction artistique humaine, sensible aux codes culturels et littéraires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>Conformité technique 100% certifiée pour imprimerie & Amazon KDP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>Équipe complète : relecteur, graphiste, maquettiste, stratège de diffusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>Un intermédiaire dédié : coordination fluide de A à Z sur WhatsApp</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center">
            <a
              href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite échanger sur la conception et l'édition de mon ouvrage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs sm:text-sm font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-amber-950/40 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Parler à notre équipe éditoriale</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
