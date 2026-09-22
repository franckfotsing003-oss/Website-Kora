import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { KoraLogo } from './KoraLogo';
import { 
  Phone, 
  Mail, 
  Sparkles, 
  BookOpen, 
  MessageCircle, 
  Globe 
} from 'lucide-react';

export const KoraBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 border-y border-amber-500/20 py-12 lg:py-16">
      
      {/* Bookshelf textured ambient backdrop */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter contrast-125"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(15,16,20,0.5) 0%, rgba(8,9,11,0.95) 100%), url('https://images.unsplash.com/photo-1507842229451-7f01dd8629d3?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      {/* Gold vignette glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Socials & Digital Studio Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 text-xs">
          <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/30 px-3 py-1 rounded-full text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              {t.brand.digitalBadge}
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400 text-xs font-semibold">
            <span>Suivez-nous :</span>
            <div className="flex items-center gap-2.5 text-zinc-300">
              <a 
                href={siteConfig.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <span>·</span>
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span>·</span>
              <a 
                href={siteConfig.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                aria-label="X / Twitter"
              >
                X
              </a>
              <span>·</span>
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-amber-400 font-bold ml-1">@Korastudio</span>
            </div>
          </div>
        </div>

        {/* Central Logo & Mission */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-block transform hover:scale-105 transition-transform duration-300">
            <KoraLogo size="xl" showSubtitle={true} />
          </div>

          {/* Leitmotiv Tag */}
          <div>
            <span className="inline-block bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
              « {siteConfig.leitmotiv} »
            </span>
          </div>

          {/* Banner Mission Statement */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white font-display leading-snug sm:leading-tight">
            Accompagner les <span className="text-gold-gradient font-black">auteurs africains francophones</span> dans la transformation de leurs <span className="text-gold-gradient font-black">manuscrits</span> en ouvrages <span className="underline decoration-amber-500 underline-offset-4">professionnels</span>, prêts à être publiés et diffusés.
          </h2>

          {/* Floating Pill Bar for Contacts (as on the official Facebook Banner) */}
          <div className="pt-6">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-gradient-to-r from-[#17140f] via-[#241e14] to-[#17140f] border-2 border-amber-500/60 p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-2xl shadow-amber-950/50">
              
              {/* Contacts Pill */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-amber-500/30">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  Contacts :
                </span>
                <a
                  href={`tel:${siteConfig.whatsappDisplay.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteConfig.whatsappDisplay}</span>
                </a>
              </div>

              {/* Email Pill */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-200 hover:text-amber-300 px-4 py-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{siteConfig.email}</span>
              </a>

              {/* Instant WhatsApp Action */}
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm px-5 py-2 rounded-xl sm:rounded-full shadow-md transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Nous écrire</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
