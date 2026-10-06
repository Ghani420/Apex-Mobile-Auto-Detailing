import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface PromoCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimOffer: () => void;
}

export const PromoCouponModal: React.FC<PromoCouponModalProps> = ({
  isOpen,
  onClose,
  onClaimOffer,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/45 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-coupon-title"
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-md rounded-xl bg-gradient-to-b from-[#111116] via-[#0b0b0f] to-[#07070a] border border-[#d4af37]/60 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.22)] text-neutral-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Gold Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 bg-[#d4af37]/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Top Gold Accent Bar */}
        <div className="h-1 w-full bg-gold-gradient" />

        {/* Close X Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Promotional Offer"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#16161d] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-[#d4af37]/40 hover:border-transparent flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-9 relative z-10 flex flex-col items-center text-center">
          {/* Brand Emblem */}
          <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.35)] mb-5 bg-black">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Apex Mobile Auto Detailing"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#15151b] border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-[#f5df88]" />
            <span>LIMITED TIME OFFER</span>
          </div>

          {/* Headline */}
          <h2
            id="promo-coupon-title"
            className="font-heading text-5xl sm:text-6xl font-extrabold tracking-tight uppercase text-gold-gradient leading-none mt-1"
          >
            10% OFF
          </h2>

          {/* Discounted Price Display */}
          <div className="mt-4 flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-[#14141b] border border-[#d4af37]/35 shadow-inner">
              <span className="font-mono text-lg sm:text-xl font-semibold text-neutral-400 line-through decoration-neutral-400/90">
                $229
              </span>
              <span className="text-[#d4af37] font-bold text-base sm:text-lg" aria-hidden="true">
                &rarr;
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gold-gradient">
                $206.10
              </span>
            </div>
            <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#d4af37]">
              Your Price
            </span>
          </div>

          {/* Subheadline */}
          <p className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-widest mt-4">
            PROFESSIONAL MOBILE AUTO DETAILING
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-6" />

          {/* Primary CTA & Secondary Close */}
          <div className="w-full space-y-3">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-full py-3.5 px-6 rounded-sm bg-gold-gradient text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>CLAIM 10% OFF</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
