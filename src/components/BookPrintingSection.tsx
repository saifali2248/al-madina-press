import React, { useState } from 'react';
import { BookOpen, Check, Layers, Shield, Sparkles, Clock, FileCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/printingData';

interface BookPrintingSectionProps {
  onOpenQuoteModal: () => void;
}

export const BookPrintingSection: React.FC<BookPrintingSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedPaper, setSelectedPaper] = useState('80gsm-cream');
  const [selectedBinding, setSelectedBinding] = useState('hardcover-gold');

  const paperOptions = [
    {
      id: '70gsm-offset',
      name: '70gsm White Offset',
      idealFor: 'School textbooks, syllabus guides, high-volume bulk books',
      features: 'High opacity, smooth feeding, economical for educational institutions',
      rate: 'PKR 8 / B&W page',
    },
    {
      id: '80gsm-cream',
      name: '80gsm Imported Cream Woodfree',
      idealFor: 'Novels, Islamic literature, poetry anthologies, non-fiction',
      features: 'Warm eye-pleasing cream tint, zero glare, archival preservation',
      rate: 'PKR 10 / B&W page',
    },
    {
      id: '100gsm-matte',
      name: '100gsm Matte Art Paper',
      idealFor: 'Children’s storybooks, medical manuals, corporate reports',
      features: 'Velvety touch, zero reflection, excellent color saturation',
      rate: 'PKR 18 / Color page',
    },
    {
      id: '128gsm-gloss',
      name: '128gsm Gloss Art Paper',
      idealFor: 'Cookbooks, art catalogs, high-definition photo books',
      features: 'Vivid color contrast, glossy liquid sheen, water-resistant',
      rate: 'PKR 25 / Color page',
    },
  ];

  const bindingOptions = [
    {
      id: 'hardcover-gold',
      name: 'Hardcover Gold Stamped Rexine',
      desc: 'Solid 2.5mm greyboard wrapped in luxury leatherette or rexine with hot gold foil title on front and spine. Includes matching ribbon bookmark.',
      idealFor: 'Islamic books, novels, memoirs, library editions',
      price: 'PKR 800 / book',
    },
    {
      id: 'perfect-bind',
      name: 'Softcover Thermal Perfect Bind',
      desc: 'Hot-melt polyurethane adhesive spine binding with 350gsm laminated color cover and scored hinge for clean page-turning.',
      idealFor: 'Commercial paperbacks, novels, textbooks, conference proceedings',
      price: 'PKR 220 / book',
    },
    {
      id: 'section-sewn',
      name: 'Smyth Section-Sewn Case Bound',
      desc: 'Individual folded signatures sewn together with high-tensile thread before casing into hard covers. Guarantees 100% lay-flat reading.',
      idealFor: 'Heavy reference books, dictionaries, Holy Quran printing',
      price: 'PKR 1,200 / book',
    },
    {
      id: 'spiral-wire',
      name: 'Double-Loop Steel Wire-O',
      desc: 'Heavy-duty twin wire binding with clear protective PVC frost sheets and rigid backing board. Allows 360-degree rotation.',
      idealFor: 'Lab manuals, thesis drafts, company training manuals, diaries',
      price: 'PKR 250 / book',
    },
  ];

  const universityFormats = [
    { uni: 'Quaid-i-Azam University (QAU)', color: 'Maroon / Dark Wine', badge: 'Verified Margins' },
    { uni: 'National University of Sciences & Technology (NUST)', color: 'Navy Blue / Golden Crest', badge: 'NUST Template Ready' },
    { uni: 'FAST-NUCES Islamabad', color: 'Jet Black / Gold Foil Spine', badge: 'CS / SE Standard' },
    { uni: 'COMSATS University Islamabad', color: 'Royal Navy / Gold Embossed', badge: 'MS / PhD Specs' },
    { uni: 'International Islamic University (IIUI)', color: 'Forest Green / Arabic Typography', badge: 'Standard Layout' },
  ];

  return (
    <section id="book-printing" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Publishing & Book Manufacturing</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Book Printing & Hardcover Binding
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              From independent author runs to large-scale textbook printing and university doctoral dissertations. We offer complete prepress, precision folding, Smyth sewing, and gold hot-stamped hardcovers.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 text-xs font-semibold text-white bg-neutral-900 hover:bg-amber-800 rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Calculate Book Printing Cost</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Spotlight: Image + Press Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
            <img
              src="/src/assets/images/book_printing_hardcover_1793701435988.jpg"
              alt="Artisan Hardcover Books and Islamic Literature printed by Al-Madina Printing Press"
              className="w-full h-[360px] sm:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white p-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Archival Grade</span>
              <h4 className="font-serif text-lg font-bold">Hardcover Binding & Gold Stamping</h4>
              <p className="text-xs text-neutral-300 mt-1">
                Sewn spine signatures with hot gold leaf embossing on durable leatherette and cloth covers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
              <h3 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>Textbooks, Islamic Books & Novels</span>
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Whether you need 50 copies of your debut poetry book or 10,000 copies of an academic textbook for a school board, our dual Heidelberg offset and high-speed digital web printers ensure razor-sharp typography, accurate pagination, and tight margins.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-medium text-neutral-800">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  <span>Custom ISBN & Barcode Layout</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  <span>Free Pre-Flight Proof Copy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  <span>Laminated Matte & Gloss Covers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  <span>Smyth Lay-Flat Thread Sewing</span>
                </div>
              </div>
            </div>

            {/* University Thesis Special Callout */}
            <div id="thesis-service" className="p-5 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-amber-950 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  <span>University Thesis & Dissertation Binding</span>
                </h3>
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded">
                  24h Express
                </span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed mb-3">
                Approved binding standards for MS, MPhil, and PhD students in Islamabad & Rawalpindi universities. Gold embossed title and spine lettering in exact required dimensions.
              </p>
              <div className="flex flex-wrap gap-2">
                {universityFormats.map((item) => (
                  <span
                    key={item.uni}
                    className="text-[11px] bg-white border border-amber-300 text-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    <strong className="text-amber-900">{item.uni}</strong> ({item.color})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Paper & Binding Specification Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Paper Options */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-700" />
              <span>Paper Stock Options</span>
            </h3>
            <div className="space-y-3">
              {paperOptions.map((paper) => (
                <div
                  key={paper.id}
                  onClick={() => setSelectedPaper(paper.id)}
                  className={`p-3.5 rounded-xl cursor-pointer border transition-colors ${
                    selectedPaper === paper.id
                      ? 'bg-white border-amber-600 shadow-sm'
                      : 'bg-white/60 border-stone-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-neutral-900">{paper.name}</span>
                    <span className="text-xs font-bold text-amber-800">{paper.rate}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">{paper.features}</p>
                  <p className="text-[11px] text-amber-900/80 mt-1 font-medium">Ideal for: {paper.idealFor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Binding Options */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700" />
              <span>Binding & Finishing Styles</span>
            </h3>
            <div className="space-y-3">
              {bindingOptions.map((binding) => (
                <div
                  key={binding.id}
                  onClick={() => setSelectedBinding(binding.id)}
                  className={`p-3.5 rounded-xl cursor-pointer border transition-colors ${
                    selectedBinding === binding.id
                      ? 'bg-white border-amber-600 shadow-sm'
                      : 'bg-white/60 border-stone-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-neutral-900">{binding.name}</span>
                    <span className="text-xs font-bold text-amber-800">{binding.price}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">{binding.desc}</p>
                  <p className="text-[11px] text-amber-900/80 mt-1 font-medium">Best for: {binding.idealFor}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
