import React, { useState, useEffect } from 'react';

interface PortadaProps {
  onOpen: () => void;
  onStartOpening?: () => void;
}

export default function Portada({ onOpen, onStartOpening }: PortadaProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number; color: string; opacity: number }>>([]);

  // Generate sutil, soft, elegant luxury floating particles (Serenity blue and soft Gold)
  useEffect(() => {
    const items = Array.from({ length: 42 }).map((_, i) => {
      const rand = Math.random();
      // 50% Serenity Blue, 50% Classic Gold
      const color = rand > 0.5 ? '#89A6C8' : '#D4AF37'; 

      return {
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3.5 + 1.5, // 1.5px to 5px (delicate)
        delay: Math.random() * -15, // Immediate start
        duration: Math.random() * 14 + 10, // Sutil slow drifting
        color,
        opacity: Math.random() * 0.2 + 0.12, // Very soft opacity (0.12 to 0.32) as requested
      };
    });
    setParticles(items);
  }, []);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Call start music immediately within the click interaction stack
    if (onStartOpening) {
      onStartOpening();
    }

    // Dynamic elegant opening folding phases
    setTimeout(() => {
      setIsFullyOpen(true);
    }, 1800);

    setTimeout(() => {
      onOpen();
    }, 2400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between py-6 px-4 overflow-hidden transition-all duration-1000 ease-in-out ${
        isFullyOpen ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        // Paper-white background with a soft 10% infusion of Serenity Blue (very sutil, elegant feel)
        background: 'linear-gradient(135deg, #F0F5FA 0%, #E5EDF5 50%, #F3F8FC 100%)',
      }}
    >
      {/* Soft falling luxury snow/dust particles (Serenity Blue & Gold, low opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: `0 0 5px ${p.color}`,
              animation: `shimmer-float ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
              top: '-10px',
            }}
          />
        ))}
      </div>

      {/* Radial soft glow backdrop to enhance luxury card position */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-gradient-radial from-[#D3E5F5]/40 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* MAIN CONTAINER: Brings everything in beautiful proportions */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-[390px] z-10 space-y-5">
        
        {/* UPPER PANEL: Names & Date block pushed lower and closer to the card */}
        <div className="text-center w-full animate-fade-in flex flex-col items-center z-10 transform translate-y-3">
          {/* Great Vibes elegance rendered across three separate centered lines with soft, regular weight */}
          <div className="flex flex-col items-center justify-center select-none text-[#1E4C87] w-full">
            <h1 
              className="text-center transition-all duration-300 hover:scale-101 flex items-center justify-center animate-fade-in"
              style={{
                fontSize: 'clamp(52px, 14vw, 62px)',
                fontWeight: 400,
                lineHeight: '1.05',
                fontFamily: '"Monsieur La Doulaise", cursive',
                textShadow: '0px 0.5px 1px rgba(255,255,255,0.8)'
              }}
            >
              Miguel
            </h1>
            <span 
              className="text-luxury-gold italic select-none"
              style={{
                fontSize: 'clamp(32px, 9vw, 38px)',
                fontWeight: 400,
                lineHeight: '1',
                fontFamily: '"Great Vibes", cursive',
                textShadow: '0px 0.5px 1px rgba(255,255,255,0.8)'
              }}
            >
              &
            </span>
            <h2 
              className="text-center transition-all duration-300 hover:scale-101 flex items-center justify-center animate-fade-in"
              style={{
                fontSize: 'clamp(52px, 14vw, 62px)',
                fontWeight: 400,
                lineHeight: '1.05',
                fontFamily: '"Monsieur La Doulaise", cursive',
                textShadow: '0px 0.5px 1px rgba(255,255,255,0.8)'
              }}
            >
              Mariluz
            </h2>
          </div>
          
          {/* Date: 01 • agosto • 2026. Custom Open Sans, size 10 (approx. 11px), same-size elements. */}
          <p 
            className="font-sans-opensans tracking-[0.25em] text-navy-royal uppercase text-opacity-80 mt-2.5 select-none flex items-center justify-center space-x-2 font-medium"
            style={{ fontSize: '10.5px' }}
          >
            <span>01</span>
            <span className="text-luxury-gold">•</span>
            <span>agosto</span>
            <span className="text-luxury-gold">•</span>
            <span>2026</span>
          </p>
        </div>

      {/* CENTRAL PANEL: Luxury envelope with precise satin gradients, folded 3D flaps and natural SVGs */}
        <div className="relative w-full max-w-[340px] sm:max-w-[365px] py-6 z-10 aspect-[1.5/1]">
          
          {/* NATURAL CORNER FLOWERS: Illustrated botanical bridal bouquet with detailed petals, roses, hydrangeas, elongated eucalyptus leaves (Top Left) */}
          <div className="absolute -top-9 -left-9 w-[135px] h-[135px] z-25 pointer-events-none drop-shadow-[0_6px_15px_rgba(21,62,126,0.25)]">
            <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Defs containing exclusively Serenity Blue volumetric gradients */}
              <defs>
                <linearGradient id="eucalyptusGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DBE8F5"/>
                  <stop offset="50%" stopColor="#8BAEC4"/>
                  <stop offset="100%" stopColor="#4A6E87"/>
                </linearGradient>
                <linearGradient id="eucalyptusGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C4D9EE"/>
                  <stop offset="100%" stopColor="#5E83A4"/>
                </linearGradient>
                <radialGradient id="sereneRoseCenter" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#EBF4FC"/>
                  <stop offset="40%" stopColor="#9BC0E4"/>
                  <stop offset="100%" stopColor="#3C5E82"/>
                </radialGradient>
                <radialGradient id="sereneRosePetal1" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#D4E4F5"/>
                  <stop offset="70%" stopColor="#8AAECF"/>
                  <stop offset="100%" stopColor="#4D7196"/>
                </radialGradient>
                <radialGradient id="sereneRosePetal2" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#EBF4FD"/>
                  <stop offset="70%" stopColor="#97B8DB"/>
                  <stop offset="100%" stopColor="#557597"/>
                </radialGradient>
                <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9FBAD4"/>
                  <stop offset="100%" stopColor="#435F7B"/>
                </linearGradient>
                <linearGradient id="leafVein" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#A0C2E2" stopOpacity="0.1"/>
                </linearGradient>
              </defs>

              {/* Thin botanical twigs cascading organics */}
              <path d="M 38 30 C 26 38, 14 58, 11 78" stroke="url(#stemGrad)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M 30 20 C 38 28, 58 14, 78 11" stroke="url(#stemGrad)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M 45 45 L 12 12" stroke="url(#stemGrad)" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Elongated eucalyptus leaves sticking out organically with mapped veins */}
              <path d="M15,45 C8,35 6,55 15,62 C22,55 20,35 15,45 Z" fill="url(#eucalyptusGrad1)" stroke="#8AAECF" strokeWidth="0.5" />
              <path d="M10,48 Q14,54 18,58" stroke="url(#leafVein)" strokeWidth="0.8" strokeLinecap="round" />
              
              <path d="M45,15 C35,8 55,6 62,15 C55,22 35,20 45,15 Z" fill="url(#eucalyptusGrad2)" stroke="#8AAECF" strokeWidth="0.5" />
              <path d="M48,10 Q54,14 58,18" stroke="url(#leafVein)" strokeWidth="0.8" strokeLinecap="round" />
              
              <path d="M28,24 C18,16 35,10 40,20 C32,28 22,26 28,24 Z" fill="url(#eucalyptusGrad1)" stroke="#97B8DB" strokeWidth="0.4" />
              <path d="M18,12 C8,8 6,24 15,26 C20,20 22,14 18,12 Z" fill="url(#eucalyptusGrad2)" stroke="#97B8DB" strokeWidth="0.4" />
              <path d="M12,65 C2,75 8,88 15,80 C18,72 15,62 12,65 Z" fill="url(#eucalyptusGrad1)" stroke="#7FA1CD" strokeWidth="0.4" />

              {/* TEXTURED ROSE 1: Hand-drawn illustrated rose layers (No flat circles or simple shapes) */}
              {/* Outer detailed petals */}
              <path d="M 24,42 C 16,28 38,20 42,32 C 34,28 26,34 24,42" fill="url(#sereneRosePetal1)" stroke="#89AEC9" strokeWidth="0.4" />
              <path d="M 42,32 C 54,18 66,30 54,44 C 46,36 44,28 42,32" fill="url(#sereneRosePetal2)" stroke="#84A7CF" strokeWidth="0.4" />
              <path d="M 54,44 C 66,56 44,66 38,52 C 40,46 48,46 54,44" fill="url(#sereneRosePetal1)" stroke="#84A7CF" strokeWidth="0.4" />
              <path d="M 38,52 C 24,62 16,46 24,42 C 26,44 32,50 38,52" fill="url(#sereneRosePetal2)" stroke="#89AEC9" strokeWidth="0.4" />
              
              {/* Middle textured overlapping layers */}
              <path d="M 28,42 C 25,36 38,32 40,38 Q 33,38 28,42" fill="url(#sereneRoseCenter)" stroke="#557597" strokeWidth="0.38" />
              <path d="M 40,38 C 45,32 50,38 48,44 Q 44,42 40,38" fill="url(#sereneRosePetal1)" stroke="#557597" strokeWidth="0.38" />
              <path d="M 48,44 C 48,50 38,50 36,44 Q 42,44 48,44" fill="url(#sereneRosePetal2)" stroke="#557597" strokeWidth="0.38" />

              {/* Heart and core of the rose */}
              <path d="M 32,42 C 32,36 44,36 44,42 C 44,46 32,46 32,42 Z" fill="url(#sereneRoseCenter)" stroke="#3C5E82" strokeWidth="0.4" />

              {/* HYDRANGEAS BRIDAL BUNCH: Small 4-petal detailed serenity flowers clustered (pure paths, no circles) */}
              {/* Hydrangea blossom 1 */}
              <g transform="translate(14, 25)">
                <path d="M5,5 C10,1 12,8 7,10" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M7,10 C12,12 5,16 3,11" fill="url(#sereneRosePetal2)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M3,11 C-2,10 0,3 5,5" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                {/* Petal/Diamond core rather than circle */}
                <path d="M4.5,8 L5.5,7 L6.5,8 L5.5,9 Z" fill="#FFFFFF"/>
              </g>
              {/* Hydrangea blossom 2 */}
              <g transform="translate(48, 48)">
                <path d="M6,2 C11,1 11,8 6,9" fill="url(#sereneRosePetal2)" stroke="#FFFFFF" strokeWidth="0.3"/>
                <path d="M6,9 C6,13 1,11 1,7" fill="url(#sereneRosePetal1)" stroke="#FFFFFF" strokeWidth="0.3"/>
                <path d="M1,7 C0,3 4,4 6,2" fill="url(#sereneRosePetal2)" stroke="#FFFFFF" strokeWidth="0.3"/>
                {/* Diamond core */}
                <path d="M3,5.5 L4,4.5 L5,5.5 L4,6.5 Z" fill="#FFFFFF"/>
              </g>
              {/* Hydrangea blossom 3 */}
              <g transform="translate(25, 52)">
                <path d="M4,1 C9,-1 10,6 5,7" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M5,7 C4,11 -1,9 0,5" fill="url(#sereneRosePetal2)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M0,5 C0,2 2,2 4,1" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                {/* Diamond core */}
                <path d="M2,4.5 L3,3.5 L4,4.5 L3,5.5 Z" fill="#FFFFFF"/>
              </g>

              {/* Glistening illustrated dew drop paths (no circles) */}
              <path d="M34,22 C33,20 36,20 35,22 Z" fill="#C4D9EE" opacity="0.85"/>
              <path d="M24,68 C23,67 25,67 24.5,68 Z" fill="#8AAECF" opacity="0.75"/>
            </svg>
          </div>

          {/* NATURAL CORNER FLOWERS: Illustrated botanical bridal bouquet with detailed petals, roses, hydrangeas, elongated eucalyptus leaves (Bottom Right) */}
          <div className="absolute -bottom-10 -right-10 w-[135px] h-[135px] z-25 pointer-events-none drop-shadow-[0_6px_15px_rgba(21,62,126,0.25)]">
            <svg className="w-full h-full transform rotate-180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Thin twigs */}
              <path d="M 38 30 C 26 38, 14 58, 11 78" stroke="url(#stemGrad)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M 30 20 C 38 28, 58 14, 78 11" stroke="url(#stemGrad)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
              <path d="M 45 45 L 12 12" stroke="url(#stemGrad)" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Elongated eucalyptus leaves */}
              <path d="M15,45 C8,35 6,55 15,62 C22,55 20,35 15,45 Z" fill="url(#eucalyptusGrad1)" stroke="#8AAECF" strokeWidth="0.5" />
              <path d="M10,48 Q14,54 18,58" stroke="url(#leafVein)" strokeWidth="0.8" strokeLinecap="round" />

              <path d="M45,15 C35,8 55,6 62,15 C55,22 35,20 45,15 Z" fill="url(#eucalyptusGrad2)" stroke="#8AAECF" strokeWidth="0.5" />
              <path d="M48,10 Q54,14 58,18" stroke="url(#leafVein)" strokeWidth="0.8" strokeLinecap="round" />

              <path d="M28,24 C18,16 35,10 40,20 C32,28 22,26 28,24 Z" fill="url(#eucalyptusGrad1)" stroke="#97B8DB" strokeWidth="0.4" />
              <path d="M18,12 C8,8 6,24 15,26 C20,20 22,14 18,12 Z" fill="url(#eucalyptusGrad2)" stroke="#97B8DB" strokeWidth="0.4" />

              {/* Detailed Rosette */}
              <path d="M 24,42 C 16,28 38,20 42,32 C 34,28 26,34 24,42" fill="url(#sereneRosePetal1)" stroke="#89AEC9" strokeWidth="0.4" />
              <path d="M 42,32 C 54,18 66,30 54,44 C 46,36 44,28 42,32" fill="url(#sereneRosePetal2)" stroke="#84A7CF" strokeWidth="0.4" />
              <path d="M 54,44 C 66,56 44,66 38,52 C 40,46 48,46 54,44" fill="url(#sereneRosePetal1)" stroke="#84A7CF" strokeWidth="0.4" />
              <path d="M 38,52 C 24,62 16,46 24,42 C 26,44 32,50 38,52" fill="url(#sereneRosePetal2)" stroke="#89AEC9" strokeWidth="0.4" />
              
              <path d="M 28,42 C 25,36 38,32 40,38 Q 33,38 28,42" fill="url(#sereneRoseCenter)" stroke="#557597" strokeWidth="0.38" />
              <path d="M 40,38 C 45,32 50,38 48,44 Q 44,42 40,38" fill="url(#sereneRosePetal1)" stroke="#557597" strokeWidth="0.38" />
              <path d="M 48,44 C 48,50 38,50 36,44 Q 42,44 48,44" fill="url(#sereneRosePetal2)" stroke="#557597" strokeWidth="0.38" />
              <path d="M 32,42 C 32,36 44,36 44,42 C 44,46 32,46 32,42 Z" fill="url(#sereneRoseCenter)" stroke="#3C5E82" strokeWidth="0.4" />

              {/* Overlapping bouquet hydrangea flowers */}
              <g transform="translate(14, 25)">
                <path d="M5,5 C10,1 12,8 7,10" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M7,10 C12,12 5,16 3,11" fill="url(#sereneRosePetal2)" stroke="#9EC2E8" strokeWidth="0.3"/>
                <path d="M3,11 C-2,10 0,3 5,5" fill="url(#sereneRosePetal1)" stroke="#9EC2E8" strokeWidth="0.3"/>
                {/* Diamond core */}
                <path d="M4.5,8 L5.5,7 L6.5,8 L5.5,9 Z" fill="#FFFFFF"/>
              </g>
              <g transform="translate(48, 48)">
                <path d="M6,2 C11,1 11,8 6,9" fill="url(#sereneRosePetal2)" stroke="#FFFFFF" strokeWidth="0.3"/>
                <path d="M6,9 C6,13 1,11 1,7" fill="url(#sereneRosePetal1)" stroke="#FFFFFF" strokeWidth="0.3"/>
                <path d="M1,7 C0,3 4,4 6,2" fill="url(#sereneRosePetal2)" stroke="#FFFFFF" strokeWidth="0.3"/>
                {/* Diamond core */}
                <path d="M3,5.5 L4,4.5 L5,5.5 L4,6.5 Z" fill="#FFFFFF"/>
              </g>
            </svg>
          </div>

          {/* THE 3D ENVELOPE CONTAINER: Solid, highly-realistic glowing satin finish */}
          <div
            onClick={handleOpenInvitation}
            className="relative w-full h-full rounded-2xl shadow-[0_30px_70px_rgba(11,29,58,0.38)] border-[2.5px] border-[#2F5385] overflow-hidden cursor-pointer group transition-all duration-300 transform"
            style={{
              // Ultra elegant luxury satin cobalt/navy blue representing deep silk threads
              background: 'linear-gradient(135deg, #0D213B 0%, #153256 25%, #4674A6 48%, #163861 65%, #224773 85%, #0A1B30 100%)',
              perspective: '1200px',
            }}
          >
            {/* Satin gleam highlight sweep animation on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent pointer-events-none transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1200 ease-out z-2"></div>

            {/* INNER CONTENT REVEAL: Shining Golden Wedding Sheet that slides up dynamically */}
            <div 
              className={`absolute inset-x-4 top-4 bottom-4 bg-gradient-to-b from-[#FFFDF0] via-[#FCF6D6] to-[#E9D58E] rounded-lg p-4 shadow-inner flex flex-col items-center justify-between border border-[#DEBE5D] z-1 transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
                isOpening ? 'transform -translate-y-[85%] scale-102 opacity-100' : 'transform translate-y-2 opacity-10'
              }`}
            >
              <div className="border border-[#D2B248]/45 w-full h-full rounded-md p-3 flex flex-col items-center justify-between text-center">
                <span className="text-2xl text-luxury-gold tracking-widest font-serif-luxury">✦</span>
                <span className="font-cursive-pinyon text-4xl text-[#1E4C87]">M & M</span>
                <div className="space-y-1">
                  <p className="font-sans-opensans text-[8.5px] tracking-[0.18em] text-[#1E4C87] uppercase font-bold">NUESTA BODA</p>
                  <p className="font-serif-luxury text-[8px] tracking-[0.2em] text-[#7A601E]">01 DE AGOSTO DE 2026</p>
                </div>
                <div className="w-8 h-[1px] bg-[#D2B248]/50"></div>
              </div>
            </div>

            {/* THREE-DIMENSIONAL MECHANICAL FLAPS: Custom SVG & poly paths mapping fold lines */}
            
            {/* LEFT SIDE FLAP: Swings outwards/fades on open */}
            <div 
              className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0F243F] to-[#204571] border-r border-[#ffffff]/10 origin-left transition-all duration-[850ms] ease-in-out z-2 ${
                isOpening ? 'transform -rotate-y-[120deg] opacity-0 scale-90 translate-x-[-20px]' : 'transform rotate-y-0 opacity-100'
              }`}
              style={{
                clipPath: 'polygon(0% 0%, 100% 57.5%, 0% 100%)',
              }}
            />

            {/* RIGHT SIDE FLAP: Swings outwards/fades on open */}
            <div 
              className={`absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0F243F] to-[#204571] border-l border-[#ffffff]/10 origin-right transition-all duration-[850ms] ease-in-out z-2 ${
                isOpening ? 'transform rotate-y-[120deg] opacity-0 scale-90 translate-x-[20px]' : 'transform rotate-y-0 opacity-100'
              }`}
              style={{
                clipPath: 'polygon(100% 0%, 0% 57.5%, 100% 100%)',
              }}
            />

            {/* BOTTOM TRIANGLE FLAP: Folds downwards on open */}
            <div 
              className={`absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-[#0A1A2D] to-[#244A78] border-t border-[#87A8D1]/10 origin-bottom transition-all duration-[900ms] ease-in-out z-2 ${
                isOpening ? 'transform -rotate-x-[110deg] opacity-0 scale-95 translate-y-[20px]' : 'transform rotate-x-0 opacity-100'
              }`}
              style={{
                clipPath: 'polygon(0% 100%, 50% 15%, 100% 100%)',
              }}
            />

            {/* TOP TRIANGLE FLAP (TAPITA): Unfolds beautifully from bottom-center upwards */}
            <div 
              className={`absolute top-0 inset-x-0 h-[57.5%] bg-gradient-to-b from-[#132A46] to-[#2F5A8C] border-b-2 border-[#94B5DD]/20 origin-top transition-all duration-[1000ms] ease-in-out z-3 ${
                isOpening ? 'transform -rotate-x-[165deg] -translate-y-[100%] scale-y-[-1] opacity-30 shadow-2xl' : 'transform rotate-x-0 opacity-100'
              }`}
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              }}
            >
              {// Sharp creasing highlight inside top flap
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              }
            </div>

            {/* CENTRE WAX SEAL: Perfectly placed on crease vertex (y=57.5% ratio) */}
            <div 
              className={`absolute top-[57.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) ${
                isOpening ? 'scale-0 translate-y-[50px] opacity-0 pointer-events-none' : 'scale-100 opacity-100 group-hover:scale-105'
              }`}
            >
              {/* Golden pulsing ring effect */}
              <div className="absolute inset-0 rounded-full bg-[#E5C35D]/45 blur-md scale-120 animate-pulse"></div>
              
              {/* Premium 3D Gold Seal Stamp */}
              <button
                id="wax-seal-premium-button"
                className="relative w-21 h-21 rounded-full p-0.5 border-[2px] border-[#FFF5CC] flex items-center justify-center shadow-[0_12px_28px_rgba(105,80,18,0.58),inset_0_2px_4px_rgba(255,255,255,0.45)] cursor-pointer"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #FFF0AA 0%, #E5C35D 45%, #C29F35 70%, #8F6D17 100%)'
                }}
                aria-label="Abrir invitación de boda de Miguel & Mariluz"
              >
                {/* Wax seal rim boundaries */}
                <div 
                  className="w-[74px] h-[74px] rounded-full flex flex-col items-center justify-center relative border border-[#7D6116]/35 shadow-[inset_0_2px_5px_rgba(0,0,0,0.38)]"
                  style={{
                    background: 'radial-gradient(circle, #F5D572 0%, #D4AF37 55%, #9B7E1B 100%)'
                  }}
                >
                  {/* Monogram in 3D-like Serif proportionally scaled down to fit beautifully inside the circle boundaries without overflow */}
                  <div className="flex items-center justify-center space-x-1 mt-0.5 transform -translate-y-[1px]">
                    <span 
                      className="font-serif-luxury text-[21px] font-bold text-[#352304] select-none"
                      style={{
                        textShadow: '1px 1px 0px #FFF3D1, 2px 2px 0px #85611A, 3px 3.5px 1.5px rgba(0,0,0,0.6)'
                      }}
                    >
                      M
                    </span>
                    <span 
                      className="font-serif-luxury text-[13px] font-bold text-[#E5C158] select-none transform translate-y-[2px]"
                      style={{
                        textShadow: '1px 1.5px 1px rgba(0,0,0,0.85)'
                      }}
                    >
                      &
                    </span>
                    <span 
                      className="font-serif-luxury text-[21px] font-bold text-[#352304] select-none"
                      style={{
                        textShadow: '1px 1px 0px #FFF3D1, 2px 2px 0px #85611A, 3px 3.5px 1.5px rgba(0,0,0,0.6)'
                      }}
                    >
                      M
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* TAP TO OPEN TEXT INVITATION HINT - Shifted 1 line down and -1pt size decreased as requested */}
            <div 
              className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-full text-center transition-all duration-300 ${
                isOpening ? 'opacity-0 scale-95' : 'opacity-100'
              }`}
            >
              <span 
                className="font-cursive-romance font-normal text-[#EBF4FC] tracking-wide select-none drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.65)] animate-pulse inline-block transform translate-y-1"
                style={{ fontSize: '15px' }}
              >
                Toca para abrir la invitación
              </span>
            </div>

          </div>
        </div>

        {/* LOWER PANEL: Restyled lowercase serif subtitle pushed exactly 3 line heights lower */}
        <div className="text-center w-full z-10 select-none pt-12 transform translate-y-4">
          <p 
            className="font-serif-luxury text-[#1E4C87]/95 font-medium text-center mx-auto px-4 inline-block"
            style={{ 
              fontSize: 'clamp(9px, 2.7vw, 11px)',
              letterSpacing: '0.04em',
              fontFamily: '"Playfair Display", "Cinzel", Georgia, serif',
            }}
          >
            Tenemos el honor de invitarte a celebrar nuestra boda.
          </p>
        </div>
      </div>

    </div>
  );
}
