import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialTestimonials } from '../data/initialTestimonials';
import { 
  Sparkles, 
  Star, 
  Quote, 
  Pause, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { createWhatsAppLink } from '../config/siteConfig';

export const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter published testimonials and duplicate them for seamless infinite marquee loop
  const publishedList = initialTestimonials.filter(item => item.published !== false);
  const loopedList = [...publishedList, ...publishedList];

  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="temoignages" className="py-20 lg:py-24 bg-[#090a0d] border-t border-amber-400/20 relative overflow-hidden">
      
      {/* Ambient champagne gold glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4a038]/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                {t.testimonials.badge} · Retours d'Auteurs
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
              {t.testimonials.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              {t.testimonials.subtitle} · Défilement continu des avis réels de nos auteurs accompagnés.
            </p>
          </div>

          {/* Controls: Pause / Play & Manual Navigation */}
          <div className="flex items-center gap-2.5 shrink-0">
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

            <button
              type="button"
              onClick={() => scrollManual('left')}
              className="p-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/30 rounded-xl transition-all"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollManual('right')}
              className="p-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/30 rounded-xl transition-all"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Infinite Right-to-Left Scrolling Marquee for Testimonials */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div 
          className={`flex gap-6 px-4 sm:px-6 lg:px-8 ${isPaused ? '' : 'animate-marquee-testimonials'}`}
          style={{ width: 'max-content' }}
        >
          {loopedList.map((item, index) => {
            const message = item.message[language] || item.message.fr;
            const profession = item.profession ? (item.profession[language] || item.profession.fr) : 'Auteur';

            return (
              <div
                key={`${item.id}-${index}`}
                className="w-[340px] sm:w-[400px] shrink-0 bg-gradient-to-br from-zinc-900/95 to-zinc-950 border border-amber-400/20 hover:border-amber-400/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-amber-950/30"
              >
                <div>
                  {/* Top bar: 5 Stars in champagne gold & Quote icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                      ))}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6 line-clamp-5">
                    « {message} »
                  </p>
                </div>

                {/* Author Info, Book Title & Circular Author Photo */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {profession}
                    </p>
                    <p className="text-[11px] text-amber-200 font-semibold truncate mt-0.5">
                      📖 {item.bookTitle}
                    </p>
                  </div>

                  {/* Circular Author Photo replacing nationality */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#D49D42] via-[#FFF8C4] to-[#BD7E24] shadow-md shadow-amber-950/40">
                      <img
                        src={item.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=181511&color=d4a038&bold=true`}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover border-2 border-zinc-950"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=181511&color=d4a038&bold=true`;
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p className="text-xs text-zinc-400 inline-flex items-center gap-2">
          <span>Survolez un témoignage pour mettre le défilement en pause et lire à votre rythme.</span>
        </p>
      </div>

    </section>
  );
};
