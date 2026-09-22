import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { 
  Globe2, 
  Sparkles, 
  Coins, 
  BookOpen, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AboutKoraSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-20 lg:py-24 bg-[#090a0d] relative overflow-hidden border-t border-amber-400/20">
      
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#d4a038]/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-3.5 py-1.5 rounded-full mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
              {t.aboutKora.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-3">
            {t.aboutKora.title}
          </h2>

          <p className="text-base sm:text-lg text-amber-200/90 font-medium">
            {t.aboutKora.tagline}
          </p>
        </div>

        {/* 4 Pillars of Kôra Studio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: 100% en ligne, sans frontières */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-amber-400/20 hover:border-amber-400/50 rounded-3xl p-7 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <Globe2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">01. Modèle Agile</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">100% en ligne, sans frontières</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Nous n'avons <strong>pas de siège physique</strong> contraignant, et nous ne sommes pas une maison d'édition traditionnelle qui confisque vos droits d'auteur ou impose de longs délais d'acceptation.
            </p>
          </div>

          {/* Card 2: Studio éditorial indépendant */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-amber-400/20 hover:border-amber-400/50 rounded-3xl p-7 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">02. Partenaire Éditorial</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Kôra est un studio éditorial</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Nous accompagnons les <strong>auteurs indépendants d'Afrique francophone</strong> dans la réalisation complète de leurs ouvrages : de la relecture rigoureuse à la mise en page, la couverture et la publication.
            </p>
          </div>

          {/* Card 3: Maîtrise du budget */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-amber-400/20 hover:border-amber-400/50 rounded-3xl p-7 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <Coins className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">03. Flexibilité Financière</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">L'auteur reste maître de son budget</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              C'est l'auteur qui <strong>finance entièrement son accompagnement</strong> : nous l'aidons à concrétiser son projet, <strong>à son rythme et selon ses moyens</strong>, avec facilités de paiement échelonnées.
            </p>
          </div>

          {/* Card 4: Résultat éprouvé */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-amber-400/20 hover:border-amber-400/50 rounded-3xl p-7 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">04. Réputation Établie</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">+230 Auteurs accompagnés</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Résultat : <strong>plus de 230 auteurs accompagnés avec succès</strong> ces dernières années à travers l'Afrique et dans la diaspora (Canada, France, Belgique, Turquie...).
            </p>
          </div>

        </div>

        {/* Big Leitmotiv Showcase Callout with Gold Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#17140e] via-[#241e14] to-[#17140e] border-2 border-amber-400/40 p-8 sm:p-10 shadow-2xl text-center">
          
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-300 block mb-2">
            Notre Leitmotiv
          </span>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display mb-4">
            « Un intermédiaire. Une équipe. Un projet. »
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Fini le casse-tête de devoir recruter séparément un graphiste qui ne connaît pas l'édition, un correcteur qui livre en retard et un maquettiste perdu. Chez Kôra Studio, <strong>un seul interlocuteur privilégié</strong> coordonne pour vous une équipe éditoriale complète dédiée à l'excellence de votre livre.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite discuter de mon manuscrit avec votre équipe éditoriale.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold text-black font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>Échanger avec l'équipe sur WhatsApp</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/90 text-zinc-200 border border-amber-400/30 hover:border-amber-400 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
