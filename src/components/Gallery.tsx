import React from 'react';
import { Camera } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface GalleryProps {
  onBookClick?: () => void;
}

export const Gallery: React.FC<GalleryProps> = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Master Results</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            BEFORE &amp; AFTER
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            See the difference professional detailing can make — from dusty and dirty to clean, fresh and detailed.
          </p>
        </div>

        {/* Highlighted Feature: Interactive Before & After Slider */}
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage="/ChatGPT Image Sep 28, 2026, 09_46_17 PM.png"
            afterImage="/ChatGPT Image Sep 28, 2026, 09_47_19 PM.png"
            title="BEFORE &amp; AFTER"
            subtitle="See the difference professional detailing can make — from dusty and dirty to clean, fresh and detailed."
          />
        </div>

      </div>
    </section>
  );
};
