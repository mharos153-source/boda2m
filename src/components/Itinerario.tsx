import React from 'react';
import { MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { GoldLine } from './Ornament';

export default function Itinerario() {
  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-white via-serenity-ice to-white text-center max-w-md mx-auto">
      <div>
        <h2 className="font-serif-luxury text-2xl text-navy-dark mt-1 font-medium tracking-wide">
          PROGRAMA DE NUESTRA BODA
        </h2>
        
        <GoldLine />
      </div>

      {/* Clock icon and arrival instruction */}
      <div className="flex flex-col items-center justify-center my-6 px-4">
        <Clock className="w-8 h-8 text-luxury-gold mb-2.5 stroke-[1.5]" />
        <p className="font-sans-clean text-xs text-navy-royal/90 leading-relaxed font-medium max-w-xs text-center">
          Llegar a las 3:00 p.m. para ubicarse en orden, antes del inicio de la ceremonia religiosa.
        </p>
      </div>

      <div className="space-y-10 mt-8">
        {/* Ceremonia Card */}
        <div className="relative p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_12px_24px_rgba(137,166,200,0.12)] text-left overflow-hidden">
          {/* Top subtle line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold via-serenity-base to-luxury-gold"></div>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-serenity-ice flex items-center justify-center text-luxury-gold">
              {/* Church outline vector equivalent */}
              <span className="text-xl">⛪</span>
            </div>
            <div>
              <h3 className="font-serif-luxury text-base text-navy-dark font-semibold uppercase tracking-wider">
                Unión Religiosa
              </h3>
              <p className="font-sans-clean text-[9px] text-[#A0AEC0] uppercase tracking-wider">
                La Ceremonia Sagrada
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs font-sans-clean text-navy-royal/80 font-light">
            <h4 className="font-serif-luxury text-sm text-navy-dark font-semibold leading-snug">
              IDDP. "CASA DE ENCUENTRO CON DIOS DE MILAGROS"
            </h4>
            
            <p className="flex items-start space-x-1.5 pt-1.5">
              <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
              <span>Bella Esperanza - Caraqueño</span>
            </p>

            <p className="flex items-center space-x-1.5 pt-1">
              <Calendar className="w-4 h-4 text-luxury-gold shrink-0" />
              <span>Sábado 01 de Agosto de 2026</span>
            </p>

            <p className="flex items-center space-x-1.5 pt-1">
              <Clock className="w-4 h-4 text-luxury-gold shrink-0" />
              <span>3:00 pm (Hora Exacta)</span>
            </p>
          </div>

          {/* Map Link Button */}
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/WbTBcvzWUQDvMPzZ8"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-navy-royal hover:bg-navy-dark text-white font-sans-clean text-[11px] uppercase tracking-wider font-semibold py-3 px-4 rounded-xl shadow-sm transition-all text-center leading-none"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Ver en Google Maps 📍</span>
            </a>
          </div>
        </div>

        {/* Separator heart */}
        <div className="flex justify-center select-none text-luxury-gold text-lg">
          ❦
        </div>

        {/* Recepción Card */}
        <div className="relative p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_12px_24px_rgba(137,166,200,0.12)] text-left overflow-hidden">
          {/* Top subtle line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-royal via-luxury-gold to-navy-royal"></div>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-serenity-ice flex items-center justify-center text-luxury-gold">
              {/* Cocktail/Cheers outline equivalent */}
              <span className="text-xl">🥂</span>
            </div>
            <div>
              <h3 className="font-serif-luxury text-base text-navy-dark font-semibold uppercase tracking-wider">
                La Gran Celebración
              </h3>
              <p className="font-sans-clean text-[9px] text-[#A0AEC0] uppercase tracking-wider">
                La Recepción Festiva
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs font-sans-clean text-navy-royal/80 font-light">
            <h4 className="font-serif-luxury text-sm text-navy-dark font-semibold leading-snug">
              GRASS SINTÉTICO LAS PECANAS
            </h4>
            
            <p className="flex items-start space-x-1.5 pt-1.5">
              <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
              <span>Bella Esperanza - Caraqueño</span>
            </p>

            <p className="flex items-center space-x-1.5 pt-1">
              <Calendar className="w-4 h-4 text-luxury-gold shrink-0" />
              <span>Sábado 01 de Agosto de 2026</span>
            </p>

            <p className="flex items-center space-x-1.5 pt-1">
              <Clock className="w-4 h-4 text-luxury-gold shrink-0" />
              <span>Seguidamente de la Ceremonia religioso</span>
            </p>
          </div>

          {/* Map Link Button */}
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/pWwstiDDtf4MwAim7"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-navy-royal hover:bg-navy-dark text-white font-sans-clean text-[11px] uppercase tracking-wider font-semibold py-3 px-4 rounded-xl shadow-sm transition-all text-center leading-none"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Ver en Google Maps 📍</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
