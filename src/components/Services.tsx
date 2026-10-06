import React, { useState } from 'react';
import { Clock, Check, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'exterior' | 'interior' | 'exterior-interior'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-full max-w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full max-w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mobile Auto Detailing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Bespoke Mobile Services
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Professional mobile detailing delivered directly to your driveway or workplace, tailored to your vehicle's specific condition.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-[#0e0e12] rounded-md border border-neutral-800/80 max-w-xl mx-auto">
            {[
              { id: 'all', label: 'ALL SERVICES' },
              { id: 'exterior', label: 'EXTERIOR' },
              { id: 'interior', label: 'INTERIOR' },
              { id: 'exterior-interior', label: 'EXTERIOR INTERIOR' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all ${
                  activeCategory === tab.id
                    ? 'bg-gold-gradient text-black font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid ${filteredServices.length === 1 ? 'max-w-md mx-auto grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'} gap-8`}>
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative rounded-sm bg-[#0c0c0f] border border-neutral-800 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]"
            >
              {/* Top Accent Line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent group-hover:via-[#d4af37] transition-all" />

              <div>
                {/* Service Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                    {service.tagline}
                  </div>

                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-gold-gradient text-black px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      Client Favorite
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Duration and Pricing Bar */}
                  {(service.duration || service.startingPrice) && (
                    <div className="flex items-center justify-between py-2.5 px-3 rounded bg-[#131317] border border-neutral-800 mb-6 text-xs">
                      {service.duration && (
                        <span className="flex items-center gap-1.5 text-neutral-400">
                          <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{service.duration}</span>
                        </span>
                      )}
                      {service.startingPrice && (
                        <span className="text-base font-bold text-[#d4af37] font-mono">
                          {service.startingPrice}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Bullet Benefits */}
                  {service.benefitGroups ? (
                    <div className="space-y-4 mb-6">
                      {service.benefitGroups.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                            {group.title}
                          </div>
                          {group.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        WHAT'S INCLUDED:
                      </div>
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-3 rounded-sm bg-[#16161c] hover:bg-gold-gradient text-neutral-200 hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#d4af37]/30 hover:border-transparent group/btn"
                >
                  <span>Select & Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Consultation Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#0c0c0f] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
              Need A Bespoke Detailing Package?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              We detail multi-car exotic collections, vintage restorations, and corporate fleets with custom schedules.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Fleet & Exotic Consultation')}
            className="px-6 py-3 rounded-sm bg-gold-gradient text-black font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex-shrink-0"
          >
            Request Custom Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
