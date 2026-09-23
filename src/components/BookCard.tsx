import React from 'react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';

interface BookCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ item, onSelect }) => {
  const { language, t } = useLanguage();

  return (
    <div 
      id={`portfolio-item-${item.id}`}
      onClick={() => onSelect(item)}
      className="group cursor-pointer flex flex-col justify-between h-full bg-zinc-900/70 border border-white/10 rounded-2xl p-4 hover:border-amber-500/50 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-950/40"
    >
      {/* Format carré 1:1 pour l'image de couverture */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black mb-4 border border-white/10 group-hover:border-amber-500/50 transition-colors shadow-2xl">
        <img
          src={item.image}
          alt={item.title[language] || item.title.fr}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Inner ring */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-amber-400/30 pointer-events-none z-10"></div>

        {/* Hover View Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <div className="btn-gold text-black font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            <span>Examiner</span>
          </div>
        </div>

        {/* Category Pill */}
        <div className="absolute top-2.5 right-2.5 z-20">
          <span className="bg-black/85 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>

      {/* Book Metadata & Title */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {item.title[language] || item.title.fr}
          </h3>

          <div className="flex items-center justify-between text-xs text-zinc-400 pt-0.5">
            <span>
              Par <strong className="text-zinc-200">{item.author}</strong>
            </span>
            {item.country && (
              <span className="text-[11px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-zinc-300">
                {item.country}
              </span>
            )}
          </div>
        </div>

        {item.description && (
          <p className="text-xs text-zinc-400 line-clamp-2 pt-1">
            {item.description[language] || item.description.fr}
          </p>
        )}
      </div>

    </div>
  );
};
