import React, { useState, useEffect } from 'react';
import { GoldLine, InfinityRings } from './Ornament';
import VolumeControl from './VolumeControl';

const SLIDESHOW_IMAGES = [
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % SLIDESHOW_IMAGES.length);
    }, 2000); // 2 seconds interval as requested
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-6 pt-16 pb-12 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
      {/* Absolute Volume Controller embedded in the Hero section */}
      <VolumeControl />

      {/* Cursive Subtitle */}
      <p className="font-cursive-romance text-navy-royal text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] animate-pulse">
        Tenemos el agrado de invitarlos a Nuestra Boda
      </p>

      {/* Cathedral Arch Masked Hero Photo with smooth cross-fade slideshow animation */}
      <div className="relative w-72 h-[410px] my-6 mx-auto arch-mask shadow-[0_15px_35px_rgba(11,29,58,0.18)] border-4 border-white/90">
        <div className="absolute inset-0 overflow-hidden bg-slate-100">
          {SLIDESHOW_IMAGES.map((imgSrc, index) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`Miguel & Mariluz slideshow ${index + 1}`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-all ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                transform: index === currentImageIndex ? 'scale(1.04)' : 'scale(1.0)',
                transitionDuration: '1000ms',
                zIndex: index === currentImageIndex ? 10 : 0
              }}
            />
          ))}
        </div>
        {/* Soft Gold Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none z-20"></div>
      </div>

      {/* Centered romantic scripture quote right below the arch photo */}
      <p className="font-cursive-romance text-navy-royal text-xl sm:text-2xl mt-4 mb-2 px-4 text-center select-none drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.7)] max-w-xs leading-relaxed">
        "Lo que Dios unió, que no lo separe el hombre"
      </p>

      {/* Infinity Rings Ornament Below Photo */}
      <InfinityRings />

      {/* Primary Names Section */}
      <div className="space-y-1 my-4">
        <h1 
          className="text-navy-royal text-6xl md:text-7xl tracking-wide select-none"
          style={{ fontFamily: '"Monsieur La Doulaise", cursive', fontWeight: 500 }}
        >
          Miguel
        </h1>
        <p 
          className="text-3xl md:text-4xl text-luxury-gold my-1 select-none"
          style={{ fontFamily: '"Great Vibes", cursive', fontWeight: 500 }}
        >
          &
        </p>
        <h1 
          className="text-navy-royal text-6xl md:text-7xl tracking-wide select-none"
          style={{ fontFamily: '"Monsieur La Doulaise", cursive', fontWeight: 500 }}
        >
          Mariluz
        </h1>
      </div>

      <GoldLine />

      {/* Date badge */}
      <div className="my-8 py-4 px-6 rounded-xl bg-white/70 border border-serenity-light shadow-sm inline-block">
        <div className="flex items-center justify-center space-x-4 text-navy-royal uppercase font-serif-luxury tracking-widest text-sm md:text-base font-medium">
          <span>Sábado</span>
          <span className="text-luxury-gold text-xl font-bold">|</span>
          <span className="text-navy-dark text-lg font-bold">01</span>
          <span className="text-luxury-gold text-xl font-bold">|</span>
          <span>Agosto</span>
        </div>
        <div className="text-navy-royal font-serif-luxury text-sm md:text-base mt-2 tracking-[0.3em]">
          2026
        </div>
      </div>

      {/* Biblic Scripture integrated elegantly */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-b from-serenity-ice/85 to-white/90 border border-serenity-light shadow-[0_10px_30px_rgba(137,166,200,0.15)] relative overflow-hidden">
        {/* Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-luxury-gold/50 rounded-tl-md"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-luxury-gold/50 rounded-tr-md"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-luxury-gold/50 rounded-bl-md"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-luxury-gold/50 rounded-br-md"></div>

        <span className="text-2xl text-luxury-gold block mb-2 font-serif-luxury">“</span>
        <blockquote className="font-sans-clean italic text-xs md:text-sm text-navy-dark/90 leading-relaxed font-light px-2">
          "Mejor son dos que uno, porque obtienen más fruto de su esfuerzo."
        </blockquote>
        <cite className="font-serif-luxury text-xs text-luxury-gold tracking-widest block mt-3 uppercase not-italic font-medium">
          Eclesiastés 4:9
        </cite>
      </div>
    </section>
  );
}
