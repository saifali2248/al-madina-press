import React from 'react';
import { WritingStyleKey, WRITING_STYLES } from '../data/printingData';

interface BrandLogoProps {
  styleKey?: WritingStyleKey;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  styleKey = 'royal',
  variant = 'light',
  size = 'md',
}) => {
  const currentStyle = WRITING_STYLES[styleKey] || WRITING_STYLES.royal;
  const isDark = variant === 'dark';

  if (styleKey === 'royal') {
    return (
      <div className="flex items-center gap-3 group select-none">
        {/* Ornate Gold Foil Seal Emblem */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-700 via-amber-600 to-amber-900 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-[6px] bg-neutral-950 flex flex-col items-center justify-center border border-amber-400/40">
              <span className="font-amiri text-amber-300 text-sm leading-none font-bold">
                مدينہ
              </span>
              <span className="text-[8px] font-cinzel text-amber-400 font-bold tracking-widest mt-0.5">
                EST.10
              </span>
            </div>
          </div>
        </div>

        {/* Brand Typographic Lockup */}
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-cinzel font-bold tracking-[0.18em] uppercase ${
                size === 'lg' ? 'text-2xl sm:text-3xl' : size === 'sm' ? 'text-lg' : 'text-xl sm:text-2xl'
              } ${isDark ? 'text-white' : 'text-neutral-950'}`}
            >
              AL<span className="gold-foil-text font-cinzel-dec">·</span>MADINA
            </span>
            <span className="font-amiri text-xs sm:text-sm text-amber-600 font-bold hidden xs:inline" dir="rtl">
              المدينہ
            </span>
          </div>
          <span
            className={`font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold ${
              isDark ? 'text-amber-400/90' : 'text-amber-800'
            }`}
          >
            PRINTING PRESS · BLUE AREA
          </span>
        </div>
      </div>
    );
  }

  if (styleKey === 'artisan') {
    return (
      <div className="flex items-center gap-3 group select-none">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-amber-800/80 bg-amber-50 flex items-center justify-center text-amber-950 font-serif italic font-bold text-lg shadow-inner">
          M
        </div>
        <div className="flex flex-col text-left">
          <span
            className={`font-cormorant italic font-bold tracking-tight ${
              size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-xl' : 'text-2xl'
            } ${isDark ? 'text-white' : 'text-neutral-900'}`}
          >
            Al-Madina <span className="font-sans font-light not-italic text-sm text-amber-700">Press</span>
          </span>
          <span
            className={`font-mono text-[9px] tracking-widest uppercase ${
              isDark ? 'text-stone-400' : 'text-neutral-500'
            }`}
          >
            Artisan Bookbinders & Letterpress
          </span>
        </div>
      </div>
    );
  }

  // Modern Executive
  return (
    <div className="flex items-center gap-2.5 group select-none">
      <div className="w-8 h-8 rounded-md bg-neutral-900 text-amber-400 font-black flex items-center justify-center text-sm font-sans tracking-tight">
        AM
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-sans font-extrabold tracking-tight ${
              size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'
            } ${isDark ? 'text-white' : 'text-neutral-900'}`}
          >
            AL-MADINA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        </div>
        <span
          className={`text-[10px] tracking-wider uppercase font-semibold ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          Printing Press · Islamabad
        </span>
      </div>
    </div>
  );
};
