import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Instagram } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#08080a] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Everything You Need To Know
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Clear, transparent answers about our mobile service logistics, required equipment, preparation, and coatings.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-sm transition-colors border overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f0f14] border-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                    : 'bg-[#0c0c0f] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-white tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-gold-gradient text-black rotate-180'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 p-6 rounded-sm bg-[#0e0e12] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              HAVE A QUESTION NOT LISTED HERE?
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Contact us directly through Instagram DM for quick answers and booking assistance.
            </p>
          </div>
          <a
            href="https://www.instagram.com/apex_mobile_autodetailing?stkn=Y2VndG16bmU3dTcy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-sm bg-[#18181f] hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>MESSAGE US ON INSTAGRAM</span>
          </a>
        </div>

      </div>
    </section>
  );
};
