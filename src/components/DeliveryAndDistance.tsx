import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Clock, 
  Globe2, 
  ShieldCheck, 
  Mail, 
  MessageCircle, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';

export const DeliveryAndDistance: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#090a0d] border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Flexibilité & Rythme */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              À votre rythme & selon vos moyens
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Nous adaptons le calendrier d'exécution à vos impératifs. Des facilités de paiement échelonnées vous permettent d'avancer sereinement sans pression financière.
            </p>
            <div className="text-xs font-semibold text-amber-400/90 bg-black/40 p-2.5 rounded-lg border border-amber-500/20">
              💰 Échéancier adapté à votre trésorerie
            </div>
          </div>

          {/* Card 2: 100% à distance */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              100% en ligne, sans frontières
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Où que vous soyez (Cameroun, Côte d'Ivoire, RDC, Sénégal, Canada, Europe...), notre accompagnement vous suit grâce à un suivi instantané sur WhatsApp.
            </p>
            <div className="text-xs font-semibold text-amber-400/90 bg-black/40 p-2.5 rounded-lg border border-amber-500/20">
              🌍 Échanges WhatsApp & Livraison certifiée par Email
            </div>
          </div>

          {/* Card 3: Garantie & Rigueur */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Engagement Qualité & Droits Protégés
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Vous conservez 100% de vos droits d'auteur et revenus. Nous ajustons les épreuves jusqu'à votre entière validation pour un résultat éditorial irréprochable.
            </p>
            <div className="text-xs font-semibold text-emerald-400 bg-black/40 p-2.5 rounded-lg border border-emerald-500/20">
              ✨ Zéro mauvaise surprise · Validation étape par étape
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
