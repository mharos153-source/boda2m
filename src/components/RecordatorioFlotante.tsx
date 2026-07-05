import React, { useState, useEffect } from 'react';
import { Bell, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RecordatorioFlotante() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Show it after a tiny delay once the invitation is opened
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleActivar = () => {
    // 1. Silent native browser notification permission request if supported
    if ('Notification' in window) {
      Notification.requestPermission().catch(() => {});
    }

    // 2. Play a gentle double haptic tap on mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate([80, 50, 80]);
    }

    // 3. Instantly show the premium success state
    setIsSuccess(true);

    // 4. Auto-dismiss after 3.5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3500);
  };

  // Calculate dynamic days remaining
  const targetDate = new Date('2026-08-01T15:00:00');
  const today = new Date();
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-40 max-w-sm md:mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-luxury-gold/40 shadow-[0_15px_40px_rgba(11,29,58,0.25)] flex flex-col space-y-4"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="prompt-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col space-y-4"
              >
                {/* Header and Details */}
                <div className="flex items-start space-x-3.5 relative">
                  {/* Dynamic Bouncing Bell */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#89A6C8]/20 border border-[#89A6C8]/40 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ 
                        rotate: [-12, 12, -12, 12, 0],
                        scale: [1, 1.1, 1, 1.1, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2.2, 
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                      className="text-[#153E7E]"
                    >
                      <Bell size={22} className="fill-[#153E7E]/10" />
                    </motion.div>
                  </div>

                  {/* Info details with paragraph spacing */}
                  <div className="flex-1">
                    <h3 className="font-serif-luxury text-sm font-bold text-navy-royal uppercase tracking-wider flex items-center gap-1">
                      ¡CUENTA REGRESIVA! <span className="text-luxury-gold text-xs">🔔</span>
                    </h3>
                    <div className="font-sans-clean text-xs text-navy-dark/95 leading-relaxed mt-1">
                      <p>
                        Faltan <span className="font-bold text-[#153E7E]">{diffDays} días</span> para la boda de <span className="font-semibold">Miguel & Mariluz</span>.
                      </p>
                      <p className="mt-2 font-bold text-navy-royal tracking-wide border-t border-gray-100 pt-1.5">
                        Activa recordatorio para no perderte el gran día
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex justify-center w-full">
                  <button
                    onClick={handleActivar}
                    className="w-full relative py-3 px-5 bg-gradient-to-r from-luxury-gold via-[#E5C158] to-[#98761E] hover:opacity-95 active:scale-[0.98] text-navy-dark font-sans-clean text-[11px] uppercase tracking-widest font-bold rounded-2xl shadow-[0_4px_12px_rgba(215,175,55,0.25)] flex items-center justify-center space-x-2 transition-all cursor-pointer group"
                  >
                    <span>🔔 Activar Recordatorio</span>
                    <span className="absolute top-0 bottom-0 left-0 w-6 bg-white/20 skew-x-12 animate-shine pointer-events-none h-full"></span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center text-center py-4 space-y-3"
              >
                {/* Golden Animated Success Check */}
                <div className="w-12 h-12 rounded-full bg-[#E5C158]/20 border border-luxury-gold flex items-center justify-center text-luxury-gold">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  >
                    <Check size={26} strokeWidth={3} />
                  </motion.div>
                </div>

                <div>
                  <h4 className="font-serif-luxury text-sm font-bold text-[#153E7E] uppercase tracking-wider">
                    ¡Recordatorio Activado!
                  </h4>
                  <p className="font-sans-clean text-xs text-navy-dark/95 leading-relaxed mt-1.5 px-2">
                    Las alertas automáticas han sido programadas con éxito en tu dispositivo. ¡Te esperamos! ✨💍
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
