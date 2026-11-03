import React from 'react';
import { 
  BUSINESS_INFO, 
  WHY_CHOOSE_US 
} from '../data/printingData';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Clock, 
  Users, 
  CheckCircle2, 
  Wrench,
  MapPin
} from 'lucide-react';

import { useWritingStyle } from '../context/WritingStyleContext';

export const AboutSection: React.FC = () => {
  const { currentStyle } = useWritingStyle();

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Blue Area Islamabad Heritage</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Craftsmanship, Precision & Passion in Every Print
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-light">
              {currentStyle.description}
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Located in the commercial heart of Pakistan&apos;s capital at <strong>Blue Area, Islamabad</strong>, our facility combines traditional letterpress and foil stamping with contemporary computer-to-plate (CTP) multi-color offset and on-demand digital presses. We take pride in serving respected educational institutions, national publishers, wedding couples, and thriving enterprises across the Twin Cities and beyond.
            </p>

            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-700 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-amber-950 font-cinzel uppercase tracking-wider">
                  Our Uncompromising Slogan
                </p>
                <p className="text-sm font-serif italic text-amber-900">
                  {currentStyle.slogan}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-200 text-center">
              <div className="p-3 bg-stone-50 rounded-xl">
                <span className="font-serif text-2xl font-bold text-neutral-900 font-mono">15+</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Years of Service</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl">
                <span className="font-serif text-2xl font-bold text-neutral-900 font-mono">50K+</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Books & Cards Printed</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl">
                <span className="font-serif text-2xl font-bold text-neutral-900 font-mono">100%</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Atmosphere & Machinery Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-neutral-900 text-white p-7 rounded-2xl border border-neutral-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-cinzel text-amber-400">
                  <Wrench className="w-4 h-4 text-amber-500" />
                  <span>Workshop Technology & Equipment</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Blue Area Floor</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <h4 className="font-semibold text-white text-sm">Heidelberg Multi-Color Offset Presses</h4>
                  <p className="text-neutral-300 mt-1">
                    German engineering guaranteeing micrometer-level registration, continuous ink density control, and lightning-fast runs for books, textbooks, and brochures.
                  </p>
                </div>

                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <h4 className="font-semibold text-white text-sm">Hot Foil Stamping & Hydraulic Embossing</h4>
                  <p className="text-neutral-300 mt-1">
                    Specialized heated platen presses applying genuine metallic gold, copper, rose gold, and silver foil films directly onto velvet and leatherette cardstocks.
                  </p>
                </div>

                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <h4 className="font-semibold text-white text-sm">Automated Perfect Binding & Smyth Sewing</h4>
                  <p className="text-neutral-300 mt-1">
                    Thermal hot-melt glue binders and thread sewing machines delivering unbreakable spines and perfect lay-flat reading for educational and literary volumes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid (7 Points from brief) */}
        <div className="pt-12 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel">
              Client Assurance
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Why Choose Al-Madina Printing Press?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Our core commitments that make us the preferred printing partner across Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs font-mono">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-10">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Final Highlight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-cinzel text-amber-200 font-semibold">
                  Islamabad & Rawalpindi
                </span>
                <h4 className="text-sm font-serif font-bold text-white mt-1">
                  Ready to Discuss Your Project?
                </h4>
                <p className="text-xs text-amber-100 mt-1.5 leading-relaxed">
                  Call our Blue Area helpline at <strong>0300-1234567</strong> or request an on-site sample consultation.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 px-4 py-2 bg-neutral-950 text-white hover:bg-neutral-900 rounded-lg text-xs font-semibold text-center transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
