import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePortfolio } from '../context/PortfolioContext';
import { PortfolioItem } from '../types';
import { 
  Sparkles, 
  Settings, 
  Eye, 
  Pause, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectProject: (item: PortfolioItem) => void;
  onOpenAdmin: () => void;
}

/**
 * Curated 10 Books Showcase.
 * Strictly 10 books in 1:1 square format, scrolling smoothly from right to left.
 */
export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ 
  onSelectProject, 
  onOpenAdmin 
}) => {
  const { t, language } = useLanguage();
  const { publishedItems } = usePortfolio();
  
  // Strictly take 10 items
  const tenBooks = publishedItems.slice(0, 10);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#08090b] relative overflow-hidden border-t border-amber-400/20">
      
      {/* Subtle gold ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#d4a038]/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                {t.portfolio.badge} · 10 Ouvrages d'Auteurs
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
              {t.portfolio.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              Découvrez notre sélection de 10 couvertures professionnelles conçues sur mesure. Survolez un livre pour mettre en pause et cliquez pour afficher ses détails.
            </p>
          </div>

          {/* Interactive Marquee Controls & Admin trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Pause / Resume Button */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/30 text-xs font-semibold px-3 py-2 rounded-xl transition-all"
              title={isPaused ? "Reprendre le défilement" : "Mettre en pause"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>Défiler</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-300" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* Manual navigation arrows */}
            <button
              type="button"
              onClick={() => scrollManual('left')}
              className="p-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-amber-400/30 rounded-xl transition-colors"
              aria-label="Faire défiler vers la gauche"
              title="Précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollManual('right')}
              className="p-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-amber-400/30 rounded-xl transition-colors"
              aria-label="Faire défiler vers la droite"
              title="Suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Admin CMS Trigger */}
            <button
              type="button"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/30 text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
              title="Gérer les réalisations"
            >
              <Settings className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Gérer</span>
            </button>
          </div>
        </div>

      </div>

      {/* Marquee Container with smooth side-fades */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto no-scrollbar py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left & Right gradient edge masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#08090b] to-transparent pointer-events-none z-20"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#08090b] to-transparent pointer-events-none z-20"></div>

        {/* Continuous Scrolling Track (Right to Left): Duplicating the 10 books for infinite smooth loop */}
        <div 
          className={`flex gap-6 items-center px-4 w-max ${
            isPaused ? '' : 'animate-marquee-rtl'
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {/* First set of 10 books */}
          {tenBooks.map((item, idx) => (
            <SquareBookCard 
              key={`book-1-${item.id || idx}`}
              item={item}
              index={idx + 1}
              language={language}
              onSelect={onSelectProject}
            />
          ))}

          {/* Second duplicate set of 10 books for seamless infinite loop */}
          {tenBooks.map((item, idx) => (
            <SquareBookCard 
              key={`book-2-${item.id || idx}`}
              item={item}
              index={idx + 1}
              language={language}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>

      {/* Bottom Counter and reassurance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
          <span>Présentation des <strong>{tenBooks.length} ouvrages</strong> sélectionnés · Format carré</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-zinc-500">
          <span>Direction artistique sur-mesure</span>
          <span>·</span>
          <span>Fichiers HD CMJN prêts pour tirage</span>
          <span>·</span>
          <span>Livraison formats e-book Kindle & ePub</span>
        </div>
      </div>

    </section>
  );
};

interface SquareBookCardProps {
  item: PortfolioItem;
  index: number;
  language: 'fr' | 'en';
  onSelect: (item: PortfolioItem) => void;
}

/**
 * Dedicated Square Book Card (Requirement 06: "en format carrée et sa defile")
 */
const SquareBookCard: React.FC<SquareBookCardProps> = ({ item, index, language, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer select-none shrink-0 w-72 sm:w-80 flex flex-col bg-zinc-900/80 border border-white/10 hover:border-amber-400/60 rounded-3xl p-4 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-950/40 hover:-translate-y-1.5"
    >
      {/* 1:1 Square Frame for the Cover */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black/90 mb-3.5 border border-white/10 group-hover:border-amber-400/40 flex items-center justify-center p-3 shadow-inner">
        
        {/* Subtle gold corner highlight */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-400/20 to-transparent pointer-events-none z-10"></div>
        
        {/* 3D Book Cover positioned inside the square frame */}
        <div className="relative h-full aspect-[1/1.4] rounded-r-lg overflow-hidden book-mockup-3d shadow-2xl">
          <div className="absolute inset-0 pointer-events-none z-10 book-spine-shine"></div>
          <img
            src={item.image}
            alt={item.title[language] || item.title.fr}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Hover Inspect Overlay */}
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20 p-4 text-center">
          <div className="btn-gold text-black font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            <span>Consulter l'ouvrage</span>
          </div>
          <span className="text-[11px] text-zinc-300 line-clamp-2">
            {item.description ? (item.description[language] || item.description.fr) : ''}
          </span>
        </div>

        {/* Order Number Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-black/90 backdrop-blur-md text-[10px] font-black text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-md">
            #{String(index).padStart(2, '0')}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-black/90 backdrop-blur-md text-[10px] font-bold text-zinc-300 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>

      {/* Book Metadata */}
      <div className="space-y-1">
        <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors line-clamp-1 font-display">
          {item.title[language] || item.title.fr}
        </h3>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="truncate pr-2">
            Par <strong className="text-zinc-200">{item.author}</strong>
          </span>
          {item.country && (
            <span className="shrink-0 text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-amber-200">
              {item.country}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};
