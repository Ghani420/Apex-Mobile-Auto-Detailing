export interface ServiceItem {
  id: string;
  name: string;
  category: 'exterior' | 'interior' | 'exterior-interior' | string;
  tagline: string;
  description: string;
  duration: string;
  startingPrice?: string;
  popular?: boolean;
  benefits: string[];
  benefitGroups?: {
    title: string;
    items: string[];
  }[];
  image: string;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  includes: string[];
  bestFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: "Apex Mobile Auto Detailing",
  shortName: "Apex Detailing",
  tagline: "Premium Mobile Auto Detailing Delivered To Your Driveway",
  heroHeadline: "PREMIUM DETAILING. DELIVERED TO YOUR DRIVEWAY.",
  heroSubheadline: "Experience showroom perfection without leaving your home or office. We bring high-end equipment, artisan technique, and hospital-grade care directly to you.",
  phone: "+1 (555) 273-9338",
  phoneFormatted: "(555) APEX-DET",
  email: "apexmobileautodetailing07@gmail.com",
  serviceCity: "Metropolitan Area",
  serviceState: "[State / Province]",
  serviceAreas: [
    "Downtown & Financial District",
    "Highland Park & Estates",
    "Westside Luxury Enclaves",
    "North Shore & Suburbs",
    "Corporate Campuses & Offices",
    "Private Residential Driveways"
  ],
  hours: "Monday – Saturday: 7:30 AM – 6:30 PM | Sunday: By Appointment",
  logoUrl: "/apex_brand_logo_1790608426509.jpg",
  heroImageUrl: "/hero_detailing_luxury_1790608441789.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "exterior",
    name: "Exterior",
    category: "exterior",
    tagline: "EXTERIOR",
    description: "Professional exterior detailing focused on restoring a clean, glossy and well-maintained finish.",
    duration: "1–1.5 Hours",
    startingPrice: "$169",
    benefits: [
      "Pressure Washer Rinse",
      "Foam Soap Hand Wash",
      "Buffer Wax",
      "Tire Degrease",
      "Dress Wheels, Tires & Rims",
      "Clean All Door Jambs & Trunk Seals",
      "Dry With Microfiber Cloth"
    ],
    image: "/hero_detailing_luxury_1790608441789.jpg"
  },
  {
    id: "interior",
    name: "Interior",
    category: "interior",
    tagline: "INTERIOR",
    description: "Thorough interior cleaning designed to refresh the cabin and leave your vehicle looking and feeling clean.",
    duration: "1–1.5 Hours",
    startingPrice: "$189",
    popular: true,
    benefits: [
      "Vacuum All Carpets & Seats",
      "Wipe Down All Interior Surfaces",
      "Dress Interior Surfaces",
      "Leather Conditioner",
      "Shampoo All Stains",
      "Pet Hair Removal",
      "Clean Interior Windows"
    ],
    image: "/luxury_interior_detail_1790608472249.jpg"
  },
  {
    id: "exterior-interior",
    name: "Exterior Interior",
    category: "exterior-interior",
    tagline: "EXTERIOR INTERIOR",
    description: "Professional exterior and interior detailing designed to leave your vehicle clean, refreshed, and well-maintained inside and out.",
    duration: "1–1.5 Hours",
    startingPrice: "$229",
    benefits: [
      "Complete interior and exterior detailing",
      "Thorough cleaning inside and out",
      "One complete detailing service for your vehicle"
    ],
    image: "/paint_correction_mirror_1790608484574.jpg"
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: "pkg-essential",
    name: "Essential Refresh",
    subtitle: "Routine Concierge Care",
    price: "$179",
    duration: "2 – 2.5 Hours",
    description: "Ideal for well-maintained daily drivers requiring a thorough, scratch-free hand wash and interior sanitizing.",
    includes: [
      "Gentle foam hand wash & microfiber dry",
      "Wheel faces, barrels, and tire dress (satin)",
      "Interior vacuum of seats, carpets & trunk",
      "Dashboard, console & door panel wipe-down",
      "Streak-free interior & exterior glass",
      "Spray wax booster for enhanced shine"
    ],
    bestFor: "Monthly upkeep and well-maintained daily vehicles"
  },
  {
    id: "pkg-premium",
    name: "Signature Detail",
    subtitle: "Complete Showroom Reset",
    price: "$329",
    duration: "4 – 5 Hours",
    isPopular: true,
    badge: "MOST POPULAR",
    description: "Our signature total reconditioning package. Restores exterior depth and purifies your cabin with steam extraction.",
    includes: [
      "Everything in Essential Refresh, plus:",
      "Full paint decontamination (clay bar & iron remover)",
      "High-pressure door jambs & gas cap detailing",
      "Deep steam sanitation of vents & high-touch points",
      "Hot water carpet shampoo & fabric stain extraction",
      "Fine leather deep clean & nourishing conditioner",
      "Engine bay detail & protective dress",
      "6-Month synthetic hydrophobic ceramic sealant"
    ],
    bestFor: "Vehicles needing deep reconditioning and renewed protection"
  },
  {
    id: "pkg-apex",
    name: "Apex Masterpiece",
    subtitle: "Ultimate Paint Correction & Ceramic",
    price: "$699",
    duration: "6 – 8+ Hours",
    badge: "THE PINNACLE",
    description: "The definitive bespoke detailing package. Multi-stage paint correction paired with long-term ceramic shield.",
    includes: [
      "Everything in Signature Detail, plus:",
      "Multi-stage machine paint correction (swirl removal)",
      "Paint thickness gauge diagnostic report",
      "Windshield & side glass hydrophobic ceramic coating",
      "Alloy wheel ceramic coat on faces & calipers",
      "Fabric ceramic guard & leather barrier treatment",
      "12-Month premium ceramic paint coating",
      "Complimentary follow-up maintenance wash"
    ],
    bestFor: "Exotics, collector cars, and perfectionists"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Marcus Vance",
    vehicle: "Porsche 911 GT3",
    rating: 5,
    date: "Verified Customer",
    comment: "Apex arrived right at my driveway at 8:00 AM sharp with a fully self-contained rig. The paint correction on my jet black Porsche exceeded anything I've seen even at high-end studios. The gold standard of detailing.",
    service: "Exterior"
  },
  {
    id: "r2",
    author: "Eleanor Sterling",
    vehicle: "Range Rover Autobiography",
    rating: 5,
    date: "Verified Customer",
    comment: "With three kids and a busy executive schedule, having Apex detail my vehicle while I worked from home was effortless luxury. The leather looks brand new, with no greasy residue. Outstanding attention to detail.",
    service: "Interior"
  },
  {
    id: "r3",
    author: "David Chen",
    vehicle: "Audi RS6 Avant",
    rating: 5,
    date: "Verified Customer",
    comment: "The ceramic coating they applied is miraculous. Water literally blows off the car when driving in the rain. Incredible professionalism, courteous communication, and pristine results.",
    service: "Custom Detailing"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Operations",
    question: "What is mobile auto detailing?",
    answer: "Mobile auto detailing brings professional detailing directly to your location — your home, driveway, garage, or office parking lot. We bring our professional detailing equipment and supplies directly to you. Customer is responsible for providing water and electricity at the service location."
  },
  {
    id: "faq-2",
    category: "Logistics",
    question: "Do you come to my location?",
    answer: "Yes, 100%. We operate across our entire metropolitan service area. Whether you are at a private residence, high-rise residential valet (with permit), or executive corporate office, we arrive fully prepared to complete your detail on-site."
  },
  {
    id: "faq-3",
    category: "Logistics",
    question: "Do I need to provide water or electricity?",
    answer: "Our mobile detailing setup is self-sufficient for most locations. Having access to an exterior water spigot or standard 120V outlet is appreciated and allows maximum efficiency, but we can accommodate special arrangements when notified in advance."
  },
  {
    id: "faq-4",
    category: "Service Time",
    question: "How long does detailing take?",
    answer: "Service duration depends on vehicle size, condition, and chosen package. Typically, our detailing service takes around 1 to 1.5 hours. We focus on delivering a thorough and professional detail without rushing the process."
  },
  {
    id: "faq-5",
    category: "Vehicles",
    question: "What vehicles do you detail?",
    answer: "We detail luxury sports cars, exotics, sedans, SUVs, trucks, and classic collectors vehicles. Every vehicle receives bespoke care calibrated to its specific paint system and interior materials."
  },
  {
    id: "faq-6",
    category: "Maintenance",
    question: "How often should I detail my vehicle?",
    answer: "For daily drivers, we recommend an in-depth full detail every 4 to 6 months, complemented by our bi-weekly or monthly maintenance washes. Ceramic-coated vehicles benefit from an annual inspection and decontamination topper."
  },
  {
    id: "faq-7",
    category: "Packages",
    question: "What is included in a full detail?",
    answer: "Our Signature Full Detail includes a complete multi-stage hand wash, chemical iron removal, clay bar decontamination, wheel barrel deep cleansing, hot water carpet and upholstery steam extraction, leather deep cleaning and UV conditioning, engine bay treatment, and a 6-month ceramic sealant."
  },
  {
    id: "faq-8",
    category: "Services",
    question: "Do you offer dedicated interior detailing?",
    answer: "Yes. Our Deep Interior Restoration targets pet hair, deep stains, leather oils, odors, and bacteria. We use hospital-grade dry steam and pH-balanced chemicals that restore a factory satin matte finish without synthetic fragrances or slippery silicones."
  },
  {
    id: "faq-9",
    category: "Protection",
    question: "Do you offer ceramic coating?",
    answer: "Yes. We offer professional multi-year ceramic coatings. Ceramic coatings provide a hard, glass-like SiO2 barrier that protects your clear coat from UV fading, bird droppings, acid rain, and oxidation while providing unmatched hydrophobic self-cleaning properties."
  },
  {
    id: "faq-10",
    category: "Booking",
    question: "How do I book an appointment?",
    answer: "Booking is quick and easy. Submit your online booking request below with your vehicle details and preferred service. You can also contact us directly through Instagram DM or email, and we’ll get back to you promptly to confirm your booking details."
  }
];

export const TRUST_METRICS = [
  { label: "Vehicles Perfected", value: "850+", detail: "Luxury & exotic fleet experience" },
  { label: "Five-Star Reviews", value: "100%", detail: "Discerning client satisfaction" },
  { label: "Mobile Self-Contained", value: "100%", detail: "Studio grade gear at your door" }
];
