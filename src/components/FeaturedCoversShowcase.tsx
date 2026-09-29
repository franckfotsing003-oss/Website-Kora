import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Eye,
  Award,
  X,
  MessageCircle, 
  CheckCircle2,
  Pause,
  Play
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

/**
 * EXACT 5 FLAGSHIP COVERS (Sans "Le Grand Ménage")
 * 1. LE GUIDE ULTIME DE LA MAÎTRISE TYPOGRAPHIQUE (Franck Fotsing)
 * 2. Diplomatie Militaire (Mukuna Mbikayi Alphonse)
 * 3. Tu me respectes, je te respecte (Merveils Kadjo)
 * 4. Un management toxique au service des ONG humanitaires (Tamboura Saïdou)
 * 5. Éduquer Sans Crier, C’est Possible (Chanceline Kenkeu Epse Feize)
 */
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
    id: 5,
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

export const FeaturedCoversShowcase: React.FC = () => {
  // Center book index (0 to 4)
  const [centerIndex, setCenterIndex] = useState(0);
  const [modalCover, setModalCover] = useState<FeaturedCover | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = FEATURED_COVERS.length; // Exactly 5

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  // Modern gentle auto-cycle every 4.5 seconds (pauses on hover or manual toggle)
  useEffect(() => {
    if (isAutoPlay && !isHovered && !modalCover) {
      autoPlayRef.current = setInterval(() => {
        setCenterIndex((prev) => (prev + 1) % total);
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, isHovered, modalCover, total]);

  // Compute 5 slots: -2 (Far Left), -1 (Left), 0 (Center), +1 (Right), +2 (Far Right)
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

  const currentCover = FEATURED_COVERS[centerIndex];

  return (
    <section 
      id="premieres-couvertures" 
      className="relative pt-6 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#090a0d] via-[#0b0c10] to-[#08090b]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gold Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[500px] bg-[#d4a038]/12 blur-[180px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-6 right-1/4 w-80 h-80 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Stage Lighting Base Floor Shadow */}
        <div className="relative w-full max-w-5xl mx-auto pt-2 pb-4 select-none">
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-black/90 blur-3xl rounded-full pointer-events-none -z-10"></div>
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-amber-500/20 blur-2xl rounded-full pointer-events-none -z-10"></div>

          {/* Perspective 3D Stage Container */}
          <div 
            className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] py-4"
            style={{ perspective: '1300px' }}
          >
            {visibleSlots.map(({ cover, offset, index }) => {
              const isCenter = offset === 0;
              const isInnerLeft = offset === -1;
              const isOuterLeft = offset === -2;
              const isInnerRight = offset === 1;
              const isOuterRight = offset === 2;

              // Modern 3D transform computation with smooth curves
              let rotateY = 0;
              let scale = 1.0;
              let translateZ = 0;
              let zIndex = 20;
              let opacity = 1;

              if (isCenter) {
                rotateY = 0;
                scale = 1.12;
                translateZ = 60;
                zIndex = 35;
                opacity = 1;
              } else if (isInnerLeft) {
                rotateY = 18;
                scale = 0.94;
                translateZ = 0;
                zIndex = 25;
                opacity = 0.92;
              } else if (isOuterLeft) {
                rotateY = 32;
                scale = 0.82;
                translateZ = -60;
                zIndex = 15;
                opacity = 0.72;
              } else if (isInnerRight) {
                rotateY = -18;
                scale = 0.94;
                translateZ = 0;
                zIndex = 25;
                opacity = 0.92;
              } else if (isOuterRight) {
                rotateY = -32;
                scale = 0.82;
                translateZ = -60;
                zIndex = 15;
                opacity = 0.72;
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
                    opacity,
                    transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease, z-index 600ms ease'
                  }}
                  className={`
                    relative cursor-pointer group
                    w-[130px] sm:w-[190px] md:w-[220px] lg:w-[240px]
                    shrink-0
                    ${isCenter ? 'drop-shadow-[0_25px_45px_rgba(212,160,56,0.4)]' : 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]'}
                  `}
                >
                  {/* VIP Badge on Center Book */}
                  {isCenter && cover.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-amber-400 via-amber-300 to-[#c8922e] text-black text-[10px] sm:text-xs font-black px-3.5 py-0.5 rounded-full shadow-lg shadow-amber-950/60 whitespace-nowrap flex items-center gap-1.5 animate-in fade-in zoom-in duration-300">
                      <Award className="w-3 h-3 text-black fill-current" />
                      <span>{cover.badge}</span>
                    </div>
                  )}

                  {/* 3D Realistic Book Shell (Aspect ratio 2:3, portrait standard) */}
                  <div className={`
                    relative aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border transition-all duration-300 shadow-2xl
                    ${isCenter 
                      ? 'border-amber-400/90 ring-2 ring-amber-400/30' 
                      : 'border-white/10 group-hover:border-amber-400/50'}
                  `}>
                    
                    {/* Spine Shadow on Left Edge */}
                    <div className="absolute inset-y-0 left-0 w-[9%] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Vertical Book Hinge / Crease Gloss Line */}
                    <div className="absolute inset-y-0 left-[7%] w-[2px] bg-white/25 z-20 pointer-events-none"></div>

                    {/* Subtle Overhead Light Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-60 z-20 pointer-events-none group-hover:opacity-90 transition-opacity"></div>

                    {/* Book Cover Image with fallbacks */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-end p-3 sm:p-4 text-left">
                      <div className="inline-flex items-center gap-1.5 text-amber-300 text-[11px] sm:text-xs font-bold mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Agrandir</span>
                      </div>
                      <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-tight">
                        {cover.title}
                      </h4>
                      <p className="text-amber-200/90 text-[10px] sm:text-xs truncate font-medium">
                        {cover.author}
                      </p>
                    </div>
                  </div>

                  {/* Floor Reflection and Contact Shadow */}
                  <div className={`w-full h-4 bg-gradient-to-b from-black/90 to-transparent blur-sm mt-1 rounded-full scale-95 mx-auto ${isCenter ? 'bg-amber-500/20' : ''}`}></div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Modern Glassmorphic Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Couverture précédente"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-400 flex items-center justify-center shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Couverture suivante"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-400 flex items-center justify-center shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Modern Interactive Indicators Bar & Active Book Focus Card */}
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 mt-2">
          
          {/* 5 Dots / Pill Navigation Indicators */}
          <div className="flex items-center gap-2.5">
            {FEATURED_COVERS.map((cov, idx) => {
              const isActive = idx === centerIndex;
              return (
                <button
                  key={cov.id}
                  type="button"
                  onClick={() => setCenterIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'w-8 h-2.5 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-400/40' 
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Aller au livre ${idx + 1} : ${cov.title}`}
                />
              );
            })}

            {/* Play/Pause subtle toggle */}
            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="ml-3 p-1 rounded-full text-zinc-500 hover:text-amber-300 transition-colors"
              title={isAutoPlay ? "Mettre en pause l'animation" : "Lancer le défilement automatique"}
            >
              {isAutoPlay ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Active Book Metadata Quick View */}
          <div className="w-full text-center px-4 py-3 rounded-2xl bg-zinc-900/60 border border-white/5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
            <div className="text-left max-w-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                {currentCover.genre}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                {currentCover.title}
              </h3>
              <p className="text-xs text-zinc-400 truncate">
                Par <span className="text-zinc-200 font-semibold">{currentCover.author}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setModalCover(currentCover)}
                className="inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Consulter</span>
              </button>

              <a
                href={createWhatsAppLink(`Bonjour Kôra Studio, je souhaite commander un projet de livre inspiré de la couverture "${currentCover.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 btn-gold text-black text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>Demander une proforma</span>
              </a>
            </div>
          </div>

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
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-zinc-300 hover:text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
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
                  <span>Demander une proforma sur WhatsApp</span>
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
