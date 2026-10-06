import React from 'react';
import { Calendar, ChevronRight, Sparkles, ShieldCheck, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#050505]">
      {/* Background ambient lighting and subtle radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[650px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-0 w-full max-w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Subtle Brand Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#f5df88]" />
              <span>Bespoke Concierge Detailing</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Premium Detailing.{' '}
              <span className="block text-gold-gradient mt-1">
                Delivered To Your Driveway.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Enjoy professional mobile auto detailing at your home or office. We bring our detailing equipment directly to you. Water and electricity are provided by the customer, while our detailing service focuses on delivering a thorough, professional clean and refreshed finish.
            </p>

            {/* Value / Trust Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-neutral-400 border-l-2 border-[#d4af37] pl-3 py-0.5">
              <span className="text-neutral-200">100% Mobile & Self-Contained</span>
              <span className="text-[#d4af37]" aria-hidden="true">&bull;</span>
              <span className="text-neutral-200">Professional Exterior Care</span>
              <span className="text-[#d4af37]" aria-hidden="true">&bull;</span>
              <span className="text-neutral-200">Thorough Interior Care</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="group relative overflow-hidden px-8 py-4 rounded-sm bg-gold-gradient text-black font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Detail</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-7 py-4 rounded-sm bg-[#111114] border border-[#d4af37]/30 hover:border-[#d4af37] text-white hover:text-[#d4af37] font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 hover:bg-[#18181c]"
              >
                <span>View Services & Pricing</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-neutral-900 w-full max-w-xl">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="text-[11px] leading-tight text-neutral-400">
                  <span className="font-semibold text-white block">Insured &amp; Certified</span>
                  Luxury vehicle care
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="text-[11px] leading-tight text-neutral-400">
                  <span className="font-semibold text-white block">We Come To You</span>
                  Home or workplace
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="text-[11px] leading-tight text-neutral-400">
                  <span className="font-semibold text-white block">Apex Standard</span>
                  100% Satisfaction
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Hero Showcase with Official Brand Emblem */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Ambient Gold Glow Container */}
            <div className="relative w-full max-w-md lg:max-w-none group min-w-0">
              <div className="absolute inset-0 sm:-inset-1.5 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-[#996515]/30 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
              
              <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/40 bg-[#0d0d10] shadow-2xl">
                
                {/* Hero Showcase Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={BUSINESS_INFO.heroImageUrl}
                    alt="Precision auto detailing showcase on luxury sports car"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                  
                  {/* Floating Official Brand Logo Emblem */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 bg-[#050505]/85 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#d4af37]/50 shadow-lg">
                    <img
                      src={BUSINESS_INFO.logoUrl}
                      alt="Apex Official Logo Emblem"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d4af37]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] sm:text-[11px] font-heading font-bold text-[#d4af37] tracking-wider uppercase">
                      Official Detailer
                    </span>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-200">
                      <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse flex-shrink-0" />
                      <span className="font-semibold text-white text-[11px] sm:text-xs">Driveway Service Ready</span>
                    </div>
                    <span className="text-[#f5df88] font-mono text-[10px] sm:text-[11px] bg-black/60 px-2 py-0.5 rounded border border-[#d4af37]/20">
                      Zero Swirl Finish
                    </span>
                  </div>
                </div>

                {/* Sub-card with Brand Seal & Guarantee */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0e0e12] to-[#070709] border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#d4af37] overflow-hidden shadow-[0_0_12px_rgba(212,175,55,0.3)] flex-shrink-0">
                      <img
                        src={BUSINESS_INFO.logoUrl}
                        alt="Apex Detailing Badge"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                        The Apex Promise
                      </h4>
                      <p className="text-xs text-neutral-400">
                        Obsessive hand craftsmanship at your convenience.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onBookClick}
                    className="w-full sm:w-auto px-3 py-2 rounded-sm bg-[#1c1c22] hover:bg-[#d4af37] text-neutral-200 hover:text-black text-xs font-semibold tracking-wider transition-all border border-[#d4af37]/40 hover:border-transparent flex-shrink-0 text-center"
                  >
                    Reserve Now
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
