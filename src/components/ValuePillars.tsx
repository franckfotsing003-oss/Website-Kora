import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  TrendingUp, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Eye className="w-6 h-6 text-amber-400" />,
    <ShieldCheck className="w-6 h-6 text-amber-400" />,
    <Sparkles className="w-6 h-6 text-amber-400" />,
    <Target className="w-6 h-6 text-amber-400" />,
    <TrendingUp className="w-6 h-6 text-amber-400" />
  ];

  return (
    <section id="pourquoi-pro" className="py-20 lg:py-28 bg-[#0c0d11] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              L'Impact de l'Excellence Éditoriale
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-4">
            Pourquoi un studio éditorial change tout pour votre livre
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            De la relecture attentive à la couverture et la diffusion : chaque détail détermine l'adoption de votre ouvrage par les lecteurs.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Première Impression Décisive",
              desc: "Un lecteur met moins de 3 secondes pour juger un livre. Une identité visuelle et une couverture calibrées captent l'œil instantanément."
            },
            {
              num: "02",
              title: "Crédibilité & Statut d'Auteur",
              desc: "Une typographie soignée, une mise en page aérée et une relecture sans faute positionnent immédiatement votre ouvrage comme une référence sérieuse."
            },
            {
              num: "03",
              title: "Différenciation Face à la Masse",
              desc: "Face à des milliers de publications quotidiennes, votre livre se détache avec une direction artistique forte et mémorable."
            },
            {
              num: "04",
              title: "Fichiers Certifiés Imprimeur & Numérique",
              desc: "Zéro mauvaise surprise à l'imprimerie : profils colorimétriques CMJN, repères de coupe, fond perdu et formats e-book KDP impeccables."
            },
            {
              num: "05",
              title: "Meilleures Ventes & Conversion",
              desc: "Un livre professionnel suscite l'envie d'achat et déclenche des recommandations bouche-à-oreille durables."
            }
          ].map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-zinc-900/70 border border-white/10 p-6 sm:p-8 hover:border-amber-500/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>

                  <span className="text-3xl font-black font-display text-zinc-700 group-hover:text-amber-400 transition-colors">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-amber-400/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Norme Kôra Studio</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
