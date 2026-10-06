import React, { useState, useEffect } from 'react';
import { Instagram, Calendar, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Before / After', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-[#0a0a0a]/90 to-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          aria-label="Apex Mobile Auto Detailing Home"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/60 group-hover:border-[#d4af37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] flex-shrink-0">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Apex Mobile Auto Detailing Official Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-wider text-white group-hover:text-gold-gradient transition-colors leading-tight">
              APEX
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
              Mobile Auto Detailing
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-[#d4af37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.instagram.com/apex_mobile_autodetailing?stkn=Y2VndG16bmU3dTcy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-sm border border-[#333] hover:border-[#d4af37]/60 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-[#d4af37] transition-all flex items-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Instagram DM</span>
          </a>

          <button
            onClick={onBookClick}
            className="relative group overflow-hidden px-5 py-2.5 rounded-sm bg-gold-gradient text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Detail</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onBookClick}
            className="px-3 py-1.5 rounded-sm bg-gold-gradient text-black font-bold text-xs uppercase sm:hidden flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0e] border-b border-[#d4af37]/30 px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-[#d4af37] text-base font-medium py-1 border-b border-neutral-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-sm bg-gold-gradient text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Detail Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
