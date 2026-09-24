import React, { useState } from 'react';
import { Sparkles, MessageCircle, X, CheckCircle2, ChevronRight, Heart } from 'lucide-react';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';

interface KoralieAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showHalo?: boolean;
}

export const KoralieAvatar: React.FC<KoralieAvatarProps> = ({ 
  size = 'md', 
  className = '',
  showHalo = true
}) => {
  const [imgError, setImgError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  const sources = [
    '/mascotte-koralie.jpg',
    '/Mascotte%20Koralie.jpg',
    '/Mascotte Koralie.jpg',
    '/mascotte-koralie.png',
    '/covers/mascotte-koralie.jpg',
    '/covers/Mascotte Koralie.jpg'
  ];

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28 sm:w-36 sm:h-36'
  };

  const handleImgError = () => {
    if (currentSrcIndex < sources.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      {/* Golden Ambient Halo */}
      {showHalo && (
        <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-400/40 via-amber-300/20 to-transparent blur-sm animate-pulse pointer-events-none"></span>
      )}

      {/* Main Avatar Shell */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-400/80 bg-gradient-to-b from-[#1c1810] to-black shadow-lg shadow-amber-950/40 flex items-center justify-center">
        {!imgError ? (
          <img
            src={sources[currentSrcIndex]}
            alt="Koralie, la mascotte officielle de Kôra Studio"
            onError={handleImgError}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          /* High-Fidelity SVG Fallback Representation of Koralie */
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="kgold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd269" />
                <stop offset="100%" stopColor="#c8922e" />
              </linearGradient>
              <linearGradient id="kskin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b37344" />
                <stop offset="100%" stopColor="#874e26" />
              </linearGradient>
              <radialGradient id="kblush" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff7070" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff7070" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Dark background */}
            <circle cx="50" cy="50" r="50" fill="#121318" />

            {/* Ambient Gold glow */}
            <circle cx="50" cy="40" r="32" fill="#d4a038" fillOpacity="0.25" />

            {/* Hair Afro Puffs */}
            <circle cx="28" cy="30" r="14" fill="#201a18" />
            <circle cx="72" cy="30" r="14" fill="#201a18" />
            <circle cx="28" cy="36" r="4" fill="url(#kgold)" />
            <circle cx="72" cy="36" r="4" fill="url(#kgold)" />

            {/* Shoulders / Gold Jacket */}
            <path d="M18 90 C 22 72, 40 70, 50 70 C 60 70, 78 72, 82 90 Z" fill="url(#kgold)" />
            <polygon points="50,70 44,82 56,82" fill="#fff" />

            {/* Neck */}
            <rect x="44" y="60" width="12" height="14" rx="3" fill="url(#kskin)" />

            {/* Head Dome & Face */}
            <circle cx="50" cy="42" r="21" fill="#201a18" />
            <ellipse cx="50" cy="48" rx="18" ry="19" fill="url(#kskin)" />

            {/* Cheeks blush */}
            <circle cx="39" cy="51" r="5" fill="url(#kblush)" />
            <circle cx="61" cy="51" r="5" fill="url(#kblush)" />

            {/* Big Expressive Eyes */}
            <ellipse cx="42" cy="46" rx="3.5" ry="4" fill="#fff" />
            <ellipse cx="58" cy="46" rx="3.5" ry="4" fill="#fff" />
            <circle cx="43" cy="46" r="2.2" fill="#2d170a" />
            <circle cx="57" cy="46" r="2.2" fill="#2d170a" />
            <circle cx="44" cy="45" r="0.9" fill="#fff" />
            <circle cx="58" cy="45" r="0.9" fill="#fff" />

            {/* Friendly Eyebrows */}
            <path d="M38 41 Q 42 39 46 41" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M54 41 Q 58 39 62 41" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />

            {/* Cute nose */}
            <circle cx="50" cy="50" r="1.2" fill="#6a3a19" />

            {/* Radiant Smile */}
            <path d="M43 54 Q 50 60 57 54" stroke="#7a2a1a" strokeWidth="1.5" strokeLinecap="round" fill="#fff" />

            {/* Golden Star Sparkle on Cheek */}
            <path d="M64 43 L65 40 L66 43 L69 44 L66 45 L65 48 L64 45 L61 44 Z" fill="url(#kgold)" />
          </svg>
        )}
      </div>

      {/* Online Active Badge */}
      <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-black rounded-full shadow"></span>
    </div>
  );
};

/**
 * High-Definition Framed Photo Display for Koralie with Zoom Lightbox Modal
 */
export const KoraliePhotoCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`relative group shrink-0 ${className}`}>
        {/* Glow behind the photo */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/40 via-amber-400/20 to-transparent blur-xl rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Photo Container Frame */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-amber-400/70 bg-gradient-to-b from-[#18140e] to-black shadow-2xl cursor-pointer transition-all duration-300 group-hover:scale-[1.03] group-hover:border-amber-300"
          title="Cliquez pour agrandir la photo de Koralie"
        >
          <img
            src="/mascotte-koralie.jpg"
            alt="Mascotte Koralie - Kôra Studio"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Full Resolution Photo Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-zinc-950 border-2 border-amber-400 rounded-3xl p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-black/80 hover:bg-zinc-800 text-zinc-300 hover:text-white p-2 rounded-full border border-white/10 transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-amber-400/40 shadow-inner mb-4 bg-black">
              <img
                src="/mascotte-koralie.jpg"
                alt="Mascotte Koralie en haute définition"
                className="w-full h-auto object-contain max-h-[70vh] mx-auto rounded-xl"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mascotte Officielle de Kôra Studio</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Koralie</h3>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto mb-4">
                La mascotte bienveillante qui guide les auteurs indépendants et passionnés vers le succès éditorial.
              </p>
              <a
                href={createWhatsAppLink("Bonjour Koralie, j'aimerais échanger avec vous sur mon projet de livre.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-gold text-black font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Discuter avec Koralie</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Strategic Ambassador Card for AboutKoraSection
 */
export const KoralieStudioAmbassadorCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#1c170f] via-zinc-950 to-black border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden my-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a038]/15 blur-3xl rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        
        {/* Mascot Photo Card with VIP Frame */}
        <KoraliePhotoCard />

        {/* Mascot Message & Persona */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300 mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Votre guide créative · Koralie</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-2">
            « Bonjour, je suis <span className="text-gold-gradient">Koralie</span> ! »
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
            Mascotte et âme créative de <strong>Kôra Studio</strong>, ma mission est de vous accompagner avec le sourire à chaque étape. 
            Chez nous, pas de jargon compliqué : nous sublimons votre manuscrit pour en faire une couverture irrésistible qui captive immédiatement les lecteurs.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-amber-200/90 font-medium mb-5">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Accompagnement bienveillant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Réponses rapides sur WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Satisfaction 100% garantie
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={createWhatsAppLink("Bonjour Koralie ! J'aimerais avoir des conseils pour la couverture de mon livre.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 btn-gold text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-amber-950/50 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuter avec Koralie</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * Interactive Floating Assistant Widget (Bottom Right)
 */
export const FloatingKoralieAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Automatically show friendly tip once after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Speech Bubble / Mini Chat Dialog */}
      {(isOpen || hasPrompted) && (
        <div className="bg-zinc-950 border-2 border-amber-400/50 text-white rounded-3xl p-4 shadow-2xl shadow-black/90 max-w-xs sm:max-w-sm w-80 animate-in fade-in slide-in-from-bottom-3 duration-300 relative">
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setHasPrompted(false);
            }}
            className="absolute top-3 right-3 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fermer la bulle"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header with Mascot Profile */}
          <div className="flex items-center gap-3 mb-3 pr-6">
            <KoralieAvatar size="sm" showHalo={false} />
            <div>
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
                <span>Koralie</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-[11px] text-zinc-400">Mascotte & Conseillère Kôra</p>
            </div>
          </div>

          {/* Dialogue Message */}
          <p className="text-xs text-zinc-200 leading-relaxed mb-3.5 bg-zinc-900/80 p-2.5 rounded-xl border border-white/5">
            👋 <strong>Bonjour cher auteur !</strong> Avez-vous une idée précise pour votre livre ou souhaitez-vous un conseil personnalisé sur nos forfaits ?
          </p>

          {/* Quick Action Links */}
          <div className="space-y-1.5">
            <a
              href={createWhatsAppLink("Bonjour Koralie, j'aimerais échanger sur mon projet de livre.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between bg-gradient-to-r from-amber-400 to-[#c8922e] text-black text-xs font-bold px-3 py-2 rounded-xl shadow hover:scale-[1.02] transition-transform"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-current" />
                Parler à l'équipe sur WhatsApp
              </span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#tarifs"
              onClick={() => {
                setIsOpen(false);
                setHasPrompted(false);
              }}
              className="w-full inline-flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-3 py-2 rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors"
            >
              <span>Découvrir les forfaits dès 150 000 FCFA</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

        </div>
      )}

      {/* Main Trigger Button: Koralie Avatar Floating Launcher */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setHasPrompted(false);
        }}
        className="group relative flex items-center justify-center p-0.5 rounded-full focus:outline-none focus:ring-4 focus:ring-amber-400/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
        aria-label="Discuter avec Koralie, mascotte de Kôra Studio"
      >
        <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none"></span>
        <KoralieAvatar size="md" showHalo={false} />
        
        {/* Floating Tooltip Label */}
        <span className="absolute right-16 bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-amber-400/40 shadow-xl">
          Koralie vous aide !
        </span>
      </button>

    </div>
  );
};
