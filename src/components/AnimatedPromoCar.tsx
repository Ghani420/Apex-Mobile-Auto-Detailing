import React from 'react';

/**
 * AnimatedPromoCar
 * A modern 2025–2026 luxury supercar with an aggressive aerodynamic wedge silhouette,
 * sleek razor LED headlights, sculpted side air intakes, wide forged gold wheels,
 * and glossy obsidian metallic paint, towing a promotional "10% OFF" banner.
 *
 * Sequence:
 * 1. Drives in smoothly from the left.
 * 2. Stops perfectly centered with the complete 10% OFF banner fully visible for 3.3 seconds.
 * 3. Starts moving again and exits smoothly through the right side.
 * 4. Pauses off-screen, then repeats the loop continuously.
 */
export const AnimatedPromoCar: React.FC = () => {
  return (
    <div
      className="w-full relative rounded-lg bg-gradient-to-b from-[#09090d] via-[#0b0b10] to-[#040406] border border-[#d4af37]/35 shadow-[inset_0_2px_15px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.15)] overflow-hidden h-32 min-[400px]:h-36 sm:h-40 flex items-center justify-center my-2.5 sm:my-3.5 select-none"
      aria-label="Apex 10% OFF Special Offer Car Animation"
      role="img"
    >
      {/* Studio Lighting & Ambient Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/5 to-transparent rounded-full blur-xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Road / Runway Platform at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-5 min-[400px]:h-6 bg-gradient-to-b from-[#0a0a0e] to-[#020203] border-t border-neutral-800/90 pointer-events-none overflow-hidden">
        {/* Subtle Gold Runner Track Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
        {/* Animated Moving Dashed Road Track Line (stops when car stops) */}
        <div className="animated-road-track absolute bottom-1.5 min-[400px]:bottom-2 left-0 right-0 h-[1px]" />
      </div>

      {/* Glossy Road Mirror Reflection Gradient */}
      <div className="absolute bottom-5 min-[400px]:bottom-6 left-0 right-0 h-4 min-[400px]:h-5 bg-gradient-to-t from-[#d4af37]/10 via-[#d4af37]/2 to-transparent pointer-events-none" />

      {/* Moving Convoy (Supercar + Tow Cords + 10% OFF Banner) - Fluid Responsive Container */}
      <div className="promo-car-convoy absolute top-1/2 left-1/2 w-[94%] max-w-[370px] aspect-[375/100] flex items-center pointer-events-none">
        <svg
          viewBox="0 0 375 100"
          className="w-full h-auto max-h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Gold Gradient for Lettering & Accents */}
            <linearGradient id="apex-gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff9db" />
              <stop offset="25%" stopColor="#f5df88" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="75%" stopColor="#b8860b" />
              <stop offset="100%" stopColor="#dfb755" />
            </linearGradient>

            {/* Modern 2026 Supercar Paint: Deep Obsidian Metallic Body Gradient */}
            <linearGradient id="car-paint-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#282836" />
              <stop offset="15%" stopColor="#161622" />
              <stop offset="38%" stopColor="#323244" />
              <stop offset="68%" stopColor="#0c0c12" />
              <stop offset="100%" stopColor="#020204" />
            </linearGradient>

            {/* Roof & Shoulder Specular Highlight Gradient */}
            <linearGradient id="car-highlight-gloss" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(255, 245, 205, 0.55)" />
              <stop offset="65%" stopColor="rgba(212, 175, 55, 0.95)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Dynamic Specular Sweep Sheen Gradient */}
            <linearGradient id="specular-sweep-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.25)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.75)" />
              <stop offset="60%" stopColor="rgba(245, 223, 136, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* 2026 Stealth Fighter Canopy Glass Gradient */}
            <linearGradient id="car-glass-tint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a0a10" />
              <stop offset="40%" stopColor="#222234" />
              <stop offset="70%" stopColor="#08080e" />
              <stop offset="100%" stopColor="#181826" />
            </linearGradient>

            {/* Futuristic LED Headlight Projector Light Beam */}
            <linearGradient id="headlight-beam-grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255, 250, 220, 0.85)" />
              <stop offset="30%" stopColor="rgba(245, 223, 136, 0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Banner Background Gradient */}
            <linearGradient id="banner-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14141a" />
              <stop offset="45%" stopColor="#0a0a0e" />
              <stop offset="75%" stopColor="#161620" />
              <stop offset="100%" stopColor="#08080b" />
            </linearGradient>

            {/* Forged Wheel Performance Tire Gradient */}
            <radialGradient id="wheel-tire-grad" cx="50%" cy="50%" r="50%">
              <stop offset="55%" stopColor="#1c1c26" />
              <stop offset="85%" stopColor="#0e0e13" />
              <stop offset="100%" stopColor="#040406" />
            </radialGradient>

            {/* Wheel Rim Metallic Reflection */}
            <linearGradient id="rim-gold-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8d4" />
              <stop offset="45%" stopColor="#d4af37" />
              <stop offset="80%" stopColor="#996515" />
              <stop offset="100%" stopColor="#dfb755" />
            </linearGradient>

            {/* Drop Shadow Filter for Banner & Car */}
            <filter id="shadow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3.5" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.85" />
            </filter>

            {/* Gold Glow Filter for Headlights & 10% OFF Text */}
            <filter id="gold-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* 2026 Supercar Body Silhouette Clip Path for Specular Sheen Sweep */}
            <clipPath id="supercar-body-clip">
              <path
                d="
                  M 186 85
                  L 184 62
                  Q 183 50, 194 48
                  L 198 48
                  Q 216 45, 238 41
                  Q 260 33, 288 33
                  Q 302 34, 316 48
                  L 326 52
                  Q 344 62, 355 69
                  L 358 74
                  L 357 80
                  L 359 84
                  L 328 85
                  A 14 14 0 0 0 298 85
                  L 234 85
                  A 14 14 0 0 0 204 85
                  L 186 85
                  Z
                "
              />
            </clipPath>
          </defs>

          {/* 1. ROAD CONTACT SHADOW (Directly Under Tires and Banner) */}
          <ellipse cx="270" cy="89" rx="88" ry="4" fill="#000000" opacity="0.88" />
          <ellipse cx="88" cy="85" rx="74" ry="3" fill="#000000" opacity="0.4" />

          {/* 2. DUAL GOLD BRAIDED TOW CABLES */}
          <g className="tow-cables">
            {/* Top Braided Gold Cable */}
            <path
              d="M 162 38 Q 174 45, 186 54"
              stroke="url(#apex-gold-metal)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Bottom Braided Gold Cable */}
            <path
              d="M 162 68 Q 174 66, 186 66"
              stroke="url(#apex-gold-metal)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cable Attachment Fastener at Car Bumper */}
            <circle cx="186" cy="60" r="2.2" fill="#f5df88" stroke="#996515" strokeWidth="0.8" />
          </g>

          {/* 3. PROMOTIONAL GOLD & BLACK "10% OFF" BANNER */}
          <g className="promo-banner" filter="url(#shadow-filter)">
            {/* Banner Pennant / Flag Outline with Aerodynamic Notch */}
            <path
              d="M 6 18 L 162 18 L 162 84 L 6 84 L 18 51 Z"
              fill="url(#banner-bg-grad)"
              stroke="url(#apex-gold-metal)"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Inner Gold Stitched Dashed Hairline */}
            <path
              d="M 12 23 L 156 23 L 156 79 L 12 79 L 22 51 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.75"
              strokeDasharray="3.5 2"
              opacity="0.65"
            />

            {/* Right Edge Reinforcement Grommets */}
            <circle cx="158" cy="38" r="2.8" fill="#0a0a0d" stroke="url(#apex-gold-metal)" strokeWidth="1.2" />
            <circle cx="158" cy="68" r="2.8" fill="#0a0a0d" stroke="url(#apex-gold-metal)" strokeWidth="1.2" />

            {/* Top Pill: "★ APEX EXCLUSIVE ★" */}
            <rect
              x="40"
              y="21.5"
              width="100"
              height="11"
              rx="2.5"
              fill="rgba(212, 175, 55, 0.16)"
              stroke="rgba(212, 175, 55, 0.45)"
              strokeWidth="0.75"
            />
            <text
              x="90"
              y="29.5"
              textAnchor="middle"
              fill="#f5df88"
              fontSize="6.8"
              fontWeight="800"
              letterSpacing="1.3"
              fontFamily="'Cinzel', 'Montserrat', serif"
            >
              ★ APEX EXCLUSIVE ★
            </text>

            {/* Main Headline: "10% OFF" in Bold Gold Typography - Centered & Highly Legible */}
            <text
              x="90"
              y="58"
              textAnchor="middle"
              fill="url(#apex-gold-metal)"
              fontSize="28"
              fontWeight="900"
              letterSpacing="1.2"
              fontFamily="'Cinzel', 'Montserrat', serif"
              filter="url(#gold-glow-filter)"
            >
              10% OFF
            </text>

            {/* Bottom Label: "SPECIAL PROMO VOUCHER" */}
            <text
              x="90"
              y="73.5"
              textAnchor="middle"
              fill="#d4af37"
              fontSize="6.5"
              fontWeight="700"
              letterSpacing="1"
              fontFamily="'Montserrat', sans-serif"
            >
              SPECIAL PROMO VOUCHER
            </text>

            {/* Flanking Decorative Gold Sparkle Icons on Banner */}
            <polygon points="26,51 29,48 32,51 29,54" fill="url(#apex-gold-metal)" />
            <polygon points="148,51 151,48 154,51 151,54" fill="url(#apex-gold-metal)" />
          </g>

          {/* 4. MODERN 2025–2026 LUXURY SUPERCAR (Leading the Convoy) */}
          <g className="supercar-2026" filter="url(#shadow-filter)">
            {/* Futuristic Headlight Beam (Projected Forward on Road) */}
            <polygon
              points="356,68 375,57 375,88 356,76"
              fill="url(#headlight-beam-grad)"
              className="headlight-beam-glow"
            />

            {/* Main Supercar Wedge Body (Aerodynamic Exotic Silhouette) */}
            <path
              d="
                M 186 85
                L 184 74
                L 183 62
                Q 182 49, 194 48
                L 199 48
                Q 216 45, 238 41
                Q 262 33, 288 33
                Q 304 34, 318 49
                L 326 53
                Q 344 62, 355 69
                L 358 74
                L 357 80
                L 359 84
                L 328 85
                A 14 14 0 0 0 298 85
                L 234 85
                A 14 14 0 0 0 204 85
                L 186 85
                Z
              "
              fill="url(#car-paint-body)"
              stroke="#262634"
              strokeWidth="0.8"
            />

            {/* Dynamic Specular Sheen Sweep on Supercar Paint */}
            <g clipPath="url(#supercar-body-clip)">
              <rect
                x="0"
                y="26"
                width="48"
                height="65"
                fill="url(#specular-sweep-grad)"
                className="animated-car-sheen"
              />
            </g>

            {/* Aerodynamic Flying Buttress & Roof Scoop Arch */}
            <path
              d="M 218 45 Q 236 38, 254 40"
              stroke="url(#apex-gold-metal)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />

            {/* Modern Stealth-Fighter Canopy (Raked Glasshouse) */}
            <path
              d="
                M 240 43
                Q 262 35, 288 35
                Q 302 36, 317 49
                L 278 49
                L 240 49
                Z
              "
              fill="url(#car-glass-tint)"
              stroke="#1c1c28"
              strokeWidth="0.6"
            />

            {/* Canopy Specular Reflection Slices */}
            <polygon
              points="265,37 271,37 259,48 253,48"
              fill="rgba(255, 255, 255, 0.45)"
            />
            <polygon
              points="286,37 291,37 281,48 276,48"
              fill="rgba(245, 223, 136, 0.35)"
            />

            {/* Ultra-Slim A/B Pillars */}
            <line x1="272" y1="36" x2="272" y2="49" stroke="#08080c" strokeWidth="1.5" />

            {/* Active Carbon Rear Aerodynamic Wing / Decklid Spoiler */}
            <path
              d="M 183 48 L 198 48 L 197 50 L 183 50 Z"
              fill="url(#apex-gold-metal)"
            />
            <path
              d="M 183 47 L 183 51 L 184 51 L 184 47 Z"
              fill="#fff"
            />

            {/* Razor-Sharp Geometric Waistline & Shoulder Crease */}
            <path
              d="M 185 53 Q 220 50, 258 52 Q 296 54, 322 53 Q 345 63, 356 71"
              fill="none"
              stroke="url(#car-highlight-gloss)"
              strokeWidth="1.4"
            />

            {/* Hood S-Duct Aero Channel Crease */}
            <path
              d="M 318 53 Q 338 61, 353 69"
              fill="none"
              stroke="url(#apex-gold-metal)"
              strokeWidth="1"
              opacity="0.85"
            />

            {/* Large Geometric Mid-Engine Side Air Intake Pod */}
            <polygon
              points="250,55 272,53 264,74 246,74"
              fill="#08080c"
              stroke="url(#apex-gold-metal)"
              strokeWidth="0.9"
            />
            {/* Intake Internal Aero Blade */}
            <line x1="248" y1="64" x2="268" y2="63" stroke="#222230" strokeWidth="1.2" />

            {/* Futuristic 2026 Razor Matrix LED Headlight DRLs */}
            <path
              d="M 344 66 L 355 69 L 351 72 L 341 70 Z"
              fill="#ffffff"
              filter="url(#gold-glow-filter)"
            />
            <polygon
              points="347,72 355,70 353,74 345,73"
              fill="#fff8e1"
            />

            {/* Full-Width Neon Laser Rear Light Blade */}
            <path
              d="M 184 58 L 193 57 L 193 60 L 184 61 Z"
              fill="#ff2a1a"
              filter="url(#gold-glow-filter)"
            />

            {/* Flush-Mounted Electronic Door Actuator Handle */}
            <line x1="278" y1="57" x2="288" y2="57" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />

            {/* Aero Stalk-Mounted Supercar Mirror */}
            <path
              d="M 304 49 Q 311 47, 315 51 Q 311 54, 304 52 Z"
              fill="url(#apex-gold-metal)"
              stroke="#08080c"
              strokeWidth="0.4"
            />

            {/* Lower Ground-Effects Carbon Rocker Blade with Gold Aero Winglet */}
            <line
              x1="234"
              y1="83.5"
              x2="298"
              y2="83.5"
              stroke="url(#apex-gold-metal)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <polygon points="234,83.5 230,78 233,78" fill="url(#apex-gold-metal)" />

            {/* Front Aggressive Multi-Tier Splitter with Gold Aero Fin */}
            <polygon
              points="358,84 350,84 352,80 357,80"
              fill="url(#apex-gold-metal)"
            />

            {/* Rear Venturi Diffuser & Dual Center Hex Titanium Exhausts */}
            <circle cx="185" cy="73" r="1.6" fill="url(#apex-gold-metal)" />
            <circle cx="185" cy="68" r="1.6" fill="url(#apex-gold-metal)" />

            {/* Star Glint Sparkles on Polished 2026 Clearcoat */}
            <g className="car-sparkle-1" transform="translate(322, 51)">
              <polygon points="0,-3.5 1,-1 3.5,0 1,1 0,3.5 -1,1 -3.5,0 -1,-1" fill="url(#apex-gold-metal)" />
            </g>
            <g className="car-sparkle-2" transform="translate(352, 68)">
              <polygon points="0,-2.5 0.7,-0.7 2.5,0 0.7,0.7 0,2.5 -0.7,0.7 -2.5,0 -0.7,-0.7" fill="#ffffff" />
            </g>
            <g className="car-sparkle-3" transform="translate(185, 48)">
              <polygon points="0,-2.5 0.7,-0.7 2.5,0 0.7,0.7 0,2.5 -0.7,0.7 -2.5,0 -0.7,-0.7" fill="url(#apex-gold-metal)" />
            </g>

            {/* 5. 2026 FORGED TURBINE WHEELS (Staggered Wide Performance Stance) */}
            {/* REAR WHEEL ASSEMBLY (Center at 219, 85) */}
            <g className="rear-wheel-group">
              {/* Wide Low-Profile Pirelli Performance Tire */}
              <circle cx="219" cy="85" r="12" fill="url(#wheel-tire-grad)" stroke="#060608" strokeWidth="0.8" />
              {/* Carbon-Ceramic Drilled Rotor */}
              <circle cx="219" cy="85" r="8.4" fill="#242430" stroke="#363644" strokeWidth="0.5" />
              {/* Monoblock 6-Piston Gold Brake Caliper */}
              <path d="M 223 76.5 A 8 8 0 0 1 226.5 83" stroke="url(#apex-gold-metal)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              {/* Spinning Forged Directional Y-Spoke Rim */}
              <g className="spinning-wheel-spokes" style={{ transformOrigin: '219px 85px' }}>
                <circle cx="219" cy="85" r="8.4" fill="none" stroke="url(#rim-gold-shine)" strokeWidth="1" />
                {/* 5 Directional Twin-Blade Turbine Spokes */}
                <line x1="219" y1="85" x2="219" y2="76.8" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="219" y1="85" x2="226.8" y2="82.4" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="219" y1="85" x2="223.8" y2="92.6" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="219" y1="85" x2="214.2" y2="92.6" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="219" y1="85" x2="211.2" y2="82.4" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                {/* Anodized Gold Center-Lock Nut */}
                <circle cx="219" cy="85" r="2.6" fill="#0a0a0e" stroke="url(#apex-gold-metal)" strokeWidth="0.9" />
              </g>
            </g>

            {/* FRONT WHEEL ASSEMBLY (Center at 313, 85) */}
            <g className="front-wheel-group">
              {/* Low-Profile Performance Tire */}
              <circle cx="313" cy="85" r="12" fill="url(#wheel-tire-grad)" stroke="#060608" strokeWidth="0.8" />
              {/* Carbon-Ceramic Drilled Rotor */}
              <circle cx="313" cy="85" r="8.4" fill="#242430" stroke="#363644" strokeWidth="0.5" />
              {/* Monoblock 6-Piston Gold Brake Caliper */}
              <path d="M 317 76.5 A 8 8 0 0 1 320.5 83" stroke="url(#apex-gold-metal)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              {/* Spinning Forged Directional Y-Spoke Rim */}
              <g className="spinning-wheel-spokes" style={{ transformOrigin: '313px 85px' }}>
                <circle cx="313" cy="85" r="8.4" fill="none" stroke="url(#rim-gold-shine)" strokeWidth="1" />
                {/* 5 Directional Twin-Blade Turbine Spokes */}
                <line x1="313" y1="85" x2="313" y2="76.8" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="313" y1="85" x2="320.8" y2="82.4" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="313" y1="85" x2="317.8" y2="92.6" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="313" y1="85" x2="308.2" y2="92.6" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="313" y1="85" x2="305.2" y2="82.4" stroke="url(#apex-gold-metal)" strokeWidth="1.4" strokeLinecap="round" />
                {/* Anodized Gold Center-Lock Nut */}
                <circle cx="313" cy="85" r="2.6" fill="#0a0a0e" stroke="url(#apex-gold-metal)" strokeWidth="0.9" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Scoped CSS Keyframes for the Car Convoy Animation Sequence */}
      <style>{`
        /* 
         * Convoy Traversal Sequence (Total Loop: 7.2s):
         * 0% - 20% (1.44s): Smooth cruise in from left into center stop.
         * 20% - 66% (3.31s): STOPPED AT CENTER with full banner clearly visible.
         * 66% - 86% (1.44s): Drives out smoothly to the right.
         * 86% - 100% (1.01s): Brief offscreen pause, then loop repeats.
         */
        .promo-car-convoy {
          animation: carConvoyDrive 7.2s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes carConvoyDrive {
          0% {
            transform: translate(-50%, -46%) translateX(-150%);
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          20% {
            transform: translate(-50%, -46%) translateX(0%);
            opacity: 1;
          }
          66% {
            transform: translate(-50%, -46%) translateX(0%);
            opacity: 1;
          }
          86% {
            transform: translate(-50%, -46%) translateX(150%);
            opacity: 1;
          }
          87% {
            transform: translate(-50%, -46%) translateX(150%);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -46%) translateX(-150%);
            opacity: 0;
          }
        }

        /* 
         * Synchronized Road Track Movement:
         * Moves while car is driving in (0% - 20%),
         * STOPS completely while car is parked (20% - 66%),
         * Moves while car drives off (66% - 86%),
         * Pauses off-screen (86% - 100%).
         */
        .animated-road-track {
          background-image: linear-gradient(to right, rgba(212, 175, 55, 0.4) 50%, transparent 50%);
          background-size: 24px 1px;
          animation: roadTrackSequence 7.2s linear infinite;
        }

        @keyframes roadTrackSequence {
          0% {
            background-position: 72px 0;
          }
          20% {
            background-position: 0 0;
          }
          66% {
            background-position: 0 0;
          }
          86% {
            background-position: -72px 0;
          }
          100% {
            background-position: -72px 0;
          }
        }

        /* 
         * Synchronized Wheel Spin:
         * Spins forward while driving in (0% - 20%),
         * STOPS completely while parked at center (20% - 66%),
         * Spins forward while driving off (66% - 86%),
         * Resting off-screen (86% - 100%).
         */
        .spinning-wheel-spokes {
          animation: wheelSpinSequence 7.2s linear infinite;
        }

        @keyframes wheelSpinSequence {
          0% {
            transform: rotate(-1080deg);
          }
          20% {
            transform: rotate(0deg);
          }
          66% {
            transform: rotate(0deg);
          }
          86% {
            transform: rotate(1080deg);
          }
          100% {
            transform: rotate(1080deg);
          }
        }

        /* Specular sheen sweeping across glossy black supercar paint while parked */
        .animated-car-sheen {
          animation: carSheenSweep 3.2s ease-in-out infinite;
        }

        @keyframes carSheenSweep {
          0%, 15% {
            transform: translateX(170px) skewX(-20deg);
            opacity: 0;
          }
          35% {
            opacity: 0.85;
          }
          55%, 100% {
            transform: translateX(370px) skewX(-20deg);
            opacity: 0;
          }
        }

        /* Subtle aerodynamic wave on the trailing promotional banner */
        .promo-banner {
          transform-origin: 160px 51px;
          animation: bannerFlutter 2.2s ease-in-out infinite alternate;
        }

        @keyframes bannerFlutter {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(-0.6deg) translateY(-0.8px);
          }
          100% {
            transform: rotate(0.6deg) translateY(0.8px);
          }
        }

        /* Headlight intensity pulse */
        .headlight-beam-glow {
          animation: headlightPulse 1.8s ease-in-out infinite alternate;
        }

        @keyframes headlightPulse {
          0% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }

        /* Twinkling star glints on the luxury bodywork */
        .car-sparkle-1 {
          animation: sparkleGlint 1.8s ease-in-out infinite;
          transform-origin: 322px 51px;
        }
        .car-sparkle-2 {
          animation: sparkleGlint 2.1s ease-in-out infinite 0.6s;
          transform-origin: 352px 68px;
        }
        .car-sparkle-3 {
          animation: sparkleGlint 1.9s ease-in-out infinite 1.1s;
          transform-origin: 185px 48px;
        }

        @keyframes sparkleGlint {
          0%, 100% {
            transform: scale(0.3) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15) rotate(90deg);
            opacity: 1;
          }
        }

        /* Respect user reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .promo-car-convoy {
            animation: none !important;
            transform: translate(-50%, -46%) translateX(0%) !important;
            opacity: 1 !important;
          }
          .spinning-wheel-spokes,
          .animated-road-track,
          .animated-car-sheen,
          .promo-banner,
          .headlight-beam-glow,
          .car-sparkle-1,
          .car-sparkle-2,
          .car-sparkle-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

