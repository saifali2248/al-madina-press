import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Heart, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/printingData';
import { useWritingStyle } from '../context/WritingStyleContext';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const { currentStyle } = useWritingStyle();

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium font-cinzel">
              <span>{currentStyle.badge}</span>
              <span aria-hidden="true">·</span>
              <span>Blue Area, Islamabad</span>
              <span aria-hidden="true">·</span>
              <span>EST. 2010</span>
            </div>

            <h1 className={`${currentStyle.fontClass.includes('cinzel') ? 'font-cinzel' : currentStyle.fontClass.includes('italic') ? 'font-cormorant' : 'font-sans font-black'} text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] text-balance`}>
              {currentStyle.headline}{' '}
              <span className="gold-foil-text italic font-serif">
                {currentStyle.headlineAccent}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              {currentStyle.description}
            </p>

            {/* Slogan highlight */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-sm font-serif italic text-amber-200">
                {currentStyle.slogan}
              </p>
            </div>

            {/* Required Call to Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-900/30 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>{currentStyle.quoteButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-5 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-all whitespace-nowrap"
              >
                {currentStyle.exploreButtonText}
              </a>

              <a
                href="#gallery"
                className="px-5 py-3.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
              >
                View Our Portfolio
              </a>

              <a
                href="#contact"
                className="px-4 py-3.5 text-sm font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4 transition-all whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>

            {/* Micro proof indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Heidelberg Offset & Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24-Hour Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Islamabad & Rawalpindi Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor with Real Offset Machinery & Card Stacks */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-800">
              <img
                src="/src/assets/images/hero_printing_press_1793701434855.jpg"
                alt="Al-Madina Printing Press Heidelberg facility in Blue Area Islamabad"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-left">
                <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1">
                  <span>Production Floor · Blue Area</span>
                  <span className="font-mono text-neutral-400">Islamabad, PK</span>
                </div>
                <h3 className="font-serif text-white font-medium text-base">
                  Master Precision Press & Hot Foil Finishing
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  Operating multi-unit offset presses and specialized foil stamping machines for wedding suites, books, and corporate literature.
                </p>
              </div>
            </div>

            {/* Floating Quick Feature Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-xl bg-white text-neutral-900 shadow-2xl border border-neutral-200 items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold font-cinzel text-lg">
                AM
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Specialized in</p>
                <p className="text-sm font-bold text-neutral-900">Luxury Cards & Book Binding</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Pillars Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="#invitations" className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
            <Heart className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-white">Wedding Invitation Cards</h4>
            <p className="text-xs text-neutral-400 mt-1">Velvet cardstock, gold foil & bespoke wax seals</p>
          </a>

          <a href="#book-printing" className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
            <BookOpen className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-white">Book & Novel Printing</h4>
            <p className="text-xs text-neutral-400 mt-1">High-capacity offset runs, novels & Islamic texts</p>
          </a>

          <a href="#thesis-service" className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
            <FileText className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-white">Thesis Printing & Binding</h4>
            <p className="text-xs text-neutral-400 mt-1">NUST, QAU & FAST format compliant, 24h express</p>
          </a>

          <a href="#pricing" className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
            <Sparkles className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-white">Instant Price Estimator</h4>
            <p className="text-xs text-neutral-400 mt-1">Transparent PKR rates & direct WhatsApp quote</p>
          </a>
        </div>
      </div>
    </section>
  );
};
