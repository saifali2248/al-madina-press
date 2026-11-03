import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/printingData';
import { Eye, Sparkles, X, Send, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/printingData';

interface GallerySectionProps {
  onSelectDesignForQuote: (designTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDesignForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Wedding Cards', 'Book Printing', 'Business Cards & Stationery', 'Thesis Binding', 'Brochures & Flyers', 'Facility & Equipment'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Craftsmanship Portfolio</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Print Samples & Design Gallery
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Examine our authentic finished projects—from opulent hot gold foil wedding stationery to Smyth-sewn hardcover publications and high-gamut corporate marketing sets.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900/90 backdrop-blur-sm rounded-lg shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect Sample</span>
                  </button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-800 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-neutral-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono text-[11px] truncate max-w-[180px]">
                    {item.specs}
                  </span>
                  <button
                    onClick={() => onSelectDesignForQuote(item.title)}
                    className="font-medium text-amber-800 hover:text-amber-950 inline-flex items-center gap-1"
                  >
                    <span>Order Design</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Sample Inspection */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-800 uppercase tracking-wider font-cinzel">
                    {activeModalItem.category}
                  </span>
                  <span className="text-xs text-neutral-500">Blue Area Workshop Sample</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-xs font-semibold text-neutral-800 block mb-1">
                    Finishing & Paper Specifications:
                  </span>
                  <p className="text-xs font-mono text-neutral-700">
                    {activeModalItem.specs}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const itemTitle = activeModalItem.title;
                      setActiveModalItem(null);
                      onSelectDesignForQuote(itemTitle);
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-amber-800 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>Request Quotation for this Style</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
