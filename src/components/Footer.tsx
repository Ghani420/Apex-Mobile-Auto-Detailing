import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Calendar, Instagram } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, PACKAGES } from '../data/content';

interface FooterProps {
  onBookClick: () => void;
  onNavigateLegal?: (page: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onNavigateLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-[#d4af37]/30 relative pt-16 pb-24 md:pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Info & Official Emblem */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-[#d4af37] overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.3)] flex-shrink-0 bg-black">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Apex Mobile Auto Detailing Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-white block">
                  APEX
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase block">
                  Mobile Auto Detailing
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              The premier mobile automotive detailing studio. Delivering artisan detailing and professional interior and exterior care directly to your driveway.
            </p>

            <div className="pt-2 flex items-center">
              <button
                onClick={onBookClick}
                className="px-5 py-2.5 rounded-sm bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Detail</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#d4af37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Before & After</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">Our Standard</a></li>
              <li><a href="#reviews" className="hover:text-[#d4af37] transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">FAQ</a></li>
              <li><a href="#booking" className="hover:text-[#d4af37] transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Services Catalog */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#d4af37]">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{s.name}</span>
                    {s.startingPrice && <span className="text-[10px] text-neutral-500 font-mono">{s.startingPrice}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Contact Info */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#d4af37]">
              Concierge Contact
            </h4>
            
            <div className="space-y-2.5">
              <a
                href="https://www.instagram.com/apex_mobile_autodetailing?stkn=Y2VndG16bmU3dTcy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram DM - Message Us on Instagram"
                className="group flex items-start gap-2.5 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5 transition-transform group-hover:scale-105" />
                <div>
                  <span className="text-white group-hover:text-[#d4af37] transition-colors block font-medium">
                    Instagram DM
                  </span>
                  <span className="text-neutral-300 group-hover:text-[#d4af37] transition-colors block">
                    Message Us on Instagram
                  </span>
                </div>
              </a>

              <a
                href="mailto:apexmobileautodetailing07@gmail.com"
                aria-label="Email Apex Mobile Auto Detailing at apexmobileautodetailing07@gmail.com"
                className="group flex items-start gap-2.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5 transition-transform group-hover:scale-105" />
                <div>
                  <span className="text-white group-hover:text-[#d4af37] transition-colors block font-medium">
                    Email
                  </span>
                  <span className="text-neutral-300 group-hover:text-[#d4af37] transition-colors break-all block">
                    apexmobileautodetailing07@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Service Area</span>
                  <span className="text-neutral-400 text-[11px]">
                    2958 21rd Ave Street, Los Angeles, CA, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-2 text-center sm:text-left">
            <span className="text-neutral-400">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
            </span>
            <span className="text-neutral-700 hidden sm:inline">&bull;</span>
            <span className="text-neutral-400 text-[11px] hidden sm:inline">
              Licensed &amp; Insured Mobile Detailing
            </span>
            <span className="text-neutral-700">&bull;</span>
            <a
              href="#terms"
              onClick={(e) => {
                if (onNavigateLegal) {
                  e.preventDefault();
                  onNavigateLegal('terms');
                }
              }}
              className="text-[#d4af37]/85 hover:text-[#d4af37] hover:underline underline-offset-4 transition-colors text-[11px] font-medium cursor-pointer"
            >
              Terms &amp; Conditions
            </a>
            <span className="text-neutral-700">&bull;</span>
            <a
              href="#privacy"
              onClick={(e) => {
                if (onNavigateLegal) {
                  e.preventDefault();
                  onNavigateLegal('privacy');
                }
              }}
              className="text-[#d4af37]/85 hover:text-[#d4af37] hover:underline underline-offset-4 transition-colors text-[11px] font-medium cursor-pointer"
            >
              Privacy Policy
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-[#d4af37] text-neutral-300 hover:text-[#d4af37] transition-all flex items-center gap-1.5 text-xs"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
