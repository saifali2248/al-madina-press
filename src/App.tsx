/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvitationCardsSection } from './components/InvitationCardsSection';
import { BookPrintingSection } from './components/BookPrintingSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingCalculator } from './components/PricingCalculator';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WritingStyleSwitcher } from './components/WritingStyleSwitcher';
import { WritingStyleProvider } from './context/WritingStyleContext';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from './data/printingData';

function AppContent() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('Wedding Invitation Cards');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 flex flex-col font-sans">
      
      {/* Brand Writing Style Switcher */}
      <WritingStyleSwitcher />

      {/* Top Utility Announcement Bar */}
      <div className="bg-neutral-950 text-neutral-300 text-[11px] py-1.5 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3 h-3 text-amber-500" />
              <span>{BUSINESS_INFO.openingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-mono"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="hidden md:inline text-neutral-400">
              24-Hour Express Thesis & Urgent Card Runs
            </span>
          </div>
        </div>
      </div>

      {/* Primary Top Bar adhering to Top Bar Contract */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Invitation & Wedding Cards Interactive Studio */}
        <InvitationCardsSection />

        {/* 3. Book Printing & University Thesis Section */}
        <BookPrintingSection onOpenQuoteModal={() => handleOpenQuoteModal('Book Printing')} />

        {/* 4. Full Services Showcase (10 Services + Target Customers) */}
        <ServicesSection onSelectServiceForQuote={(srv) => handleOpenQuoteModal(srv)} />

        {/* 5. Craftsmanship & Samples Gallery */}
        <GallerySection onSelectDesignForQuote={(design) => handleOpenQuoteModal(design)} />

        {/* 6. Pricing Calculator & Reference Rates */}
        <PricingCalculator />

        {/* 7. About Us & Craftsmanship Heritage */}
        <AboutSection />

        {/* 8. Contact, Location & Inquiry Form */}
        <ContactSection prefilledService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Assalam o Alaikum Al-Madina Printing Press, I would like to inquire about printing services in Blue Area Islamabad.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          title="Direct WhatsApp with Al-Madina Printing Press"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline font-semibold">WhatsApp 0300-1234567</span>
        </a>
      </aside>

    </div>
  );
}

export default function App() {
  return (
    <WritingStyleProvider>
      <AppContent />
    </WritingStyleProvider>
  );
}
