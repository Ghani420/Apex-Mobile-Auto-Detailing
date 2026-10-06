import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#050505] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Client Experiences
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Read what luxury and exotic vehicle owners say about our driveway service, punctuality, and obsessively detailed craftsmanship.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative p-8 rounded-sm bg-[#0c0c0f] border border-neutral-800 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Gold Quote Icon */}
                <div className="mb-4 text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>

                {/* Comment Body */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Vehicle Footer */}
              <div className="pt-6 border-t border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                      {review.author}
                    </h4>
                    <span className="text-xs text-[#d4af37] font-medium block">
                      {review.vehicle}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 bg-[#141419] px-2.5 py-1 rounded border border-neutral-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Verified</span>
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-2 font-mono">
                  Service: {review.service}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Endorsement Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            Committed to complete satisfaction &bull; 100% Mobile &bull; Certified Detailers
          </p>
        </div>

      </div>
    </section>
  );
};
