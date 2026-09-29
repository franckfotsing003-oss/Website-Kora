import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Globe2, 
  UserCheck, 
  FileCheck2,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ReassuranceSection: React.FC = () => {
  const { publishedItems } = usePortfolio();

  // Preview real book covers created by Kôra Studio
  const previewCovers = publishedItems.slice(0, 6);

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-[#090a0d] border-t border-amber-400/20 relative overflow-hidden">
      
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/10 blur-[170px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Ils nous ont fait confiance
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
            Découvrez nos réalisations
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Avant de nous confier votre projet, vous pouvez découvrir certains travaux réalisés pour des auteurs que nous avons accompagnés. Retrouvez une sélection de leurs ouvrages et de nos réalisations sur notre page Facebook.
          </p>

          {/* Primary Facebook CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-extrabold px-7 py-4 rounded-xl shadow-xl shadow-blue-900/30 text-sm transition-all duration-200 hover:scale-105 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Voir nos réalisations sur Facebook</span>
              <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white" />
            </a>

            <a
              href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite découvrir vos réalisations et échanger sur mon projet :")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-amber-300 border border-white/10 hover:border-amber-400/40 font-bold px-6 py-4 rounded-xl text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>Parler à Kôra sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Real Book Covers Grid Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-14">
          {previewCovers.map((item, idx) => (
            <div
              key={item.id || idx}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/70 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-lg hover:shadow-amber-950/30 flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title.fr}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-gradient-to-t from-black via-zinc-950 to-zinc-900/80 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                    {item.title.fr}
                  </h4>
                  <p className="text-[11px] text-zinc-400 truncate">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Guarantees of Kôra Studio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">100% en ligne</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Échanges fluides à distance pour tous les auteurs, où qu'ils résident.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Un interlocuteur unique</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Une équipe coordonnée sous un seul contact dédié pour tout votre projet.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Studio éditorial indépendant</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pas une maison d'édition : vous gardez 100% de vos droits et bénéfices.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Contrat & Proforma</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Devis transparent, accord validé avant démarrage et livrables clairs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
