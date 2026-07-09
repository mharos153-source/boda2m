import React from 'react';
import { Heart, Users, Sparkles, Award } from 'lucide-react';
import { GoldLine } from './Ornament';

export default function Familia() {
  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-white via-serenity-ice to-white text-center max-w-md mx-auto">
      {/* Upper header */}
      <div className="space-y-3 px-2">
        <h3 className="font-serif-luxury text-lg md:text-xl text-navy-dark leading-relaxed font-light">
          Con la bendición de Dios, nuestros padres, padrinos y testigos.
        </h3>
        <p className="font-sans-clean text-xs text-navy-royal/80 leading-relaxed font-light">
          Con gratitud a Dios y alegría en nuestros corazones, les invitamos a ser parte de nuestra boda.
        </p>
      </div>

      <GoldLine />

      {/* Grid structure of blocks */}
      <div className="space-y-6 mt-8">
        {/* Padres del Novio Card */}
        <div className="p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_4px_20px_rgba(137,166,200,0.1)] relative group text-left">
          <div className="absolute top-4 right-4 text-serenity-base">
            <Users className="w-5 h-5 text-luxury-gold/70" />
          </div>
          <span 
            className="font-serif-luxury text-[11px] text-luxury-gold uppercase tracking-[0.2em] block mb-2"
            style={{ fontWeight: 905 }}
          >
            Padres del Novio
          </span>
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Fortunato Haro P.
            </h4>
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Florencia Sifuentes O.
            </h4>
          </div>
        </div>

        {/* Padres de la Novia Card */}
        <div className="p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_4px_20px_rgba(137,166,200,0.1)] relative text-left">
          <div className="absolute top-4 right-4 text-serenity-base">
            <Users className="w-5 h-5 text-luxury-gold/70" />
          </div>
          <span 
            className="font-serif-luxury text-[11px] text-luxury-gold uppercase tracking-[0.2em] block mb-2"
            style={{ fontWeight: 905 }}
          >
            Padres de la Novia
          </span>
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Juan Cerna I.
            </h4>
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Ventura Medrano V.
            </h4>
          </div>
        </div>

        {/* Padrinos Card */}
        <div className="p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_4px_20px_rgba(137,166,200,0.1)] relative text-left">
          <div className="absolute top-4 right-4 text-serenity-base">
            <Heart className="w-5 h-5 text-red-400/70" />
          </div>
          <span 
            className="font-serif-luxury text-[11px] text-luxury-gold uppercase tracking-[0.2em] block mb-2"
            style={{ fontWeight: 905 }}
          >
            Padrinos de Bodas
          </span>
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Ronal Romero Z.
            </h4>
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Yudith Haro S.
            </h4>
          </div>
        </div>

        {/* Testigos Card */}
        <div className="p-6 rounded-2xl bg-white border border-serenity-light shadow-[0_4px_20px_rgba(137,166,200,0.1)] relative text-left">
          <div className="absolute top-4 right-4 text-serenity-base">
            <Award className="w-5 h-5 text-navy-royal/55" />
          </div>
          <span 
            className="font-serif-luxury text-[11px] text-luxury-gold uppercase tracking-[0.2em] block mb-2"
            style={{ fontWeight: 905 }}
          >
            Testigos
          </span>
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Jonas Cotrina H.
            </h4>
            <h4 className="font-serif-luxury text-base text-navy-dark font-medium">
              Margot Espinoza Ll.
            </h4>
          </div>
        </div>
      </div>

      {/* Scripture inline */}
      <div className="mt-8 italic font-sans-clean text-xs text-navy-royal/70 px-4 leading-relaxed font-light">
        "Mejor son dos que uno, porque obtienen más fruto de su esfuerzo." (Eclesiastés 4:9)
      </div>
    </section>
  );
}
