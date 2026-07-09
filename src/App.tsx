import React, { useState } from 'react';
import Portada from './components/Portada';
import Hero from './components/Hero';
import CuentaRegresiva from './components/CuentaRegresiva';
import Familia from './components/Familia';
import CodigoVestimenta from './components/CodigoVestimenta';
import GaleriaPreboda from './components/GaleriaPreboda';
import Itinerario from './components/Itinerario';
import GestoDeAmor from './components/GestoDeAmor';
import FormularioRSVP from './components/FormularioRSVP';
import { GoldLine } from './components/Ornament';
import RecordatorioFlotante from './components/RecordatorioFlotante';
import VideoSeccion from './components/VideoSeccion';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const startMusic = () => {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;
    if (audio) {
      audio.play().catch((err) => {
        console.log("Audio play failed or was blocked by browser:", err);
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-navy-dark overflow-x-hidden antialiased selection:bg-serenity-light selection:text-navy-dark relative">
      
      {/* 1. Portada (Interactive Wax Seal Envelope Screen) */}
      {!isOpened && (
        <Portada onOpen={() => setIsOpened(true)} onStartOpening={startMusic} />
      )}

      {/* 2. Hidden background music - Streams automatically post-action clicks */}
      <audio
        id="bg-audio"
        src="/assets/GALERIAS/Musica/Fondomusic.mp3"
        loop
        playsInline
      />

      {/* 3. Main Luxury Virtual Scrollbook Invitation */}
      {isOpened && (
        <div className="animate-fade-in relative transition-all duration-1000 ease-in-out">
          
          {/* Persistent Floating Reminder Popup Overlay */}
          <RecordatorioFlotante />

          {/* Hero Section (Cover & Entrance Zoom) */}
          <Hero />

          {/* Elegant Autoplay Video Section */}
          <VideoSeccion />

          {/* Versículo Estratégico 1 - Cordón de Tres dobleces */}
          <div className="px-6 py-6 text-center max-w-md mx-auto">
            <span className="text-xl text-luxury-gold">✦</span>
            <p className="font-sans-clean italic text-xs leading-relaxed text-navy-royal mt-2">
              "Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto."
            </p>
            <p className="font-serif-luxury text-[10px] text-luxury-gold uppercase tracking-widest mt-1.5">
              Eclesiastés 4:12
            </p>
          </div>

          {/* Cuenta Regresiva (Digital Countdown Glass Card) */}
          <CuentaRegresiva />

          {/* Familia (The pillars parents/sponsors) */}
          <Familia />

          {/* Itinerario (Events timeline & Maps) */}
          <Itinerario />

          {/* Versículo Estratégico 2 - Hallar Esposa */}
          <div className="px-6 py-6 text-center max-w-sm mx-auto">
            <p className="font-sans-clean italic text-xs leading-relaxed text-navy-royal/80">
              "El que halla esposa halla el bien, y alcanza la benevolencia de Jehová."
            </p>
            <p className="font-serif-luxury text-[9px] text-luxury-gold uppercase tracking-widest mt-1">
              Proverbios 18:22
            </p>
          </div>

          {/* Código de vestimenta */}
          <CodigoVestimenta />

          {/* Galería Preboda Carousel */}
          <GaleriaPreboda />

          {/* Gesto de Amor (Yape details accordion) */}
          <GestoDeAmor />

          {/* Confirmación RSVP Form linked to webhook */}
          <FormularioRSVP />

          {/* Premium Footer Ending */}
          <footer className="bg-navy-dark py-16 text-center w-full">
            <div className="max-w-md mx-auto px-6 space-y-4">
              <span className="text-5xl text-luxury-gold block" style={{ fontFamily: '"Monsieur La Doulaise", cursive' }}>
                Miguel  &  Mariluz
              </span>
              <p className="font-sans-clean text-[11px] tracking-[0.2em] text-white">
                01 • 08 • 2026
              </p>
              <GoldLine />
              <p className="font-sans-clean text-[9px] text-white/60">
                Hecho con amor ❤️  •   By: MiguelHaro
              </p>
            </div>
          </footer>

        </div>
      )}
    </main>
  );
}
