import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/printingData';

import { BrandLogo } from './BrandLogo';
import { useWritingStyle } from '../context/WritingStyleContext';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentStyleKey } = useWritingStyle();

  const navLinks = [
    { label: 'Invitations', href: '#invitations' },
    { label: 'Book Printing', href: '#book-printing' },
    { label: 'All Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Price Estimator', href: '#pricing' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark in Distinctive Writing Style */}
        <a href="#" className="flex items-center group whitespace-nowrap shrink-0">
          <BrandLogo styleKey={currentStyleKey} size="md" />
        </a>

        {/* Zone 2: Single-line clean text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b-2 border-transparent hover:border-amber-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Phone */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 px-3 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0"
            title="Call Al-Madina Printing Press"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-amber-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenQuoteModal}
            className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded-md"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-sm text-neutral-800 bg-neutral-100 rounded-lg font-medium"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg text-center"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
