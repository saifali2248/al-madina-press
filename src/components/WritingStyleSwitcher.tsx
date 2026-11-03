import React from 'react';
import { useWritingStyle } from '../context/WritingStyleContext';
import { Feather, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { WritingStyleKey } from '../data/printingData';

export const WritingStyleSwitcher: React.FC = () => {
  const { currentStyleKey, setWritingStyle, availableStyles } = useWritingStyle();

  return (
    <aside aria-label="Brand writing style selector" className="bg-neutral-900 border-b border-amber-900/30 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Feather className="w-3 h-3" />
          </div>
          <span className="text-neutral-300 font-medium">
            Brand Name & Copywriting Style:
          </span>
          <span className="text-amber-400 font-semibold font-cinzel">
            {currentStyleKey === 'royal' && 'Royal Calligraphic Heritage'}
            {currentStyleKey === 'artisan' && 'Artisan Letterpress & Atelier'}
            {currentStyleKey === 'modern' && 'Modern Executive Press'}
          </span>
        </div>

        {/* Segmented Controls */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800">
          {availableStyles.map((style) => {
            const isActive = currentStyleKey === style.key;
            return (
              <button
                key={style.key}
                onClick={() => setWritingStyle(style.key as WritingStyleKey)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                {isActive && <Check className="w-3 h-3 text-amber-200" />}
                <span>{style.label.split(' ')[0]} {style.key === 'royal' ? 'Heritage' : style.key === 'artisan' ? 'Atelier' : 'Modern'}</span>
              </button>
            );
          })}
        </div>

      </div>
    </aside>
  );
};
