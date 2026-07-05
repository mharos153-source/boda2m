import React from 'react';
import { Shirt } from 'lucide-react';
import { GoldLine } from './Ornament';

export default function CodigoVestimenta() {
  // Luxe wedding colors not recommended / prohibited
  const allowedColors = [
    { name: 'Azul Serenity', hex: '#89A6C8' },
    { name: 'Azul Marino', hex: '#153E7E' },
    { name: 'Perla', hex: '#F8F7F2' },
    { name: 'Blanco', hex: '#FFFFFF' },
  ];

  return (
    <section className="relative px-6 py-12 text-center max-w-md mx-auto">
      <div className="p-8 rounded-3xl bg-white border border-serenity-light shadow-[0_15px_30px_rgba(137,166,200,0.12)]">
        
        {/* Hanger icon vector */}
        <div className="mx-auto w-12 h-12 bg-serenity-ice rounded-full flex items-center justify-center mb-4 text-navy-royal">
          <Shirt className="w-6 h-6 text-luxury-gold" />
        </div>

        <h2 className="font-serif-luxury text-xl text-navy-dark uppercase tracking-widest font-semibold">
          CÓDIGO DE VESTIMENTA
        </h2>
        <p className="font-cursive-romance text-3xl text-luxury-gold my-2">
          Formal / Elegante
        </p>

        <p className="font-sans-clean text-xs text-navy-royal/80 leading-relaxed font-light mb-6 px-4">
          Acompáñanos vistiendo con elegancia para crear recuerdos inolvidables en nuestra boda.
        </p>

        <GoldLine />

        {/* Color circles paleta visual */}
        <div className="my-6">
          <p className="font-sans-clean uppercase tracking-wider text-red-650 font-bold mb-4">
            <span className="text-[16px] font-extrabold mr-1">NO</span><span className="text-[12px]"> USAR ESTOS COLORES:</span>
          </p>
          <div className="flex items-center justify-center space-x-4">
            {allowedColors.map((color) => (
              <div key={color.name} className="flex flex-col items-center space-y-1 w-16">
                <div
                  className="w-8 h-8 rounded-full border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transform transition-transform hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="font-sans-clean text-[9px] text-navy-royal/80 tracking-tighter leading-tight font-medium text-center">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle/Notice rule */}
        <div className="mt-8 p-3.5 rounded-xl bg-red-50/50 border border-red-100">
          <p className="font-sans-clean text-[11px] text-red-650 tracking-normal font-medium flex items-center justify-center space-x-1">
            <span>✨</span>
            <span className="text-navy-royal/90">
              Reservamos el color <b>blanco</b> exclusivamente para la novia.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
