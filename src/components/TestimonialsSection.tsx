import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialTestimonials } from '../data/initialTestimonials';
import { 
  Sparkles, 
  Star, 
  Quote, 
  BookOpen, 
  UserCheck 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-[#090a0d] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {t.testimonials.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-4">
            {t.testimonials.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-zinc-900 transition-all duration-300 shadow-lg group relative"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                  "{item.message[language] || item.message.fr}"
                </p>
              </div>

              {/* Author Info & Country */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {item.profession ? (item.profession[language] || item.profession.fr) : 'Auteur'}
                  </p>
                  <p className="text-[11px] text-amber-400/90 font-medium truncate max-w-[200px] mt-0.5">
                    📖 {item.bookTitle}
                  </p>
                </div>

                {/* Country Flag Badge */}
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-2xl mb-0.5">{item.countryFlag}</span>
                  <span className="text-[10px] font-bold text-zinc-400">{item.country}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
