import React, { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';
import { motion } from 'motion/react';

export default function VolumeControl() {
  const [volume, setVolume] = useState(80); // Default volume at 80%
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync volume with HTML5 background audio player
  const updatePlayerVolume = (value: number) => {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;
    if (audio) {
      // HTML5 audio volume range is 0.0 to 1.0
      audio.volume = value / 100;
    }
  };

  // Run update whenever volume changes
  useEffect(() => {
    updatePlayerVolume(volume);
    
    // Periodically sync volume in case player loaded or wasn't fully ready
    const interval = setInterval(() => {
      updatePlayerVolume(volume);
    }, 1000);

    return () => clearInterval(interval);
  }, [volume]);

  const handleVolumeCalc = (clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const trackHeight = rect.height;
    
    // Calculate volume based on vertical offset (bottom is 100%, top is 0%)
    const rawPercentage = ((trackHeight - relativeY) / trackHeight) * 100;
    const calculatedVolume = Math.max(0, Math.min(100, Math.round(rawPercentage)));
    setVolume(calculatedVolume);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleVolumeCalc(e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleVolumeCalc(e.touches[0].clientY);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleVolumeCalc(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleVolumeCalc(e.touches[0].clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="absolute right-3.5 top-[135px] z-40 flex flex-col items-center select-none pointer-events-auto">
      {/* Top Dynamic Percentage Label */}
      <span className="font-sans-clean text-[9px] font-bold text-[#153E7E] mb-1.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
        {volume}%
      </span>

      {/* Vertical Slider Capsule (Pill) - Scaled 50% */}
      <div 
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="w-[14px] h-[72px] bg-white/75 backdrop-blur-md rounded-full border border-navy-royal/20 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all duration-200 hover:scale-105 hover:border-[#153E7E]/40"
      >
        {/* Dynamic Level Fill */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark via-navy-royal to-[#153E7E] rounded-full transition-all duration-150 ease-out"
          style={{ height: `${volume}%` }}
        />

        {/* Music Icon at the bottom */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none mix-blend-difference">
          <Music size={8} className="text-white" />
        </div>
      </div>
    </div>
  );
}
