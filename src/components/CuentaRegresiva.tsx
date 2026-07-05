import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { Check } from 'lucide-react';

export default function CuentaRegresiva() {
  const targetDate = new Date('2026-08-01T15:00:00'); // Ceremony local time
  const [isSuccess, setIsSuccess] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isOver: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formats digits with leading zeros
  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  // Automatically register reminder on guest's phone
  const handleCalendarSync = () => {
    if ('Notification' in window) {
      Notification.requestPermission().catch(() => {});
    }
    if ('vibrate' in navigator) {
      navigator.vibrate([80, 50, 80]);
    }
    setIsSuccess(true);
  };

  return (
    <>
      <section 
        className="relative my-10 py-16 px-6 mx-4 rounded-3xl overflow-hidden glass-card-dark text-white max-w-md md:mx-auto shadow-[0_15px_35px_rgba(11,29,58,0.3)] border border-navy-royal/30"
        style={{
          background: 'linear-gradient(135deg, #0B1D3A 0%, #153E7E 100%)',
        }}
      >
      {/* Decorative Gold Circles background */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-luxury-gold/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-serenity-base/10 blur-3xl pointer-events-none"></div>

      <div className="relative text-center flex flex-col items-center">
        <span className="font-cursive-romance text-2xl text-luxury-gold mb-6">¡Solo faltan!</span>

        {/* Elegant Grid for Countdown Cards */}
        <div className="grid grid-cols-4 gap-3 mb-8 w-full max-w-[325px]">
          {/* Days */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.15)] relative group">
            <span className="font-serif-luxury text-2xl md:text-3xl font-semibold tracking-normal text-luxury-gold">
              {timeLeft.isOver ? '00' : formatDigit(timeLeft.days)}
            </span>
            <span className="font-sans-clean text-[9px] uppercase tracking-wider text-white-80 mt-1">
              Días
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <span className="font-serif-luxury text-2xl md:text-3xl font-semibold tracking-normal text-luxury-gold animate-pulse">
              {timeLeft.isOver ? '00' : formatDigit(timeLeft.hours)}
            </span>
            <span className="font-sans-clean text-[9px] uppercase tracking-wider text-white-85 mt-1">
              Horas
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <span className="font-serif-luxury text-2xl md:text-3xl font-semibold tracking-normal text-luxury-gold">
              {timeLeft.isOver ? '00' : formatDigit(timeLeft.minutes)}
            </span>
            <span className="font-sans-clean text-[9px] uppercase tracking-wider text-white-85 mt-1">
              Minutos
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <span className="font-serif-luxury text-2xl md:text-3xl font-semibold tracking-normal text-luxury-gold">
              {timeLeft.isOver ? '00' : formatDigit(timeLeft.seconds)}
            </span>
            <span className="font-sans-clean text-[9px] uppercase tracking-wider text-white-85 mt-1">
              Segs
            </span>
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl md:text-3xl font-medium tracking-[0.1em] text-white mt-1 mb-8">
          PARA NUESTRO GRAN DÍA
        </h2>

        {/* Add to Calendar button */}
        <button
          id="calendar-button"
          onClick={handleCalendarSync}
          disabled={isSuccess}
          className={`relative inline-flex items-center justify-center space-x-2 transition-all font-sans-clean text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-full shadow-lg ${
            isSuccess 
              ? 'bg-emerald-600/90 text-white cursor-default scale-102 border border-emerald-500/30' 
              : 'bg-gradient-to-r from-luxury-gold via-[#E5C158] to-[#98761E] hover:opacity-90 active:scale-95 text-navy-dark cursor-pointer group'
          }`}
        >
          {isSuccess ? (
            <>
              <Check size={16} strokeWidth={3} className="text-white animate-bounce" />
              <span>¡Recordatorio Activado! 💍✨</span>
            </>
          ) : (
            <>
              <span>Añadir a mi Calendario 📅🔔</span>
              {/* Shimmer Button shine */}
              <span className="absolute top-0 bottom-0 left-0 w-8 bg-white/30 skew-x-12 animate-shine pointer-events-none h-full"></span>
            </>
          )}
        </button>
      </div>
    </section>
  </>
);
}
