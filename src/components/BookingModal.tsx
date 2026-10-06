import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  X,
  Calendar,
  MapPin,
  Car,
  User,
  CheckCircle2,
  Sparkles,
  Send,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

const EMAILJS_SERVICE_ID = 'service_cnrmdoi';
const EMAILJS_TEMPLATE_ID = 'template_bgnllff';
const EMAILJS_PUBLIC_KEY = 'hjb28ge_cIUHwzNpt';

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

const BOOKING_SERVICES = ['Exterior', 'Interior', 'Exterior Interior'] as const;
const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
const PERIODS = ['AM', 'PM'] as const;
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService = 'Exterior',
}) => {
  const resolvedInitialService = BOOKING_SERVICES.includes(preSelectedService as any)
    ? preSelectedService
    : 'Exterior';

  const [selectedHour, setSelectedHour] = useState('10');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const today = new Date();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [dateError, setDateError] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);
  const hourListRef = useRef<HTMLDivElement>(null);
  const minuteListRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const getInitialFormData = (serviceName: string) => ({
    full_name: '',
    email: '',
    phone: '',
    year: '2024',
    make_model: '',
    service: serviceName,
    preferred_date: '',
    arrival_time: '10 : 00 AM',
    address: '',
    city: BUSINESS_INFO.serviceCity,
    zip: '',
    notes: '',
  });

  const [formData, setFormData] = useState(() => getInitialFormData(resolvedInitialService));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (BOOKING_SERVICES.includes(preSelectedService as any)) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Prevent background page scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
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

  const updateTimeSelection = (hour: string, minute: string, period: 'AM' | 'PM') => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setSelectedPeriod(period);
    setFormData((prev) => ({
      ...prev,
      arrival_time: `${hour} : ${minute} ${period}`,
    }));
  };

  const handleSelectDate = (year: number, month: number, day: number) => {
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const yyyy = String(year);
    setFormData((prev) => ({
      ...prev,
      preferred_date: `${mm}/${dd}/${yyyy}`,
    }));
    setDateError(false);
    setIsDatePickerOpen(false);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
        setIsTimePickerOpen(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsDatePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isTimePickerOpen) {
      const hourEl = hourListRef.current?.querySelector(`[data-value="${selectedHour}"]`) as HTMLElement | null;
      if (hourEl && hourListRef.current) {
        hourListRef.current.scrollTop = hourEl.offsetTop - hourListRef.current.clientHeight / 2 + hourEl.clientHeight / 2;
      }
      const minEl = minuteListRef.current?.querySelector(`[data-value="${selectedMinute}"]`) as HTMLElement | null;
      if (minEl && minuteListRef.current) {
        minuteListRef.current.scrollTop = minEl.offsetTop - minuteListRef.current.clientHeight / 2 + minEl.clientHeight / 2;
      }
    }
  }, [isTimePickerOpen, selectedHour, selectedMinute]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (submitError) setSubmitError(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setSelectedHour('10');
    setSelectedMinute('00');
    setSelectedPeriod('AM');
    setFormData(getInitialFormData(resolvedInitialService));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.preferred_date) {
      setDateError(true);
      setIsDatePickerOpen(true);
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      resetForm();

      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2800);
    } catch (error) {
      console.error('EmailJS booking submission error:', error);
      setIsSubmitting(false);
      setSubmitError('Something went wrong while sending your booking request. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-x-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-xl bg-[#0c0c0f] border border-[#d4af37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.2)] text-neutral-100 scroll-smooth"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar with Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between gap-2 px-4 sm:px-8 py-3.5 sm:py-4 bg-[#0c0c0f]/95 backdrop-blur-md border-b border-neutral-800/90">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#111114] border border-[#d4af37]/30 text-[#d4af37] text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest min-w-0">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Direct Concierge Booking</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#16161d] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-[#d4af37]/40 hover:border-transparent flex items-center justify-center transition-all shadow-md flex-shrink-0"
            aria-label="Close Booking Popup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8">
          {/* Header Description */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2
              id="booking-modal-title"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
            >
              Request Your Detail
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3 mb-3" />
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Book your preferred date and time. We’ll come to your location with everything needed for a professional detailing service.
            </p>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-gold-gradient text-black flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                Booking request received!
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                We&apos;ve received your detailing request and will review your preferred date and time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (closeTimeoutRef.current) {
                      window.clearTimeout(closeTimeoutRef.current);
                    }
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-sm bg-gold-gradient text-black text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Interactive 4-Step Booking Form */
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="p-3.5 rounded-sm bg-red-950/60 border border-red-500/60 text-red-200 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Step 1: Vehicle Profile */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span>Step 1: Your Vehicle Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Year
                    </label>
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g. 2024"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Make & Model
                    </label>
                    <input
                      type="text"
                      name="make_model"
                      value={formData.make_model}
                      onChange={handleInputChange}
                      placeholder="e.g. Porsche 911 / BMW M4 / Tesla Model S"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Step 2: Service / Package Requested</span>
                </h3>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Selected Service or Package
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs font-medium"
                  >
                    {BOOKING_SERVICES.map((serviceName) => (
                      <option key={serviceName} value={serviceName}>
                        {serviceName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Logistics & Address */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Step 3: Location & Preferred Scheduling</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div ref={datePickerRef} className="relative">
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Preferred Date
                    </label>

                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setIsDatePickerOpen((prev) => !prev)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setIsDatePickerOpen((prev) => !prev);
                        }
                      }}
                      aria-expanded={isDatePickerOpen}
                      aria-label="Preferred Date"
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border cursor-pointer select-none ${
                        isDatePickerOpen
                          ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : dateError
                          ? 'border-red-500/80'
                          : 'border-neutral-800 hover:border-neutral-700'
                      } focus:border-[#d4af37] focus:outline-none text-xs flex items-center justify-between transition-all`}
                    >
                      <input
                        type="text"
                        name="preferred_date"
                        value={formData.preferred_date}
                        placeholder="mm/dd/yyyy"
                        readOnly
                        required
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDatePickerOpen((prev) => !prev);
                        }}
                        className="bg-transparent border-none outline-none w-full cursor-pointer font-mono text-xs text-white placeholder:text-neutral-400 pointer-events-none"
                      />
                      <Calendar className="w-4 h-4 text-[#d4af37] flex-shrink-0 ml-2" />
                    </div>

                    {dateError && !formData.preferred_date && (
                      <span className="text-[11px] text-[#d4af37] mt-1 block">
                        Please select your preferred date from the calendar.
                      </span>
                    )}

                    {/* Interactive Calendar Date Picker Popover */}
                    {isDatePickerOpen && (
                      <div className="absolute left-0 right-0 sm:w-72 mt-2 z-40 rounded-md bg-[#0b0b0e] border border-[#d4af37]/60 shadow-[0_15px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(212,175,55,0.18)] overflow-hidden">
                        {/* Month & Year Navigation Header */}
                        <div className="px-3.5 py-2.5 bg-[#121217] border-b border-neutral-800 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            aria-label="Previous Month"
                            className="w-7 h-7 rounded-sm bg-[#1a1a22] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-neutral-700 hover:border-transparent flex items-center justify-center transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                            {MONTH_NAMES[viewMonth]} {viewYear}
                          </span>

                          <button
                            type="button"
                            onClick={handleNextMonth}
                            aria-label="Next Month"
                            className="w-7 h-7 rounded-sm bg-[#1a1a22] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-neutral-700 hover:border-transparent flex items-center justify-center transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Days of Week Header */}
                        <div className="grid grid-cols-7 text-center py-2 px-2 bg-[#0e0e13] border-b border-neutral-800/80 text-[10px] font-bold uppercase tracking-wider text-[#d4af37]">
                          {DAY_NAMES.map((day) => (
                            <div key={day}>{day}</div>
                          ))}
                        </div>

                        {/* Calendar Days Grid */}
                        <div className="grid grid-cols-7 gap-1 p-2.5 bg-[#0b0b0e]">
                          {Array.from({ length: getFirstDayOfMonth(viewYear, viewMonth) }).map((_, idx) => (
                            <div key={`empty-${idx}`} className="h-8" />
                          ))}

                          {Array.from({ length: getDaysInMonth(viewYear, viewMonth) }, (_, i) => i + 1).map((day) => {
                            const mm = String(viewMonth + 1).padStart(2, '0');
                            const dd = String(day).padStart(2, '0');
                            const dateStr = `${mm}/${dd}/${viewYear}`;
                            const isSelected = formData.preferred_date === dateStr;
                            const isToday =
                              today.getFullYear() === viewYear &&
                              today.getMonth() === viewMonth &&
                              today.getDate() === day;

                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => handleSelectDate(viewYear, viewMonth, day)}
                                className={`h-8 rounded-sm font-mono text-xs flex items-center justify-center transition-all ${
                                  isSelected
                                    ? 'bg-gold-gradient text-black font-extrabold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                                    : isToday
                                    ? 'border border-[#d4af37] text-[#f5df88] font-bold hover:bg-[#181820]'
                                    : 'text-neutral-300 hover:bg-[#181820] hover:text-white'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Calendar Footer (Today / Clear) */}
                        <div className="px-3 py-2 bg-[#121217] border-t border-neutral-800 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, preferred_date: '' }));
                              setIsDatePickerOpen(false);
                            }}
                            className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                          >
                            Clear
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              const now = new Date();
                              setViewMonth(now.getMonth());
                              setViewYear(now.getFullYear());
                              handleSelectDate(now.getFullYear(), now.getMonth(), now.getDate());
                            }}
                            className="px-3 py-1 rounded-sm bg-gold-gradient text-black font-bold text-[11px] uppercase tracking-wider hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all"
                          >
                            Today
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrival Time Window */}
                  <div ref={timePickerRef} className="relative">
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Arrival Time Window
                    </label>

                    <input
                      type="hidden"
                      name="arrival_time"
                      value={formData.arrival_time}
                    />

                    <button
                      type="button"
                      onClick={() => setIsTimePickerOpen((prev) => !prev)}
                      aria-expanded={isTimePickerOpen}
                      className={`w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border ${
                        isTimePickerOpen
                          ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'border-neutral-800 hover:border-neutral-700'
                      } focus:border-[#d4af37] focus:outline-none text-white text-xs flex items-center justify-between transition-all`}
                    >
                      <span className="flex items-center gap-2 font-mono font-semibold tracking-wider text-white">
                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{formData.arrival_time}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 ${
                          isTimePickerOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile-Style 3-Column Time Picker Popover */}
                    {isTimePickerOpen && (
                      <div className="absolute left-0 right-0 mt-2 z-40 rounded-md bg-[#0b0b0e] border border-[#d4af37]/60 shadow-[0_15px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.18)] overflow-hidden">
                        {/* Selected Time Preview Header */}
                        <div className="px-4 py-2.5 bg-[#121217] border-b border-neutral-800 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            Select Preferred Time
                          </span>
                          <span className="font-mono text-xs font-bold text-[#f5df88] bg-black/50 px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                            {selectedHour} : {selectedMinute} {selectedPeriod}
                          </span>
                        </div>

                        {/* Column Headers */}
                        <div className="grid grid-cols-3 text-center py-2 bg-[#0e0e13] border-b border-neutral-800/80 text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                          <div>Hour</div>
                          <div className="border-x border-neutral-800/80">Minutes</div>
                          <div>AM / PM</div>
                        </div>

                        {/* 3 Scrollable Columns */}
                        <div className="grid grid-cols-3 h-48 bg-[#0b0b0e] divide-x divide-neutral-800/80">
                          {/* Column 1: HOUR (01 - 12) */}
                          <div
                            ref={hourListRef}
                            className="overflow-y-auto scroll-smooth p-1.5 space-y-1 scrollbar-thin"
                          >
                            {HOURS.map((hour) => {
                              const isSelected = selectedHour === hour;
                              return (
                                <button
                                  key={hour}
                                  type="button"
                                  data-value={hour}
                                  onClick={() => updateTimeSelection(hour, selectedMinute, selectedPeriod)}
                                  className={`w-full py-2 rounded-sm font-mono text-xs transition-all flex items-center justify-center ${
                                    isSelected
                                      ? 'bg-gold-gradient text-black font-extrabold shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                                      : 'text-neutral-300 hover:bg-[#181820] hover:text-white'
                                  }`}
                                >
                                  {hour}
                                </button>
                              );
                            })}
                          </div>

                          {/* Column 2: MINUTES (00 - 59) */}
                          <div
                            ref={minuteListRef}
                            className="overflow-y-auto scroll-smooth p-1.5 space-y-1 scrollbar-thin"
                          >
                            {MINUTES.map((minute) => {
                              const isSelected = selectedMinute === minute;
                              return (
                                <button
                                  key={minute}
                                  type="button"
                                  data-value={minute}
                                  onClick={() => updateTimeSelection(selectedHour, minute, selectedPeriod)}
                                  className={`w-full py-2 rounded-sm font-mono text-xs transition-all flex items-center justify-center ${
                                    isSelected
                                      ? 'bg-gold-gradient text-black font-extrabold shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                                      : 'text-neutral-300 hover:bg-[#181820] hover:text-white'
                                  }`}
                                >
                                  {minute}
                                </button>
                              );
                            })}
                          </div>

                          {/* Column 3: AM / PM */}
                          <div className="p-2 flex flex-col justify-center gap-2 bg-[#0d0d12]">
                            {PERIODS.map((period) => {
                              const isSelected = selectedPeriod === period;
                              return (
                                <button
                                  key={period}
                                  type="button"
                                  onClick={() => updateTimeSelection(selectedHour, selectedMinute, period)}
                                  className={`w-full py-3 rounded-sm font-heading text-xs tracking-wider uppercase transition-all flex items-center justify-center ${
                                    isSelected
                                      ? 'bg-gold-gradient text-black font-extrabold shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                                      : 'bg-[#15151b] text-neutral-300 border border-neutral-800 hover:border-[#d4af37]/40 hover:text-white'
                                  }`}
                                >
                                  {period}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Confirm Footer */}
                        <div className="p-2.5 bg-[#121217] border-t border-neutral-800 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setIsTimePickerOpen(false)}
                            className="w-full sm:w-auto px-4 py-1.5 rounded-sm bg-gold-gradient text-black font-bold text-[11px] uppercase tracking-wider hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
                          >
                            Confirm Time
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Driveway or Office Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. 1244 Estate Ridge Blvd, Private Driveway"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      City / District
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="e.g. 90210"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Customer Details & Special Requests */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Step 4: Customer Details & Special Requests</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (323) 555-0123"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Additional Notes / Specific Concerns (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Swirl marks on hood, pet hair in back cargo, gated community code..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#141418] border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Strip */}
              <div className="p-4 rounded-sm bg-[#121217] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-neutral-400 block uppercase tracking-wider">
                    Selected Service:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold font-heading uppercase text-gold-gradient">
                      {formData.service}
                    </span>
                    <span className="text-xs text-neutral-400">
                      &bull; No payment required upfront
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gold-gradient text-black font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Reservation...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Booking & Lock In Slot</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
