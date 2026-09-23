import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../config/siteConfig';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Tag, 
  User, 
  Globe, 
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;

      const currentIndex = items.findIndex(i => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(items[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(items[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  const bookTitle = item.title[language] || item.title.fr;
  const bookDesc = item.description ? (item.description[language] || item.description.fr) : '';

  const whatsappMessage = `Bonjour Kôra Studio ! J'ai vu l'ouvrage "${bookTitle}" de l'auteur ${item.author} sur votre site. J'aimerais concrétiser un projet éditorial similaire pour mon propre livre.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          id="modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-zinc-400 hover:text-white bg-black/60 hover:bg-black/90 border border-white/10 rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Square Cover Display (format carrée) */}
        <div className="md:w-1/2 bg-gradient-to-b from-[#14120e] to-[#0a0b0e] p-6 sm:p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10">
          
          <div className="relative w-full max-w-[340px] aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30">
            <img
              src={item.image}
              alt={bookTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>

          {/* Navigation Arrows below image */}
          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              disabled={!prevItem}
              onClick={() => prevItem && onNavigate(prevItem)}
              className={`p-2.5 rounded-full border border-white/10 ${
                prevItem 
                  ? 'text-white bg-zinc-900 hover:bg-zinc-800 hover:border-amber-500/40' 
                  : 'text-zinc-600 bg-zinc-950 cursor-not-allowed opacity-40'
              } transition-colors`}
              title="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-zinc-400">
              {currentIndex + 1} / {items.length}
            </span>

            <button
              type="button"
              disabled={!nextItem}
              onClick={() => nextItem && onNavigate(nextItem)}
              className={`p-2.5 rounded-full border border-white/10 ${
                nextItem 
                  ? 'text-white bg-zinc-900 hover:bg-zinc-800 hover:border-amber-500/40' 
                  : 'text-zinc-600 bg-zinc-950 cursor-not-allowed opacity-40'
              } transition-colors`}
              title="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Right: Book Details, Author, Direction & WhatsApp CTA */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-4">
            
            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              <span>{item.category}</span>
            </div>

            {/* Book Title */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-tight">
              {bookTitle}
            </h2>

            {/* Meta tags list */}
            <div className="grid grid-cols-2 gap-3 py-2 text-xs border-y border-white/10 text-zinc-300">
              {item.author ? (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Auteur : <strong>{item.author}</strong></span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Création : <strong>Kôra Studio</strong></span>
                </div>
              )}
              {item.country && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Pays : <strong>{item.country}</strong></span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Année : {item.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prêt pour publication</span>
              </div>
            </div>

            {/* Description */}
            {bookDesc && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Accompagnement Éditorial & Graphique
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {bookDesc}
                </p>
              </div>
            )}

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] bg-white/5 border border-white/5 px-2.5 py-0.5 rounded text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

          </div>

          {/* Action CTA */}
          <div className="pt-6 mt-4 border-t border-white/10 space-y-2.5">
            <a
              id="modal-order-style-whatsapp"
              href={createWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 btn-gold text-black font-extrabold py-3.5 px-4 rounded-xl shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>Commander un projet similaire sur WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-zinc-400">
              Kôra Studio · Un interlocuteur unique · Équipe éditoriale dédiée
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
