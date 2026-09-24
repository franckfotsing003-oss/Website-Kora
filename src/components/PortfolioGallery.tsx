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
  BookOpen,
  ArrowRightLeft
} from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectProject: (item: PortfolioItem) => void;
  onOpenAdmin: () => void;
}

/**
 * Curated Two-Row Showcase for "Nos Créatives"
 * - Ligne 1: 10 premiers ouvrages - défilement de Droite à Gauche (animate-marquee-rtl)
 * - Ligne 2: 10 ouvrages personnalisés (Kora Books) - défilement en Sens Inverse de Gauche à Droite (animate-marquee-ltr)
 * - Format carré 1:1, cartes interactives avec aperçu et modal détaillé
 */
export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ 
  onSelectProject, 
  onOpenAdmin 
}) => {
  const { t, language } = useLanguage();
  const { publishedItems } = usePortfolio();
  
  // Row 1: First 10 curated books
  const row1Books = publishedItems.slice(0, 10);
  
  // Row 2: Second set of 10 books (Kora Books: Vendre ou Mourir Pauvre, Jesus Transforme-moi, etc.)
  // If publishedItems has more than 10, take 10 to 20, otherwise fallback gracefully
  const row2Books = publishedItems.length > 10 
    ? publishedItems.slice(10, 20) 
    : publishedItems.slice(0, 10);

  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollManual = (direction: 'left' | 'right') => {
    const scrollAmount = 360;
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({
        left: direction === 'left' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#08090b] relative overflow-hidden border-t border-amber-400/20">
      
      {/* Subtle gold ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#d4a038]/10 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                {t.portfolio.badge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
              {t.portfolio.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              Découvrez nos créatives et couvertures professionnelles en format carré. Deux rangées à double sens de défilement immersif : survolez un livre pour mettre en pause et cliquez pour afficher sa fiche technique.
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

      {/* ======================================================== */}
      {/* LIGNE 1 : DÉFILEMENT DE DROITE À GAUCHE (Série Signature) */}
      {/* ======================================================== */}
      <div className="mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold text-zinc-200">Série Signature 01</span>
            <span className="text-zinc-500">· Défilement continu Est &rarr; Ouest</span>
          </div>
          <span className="text-[11px] text-zinc-500 hidden sm:inline">10 créations exclusives</span>
        </div>

        <div 
          ref={scrollContainerRef1}
          className="relative w-full overflow-x-auto no-scrollbar py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Gradient edge masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#08090b] to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#08090b] to-transparent pointer-events-none z-20"></div>

          {/* Continuous Scrolling Track (Right to Left) */}
          <div 
            className={`flex gap-6 items-center px-4 w-max ${
              isPaused ? '' : 'animate-marquee-rtl'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {/* Set 1 */}
            {row1Books.map((item, idx) => (
              <SquareBookCard 
                key={`row1-set1-${item.id || idx}`}
                item={item}
                index={idx + 1}
                language={language}
                onSelect={onSelectProject}
              />
            ))}

            {/* Set 2 (Duplicate for seamless loop) */}
            {row1Books.map((item, idx) => (
              <SquareBookCard 
                key={`row1-set2-${item.id || idx}`}
                item={item}
                index={idx + 1}
                language={language}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LIGNE 2 : DÉFILEMENT DE GAUCHE À DROITE (Série Édition)   */}
      {/* SENS INVERSE DEMANDÉ PAR L'UTILISATEUR                   */}
      {/* ======================================================== */}
      <div className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-amber-300">Série Édition 02 · Kora Books</span>
            <span className="text-zinc-500">· Défilement inverse Ouest &rarr; Est</span>
          </div>
          <span className="text-[11px] text-zinc-500 hidden sm:inline">10 créations d'auteurs</span>
        </div>

        <div 
          ref={scrollContainerRef2}
          className="relative w-full overflow-x-auto no-scrollbar py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Gradient edge masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#08090b] to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#08090b] to-transparent pointer-events-none z-20"></div>

          {/* Continuous Scrolling Track in REVERSE (Left to Right) */}
          <div 
            className={`flex gap-6 items-center px-4 w-max ${
              isPaused ? '' : 'animate-marquee-ltr'
            }`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {/* Set 1 */}
            {row2Books.map((item, idx) => (
              <SquareBookCard 
                key={`row2-set1-${item.id || idx}`}
                item={item}
                index={idx + 11}
                language={language}
                onSelect={onSelectProject}
              />
            ))}

            {/* Set 2 (Duplicate for seamless loop) */}
            {row2Books.map((item, idx) => (
              <SquareBookCard 
                key={`row2-set2-${item.id || idx}`}
                item={item}
                index={idx + 11}
                language={language}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Counter and reassurance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-3 border-t border-white/5 pt-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
          <span>
            Présentation des <strong>{publishedItems.length} ouvrages</strong> sélectionnés · 2 lignes à défilement inversé
          </span>
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
 * Dedicated Square Book Card (Format carré 1:1)
 */
const SquareBookCard: React.FC<SquareBookCardProps> = ({ item, index, language, onSelect }) => {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    setImgSrc(item.image);
    setHasError(false);
  }, [item.image]);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback strategies: try clean slug or direct root path
      if (imgSrc.startsWith('/books/')) {
        setImgSrc(imgSrc.replace('/books/', '/'));
      } else {
        setImgSrc('/books/briser-les-limites-06.jpg');
      }
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer select-none shrink-0 w-72 sm:w-80 flex flex-col bg-zinc-900/80 border border-white/10 hover:border-amber-400/60 rounded-3xl p-4 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-950/40 hover:-translate-y-1.5"
    >
      {/* Format carré 1:1 pour l'image de couverture (non portrait) */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black mb-3.5 border border-white/10 group-hover:border-amber-400/50 shadow-2xl transition-all duration-300">
        <img
          src={imgSrc}
          alt={item.title[language] || item.title.fr}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle inner border glow */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-amber-400/40 pointer-events-none z-10"></div>

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

      {/* Book Metadata: Title without author name */}
      <div className="pt-2 flex items-center justify-between gap-2">
        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 font-display">
          {item.title[language] || item.title.fr}
        </h3>
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-amber-300/80 bg-black/60 border border-amber-400/20 px-2 py-0.5 rounded-full">
          Kôra Créative
        </span>
      </div>

    </div>
  );
};
