import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { KoraLogo } from './KoraLogo';
import { 
  MessageCircle, 
  Mail, 
  Settings, 
  Globe, 
  Sparkles,
  Phone
} from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-[#07080a] border-t border-amber-400/20 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Mission with Official Square Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <KoraLogo variant="profile-square" size="sm" className="gold-glow border border-amber-400/40" />
              <div>
                <h3 className="text-base font-black text-white font-display">Kôra Studio</h3>
                <p className="text-[11px] text-amber-300 font-semibold italic">Studio éditorial digital</p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-xs">
              {t.footer.tagline}
            </p>

            <div className="p-3 rounded-xl bg-black/70 border border-amber-400/30 text-[11px] text-amber-200">
              <span className="font-bold block text-white mb-0.5">Leitmotiv :</span>
              « {siteConfig.leitmotiv} »
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">{t.nav.home}</a></li>
              <li><a href="#portfolio" className="hover:text-amber-300 transition-colors">Nos Créatives</a></li>
              <li><a href="#tarifs" className="hover:text-amber-300 transition-colors">Formules & Tarifs</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Tous nos Services</a></li>
              <li><a href="#a-propos" className="hover:text-amber-300 transition-colors">À Propos du Studio</a></li>
              <li><a href="#temoignages" className="hover:text-amber-300 transition-colors">{t.nav.testimonials}</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">{t.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Tarifs & Formules */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Formules Éditoriales
            </h4>
            <ul className="space-y-2">
              <li><a href="#tarifs" className="hover:text-amber-300 transition-colors">Kôra Essentiel (150 000 FCFA)</a></li>
              <li><a href="#tarifs" className="hover:text-amber-300 transition-colors text-amber-300 font-bold">Kôra Standard (275 000 FCFA) ⭐</a></li>
              <li><a href="#tarifs" className="hover:text-amber-300 transition-colors">Kôra Premium (450 000 FCFA)</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Correction & Relecture manuscrit</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Création de couverture sur mesure</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Mise en page intérieure pro</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Publication Amazon KDP</a></li>
            </ul>
          </div>

          {/* Direct Contact & Language */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              {t.footer.contactTitle}
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber-300 fill-current" />
                <span>WhatsApp : <strong>{siteConfig.whatsappDisplay}</strong></span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-300" />
                <span>{siteConfig.email}</span>
              </a>

              <div className="pt-1 text-zinc-400 text-[11px]">
                <span className="block text-zinc-300 font-semibold mb-1">Réseaux : @Korastudio</span>
                <div className="flex gap-2 text-zinc-400">
                  <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Facebook</a>
                  <span>·</span>
                  <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Instagram</a>
                  <span>·</span>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Language Switch */}
            <div className="pt-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-zinc-500" />
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`font-bold ${language === 'fr' ? 'text-amber-300 font-black' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Français
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`font-bold ${language === 'en' ? 'text-amber-300 font-black' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                English
              </button>
            </div>

            {/* Admin CMS Access Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-amber-300 border border-white/5 bg-zinc-900/60 px-2.5 py-1 rounded-lg transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{t.footer.adminLink}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandTitle}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            <span>{t.footer.madeWithPassion}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
