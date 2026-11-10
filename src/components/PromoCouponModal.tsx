import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { AnimatedPromoCar } from './AnimatedPromoCar';

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
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-coupon-title"
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-[440px] rounded-xl bg-gradient-to-b from-[#111116] via-[#0b0b0f] to-[#07070a] border border-[#d4af37]/60 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.22)] text-neutral-100 overflow-hidden my-auto max-h-[94dvh] flex flex-col"
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
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-[#16161d] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-[#d4af37]/40 hover:border-transparent flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-4 min-[400px]:p-5 sm:p-7 relative z-10 flex flex-col items-center text-center overflow-y-auto max-h-full">
          {/* Brand Emblem */}
          <div className="w-13 h-13 min-[400px]:w-15 min-[400px]:h-15 sm:w-16 sm:h-16 rounded-full border-2 border-[#d4af37] p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.35)] mb-2.5 sm:mb-4 bg-black flex-shrink-0">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Apex Mobile Auto Detailing promotional offer emblem"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#15151b] border border-[#d4af37]/40 text-[#d4af37] text-[10px] min-[400px]:text-[11px] font-bold uppercase tracking-widest mb-2 sm:mb-3 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-[#f5df88]" />
            <span>LIMITED TIME OFFER</span>
          </div>

          {/* Animated Luxury Black Sports Car pulling 10% OFF Banner */}
          <AnimatedPromoCar />

          {/* Subheadline */}
          <h2
            id="promo-coupon-title"
            className="font-heading text-[11px] min-[400px]:text-xs sm:text-sm font-bold text-white uppercase tracking-widest mt-0.5 sm:mt-1 flex-shrink-0"
          >
            PROFESSIONAL MOBILE AUTO DETAILING
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3 sm:my-4 flex-shrink-0" />

          {/* Primary CTA & Secondary Close */}
          <div className="w-full space-y-2.5 sm:space-y-3 flex-shrink-0">
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
