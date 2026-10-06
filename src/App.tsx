/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Instagram, Calendar } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PromoCouponModal } from './components/PromoCouponModal';
import { LegalPage } from './components/LegalPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(true);
  const [selectedService, setSelectedService] = useState('Exterior');
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#terms') return 'terms';
    if (hash === '#privacy') return 'privacy';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#terms') {
        setCurrentPage('terms');
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToServices = () => {
    setCurrentPage('home');
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBookingModalWithSelection = (service?: string) => {
    if (service) setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleNavigateLegal = (page: 'terms' | 'privacy') => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <Navbar onBookClick={() => openBookingModalWithSelection()} />

      <main className="flex-grow">
        {currentPage === 'terms' || currentPage === 'privacy' ? (
          <LegalPage page={currentPage} onBackHome={handleBackHome} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onBookClick={() => openBookingModalWithSelection()}
              onExploreServices={scrollToServices}
            />

            {/* Real Metrics & Equipment Pillars */}
            <TrustStats />

            {/* Services Showcase */}
            <Services
              onSelectService={(serviceName) => openBookingModalWithSelection(serviceName)}
            />

            {/* Before / After Interactive Slider & Gallery */}
            <Gallery onBookClick={() => openBookingModalWithSelection()} />

            {/* Brand Philosophy & The Apex Standard */}
            <About />

            {/* Verified Customer Reviews */}
            <Reviews />

            {/* Expandable FAQs */}
            <FAQ />

            {/* Dedicated Booking & Conversion Engine */}
            <BookingForm onBookClick={() => openBookingModalWithSelection()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onBookClick={() => openBookingModalWithSelection()}
        onNavigateLegal={handleNavigateLegal}
      />

      {/* Promotional Coupon Popup */}
      <PromoCouponModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
        onClaimOffer={() => {
          setIsPromoOpen(false);
          setIsModalOpen(true);
        }}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedService={selectedService}
      />

      {/* Sticky Mobile Conversion Bar (Only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08080a]/95 backdrop-blur-md border-t border-[#d4af37]/30 p-2.5 flex items-center gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <a
          href="https://www.instagram.com/apex_mobile_autodetailing?stkn=Y2VndG16bmU3dTcy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-sm bg-[#16161c] border border-neutral-700 text-neutral-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
          aria-label="Instagram DM Apex Detailing"
        >
          <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Instagram DM</span>
        </a>

        <button
          onClick={() => openBookingModalWithSelection()}
          className="flex-1 py-3 rounded-sm bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Detail</span>
        </button>
      </div>
    </div>
  );
}
