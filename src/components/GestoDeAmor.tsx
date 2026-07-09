import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { GoldLine } from './Ornament';
import qrImage from '@/assets/GALERIAS/Album/QRyape.webp';

export default function GestoDeAmor() {
  const [copied, setCopied] = useState(false);
  const yapeNumber = '962286322';

  const handleCopy = () => {
    navigator.clipboard.writeText(yapeNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleYapeRedirect = () => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;

    if (isAndroid) {
      // Use Android Intent syntax for Google Chrome and Chromium-based browsers on Android
      // This launches the native app if installed, and seamlessly redirects to the Google Play Store fallback if not, preventing error pages.
      window.location.href = "intent://#Intent;scheme=yape;package=com.innovabcp.yapeapp;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.innovabcp.yapeapp;end";
    } else if (isIOS) {
      window.location.href = "yape://";
      setTimeout(() => {
        window.location.href = "https://apps.apple.com/pe/app/yape/id1111995555";
      }, 1500);
    } else {
      window.location.href = "yape://";
      setTimeout(() => {
        window.location.href = "https://www.yape.com.pe";
      }, 1500);
    }
  };

  return (
    <section className="relative px-6 py-12 text-center max-w-md mx-auto">
      <div className="p-8 rounded-3xl bg-white border border-serenity-light shadow-[0_15px_30px_rgba(137,166,200,0.12)]">
        
        {/* Gift box icon vector */}
        <div className="mx-auto w-12 h-12 bg-serenity-ice rounded-full flex items-center justify-center mb-4 text-luxury-gold">
          <Gift className="w-6 h-6 text-luxury-gold" />
        </div>

        <h2 className="font-serif-luxury text-xl text-navy-dark uppercase tracking-widest font-medium">
          UN GESTO DE AMOR
        </h2>
        
        <GoldLine />

        <p className="font-sans-clean text-xs md:text-sm text-navy-royal/80 leading-relaxed font-light mb-8 px-2">
          Su compañía es lo mas importante. Si nace de su corazón hacernos un obsequio, lo recibiremos con mucho amor y gratitud
        </p>

        {/* Accordion Box Container (Now permanently open and static) */}
        <div className="rounded-2xl border border-serenity-light overflow-hidden transition-all duration-300">
          
          {/* Header bar */}
          <div
            className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-serenity-ice/40 to-white text-left select-none border-b border-serenity-light"
          >
            <div className="flex items-center space-x-3">
              <span className="font-serif-luxury text-sm font-semibold text-navy-dark tracking-wide">
                  Mi Gesto de Amor 🎁
              </span>
            </div>
            <span className="text-luxury-gold font-bold text-lg leading-none select-none">⁝</span>
          </div>

          {/* Content Space (Fully visible, not collapsed) */}
          <div className="p-6 bg-slate-50 flex flex-col items-center space-y-5 text-center">
            
            {/* Elegant Yape text display - WITHOUT the "y" box and with new text */}
            <div className="flex items-center justify-center space-x-2">
              <span className="font-sans-clean text-xs font-bold tracking-wider text-navy-royal flex items-center gap-1.5 select-none">
                Toca el QR y abre tu YAPE 👆
              </span>
            </div>

            {/* QR placeholder visual */}
            <div 
              onClick={handleYapeRedirect}
              className="p-4 rounded-2xl bg-white border border-serenity-light shadow-sm w-40 h-40 flex flex-col items-center justify-center relative cursor-pointer transform transition-transform active:scale-95 duration-200"
            >
              {/* Simulated scanning matrix lines */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00D6C1]"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00D6C1]"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00D6C1]"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00D6C1]"></div>

              <img 
                src={qrImage} 
                alt="QR Yape" 
                className="w-full h-full object-contain rounded-xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1 w-full">
              <p className="font-sans-clean text-[10px] uppercase tracking-widest text-[#718096] font-semibold">
                Titular: Miguel Haro S.
              </p>
              
              {/* Clickable Phone copy block */}
              <div className="flex items-center justify-between bg-white border border-serenity-light rounded-2xl py-3 px-5 shadow-sm space-x-3 w-[240px] mx-auto">
                <span className="font-serif-luxury text-base font-bold text-navy-dark tracking-widest select-all">
                  {yapeNumber}
                </span>
                
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-xl bg-serenity-ice text-navy-royal hover:bg-serenity-light/60 transition-transform active:scale-90 cursor-pointer"
                  title="Copiar número"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-navy-royal" />
                  )}
                </button>
              </div>
            </div>

            {copied && (
              <span className="font-sans-clean text-[10px] text-green-600 font-bold tracking-wider animate-pulse uppercase">
                Número copiado al portapapeles 📋✓
              </span>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

