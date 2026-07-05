import React, { useState, useEffect } from 'react';
import { Camera, Image, Check, Heart } from 'lucide-react';
import { GoldLine } from './Ornament';
import { GuestPhoto } from '../types';

export default function AlbumColaborativo() {
  const [photos, setPhotos] = useState<GuestPhoto[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Load photos from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wedding_guest_photos');
    if (saved) {
      try {
        setPhotos(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default couple of cute romantic starter examples so the guest wall looks pre-designed
      const starters: GuestPhoto[] = [
        {
          id: 'starter1',
          url: 'https://images.unsplash.com/photo-1510076857177-7470066a490b?q=80&w=400',
          timestamp: 'Recuerdo Preboda 📸',
          caption: '¡Felicidades Miguel y Mariluz! Los queremos mucho.',
        },
        {
          id: 'starter2',
          url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=400',
          timestamp: 'Recuerdo Preboda 🌸',
          caption: 'Cuenta regresiva para el mejor día de sus vidas.',
        }
      ];
      setPhotos(starters);
      localStorage.setItem('wedding_guest_photos', JSON.stringify(starters));
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl) return;

    setIsUploading(true);

    setTimeout(() => {
      const newPhoto: GuestPhoto = {
        id: `guest_${Date.now()}`,
        url: previewUrl,
        timestamp: 'Enviado por un invitado ✨',
        caption: caption.trim() || '¡Muchas felicidades!',
      };

      const updated = [newPhoto, ...photos];
      setPhotos(updated);
      localStorage.setItem('wedding_guest_photos', JSON.stringify(updated));

      // Reset state
      setPreviewUrl(null);
      setCaption('');
      setIsUploading(false);
    }, 1000);
  };

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-serenity-ice via-white to-serenity-ice text-center max-w-md mx-auto">
      <div className="p-6 rounded-3xl bg-white border border-serenity-light shadow-[0_12px_30px_rgba(137,166,200,0.12)]">
        
        <span className="font-sans-clean text-[10px] uppercase tracking-[0.25em] text-navy-royal/60 font-semibold">
          Álbum de Recuerdos
        </span>
        <h2 className="font-serif-luxury text-xl md:text-2xl text-navy-dark mt-1 font-medium tracking-wide">
          AYÚDANOS A CAPTURAR CADA MOMENTO
        </h2>

        <GoldLine />

        <p className="font-sans-clean text-xs text-navy-royal/80 leading-relaxed font-light mb-6">
          Ayúdanos a capturar cada instante mágico. Escanea este QR para ver la carpeta compartida o sube tus fotos de la boda directamente aquí abajo.
        </p>

        {/* Custom Generated Vector QR code */}
        <div className="mx-auto my-6 p-4 rounded-2xl bg-white border border-serenity-light shadow-[0_4px_16px_rgba(0,0,0,0.05)] w-48 h-48 flex items-center justify-center relative">
          <svg className="w-full h-full text-navy-dark" viewBox="0 0 100 100" fill="currentColor">
            {/* Elegant luxury styled QR matrix */}
            <path d="M5,5 h30 v30 h-30 z M15,15 h10 v10 h-10 z" />
            <path d="M65,5 h30 v30 h-30 z M75,15 h10 v10 h-10 z" />
            <path d="M5,65 h30 v30 h-30 z M15,75 h10 v10 h-10 z" />
            
            {/* Accent dots and structures representing complex URL code */}
            <rect x="45" y="5" width="10" height="10" />
            <rect x="45" y="25" width="10" height="15" />
            <rect x="5" y="45" width="15" height="10" />
            <rect x="25" y="45" width="10" height="10" />
            <rect x="45" y="45" width="15" height="15" />
            <rect x="70" y="45" width="25" height="10" />
            <rect x="65" y="65" width="10" height="10" />
            <rect x="85" y="65" width="10" height="20" />
            <rect x="45" y="70" width="10" height="25" />
            <rect x="75" y="85" width="15" height="10" />
            
            <circle cx="50" cy="50" r="8" fill="#D4AF37" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md">
            <Heart className="w-5 h-5 text-red-400 fill-current" />
          </div>
        </div>

        {/* Custom Upload Form */}
        <form onSubmit={handleUploadSubmit} className="mt-8 space-y-4">
          <label className="relative inline-flex items-center justify-center space-x-2 bg-navy-royal hover:bg-navy-dark text-white font-sans-clean text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-full shadow-[0_4px_15px_rgba(21,62,126,0.30)] cursor-pointer group transition-all w-full text-center">
            <Camera className="w-4 h-4 mr-1 animate-pulse" />
            <span>Subir fotos 📸</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Interactive Preview & Caption area */}
          {previewUrl && (
            <div className="p-4 rounded-3xl bg-slate-50 border border-serenity-light text-left mt-4 space-y-3">
              <span className="font-serif-luxury text-[10px] text-luxury-gold uppercase tracking-[0.15em] font-bold block">
                Previsualizar Foto de Invitado:
              </span>
              <img
                src={previewUrl}
                alt="Preview upload"
                className="w-full aspect-video object-cover rounded-xl border border-serenity-light"
              />
              <div className="space-y-1">
                <label className="font-sans-clean text-[10px] text-navy-royal/70 font-semibold block uppercase">
                  Agrega una felicitación para los novios:
                </label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Ej: ¡Felicidades, todo quedó precioso!"
                  className="w-full bg-white border border-serenity-light rounded-lg px-3 py-2 text-xs font-sans-clean focus:outline-none focus:border-luxury-gold text-navy-dark"
                  maxLength={120}
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="flex-1 bg-gradient-to-r from-luxury-gold to-[#98761E] text-navy-dark text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center space-x-1"
                >
                  {isUploading ? (
                    <span className="animate-spin h-4 w-4 border-2 border-navy-dark border-t-transparent rounded-full font-bold"></span>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" />
                      <span>Publicar Recuerdo</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewUrl(null)}
                  className="py-2.5 px-4 rounded-lg text-xs font-sans-clean border border-slate-250 text-slate-500"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
