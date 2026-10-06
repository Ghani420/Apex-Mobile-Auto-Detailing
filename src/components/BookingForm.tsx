import React from 'react';
import { Calendar, MapPin, Instagram, Mail, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

const INSTAGRAM_URL = 'https://www.instagram.com/apex_mobile_autodetailing?stkn=Y2VndG16bmU3dTcy&utm_source=qr';

interface BookingFormProps {
  onBookClick: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onBookClick }) => {
  return (
    <section id="booking" className="py-24 bg-[#050505] relative border-t border-neutral-900">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Concierge Booking</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Request Your Detail
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Book your preferred date and time. We’ll come to your location with everything needed for a professional detailing service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-md bg-[#0c0c0f] border border-[#d4af37]/40 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] overflow-hidden flex-shrink-0">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="Apex Detailing"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base uppercase">
                    Apex Detailing
                  </h3>
                  <p className="text-xs text-[#d4af37]">Direct Client Dispatch</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Instagram className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Instagram DM</span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#d4af37] font-semibold text-sm transition-colors"
                    >
                      Message Us on Instagram
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Email Inquiries</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#d4af37] font-semibold break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Service Regions</span>
                    <span className="text-white font-medium">
                      2958 21rd Ave Street, Los Angeles, CA, USA
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram DM button */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3 rounded-sm bg-[#181820] hover:bg-[#d4af37] text-white hover:text-black font-semibold text-xs tracking-wider uppercase border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Message Us on Instagram</span>
              </a>
            </div>

            {/* Peace of Mind Guarantee */}
            <div className="p-4 rounded-md bg-[#101015] border border-neutral-800/90 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                <Shield className="w-4 h-4" />
                <span>100% Satisfaction Standard</span>
              </div>
              <p className="text-neutral-400 text-[11px]">
                You do not pay until you perform a full walkaround inspection with our lead detailer and are completely satisfied.
              </p>
            </div>
          </div>

          {/* Right Column: Launch Booking Modal Card */}
          <div className="lg:col-span-7 flex">
            <div className="w-full p-8 sm:p-10 rounded-md bg-[#0c0c0f] border border-[#d4af37]/40 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] block">
                  Mobile Concierge Reservation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide">
                  Ready to Schedule Your Appointment?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Select your vehicle profile, preferred detailing service (Exterior, Interior, or Custom Detailing), and your ideal arrival date and time in our interactive booking window.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs text-neutral-300">
                  <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#121217] border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Exterior, Interior &amp; Custom Detailing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#121217] border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Interactive Date &amp; Time Selection</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#121217] border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>Direct Driveway or Office Service</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#121217] border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>No Upfront Payment Required</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Instant reservation request &bull; Zero upfront deposit
                </span>

                <button
                  type="button"
                  onClick={onBookClick}
                  className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 rounded-sm bg-gold-gradient text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Detail</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
