import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show quick tooltip after 4 seconds to catch attention smoothly
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Small Chat Invite Bubble */}
      {showTooltip && (
        <div className="bg-zinc-950 border border-amber-500/40 text-white p-3 rounded-2xl shadow-2xl max-w-xs text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-zinc-400 hover:text-white p-1"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1 text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kôra Studio · En ligne</span>
          </div>
          <p className="text-zinc-300 pr-4">
            Un projet de livre ? Notre équipe éditoriale vous répond directement sur WhatsApp au {siteConfig.whatsappDisplay}.
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Button with authentic Gold Gradient */}
      <a
        id="floating-whatsapp-btn"
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 btn-gold text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
        aria-label="Contacter Kôra Studio sur WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-current text-black relative z-10" />

        {/* Hover Label */}
        <span className="absolute right-16 bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-amber-500/30 shadow-xl">
          WhatsApp : {siteConfig.whatsappDisplay}
        </span>
      </a>

    </div>
  );
};
