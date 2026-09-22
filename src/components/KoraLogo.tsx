import React from 'react';

interface KoraLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'icon-only' | 'horizontal' | 'profile-square';
}

/**
 * Official Kôra Studio Logo component.
 * Faithfully matches the exact official brand artwork from Profil-Kora-Studio.jpg:
 * - Solid black square backdrop or transparent
 * - High-contrast white serif typography "Kôra"
 * - Metallic Gold Roof Chevron circumflex accent above the "o"
 * - Inside the "o": Metallic Gold African continent silhouette + Open book pages base
 * - Subtitle: "Studio éditorial digital" in clean italic white
 */
export const KoraLogo: React.FC<KoraLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
  variant = 'horizontal'
}) => {
  // Dimension presets for container
  const sizeMap = {
    sm: { h: 36, w: 130, icon: 32, fontMain: 'text-xl', fontSub: 'text-[9px]' },
    md: { h: 44, w: 165, icon: 40, fontMain: 'text-2xl', fontSub: 'text-[11px]' },
    lg: { h: 60, w: 220, icon: 54, fontMain: 'text-3xl', fontSub: 'text-xs' },
    xl: { h: 84, w: 300, icon: 72, fontMain: 'text-4xl', fontSub: 'text-sm' },
    '2xl': { h: 120, w: 420, icon: 100, fontMain: 'text-6xl', fontSub: 'text-lg' }
  }[size];

  // The official SVG graphic representing the entire Kôra emblem & typography
  // accurately reproduced from Profil-Kora-Studio.jpg
  const SvgGraphic = ({ isSquareBox = false }: { isSquareBox?: boolean }) => (
    <svg
      viewBox={isSquareBox ? "0 0 500 500" : "0 0 440 220"}
      className="w-full h-full select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Authentic Luxury Metallic Gold Gradients as on the Official Logo & Pricing */}
        <linearGradient id="koraGoldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="22%" stopColor="#E5BE6C" />
          <stop offset="48%" stopColor="#C99432" />
          <stop offset="76%" stopColor="#F5D77F" />
          <stop offset="100%" stopColor="#8C5F14" />
        </linearGradient>

        <linearGradient id="koraRoofGold" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="35%" stopColor="#DEB45E" />
          <stop offset="70%" stopColor="#B37E22" />
          <stop offset="100%" stopColor="#7E540E" />
        </linearGradient>

        <linearGradient id="koraAfricaGold" x1="0%" y1="10%" x2="100%" y2="90%">
          <stop offset="0%" stopColor="#FFF5B8" />
          <stop offset="25%" stopColor="#E3BD6E" />
          <stop offset="55%" stopColor="#C48E28" />
          <stop offset="80%" stopColor="#E8C576" />
          <stop offset="100%" stopColor="#825611" />
        </linearGradient>

        <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#D4A038" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* When square box variant is requested, add pure black canvas background */}
      {isSquareBox && (
        <rect width="500" height="500" rx="12" fill="#000000" />
      )}

      {/* Center container group */}
      <g transform={isSquareBox ? "translate(30, 105)" : "translate(0, 0)"}>
        {/* Letter 'K' in bold classic serif typography */}
        <path
          d="M 68 135 L 75 135 L 75 42 L 68 42 L 68 36 L 108 36 L 108 42 L 101 42 L 101 80 L 138 42 L 130 42 L 130 36 L 162 36 L 162 42 L 152 42 L 115 80 L 162 135 L 172 135 L 172 141 L 132 141 L 132 135 L 140 135 L 108 97 L 101 104 L 101 135 L 108 135 L 108 141 L 68 141 Z"
          fill="#FFFFFF"
        />

        {/* Central 'ô' Group with circumflex roof and Africa emblem */}
        <g id="letter-o-group" transform="translate(162, 0)">
          {/* Gold circumflex roof accent above the 'o' */}
          <path
            d="M 52 14 L 88 40 L 76 43 L 52 26 L 28 43 L 16 40 Z"
            fill="url(#koraRoofGold)"
            filter="url(#goldGlowFilter)"
          />

          {/* Letter 'o' outer circle */}
          <path
            d="M 52 38 
               C 24 38, 4 60, 4 90 
               C 4 120, 24 142, 52 142 
               C 80 142, 100 120, 100 90 
               C 100 60, 80 38, 52 38 Z
               M 52 130 
               C 32 130, 22 112, 22 90 
               C 22 68, 32 50, 52 50 
               C 72 50, 82 68, 82 90 
               C 82 112, 72 130, 52 130 Z"
            fill="#FFFFFF"
          />

          {/* Inside the 'o': Golden African Continent Silhouette */}
          <path
            d="M 45 61 
               C 51 60, 58 61, 63 63 
               C 66 65, 68 67, 68 70 
               C 70 74, 67 77, 64 78 
               C 61 80, 59 83, 57 87 
               C 55 90, 53 94, 51 98 
               C 50 100, 48 100, 47 98 
               C 46 94, 45 90, 44 87 
               C 41 86, 38 84, 36 81 
               C 34 78, 33 75, 34 72 
               C 35 69, 37 66, 40 64 
               C 42 62, 43 61, 45 61 Z"
            fill="url(#koraAfricaGold)"
            filter="url(#goldGlowFilter)"
          />

          {/* Inside the 'o': Open Book Pages beneath the continent */}
          {/* Left page */}
          <path
            d="M 49 104 C 42 101, 35 102, 29 107 C 35 106, 43 105, 49 108 Z"
            fill="#FFFFFF"
          />
          {/* Right page */}
          <path
            d="M 55 104 C 62 101, 69 102, 75 107 C 69 106, 61 105, 55 108 Z"
            fill="#FFFFFF"
          />
          {/* Book Spine Center line */}
          <line x1="52" y1="102" x2="52" y2="109" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* Letter 'r' in bold classic serif typography */}
        <path
          d="M 276 135 L 282 135 L 282 72 L 275 72 L 275 66 L 305 66 L 305 82 
             C 313 71, 324 65, 335 65 
             C 342 65, 346 67, 346 72 
             C 346 76, 343 79, 338 79 
             C 334 79, 330 77, 325 77 
             C 314 77, 305 85, 305 98 
             L 305 135 L 312 135 L 312 141 L 276 141 Z"
          fill="#FFFFFF"
        />

        {/* Letter 'a' in bold classic serif typography */}
        <path
          d="M 390 138 
             C 383 140, 376 142, 368 142 
             C 353 142, 342 133, 342 119 
             C 342 104, 354 96, 374 95 
             L 389 94 L 389 89 
             C 389 79, 383 74, 373 74 
             C 365 74, 359 77, 357 82 
             L 351 80 
             C 354 72, 363 66, 375 66 
             C 389 66, 399 74, 399 90 
             L 399 128 
             C 399 133, 401 135, 405 135 
             L 405 141 
             C 400 142, 394 142, 390 138 Z 
             M 389 104 
             L 375 105 
             C 362 106, 354 111, 354 120 
             C 354 128, 361 133, 371 133 
             C 382 133, 389 124, 389 114 Z"
          fill="#FFFFFF"
        />

        {/* Subtitle text exactly matching: "Studio éditorial digital" in italic sans-serif */}
        <text
          x="235"
          y="180"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontStyle="italic"
          fontWeight="600"
          fontSize="24"
          letterSpacing="0.08em"
        >
          Studio éditorial digital
        </text>
      </g>
    </svg>
  );

  // Variant: Exact Profile Square Box (from Profil-Kora-Studio.jpg)
  if (variant === 'profile-square') {
    return (
      <div 
        className={`aspect-square bg-black border border-amber-500/40 rounded-2xl overflow-hidden p-2 shadow-2xl shadow-amber-950/40 flex items-center justify-center ${className}`}
        style={{ width: sizeMap.icon * 2.8, height: sizeMap.icon * 2.8 }}
      >
        <SvgGraphic isSquareBox={true} />
      </div>
    );
  }

  // Variant: Icon-Only (just the central 'ô' with gold roof and Africa map)
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={{ width: sizeMap.icon, height: sizeMap.icon }}>
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="koraRoofGoldSingle" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFF7C2" />
              <stop offset="35%" stopColor="#DEB45E" />
              <stop offset="70%" stopColor="#B37E22" />
              <stop offset="100%" stopColor="#7E540E" />
            </linearGradient>
            <linearGradient id="koraAfricaGoldSingle" x1="0%" y1="10%" x2="100%" y2="90%">
              <stop offset="0%" stopColor="#FFF5B8" />
              <stop offset="25%" stopColor="#E3BD6E" />
              <stop offset="55%" stopColor="#C48E28" />
              <stop offset="80%" stopColor="#E8C576" />
              <stop offset="100%" stopColor="#825611" />
            </linearGradient>
          </defs>
          <g transform="translate(10, 5)">
            <path d="M 52 14 L 88 40 L 76 43 L 52 26 L 28 43 L 16 40 Z" fill="url(#koraRoofGoldSingle)" />
            <path d="M 52 38 C 24 38, 4 60, 4 90 C 4 120, 24 142, 52 142 C 80 142, 100 120, 100 90 C 100 60, 80 38, 52 38 Z M 52 130 C 32 130, 22 112, 22 90 C 22 68, 32 50, 52 50 C 72 50, 82 68, 82 90 C 82 112, 72 130, 52 130 Z" fill="#FFFFFF" />
            <path d="M 45 61 C 51 60, 58 61, 63 63 C 66 65, 68 67, 68 70 C 70 74, 67 77, 64 78 C 61 80, 59 83, 57 87 C 55 90, 53 94, 51 98 C 50 100, 48 100, 47 98 C 46 94, 45 90, 44 87 C 41 86, 38 84, 36 81 C 34 78, 33 75, 34 72 C 35 69, 37 66, 40 64 C 42 62, 43 61, 45 61 Z" fill="url(#koraAfricaGoldSingle)" />
            <path d="M 49 104 C 42 101, 35 102, 29 107 C 35 106, 43 105, 49 108 Z" fill="#FFFFFF" />
            <path d="M 55 104 C 62 101, 69 102, 75 107 C 69 106, 61 105, 55 108 Z" fill="#FFFFFF" />
            <line x1="52" y1="102" x2="52" y2="109" stroke="#000000" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    );
  }

  // Variant: Horizontal (for header & standard display)
  return (
    <div 
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ height: sizeMap.h }}
    >
      <div style={{ width: sizeMap.w, height: sizeMap.h }}>
        <SvgGraphic isSquareBox={false} />
      </div>
    </div>
  );
};
