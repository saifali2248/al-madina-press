import React from 'react';
import { BUSINESS_INFO } from '../data/printingData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useWritingStyle } from '../context/WritingStyleContext';

export const Footer: React.FC = () => {
  const { currentStyleKey, currentStyle } = useWritingStyle();

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <BrandLogo styleKey={currentStyleKey} variant="dark" size="lg" />
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Blue Area, Islamabad&apos;s premier destination for high-quality book manufacturing, luxury hot-foil wedding invitation suites, academic thesis bindings, and commercial marketing collateral.
            </p>
            <p className="text-xs font-serif italic text-amber-300">
              {currentStyle.slogan}
            </p>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-cinzel mb-3">
              Printing Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#invitations" className="hover:text-amber-400 transition-colors">Wedding Invitation Cards</a></li>
              <li><a href="#invitations" className="hover:text-amber-400 transition-colors">Birthday Invitations</a></li>
              <li><a href="#book-printing" className="hover:text-amber-400 transition-colors">Book & Novel Printing</a></li>
              <li><a href="#book-printing" className="hover:text-amber-400 transition-colors">Islamic Literature</a></li>
              <li><a href="#thesis-service" className="hover:text-amber-400 transition-colors">Thesis Printing & Binding</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Executive Business Cards</a></li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-cinzel mb-3">
              Explore Al-Madina
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#invitations" className="hover:text-amber-400 transition-colors">Card Template Customizer</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Sample Portfolio Gallery</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Instant Price Estimator</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Our Workshop</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Direct Contact Coordinates */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-cinzel mb-3">
              Islamabad Office
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-mono">{BUSINESS_INFO.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">{BUSINESS_INFO.email}</a>
              </p>
              <p className="flex items-center gap-2 text-[11px] text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Blue Area, Islamabad, Pakistan.
          </p>
          <p className="text-[11px] text-neutral-400">
            Note: Fictional business profile & price list for portfolio showcase.
          </p>
        </div>
      </div>
    </footer>
  );
};
