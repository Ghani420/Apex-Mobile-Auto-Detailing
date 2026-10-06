import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Mail, MapPin } from 'lucide-react';

interface LegalPageProps {
  page: 'terms' | 'privacy';
  onBackHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ page, onBackHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const defaultTitle = 'Apex Mobile Auto Detailing | Concierge Luxury Car Care';
    const defaultDescription =
      'Showroom-grade mobile auto detailing, paint correction, and ceramic coating delivered directly to your driveway.';

    const metaDesc = document.querySelector('meta[name="description"]');

    if (page === 'terms') {
      document.title = 'Terms & Conditions | Apex Mobile Auto Detailing';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Read the Terms & Conditions for Apex Mobile Auto Detailing mobile detailing appointments, customer responsibilities, water and electricity requirements, and service policies.'
        );
      }
    } else {
      document.title = 'Privacy Policy | Apex Mobile Auto Detailing';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Read the Privacy Policy for Apex Mobile Auto Detailing to learn how we handle information submitted through our online booking request form.'
        );
      }
    }

    return () => {
      document.title = defaultTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', defaultDescription);
      }
    };
  }, [page]);

  return (
    <section className="py-16 sm:py-24 bg-[#050505] relative min-h-[80vh] overflow-hidden">
      {/* Subtle Ambient Gold Lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Home Button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#111116] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-white transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Legal Card Container */}
        <div className="rounded-lg bg-[#0b0b0e] border border-[#d4af37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          <div className="h-1 w-full bg-gold-gradient" />

          <div className="p-6 sm:p-10 md:p-12">
            {/* Page Header */}
            <div className="border-b border-neutral-800/90 pb-8 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14141a] border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold uppercase tracking-widest mb-4">
                {page === 'terms' ? (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Service Agreement & Policies</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-3.5 h-3.5" />
                    <span>Customer Data & Privacy</span>
                  </>
                )}
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                {page === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h1>

              <p className="text-xs sm:text-sm text-neutral-400 mt-3">
                Effective Date: October 6, 2026 &bull; Apex Mobile Auto Detailing
              </p>
            </div>

            {page === 'terms' ? (
              <div className="space-y-7 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    1. General Terms
                  </h2>
                  <p>
                    Welcome to Apex Mobile Auto Detailing. By submitting a booking request through our website or scheduling a mobile auto detailing service with us, you agree to these Terms &amp; Conditions. Please read them carefully before booking an appointment.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    2. Booking Requests
                  </h2>
                  <p>
                    All appointments requested through our online booking form are booking requests subject to review, scheduling availability, and confirmation. Submitting the form does not automatically guarantee a confirmed appointment time until we review your request and confirm your slot.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    3. Service Appointments
                  </h2>
                  <p>
                    We strive to arrive within your requested arrival time window. Arrival times may occasionally vary due to traffic, weather conditions, or the completion of a prior detailing appointment. If any scheduling adjustment is necessary, we will communicate with you via email.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    4. Customer Responsibilities
                  </h2>
                  <p>
                    Customers are responsible for providing accurate vehicle, service, and location details when submitting a booking request, and for ensuring that the vehicle is accessible and parked in a safe, legal, and suitable work area at the scheduled appointment time.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-sm bg-[#121218] border border-[#d4af37]/40">
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    5. Water &amp; Electricity Requirement
                  </h2>
                  <p className="text-neutral-200 font-medium">
                    Apex Mobile Auto Detailing does NOT provide water or electricity. The customer is responsible for providing access to a working water spigot/connection and a standard electrical outlet at the service location for the duration of the detailing appointment.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    6. Service Duration
                  </h2>
                  <p>
                    Estimated service durations (typically 1–1.5 Hours) are general estimates. Actual service time may vary depending on the size, condition, and cleanliness of the vehicle.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    7. Service Location
                  </h2>
                  <p>
                    The service location must provide safe and legal space for our detailing equipment and team to work around your vehicle. If the service is at an apartment complex, workplace, or gated property, the customer is responsible for obtaining any necessary property permission or gate access prior to arrival.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    8. Vehicle Access
                  </h2>
                  <p>
                    The customer must ensure the vehicle is unlocked or keys are made available at the scheduled service time so our team can perform the requested exterior and/or interior detailing services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    9. Payment / Pricing
                  </h2>
                  <p>
                    No upfront payment is collected on our website when submitting a booking request. Service pricing is based on the selected service (Exterior, Interior, or Exterior Interior). Payment is due upon completion of the detailing service.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    10. Cancellation &amp; Rescheduling
                  </h2>
                  <p>
                    If you need to cancel or reschedule your appointment, please notify us by email or Instagram DM as early as possible so we can adjust our schedule accordingly. We also reserve the right to reschedule appointments due to inclement weather or unsafe working conditions.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    11. Service Limitations
                  </h2>
                  <p>
                    While we use professional equipment and cleaning products to achieve the best possible results, certain deep stains, permanent discoloration, worn materials, pet damage, or pre-existing surface defects may not be completely removable through standard detailing services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    12. Customer Property
                  </h2>
                  <p>
                    Please remove all personal valuables, cash, documents, and fragile items from your vehicle before your appointment. Apex Mobile Auto Detailing is not responsible for personal items left inside the vehicle.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    13. Liability
                  </h2>
                  <p>
                    Apex Mobile Auto Detailing exercises care when servicing every vehicle. We are not liable for pre-existing damage, worn or loose interior/exterior components, aftermarket accessories, aging paint or trim, or mechanical/electrical issues unrelated to the detailing service performed.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    14. Changes to Services
                  </h2>
                  <p>
                    We reserve the right to update our service offerings, descriptions, pricing, or these Terms &amp; Conditions at any time. Any updates will be posted on this page.
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800/90">
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                    15. Contact Information
                  </h2>
                  <p className="mb-3">
                    If you have any questions about these Terms &amp; Conditions or your booking request, please contact us:
                  </p>
                  <div className="p-4 rounded-sm bg-[#111116] border border-neutral-800 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-white">Apex Mobile Auto Detailing</div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <a
                        href="mailto:apexmobileautodetailing07@gmail.com"
                        className="hover:text-[#d4af37] transition-colors break-all"
                      >
                        apexmobileautodetailing07@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <span>Service Area: 2958 21rd Ave Street, Los Angeles, CA, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-7 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    1. What Information the Website Collects
                  </h2>
                  <p>
                    Apex Mobile Auto Detailing only collects the information that you voluntarily enter and submit when using our online booking request form. We do not require account registration, and we do not collect payment card details on this website.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    2. Name and Email Submitted Through the Booking Form
                  </h2>
                  <p>
                    When you submit a booking request, we collect your Full Name and Email Address so we know who is requesting the appointment and how to reply to you.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    3. Vehicle and Service Information
                  </h2>
                  <p>
                    Our booking form collects your Vehicle Year, Make &amp; Model, Selected Service (Exterior, Interior, or Exterior Interior), and any optional Additional Notes or Specific Concerns you choose to share about your vehicle.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    4. Service Location Information
                  </h2>
                  <p>
                    To schedule mobile service at your location, our booking form collects your Preferred Date, Arrival Time Window, Driveway or Office Street Address, City / District, and ZIP / Postal Code.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    5. How Booking Information Is Used
                  </h2>
                  <p>
                    The information you submit is used solely to process, review, and respond to your detailing booking request, confirm your appointment date and time, and arrive at your requested service location prepared to detail your vehicle. We do not sell or rent your personal information to anyone.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    6. Email Communication Through the Website Booking System
                  </h2>
                  <p>
                    When you submit the booking form, your booking details are sent to Apex Mobile Auto Detailing by email so our team can review your request and contact you at the email address you provided regarding your appointment.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    7. Third-Party Services Used for Website Functionality / Email Delivery
                  </h2>
                  <p>
                    Our website uses EmailJS to transmit the information you enter into the booking form directly to our business email inbox. If you choose to click our Instagram DM links, you will be directed to Instagram, which operates under its own terms and privacy policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    8. Data Security
                  </h2>
                  <p>
                    We take reasonable measures to protect the booking details you send us and restrict access to customer booking emails to authorized personnel handling scheduling and service delivery.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    9. Data Retention
                  </h2>
                  <p>
                    We retain booking request emails only for as long as necessary to schedule, confirm, and complete your detailing appointment and maintain basic business records, or until you ask us to delete your information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    10. Customer Privacy Rights
                  </h2>
                  <p>
                    You have the right to request access to the personal information you have submitted to us, ask us to update or correct any inaccurate details, or request that we delete your booking information from our email records.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    11. How Customers Can Contact Apex Regarding Their Information
                  </h2>
                  <p className="mb-3">
                    If you have any questions about this Privacy Policy or would like to review, update, or delete the information you submitted through our booking form, please contact us:
                  </p>
                  <div className="p-4 rounded-sm bg-[#111116] border border-neutral-800 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-white">Apex Mobile Auto Detailing</div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <a
                        href="mailto:apexmobileautodetailing07@gmail.com"
                        className="hover:text-[#d4af37] transition-colors break-all"
                      >
                        apexmobileautodetailing07@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <span>Service Area: 2958 21rd Ave Street, Los Angeles, CA, USA</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800/90">
                  <h2 className="font-heading text-base sm:text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    12. Effective Date and Policy Updates
                  </h2>
                  <p>
                    This Privacy Policy is effective as of October 6, 2026. If we make any updates to how we handle booking information, we will post the updated policy on this page.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
