import React, { useState } from 'react';
import { 
  Heart, 
  RotateCw, 
  Sparkles, 
  Check, 
  Send, 
  ShieldCheck, 
  Layers, 
  Eye, 
  Printer,
  ChevronRight
} from 'lucide-react';
import { INVITATION_CARD_SAMPLES, CardSample, BUSINESS_INFO } from '../data/printingData';

export const InvitationCardsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wedding' | 'birthday' | 'engagement' | 'corporate'>('all');
  const [activeCard, setActiveCard] = useState<CardSample>(INVITATION_CARD_SAMPLES[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFoil, setSelectedFoil] = useState<'Gold Hot Foil' | 'Silver Chrome' | 'Rose Gold' | 'Blind Embossed'>('Gold Hot Foil');

  // Customizer state
  const [customHostNames, setCustomHostNames] = useState(activeCard.defaultHostNames);
  const [customDate, setCustomDate] = useState(activeCard.defaultEventDate);
  const [customVenue, setCustomVenue] = useState(activeCard.defaultVenue);
  const [customSubtitle, setCustomSubtitle] = useState(activeCard.eventSubtitle);

  // When card template changes, update defaults
  const handleSelectTemplate = (card: CardSample) => {
    setActiveCard(card);
    setCustomHostNames(card.defaultHostNames);
    setCustomDate(card.defaultEventDate);
    setCustomVenue(card.defaultVenue);
    setCustomSubtitle(card.eventSubtitle);
    setSelectedFoil(card.foilOptions[0] || 'Gold Hot Foil');
    setIsFlipped(false);
  };

  const filteredCards = selectedCategory === 'all' 
    ? INVITATION_CARD_SAMPLES 
    : INVITATION_CARD_SAMPLES.filter(c => c.category === selectedCategory);

  // Generate WhatsApp inquiry text
  const generateWhatsAppLink = () => {
    const text = `Assalam o Alaikum Al-Madina Printing Press,
I am interested in ordering invitation cards:
- Template: ${activeCard.title}
- Event: ${customSubtitle}
- Names: ${customHostNames}
- Date: ${customDate}
- Venue: ${customVenue}
- Paper Stock: ${activeCard.paperStock}
- Foil Finish: ${selectedFoil}
Estimated Rate: PKR ${activeCard.pricePer100.toLocaleString()} for 100 pcs.
Please let me know sample availability and delivery timeline to Islamabad.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="invitations" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Artisan Invitation Card Studio</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Wedding & Event Invitation Suites
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Traditional Mughal motifs, modern minimalist vellum cards, laser-cut gates, and hot-stamped gold foil. Test our live card designer below with your own names, venue, and foil finish.
          </p>

          {/* Category Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Templates' },
              { id: 'wedding', label: 'Wedding & Nikkah' },
              { id: 'birthday', label: 'Birthday Invitations' },
              { id: 'engagement', label: 'Engagement & Ring' },
              { id: 'corporate', label: 'Corporate Gala' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Interactive Designer & Mockup Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Card Display */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <span className="text-xs font-medium text-amber-700 uppercase tracking-wider font-cinzel">
                  {activeCard.badgeText}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  {activeCard.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1.5 transition-colors"
                  title="Flip to see inside or envelope view"
                >
                  <RotateCw className="w-3.5 h-3.5 text-amber-700" />
                  <span>{isFlipped ? 'Show Outer Envelope' : 'Flip to Inside Card'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Luxury Card Canvas */}
            <div className="card-3d-wrap min-h-[460px] sm:min-h-[500px] flex items-center justify-center p-4 rounded-xl bg-stone-100/70 border border-stone-200 relative overflow-hidden">
              {/* Subtle background ambient lighting */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{ backgroundColor: activeCard.themeColor }}
              />

              <div className={`w-full max-w-md card-3d-inner transition-transform duration-700 ${isFlipped ? 'card-3d-flipped' : ''}`}>
                
                {/* FRONT / ENVELOPE & SUITE VIEW */}
                <div 
                  className="card-front rounded-xl shadow-xl overflow-hidden p-6 sm:p-8 border border-amber-900/20 relative"
                  style={{ backgroundColor: activeCard.themeColor, color: '#fff' }}
                >
                  {/* Ornate decorative borders */}
                  <div className="border border-amber-400/40 p-4 sm:p-6 rounded-lg relative">
                    <div className="absolute top-2 left-2 text-xs font-cinzel text-amber-300 opacity-60">❖</div>
                    <div className="absolute top-2 right-2 text-xs font-cinzel text-amber-300 opacity-60">❖</div>
                    <div className="absolute bottom-2 left-2 text-xs font-cinzel text-amber-300 opacity-60">❖</div>
                    <div className="absolute bottom-2 right-2 text-xs font-cinzel text-amber-300 opacity-60">❖</div>

                    {activeCard.bismillahText && (
                      <div className="text-center mb-4">
                        <p className="font-serif italic text-amber-300 text-sm tracking-wide">
                          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                        </p>
                        <p className="text-[11px] text-amber-200/70 uppercase tracking-widest mt-0.5">
                          In the Name of Allah, Most Gracious, Most Merciful
                        </p>
                      </div>
                    )}

                    <div className="text-center space-y-3 my-6">
                      <p className="text-xs uppercase tracking-widest text-amber-200 font-cinzel">
                        {customSubtitle}
                      </p>

                      <div className="py-2">
                        <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-amber-300 drop-shadow-sm">
                          {customHostNames}
                        </h4>
                      </div>

                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-3" />

                      <p className="text-xs text-neutral-200 leading-relaxed font-light">
                        Cordially request the pleasure of your company to celebrate this blessed occasion.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-amber-400/30 text-center space-y-1.5 text-xs">
                      <p className="font-medium text-amber-300">
                        {customDate}
                      </p>
                      <p className="text-neutral-300 font-light">
                        {customVenue}
                      </p>
                    </div>

                    {/* Wax Seal / Monogram stamp simulation */}
                    <div className="mt-6 flex justify-center">
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-amber-400/60 shadow-lg flex items-center justify-center text-xs font-bold font-cinzel text-neutral-950"
                        style={{ backgroundColor: activeCard.accentColor }}
                      >
                        AM
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-300/80 px-1">
                    <span>Foil: {selectedFoil}</span>
                    <span>Paper: {activeCard.paperStock}</span>
                  </div>
                </div>

                {/* BACK / INNER INSERT & RSVP CARD VIEW */}
                <div 
                  className="card-back absolute inset-0 rounded-xl shadow-xl overflow-hidden p-6 sm:p-8 border border-neutral-300 paper-texture text-neutral-900"
                >
                  <div className="border-2 border-stone-300 p-5 rounded-lg h-full flex flex-col justify-between text-center">
                    <div>
                      <p className="text-xs font-cinzel tracking-widest text-amber-800 uppercase">
                        Ceremony Programme & RSVP
                      </p>
                      <h4 className="font-serif-luxury text-xl font-bold text-neutral-900 mt-1">
                        {customHostNames}
                      </h4>
                      <div className="w-12 h-0.5 bg-amber-600 mx-auto my-2" />
                    </div>

                    <div className="space-y-3 text-xs text-neutral-700 py-2">
                      <div className="p-2.5 rounded bg-amber-50/70 border border-amber-200/60 text-left">
                        <p className="font-semibold text-neutral-900">Event Timeline:</p>
                        <p className="text-neutral-600 mt-0.5">7:00 PM — Welcome & Guest Reception</p>
                        <p className="text-neutral-600">8:00 PM — Ceremony & Du&apos;a</p>
                        <p className="text-neutral-600">8:45 PM — Traditional Dinner Buffet</p>
                      </div>

                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200 text-left">
                        <p className="font-semibold text-neutral-900">Venue & Valet:</p>
                        <p className="text-neutral-600">{customVenue}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-300 text-[11px] text-neutral-500">
                      <p className="font-medium text-neutral-800">R.S.V.P: With Best Compliments from Families</p>
                      <p className="text-amber-800 mt-0.5 font-cinzel">Al-Madina Luxury Print Quality</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card Specifications breakdown */}
            <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-neutral-500 block">Paper Stock</span>
                <span className="font-medium text-neutral-900">{activeCard.paperStock}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Stamping Foil</span>
                <span className="font-medium text-neutral-900">{selectedFoil}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Starting Estimate</span>
                <span className="font-bold text-amber-800">PKR {activeCard.pricePer100.toLocaleString()} / 100 pcs</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Standard Turnaround</span>
                <span className="font-medium text-neutral-900">3–5 Working Days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls & WhatsApp Order Generator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <h3 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <Printer className="w-4 h-4 text-amber-700" />
                  <span>Customize Sample Mockup</span>
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Live Preview</span>
              </div>

              {/* Editable Fields */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Event Type / Subtitle
                  </label>
                  <input
                    type="text"
                    value={customSubtitle}
                    onChange={(e) => setCustomSubtitle(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="e.g. Solemnization of Nikkah & Reception"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Host / Bride & Groom Names
                  </label>
                  <input
                    type="text"
                    value={customHostNames}
                    onChange={(e) => setCustomHostNames(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="e.g. Hira Khan & Zain Shah"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Event Date & Time
                  </label>
                  <input
                    type="text"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="e.g. Saturday, 18th November 2026 at 7:00 PM"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Venue Location
                  </label>
                  <input
                    type="text"
                    value={customVenue}
                    onChange={(e) => setCustomVenue(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="e.g. Serena Hotel, Islamabad"
                  />
                </div>

                {/* Foil Stamping Finish Selection */}
                <div>
                  <label className="block font-medium text-neutral-700 mb-2">
                    Select Metallic Foil Stamp Finish
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Gold Hot Foil', 'Silver Chrome', 'Rose Gold', 'Blind Embossed'] as const).map((foil) => (
                      <button
                        key={foil}
                        type="button"
                        onClick={() => setSelectedFoil(foil)}
                        className={`p-2 rounded-lg text-xs font-medium text-left border flex items-center justify-between transition-colors ${
                          selectedFoil === foil
                            ? 'bg-amber-50 border-amber-600 text-amber-900 font-semibold'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        <span>{foil}</span>
                        {selectedFoil === foil && <Check className="w-3.5 h-3.5 text-amber-700" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Ordering Button */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Customized Design to WhatsApp</span>
                </a>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  Direct connection to our Blue Area printing master on WhatsApp (0300-1234567).
                </p>
              </div>
            </div>

            {/* Quick Template Switcher List */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider font-cinzel mb-3">
                Browse Template Styles ({filteredCards.length})
              </h4>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {filteredCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => handleSelectTemplate(card)}
                    className={`w-full p-2.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between border ${
                      activeCard.id === card.id
                        ? 'bg-amber-50/80 border-amber-500 text-amber-950 font-semibold'
                        : 'bg-stone-50 border-stone-200 text-neutral-700 hover:bg-stone-100'
                    }`}
                  >
                    <div>
                      <p className="font-serif text-sm">{card.title}</p>
                      <p className="text-[11px] text-neutral-500 truncate mt-0.5">{card.paperStock}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-semibold text-amber-800">PKR {card.pricePer100.toLocaleString()}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-400 inline-block ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
