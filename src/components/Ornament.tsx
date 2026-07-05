import React from 'react';

export function GoldLine() {
  return (
    <div className="flex items-center justify-center my-6 py-2">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <span className="mx-3 text-[9px] text-luxury-gold">◆</span>
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
    </div>
  );
}

export function HeartDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <span className="mx-4 text-xs text-luxury-gold filter drop-shadow-[0_1px_2px_rgba(212,175,55,0.3)]">💝</span>
      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
    </div>
  );
}

export function InfinityRings() {
  return (
    <div className="flex flex-col items-center justify-center my-6 space-y-1 select-none">
      <svg
        className="w-24 h-14 filter drop-shadow-[0_2px_4px_rgba(21,62,126,0.12)]"
        viewBox="0 0 160 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic 3D gold gradient for the Left Ring */}
          <linearGradient id="gold-3d-left" x1="25" y1="20" x2="85" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DF9F28" />
            <stop offset="15%" stopColor="#FFF4C0" />
            <stop offset="35%" stopColor="#C5941C" />
            <stop offset="55%" stopColor="#FFECA0" />
            <stop offset="75%" stopColor="#966B0D" />
            <stop offset="100%" stopColor="#DF9F28" />
          </linearGradient>

          {/* Metallic 3D gold gradient for the Right Ring */}
          <linearGradient id="gold-3d-right" x1="75" y1="20" x2="135" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#966B0D" />
            <stop offset="20%" stopColor="#FFECA0" />
            <stop offset="40%" stopColor="#DF9F28" />
            <stop offset="60%" stopColor="#C5941C" />
            <stop offset="80%" stopColor="#FFF4C0" />
            <stop offset="100%" stopColor="#966B0D" />
          </linearGradient>

          {/* Shadow Filter for realistic depth */}
          <filter id="ring-depth-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#4B3305" floodOpacity="0.25" />
          </filter>

          {/* Clip path for interlocking top/bottom overlaps */}
          <clipPath id="bottom-half-clip">
            <rect x="0" y="44" width="160" height="46" />
          </clipPath>
        </defs>

        {/* Soft shadow on the ground */}
        <ellipse cx="80" cy="74" rx="52" ry="4" fill="#153E7E" opacity="0.08" />

        {/* 1. Left Ring complete */}
        <g transform="rotate(-12 55 45)" filter="url(#ring-depth-shadow)">
          <ellipse cx="55" cy="45" rx="30" ry="18" stroke="url(#gold-3d-left)" strokeWidth="8.5" fill="none" />
          <ellipse cx="55" cy="45" rx="33.5" ry="21.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.55" fill="none" />
          <ellipse cx="55" cy="45" rx="26.3" ry="14.3" stroke="#4A3105" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
        </g>

        {/* 2. Right Ring complete */}
        <g transform="rotate(12 105 45)" filter="url(#ring-depth-shadow)">
          <ellipse cx="105" cy="45" rx="30" ry="18" stroke="url(#gold-3d-right)" strokeWidth="8.5" fill="none" />
          <ellipse cx="105" cy="45" rx="33.5" ry="21.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.55" fill="none" />
          <ellipse cx="105" cy="45" rx="26.3" ry="14.3" stroke="#4A3105" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
        </g>

        {/* 3. Bottom half of Left Ring drawn on top to interlock them */}
        <g clipPath="url(#bottom-half-clip)">
          <g transform="rotate(-12 55 45)">
            <ellipse cx="55" cy="45" rx="30" ry="18" stroke="url(#gold-3d-left)" strokeWidth="8.5" fill="none" />
            <ellipse cx="55" cy="45" rx="33.5" ry="21.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.55" fill="none" />
            <ellipse cx="55" cy="45" rx="26.3" ry="14.3" stroke="#4A3105" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
          </g>
        </g>

        {/* Sparkling diamond star on the top-right of the right ring */}
        <g transform="translate(126, 21)">
          <path d="M 0 -13 Q 0 0 -13 0 Q 0 0 0 13 Q 0 0 13 0 Q 0 0 0 -13 Z" fill="#FFFFFF" opacity="0.9" />
          <circle cx="0" cy="0" r="3.2" fill="#FFFBE0" />
        </g>
      </svg>
      <p className="font-cursive-romance text-xs text-luxury-gold tracking-wide">Bajo la bendición de Dios</p>
    </div>
  );
}
