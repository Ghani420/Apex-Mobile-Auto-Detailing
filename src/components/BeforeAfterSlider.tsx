import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  subtitle: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  subtitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="relative rounded-md overflow-hidden border border-[#d4af37]/40 bg-[#0a0a0c] shadow-2xl select-none group">
      {/* Top Banner Header */}
      <div className="p-4 bg-gradient-to-r from-[#101014] to-[#0a0a0c] border-b border-neutral-800 flex items-center justify-between">
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
            {title}
          </h4>
          <p className="text-xs text-neutral-400">{subtitle}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Slider</span>
        </div>
      </div>

      {/* Slider Visual Canvas */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize overflow-hidden touch-none select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt="AFTER - Clean & Detailed"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* BEFORE Image (Clipped with inline style width) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="BEFORE - Dusty & Dirty"
            className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#f5df88] via-[#d4af37] to-[#996515] shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Gold Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-black border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.9)] flex items-center justify-center text-[#d4af37]">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>

        {/* Labels: BEFORE (Dusty & Dirty) and AFTER (Clean & Detailed) */}
        <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-sm border border-neutral-700 pointer-events-none z-10 text-left shadow-xl">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">BEFORE</div>
          <div className="text-xs font-bold text-white tracking-wide">Dusty &amp; Dirty</div>
        </div>
        <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#d4af37]/60 pointer-events-none z-10 text-right shadow-xl">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4af37]">AFTER</div>
          <div className="text-xs font-bold text-white tracking-wide">Clean &amp; Detailed</div>
        </div>

        {/* Bottom Instruction */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full text-[11px] text-neutral-300 pointer-events-none z-10 flex items-center gap-2">
          <span>&larr; Drag slider to inspect transformation &rarr;</span>
        </div>
      </div>
    </div>
  );
};
