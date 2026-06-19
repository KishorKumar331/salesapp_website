'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function StoryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideCount = 5;
  const slideDuration = 5000; // 5 seconds per slide
  const progressInterval = 40; // Update progress every 40ms

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slideCount);
          return 0;
        }
        return prev + (progressInterval / slideDuration) * 100;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    setProgress(0);
  };

  const handleDotClick = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mx-auto max-w-sm sm:max-w-md px-4 relative mt-8 mb-4">
      {/* Main Slide Card */}
      <div 
        className="relative bg-gradient-to-br from-[#041422] to-[#0a233b] border border-[#0E3B34]/60 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(14,59,52,0.3)] overflow-hidden flex flex-col justify-between"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0E3B34]/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E0A23B]/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Slide Header */}
        <div className="relative z-10 flex justify-between items-center mb-3 pb-2 border-b border-white/5">
          <span className="text-[10px] sm:text-xs font-black text-[#E0A23B] uppercase tracking-widest bg-[#E0A23B]/10 px-3 py-1 rounded-full">
            Journey to Ownership
          </span>
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold font-mono">
            {currentSlide + 1} / {slideCount}
          </span>
        </div>

        {/* Image Slide Viewport */}
        <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-inner mb-4">
          {[...Array(slideCount)].map((_, idx) => (
            <img
              key={idx}
              src={`/carousel/slide-${idx + 1}.png`}
              alt={`Slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          
          {/* Pause Overlay indicator (only shows briefly or subtle style) */}
          {!isPlaying && (
            <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 pointer-events-none">
              <Pause className="w-2.5 h-2.5 fill-current" /> Paused
            </div>
          )}
        </div>

        {/* Slide Footer Navigation */}
        <div className="relative z-10 flex flex-col gap-3">
          
          {/* Linear Progress Bar */}
          <div className="w-full h-1 bg-white/10 relative overflow-hidden rounded-full">
            <div 
              className="absolute left-0 top-0 bottom-0 bg-[#E0A23B] transition-all duration-[40ms] ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center pt-1">
            {/* Play / Pause Toggle Button */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
            </button>

            {/* Progress Indicators (Dots) */}
            <div className="flex gap-2">
              {[...Array(slideCount)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-[#E0A23B]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/25 transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-[#E0A23B]/30 bg-[#E0A23B]/10 flex items-center justify-center text-[#E0A23B] hover:bg-[#E0A23B]/20 hover:border-[#E0A23B]/50 transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
