import React from 'react';
import { MapPin, Sparkles, Calendar, UserCheck } from 'lucide-react';
import { TRUST_METRICS } from '../data/content';

export const TrustStats: React.FC = () => {
  return (
    <section className="relative py-12 bg-[#09090b] border-y border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Counter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {TRUST_METRICS.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="text-3xl lg:text-4xl font-extrabold font-heading text-gold-gradient tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-white tracking-wide uppercase">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Detailing Benefits Bar */}
        <div className="mt-10 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0e0e12] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors">
            <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">We Come To You</div>
              <div className="text-neutral-400 text-[11px]">Professional detailing at your home, workplace, or preferred location.</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0e0e12] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors">
            <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Attention To Detail</div>
              <div className="text-neutral-400 text-[11px]">Careful interior and exterior detailing focused on a clean, refined finish.</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0e0e12] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors">
            <Calendar className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Easy &amp; Convenient</div>
              <div className="text-neutral-400 text-[11px]">Book your detail and enjoy professional service without visiting a detailing shop.</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0e0e12] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors">
            <UserCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Personalized Service</div>
              <div className="text-neutral-400 text-[11px]">Every vehicle receives focused attention based on its condition and detailing needs.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
