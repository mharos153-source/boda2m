import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GoldLine } from './Ornament';

export default function GaleriaPreboda() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 10 premium coastal/navy matches preboda images
  const images = [
    { src: '/assets/GALERIAS/Album/Album1.webp', caption: 'Mi lugar favorito es contigo' },
    { src: '/assets/GALERIAS/Album/Album2.webp', caption: 'Dos almas en un pacto sagrado de Dios' },
    { src: '/assets/GALERIAS/Album/Album3.webp', caption: 'Mi lugar favorito es contigo' },
    { src: '/assets/GALERIAS/Album/Album4.webp', caption: 'Escribiendo nuestro camino juntos' },
    { src: '/assets/GALERIAS/Album/Album5.webp', caption: 'Tu mirada es mi atardecer favorito' },
    { src: '/assets/GALERIAS/Album/Album6.webp', caption: 'Un hogar edificado sobre la Roca' },
    { src: '/assets/GALERIAS/Album/Album7.webp', caption: 'Dos corazones en un mismo latido' },
    { src: '/assets/GALERIAS/Album/Album8.webp', caption: 'Nuestra historia fue escrita por Dios' },
    { src: '/assets/GALERIAS/Album/Album9.webp', caption: 'Cordón de tres dobleces indestructible' },
    { src: '/assets/GALERIAS/Album/Album10.webp', caption: 'Dios bendice nuestra historia' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    
    // Swipe thresholds (50px minimum)
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative py-16 text-center max-w-md mx-auto">
      <div className="px-6">
        <span className="font-sans-clean text-[10px] uppercase tracking-[0.25em] text-navy-royal/60 font-semibold">
          Momentos Juntos
        </span>
        <h2 className="font-serif-luxury text-2xl text-navy-dark mt-1 font-medium tracking-wide">
          NUESTRA SESIÓN PREBODA
        </h2>
        
        <GoldLine />
      </div>

      {/* Main Touch Interactive Swipe Box */}
      <div className="relative my-8 px-4">
        <div
          className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(11,29,58,0.15)] bg-slate-150 border-4 border-white/95"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Photos list with slide transform */}
          <div
            className="flex w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full h-full shrink-0 relative">
                <img
                  src={img.src}
                  alt={`Preboda ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                
                {/* Floating Cap Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 text-left pb-10">
                  <p className="font-sans-clean text-xs text-white/90 italic font-light drop-shadow-sm leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Index counter (e.g., FOTO 7 / 10) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-full py-1.5 px-4 text-[10px] font-sans-clean font-bold text-navy-royal uppercase tracking-wider">
            🌿 Foto {currentIndex + 1} de {images.length}
          </div>

          {/* Arrow Overlays for fallback clicking */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-navy-dark shadow border border-white/30 hover:bg-white active:scale-90"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-navy-dark shadow border border-white/30 hover:bg-white active:scale-90"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicators dots */}
        <div className="flex justify-center space-x-1.5 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-5 bg-navy-royal' : 'w-2 bg-serenity-base/40'
              }`}
              aria-label={`Ir a foto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="italic font-sans-clean text-xs text-navy-royal/70 px-4 leading-relaxed font-light">
        "Dios es el autor de nuestra historia, el guía de nuestro amor y el fundamento del pacto que hoy nos une para siempre"
      </div>
    </section>
  );
}
