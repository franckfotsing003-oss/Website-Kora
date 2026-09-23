import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { 
  Phone, 
  Mail, 
  ChevronUp, 
  MessageCircle, 
  Settings, 
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { t } = useLanguage();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-zinc-300 pt-16 pb-12 font-sans relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Logo, À propos de nous, Contactez-nous */}
          <div className="space-y-6">
            {/* Brand Logo & Tagline */}
            <div>
              <a href="#hero" className="inline-block mb-1">
                <img
                  src="/Asset 3-8.png"
                  alt="Kôra Studio"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>
              <p className="text-xs text-zinc-400 font-medium">
                Auteurs Indépendants · Afrique Francophone
              </p>
            </div>

            {/* Section À propos */}
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8C4] via-[#F6D678] to-[#D49D42]">
                À propos de nous
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                Kôra Studio accompagne les auteurs d'Afrique francophone de la relecture à la publication et promotion internationale. Un intermédiaire, une équipe, un projet.
              </p>
            </div>

            {/* Section Contact */}
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8C4] via-[#F6D678] to-[#D49D42]">
                Contactez-nous
              </h4>
              <div className="space-y-2 text-xs">
                <a 
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{siteConfig.whatsappDisplay}</span>
                </a>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Informations */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8C4] via-[#F6D678] to-[#D49D42]">
              Informations
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href="#a-propos" className="hover:text-amber-300 transition-colors">
                  À propos de Kôra Studio
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-300 transition-colors">
                  Nos Créations & Réalisations
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-amber-300 transition-colors">
                  Formules & Tarifs
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-amber-300 transition-colors">
                  Témoignages d'Auteurs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Foire Aux Questions (FAQ)
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite un diagnostic gratuit pour mon manuscrit.")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-300 transition-colors text-amber-400 font-semibold"
                >
                  Diagnostic de Manuscrit (Gratuit)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Liens utiles */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8C4] via-[#F6D678] to-[#D49D42]">
              Liens utiles
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Services Éditoriaux Individuels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Correction & Relecture Approfondie
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Création de Couverture Professionnelle
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Publication Amazon KDP & Distribution
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Demande de Devis Personnalisé
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 text-zinc-400"
                >
                  <Settings className="w-3 h-3 text-amber-400" />
                  <span>Gestion du Portfolio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Restez informé(e) & Retour en haut */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8C4] via-[#F6D678] to-[#D49D42]">
                Restez informé(e)
              </h4>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                {/* Input with Mail Icon */}
                <div className="flex items-center bg-white rounded-md px-3.5 py-2.5 text-zinc-800 shadow-sm focus-within:ring-2 focus-within:ring-amber-500">
                  <Mail className="w-4 h-4 text-zinc-500 mr-2.5 shrink-0" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    required
                    className="w-full text-xs text-zinc-900 placeholder:text-zinc-500 outline-none bg-transparent"
                  />
                </div>

                {/* Subscribe Button in Metallic Gold Gradient */}
                <button
                  type="submit"
                  className="btn-gold text-black font-extrabold text-xs px-6 py-2.5 rounded-md shadow-lg shadow-amber-950/40 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-wider"
                >
                  S'inscrire
                </button>
              </form>

              {subscribed && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Merci ! Vous recevrez nos conseils éditoriaux.</span>
                </div>
              )}
            </div>

            {/* Back to Top Button in Gold Gradient */}
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg btn-gold active:scale-90 text-black flex items-center justify-center shadow-lg shadow-amber-950/40 transition-all hover:scale-110"
                aria-label="Retour en haut de page"
                title="Retour en haut de page"
              >
                <ChevronUp className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

        {/* Crisp Horizontal Separator Line */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Circular Social Icons in Metallic Gold Gradient */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full btn-gold text-black flex items-center justify-center font-bold text-sm shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full btn-gold text-black flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            {/* Twitter / X */}
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full btn-gold text-black flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full btn-gold text-black flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>

          {/* Right side: Copyright in French */}
          <div className="text-xs text-zinc-400">
            {new Date().getFullYear()} © Kôra Studio. Tous droits réservés.
          </div>

        </div>

      </div>
    </footer>
  );
};
