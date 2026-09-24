import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Eye,
  Award,
  X,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { createWhatsAppLink } from '../config/siteConfig';

export interface FeaturedCover {
  id: number;
  fileName: string;
  cleanFileName: string;
  title: string;
  subtitle?: string;
  author: string;
  genre: string;
  badge?: string;
  description: string;
}

export const FEATURED_COVERS: FeaturedCover[] = [
  {
    id: 1,
    fileName: 'PremiereCouvertures (1).jpg',
    cleanFileName: 'premiere-couverture-1.jpg',
    title: 'LE GUIDE ULTIME DE LA MAÎTRISE TYPOGRAPHIQUE',
    subtitle: 'Choisir, combiner et utiliser les polices comme un designer professionnel',
    author: 'FRANCK FOTSING',
    genre: 'Design & Typographie Éditoriale',
    badge: 'Ouvrage Référence',
    description: 'Conception typographique d’élite pour auteurs et designers. Équilibre parfait entre lisibilité, hiérarchie visuelle et prestige.'
  },
  {
    id: 2,
    fileName: 'PremiereCouvertures (2).jpg',
    cleanFileName: 'premiere-couverture-2.jpg',
    title: 'Diplomatie Militaire',
    subtitle: "Fonctionnement d'une bonne agence des attachés de défense au sein d'une armée moderne",
    author: 'Mukuna Mbikayi Alphonse',
    genre: 'Stratégie & Sciences Politiques',
    badge: 'Essai Stratégique',
    description: "Habillage institutionnel haut de gamme avec cartographie géostratégique et composition sobre et percutante."
  },
  {
    id: 3,
    fileName: 'PremiereCouvertures (3).jpg',
    cleanFileName: 'premiere-couverture-3.jpg',
    title: 'Tu me respectes, je te respecte',
    subtitle: 'Règles d’or de la dignité et des relations humaines harmonieuses',
    author: 'Merveils Kadjo',
    genre: 'Développement Personnel & Société',
    badge: 'Best-Seller Motivation',
    description: 'Typographie dorée en relief et visuel percutant symbolisant le respect mutuel et l’affirmation de soi.'
  },
  {
    id: 4,
    fileName: 'PremiereCouvertures (4).jpg',
    cleanFileName: 'premiere-couverture-4.jpg',
    title: 'LE GRAND MÉNAGE',
    subtitle: 'Agir pour un environnement propre et une conscience collective éveillée',
    author: 'Aboua Ahiwa',
    genre: 'Environnement & Engagement Citoyen',
    badge: 'Impact Social',
    description: 'Design dramatique et symbolique avec contrastes de matières et traitement chromatique haute intensité.'
  },
  {
    id: 5,
    fileName: 'PremiereCouvertures (5).jpg',
    cleanFileName: 'premiere-couverture-5.jpg',
    title: 'Un management toxique au service des ONG humanitaires',
    subtitle: 'Révélations et réalités du secteur humanitaire contemporain',
    author: 'Tamboura Saïdou',
    genre: 'Management & Analyse Humanitaire',
    badge: 'Essai Documentaire',
    description: 'Esthétique percutante mêlant symbolisme organisationnel et tension dramatique pour un sujet engagé.'
  },
  {
    id: 6,
    fileName: 'PremiereCouvertures (6).jpg',
    cleanFileName: 'premiere-couverture-6.jpg',
    title: 'Éduquer Sans Crier, C’est Possible',
    subtitle: 'La méthode simple pour parler, poser les limites et faire obéir ton enfant sans t’énerver',
    author: 'Chanceline Kenkeu Epse Feize',
    genre: 'Parentalité & Psychologie Familiale',
    badge: 'Guide Pratique',
    description: 'Palette lumineuse et bienveillante, typographie accessible et composition chaleureuse conçue pour rassurer les parents.'
  }
];

interface FeaturedCoversShowcaseProps {
  onSelectCover?: (cover: FeaturedCover) => void;
}

export const FeaturedCoversShowcase: React.FC<FeaturedCoversShowcaseProps> = () => {
  // Center book index (0 to 5)
  // By default, index 0 is "LE GUIDE ULTIME DE LA MAÎTRISE TYPOGRAPHIQUE"
  const [centerIndex, setCenterIndex] = useState(0);
  const [modalCover, setModalCover] = useState<FeaturedCover | null>(null);

  const total = FEATURED_COVERS.length;

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  // We want to calculate 5 positions:
  // -2: outer left
  // -1: inner left
  //  0: center
  // +1: inner right
  // +2: outer right
  const getSlot = (offset: number) => {
    const idx = (centerIndex + offset + total) % total;
    return {
      cover: FEATURED_COVERS[idx],
      offset,
      index: idx
    };
  };

  const visibleSlots = [
    getSlot(-2),
    getSlot(-1),
    getSlot(0),
    getSlot(1),
    getSlot(2)
  ];

  return (
    <section 
      id="premieres-couvertures" 
      className="relative pt-2 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-b from-[#090a0d] via-[#0b0c10] to-[#08090b]"
    >
      {/* Background Gold Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#d4a038]/12 blur-[170px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3D Curved / Fanned Perspective Showcase */}
        <div className="relative w-full max-w-5xl mx-auto pt-2 pb-6 sm:pb-10 select-none">
          
          {/* Subtle Stage Lighting Base Floor Shadow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-black/80 blur-2xl rounded-full pointer-events-none -z-10"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-amber-500/15 blur-xl rounded-full pointer-events-none -z-10"></div>

          {/* Perspective Container */}
          <div 
            className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 min-h-[380px] sm:min-h-[460px] md:min-h-[500px]"
            style={{ perspective: '1200px' }}
          >
            {visibleSlots.map(({ cover, offset, index }) => {
              const isCenter = offset === 0;
              const isInnerLeft = offset === -1;
              const isOuterLeft = offset === -2;
              const isInnerRight = offset === 1;
              const isOuterRight = offset === 2;

              // 3D transform computation matching high-end book showcase
              let rotateY = 0;
              let scale = 1.0;
              let translateZ = 0;
              let zIndex = 20;
              let opacity = 1;

              if (isCenter) {
                rotateY = 0;
                scale = 1.08;
                translateZ = 40;
                zIndex = 30;
                opacity = 1;
              } else if (isInnerLeft) {
                rotateY = 14;
                scale = 0.95;
                translateZ = 0;
                zIndex = 22;
                opacity = 0.92;
              } else if (isOuterLeft) {
                rotateY = 24;
                scale = 0.85;
                translateZ = -40;
                zIndex = 15;
                opacity = 0.75;
              } else if (isInnerRight) {
                rotateY = -14;
                scale = 0.95;
                translateZ = 0;
                zIndex = 22;
                opacity = 0.92;
              } else if (isOuterRight) {
                rotateY = -24;
                scale = 0.85;
                translateZ = -40;
                zIndex = 15;
                opacity = 0.75;
              }

              return (
                <div
                  key={`${cover.id}-${offset}`}
                  onClick={() => {
                    if (isCenter) {
                      setModalCover(cover);
                    } else {
                      setCenterIndex(index);
                    }
                  }}
                  style={{
                    transform: `rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
                    zIndex,
                    opacity
                  }}
                  className={`
                    relative cursor-pointer transition-all duration-500 ease-out group
                    w-[130px] sm:w-[190px] md:w-[220px] lg:w-[240px]
                    shrink-0
                    ${isCenter ? 'drop-shadow-[0_20px_40px_rgba(212,160,56,0.35)]' : 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]'}
                  `}
                >
                  {/* VIP Badge on Center Book */}
                  {isCenter && cover.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-amber-400 to-[#c8922e] text-black text-[10px] sm:text-xs font-black px-3 py-0.5 rounded-full shadow-lg shadow-amber-950/60 whitespace-nowrap flex items-center gap-1">
                      <Award className="w-3 h-3 text-black fill-current" />
                      <span>{cover.badge}</span>
                    </div>
                  )}

                  {/* 3D Realistic Book Shell (Aspect ratio 2:3, portrait standard 1800x2700) */}
                  <div className="relative aspect-[2/3] rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-amber-400/80 transition-colors shadow-2xl">
                    
                    {/* Spine Shadow on Left Edge */}
                    <div className="absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black/70 via-black/30 to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Vertical Book Hinge / Crease Gloss Line */}
                    <div className="absolute inset-y-0 left-[7%] w-[2px] bg-white/20 z-20 pointer-events-none"></div>

                    {/* Subtle Overhead Light Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 z-20 pointer-events-none group-hover:opacity-90 transition-opacity"></div>

                    {/* Book Cover Image with multiple fallbacks */}
                    <img
                      src={`/covers/${cover.cleanFileName}`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedBackup1) {
                          target.dataset.triedBackup1 = 'true';
                          target.src = `/covers/${cover.fileName}`;
                        } else if (!target.dataset.triedBackup2) {
                          target.dataset.triedBackup2 = 'true';
                          target.src = `/${cover.fileName}`;
                        } else if (!target.dataset.triedBackup3) {
                          target.dataset.triedBackup3 = 'true';
                          target.src = `/${cover.cleanFileName}`;
                        }
                      }}
                      alt={cover.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay with Quick Preview Action */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-end p-3 sm:p-4 text-left">
                      <div className="inline-flex items-center gap-1.5 text-amber-300 text-[11px] sm:text-xs font-bold mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Agrandir</span>
                      </div>
                      <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-tight">
                        {cover.title}
                      </h4>
                      <p className="text-amber-200/90 text-[10px] sm:text-xs truncate">
                        {cover.author}
                      </p>
                    </div>
                  </div>

                  {/* Floor Reflection and Contact Shadow */}
                  <div className="w-full h-4 bg-gradient-to-b from-black/80 to-transparent blur-sm mt-1 rounded-full scale-95 mx-auto"></div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Couverture précédente"
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-400 flex items-center justify-center shadow-xl shadow-black/80 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Couverture suivante"
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-400 flex items-center justify-center shadow-xl shadow-black/80 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {modalCover && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-[#0d0e12] border border-amber-400/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalCover(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-zinc-300 hover:text-white border border-white/20 flex items-center justify-center transition-all"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Big HD Cover Image */}
            <div className="md:w-1/2 bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
              <div className="relative aspect-[2/3] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <img
                  src={`/covers/${modalCover.cleanFileName}`}
                  alt={modalCover.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Technical Details & CTA */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{modalCover.genre}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-2 leading-tight">
                  {modalCover.title}
                </h3>

                {modalCover.subtitle && (
                  <p className="text-sm text-amber-200/90 italic mb-4">
                    {modalCover.subtitle}
                  </p>
                )}

                <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 w-24">Auteur :</span>
                    <span className="font-bold text-white">{modalCover.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 w-24">Format :</span>
                    <span className="font-medium text-amber-300">Première de couverture (Portrait 1800×2700 px)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 w-24">Finition :</span>
                    <span className="font-medium text-white">Prêt pour impression offset & Amazon KDP</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {modalCover.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={createWhatsAppLink(`Bonjour Kôra Studio, je souhaite commander un projet de livre inspiré de la couverture "${modalCover.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 btn-gold text-black font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Commander cette Couverture sur WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Livraison haute définition sous 5 à 7 jours</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
