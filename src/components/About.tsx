import React from 'react';
import { ShieldCheck, Sparkles, Droplets, Zap, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#08080a] relative border-t border-neutral-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-full max-w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Emblem & Visual Proof */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md min-w-0">
              <div className="absolute inset-0 sm:-inset-2 bg-gradient-to-tr from-[#d4af37]/30 to-[#996515]/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />
              
              <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#111116] to-[#08080a] border border-[#d4af37]/40 shadow-2xl flex flex-col items-center text-center">
                
                {/* Official Brand Logo Emblem */}
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-[#d4af37] p-1.5 shadow-[0_0_35px_rgba(212,175,55,0.35)] mb-6 bg-black">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="Apex Mobile Auto Detailing Brand Seal"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#d4af37] font-semibold tracking-widest uppercase mb-4">
                  The Gold Standard in Mobile Detailing
                </p>

                <div className="w-16 h-0.5 bg-[#d4af37]/40 mb-4" />

                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                  Engineered for vehicle owners who refuse to compromise their time or their vehicle's finish.
                </p>

                {/* Micro guarantees */}
                <div className="mt-6 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full text-left text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Customer Provides Water &amp; Electricity</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Scratch-Free Method</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>pH-Neutral Chemistry</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Fully Insured &amp; Bonded</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Studio Perfection.{' '}
              <span className="block text-gold-gradient">
                Without Leaving Your Property.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              <p>
                Historically, achieving true show-car gloss meant dropping your vehicle off at an expensive detailing studio for several days, arranging rides, and disrupting your entire routine.
              </p>
              <p>
                <strong className="text-white font-semibold">Apex Mobile Auto Detailing</strong> was founded on a singular conviction: discerning vehicle owners deserve the very highest level of automotive craftsmanship delivered directly to their driveway.
              </p>
              <p>
                Customer provides water and electricity. Apex Mobile Auto Detailing provides the professional detailing service and equipment.
              </p>
            </div>

            {/* 4 Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-sm bg-[#0e0e12] border border-neutral-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Zap className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    Concierge Convenience
                  </h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Zero transit, zero wait rooms. Relax in your home while we transform your vehicle.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#0e0e12] border border-neutral-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Droplets className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    Customer Provides Water &amp; Electricity
                  </h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Water and electricity are provided by the customer for our mobile detailing service.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#0e0e12] border border-neutral-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    Master Paint Metrology
                  </h4>
                </div>
                <p className="text-xs text-neutral-400">
                  We measure paint micron depth with digital gauges before any rotary or dual-action correction.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#0e0e12] border border-neutral-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    Ceramic Durability
                  </h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Professional 9H nano-coatings that protect against UV fade, micro-marring, and bird acid.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
