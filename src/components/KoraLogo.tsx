import React from 'react';

interface KoraLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'icon-only' | 'horizontal' | 'profile-square';
}

/**
 * Official Kôra Studio Logo component.
 * Uses the authentic Asset 3-8.png logo provided in the GitHub repository.
 */
export const KoraLogo: React.FC<KoraLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    '2xl': 'h-28 sm:h-32'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/Asset 3-8.png"
        alt="Kôra Studio - Studio Éditorial Digital"
        className={`${heightClass} w-auto object-contain transition-transform duration-300`}
        loading="eager"
      />
    </div>
  );
};
