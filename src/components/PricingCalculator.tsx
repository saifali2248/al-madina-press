import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Send, 
  Copy, 
  Check, 
  Info, 
  Sparkles, 
  Tag, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { SAMPLE_PRICE_LIST, BUSINESS_INFO } from '../data/printingData';

export const PricingCalculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('p-wedding-cards');
  const [quantity, setQuantity] = useState<number>(100);
  const [bookPages, setBookPages] = useState<number>(120);
  const [hasGoldFoil, setHasGoldFoil] = useState<boolean>(true);
  const [hasVelvetLamination, setHasVelvetLamination] = useState<boolean>(false);
  const [hasSpotUV, setHasSpotUV] = useState<boolean>(false);
  const [isExpress24h, setIsExpress24h] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const selectedProduct = useMemo(() => {
    return SAMPLE_PRICE_LIST.find((p) => p.id === selectedProductId) || SAMPLE_PRICE_LIST[0];
  }, [selectedProductId]);

  // Adjust defaults when product switches
  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    const prod = SAMPLE_PRICE_LIST.find((p) => p.id === productId);
    if (!prod) return;
    
    if (prod.id === 'p-bw-book' || prod.id === 'p-color-print') {
      setQuantity(50); // 50 copies of books
      setBookPages(100);
    } else if (prod.id === 'p-thesis' || prod.id === 'p-hardcover') {
      setQuantity(2);
      setBookPages(120);
    } else {
      setQuantity(prod.baseQuantity);
    }
  };

  // Calculation logic
  const calculation = useMemo(() => {
    let baseTotal = 0;
    let descriptionText = '';

    if (selectedProduct.id === 'p-bw-book') {
      // PKR 8 per page * pages * quantity copies
      baseTotal = selectedProduct.basePricePKR * bookPages * quantity;
      descriptionText = `${quantity} books × ${bookPages} B&W pages @ PKR 8/page`;
    } else if (selectedProduct.id === 'p-color-print') {
      // PKR 30 per page * pages * quantity
      baseTotal = selectedProduct.basePricePKR * bookPages * quantity;
      descriptionText = `${quantity} copies × ${bookPages} Color pages @ PKR 30/page`;
    } else if (selectedProduct.id === 'p-thesis') {
      // PKR 2500 per complete thesis
      baseTotal = selectedProduct.basePricePKR * quantity;
      descriptionText = `${quantity} complete hardcover thesis binding(s) @ PKR 2,500 each`;
    } else if (selectedProduct.id === 'p-hardcover') {
      // PKR 800 per book
      baseTotal = selectedProduct.basePricePKR * quantity;
      descriptionText = `${quantity} hardcover book binding(s) @ PKR 800 each`;
    } else {
      // Bulk piece products (Business cards, Wedding cards, Birthday cards, Brochures)
      const ratio = quantity / selectedProduct.baseQuantity;
      baseTotal = Math.round(selectedProduct.basePricePKR * ratio);
      descriptionText = `${quantity} ${selectedProduct.name} (Base: PKR ${selectedProduct.basePricePKR} per ${selectedProduct.unit})`;
    }

    // Addons
    let addonsTotal = 0;
    const activeAddons: { name: string; cost: number }[] = [];

    if (hasGoldFoil) {
      const foilCost = selectedProduct.id === 'p-wedding-cards' ? 1200 : 1500;
      addonsTotal += foilCost;
      activeAddons.push({ name: 'Metallic Hot Foil Stamping', cost: foilCost });
    }

    if (hasVelvetLamination) {
      const velvetCost = 1000;
      addonsTotal += velvetCost;
      activeAddons.push({ name: 'Soft-Touch Velvet Lamination', cost: velvetCost });
    }

    if (hasSpotUV) {
      const uvCost = 900;
      addonsTotal += uvCost;
      activeAddons.push({ name: 'Raised Spot UV Highlights', cost: uvCost });
    }

    if (isExpress24h) {
      const rushCost = 800;
      addonsTotal += rushCost;
      activeAddons.push({ name: '24-Hour Express Priority Dispatch', cost: rushCost });
    }

    // Volume discount (10% off base when quantity is large)
    let discount = 0;
    if (quantity >= 500 && !selectedProduct.id.includes('book') && !selectedProduct.id.includes('print')) {
      discount = Math.round(baseTotal * 0.1);
    } else if ((selectedProduct.id === 'p-bw-book' || selectedProduct.id === 'p-color-print') && quantity >= 200) {
      discount = Math.round(baseTotal * 0.12);
    }

    const grandTotal = Math.max(0, baseTotal + addonsTotal - discount);

    return {
      baseTotal,
      addonsTotal,
      activeAddons,
      discount,
      grandTotal,
      descriptionText,
    };
  }, [selectedProduct, quantity, bookPages, hasGoldFoil, hasVelvetLamination, hasSpotUV, isExpress24h]);

  const handleCopyQuote = () => {
    const quoteText = `Al-Madina Printing Press - Estimated Quotation
Product: ${selectedProduct.name}
Quantity / Pages: ${selectedProduct.id.includes('book') || selectedProduct.id.includes('print') ? `${quantity} copies (${bookPages} pages)` : `${quantity} pieces`}
Base Amount: PKR ${calculation.baseTotal.toLocaleString()}
Add-ons: ${calculation.activeAddons.map(a => `${a.name} (+PKR ${a.cost})`).join(', ') || 'None'}
Discount: ${calculation.discount > 0 ? `PKR ${calculation.discount.toLocaleString()}` : 'None'}
Grand Total: PKR ${calculation.grandTotal.toLocaleString()}
Facility: Blue Area, Islamabad (0300-1234567)`;

    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppEstimateLink = () => {
    const text = `Assalam o Alaikum Al-Madina Printing Press,
I generated a quotation from your website:
- Item: ${selectedProduct.name}
- Quantity: ${quantity} ${selectedProduct.unit}
${selectedProduct.id.includes('book') || selectedProduct.id.includes('print') ? `- Page Count: ${bookPages} pages per copy\n` : ''}- Selected Finishing: ${calculation.activeAddons.map(a => a.name).join(', ') || 'Standard finish'}
- Estimated Total: PKR ${calculation.grandTotal.toLocaleString()}
Please confirm file requirements, paper samples, and turnaround time at Blue Area Islamabad.`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const isBookOrPageProduct = selectedProduct.id === 'p-bw-book' || selectedProduct.id === 'p-color-print';
  const isBindingOnly = selectedProduct.id === 'p-thesis' || selectedProduct.id === 'p-hardcover';

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Transparent Pricing Matrix</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Instant Printing Cost Estimator
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Select your product, customize quantities, and choose premium embellishments. Get an immediate price estimate in Pakistani Rupees (PKR) and send it directly to our press masters via WhatsApp.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selection & Configuration */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2 font-cinzel">
                1. Select Printing Product
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SAMPLE_PRICE_LIST.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleProductChange(prod.id)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                      selectedProductId === prod.id
                        ? 'bg-amber-50/90 border-amber-600 text-amber-950 font-semibold shadow-xs'
                        : 'bg-stone-50 border-stone-200 text-neutral-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-medium text-sm text-neutral-900">{prod.name}</span>
                      <span className="text-[11px] text-amber-800 font-bold">
                        PKR {prod.basePricePKR.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-500 font-normal">
                      per {prod.unit}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity / Page Controls */}
            <div className="pt-4 border-t border-stone-200 space-y-4">
              <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider font-cinzel">
                2. Configure Volume & Dimensions
              </label>

              {isBookOrPageProduct ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">
                      Number of Book Copies: <strong className="text-neutral-900">{quantity} copies</strong>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                      <span>10 copies</span>
                      <span>500 copies</span>
                      <span>1,000 copies</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">
                      Pages per Book: <strong className="text-neutral-900">{bookPages} pages</strong>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={bookPages}
                      onChange={(e) => setBookPages(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              ) : isBindingOnly ? (
                <div>
                  <label className="block text-xs text-neutral-600 mb-1">
                    Number of Copies to Bind: <strong className="text-neutral-900">{quantity} books</strong>
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 5, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setQuantity(num)}
                        className={`px-4 py-2 text-xs font-medium rounded-lg border ${
                          quantity === num
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'bg-stone-50 border-stone-200 text-neutral-700 hover:bg-stone-100'
                        }`}
                      >
                        {num} {num === 1 ? 'Copy' : 'Copies'}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-600">
                      Total Quantity ({selectedProduct.unit}):
                    </span>
                    <span className="text-sm font-bold text-neutral-900 font-mono">
                      {quantity.toLocaleString()} pieces
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>50 pcs</span>
                    <span>500 pcs (10% Off)</span>
                    <span>2,000 pcs</span>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Finishing Embellishments */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider font-cinzel">
                3. Premium Finishing & Services
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                  hasGoldFoil ? 'bg-amber-50 border-amber-500' : 'bg-stone-50 border-stone-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={hasGoldFoil}
                    onChange={(e) => setHasGoldFoil(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded accent-amber-600"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block">Gold Foil Stamping</span>
                    <span className="text-neutral-500">+PKR 1,200</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                  hasVelvetLamination ? 'bg-amber-50 border-amber-500' : 'bg-stone-50 border-stone-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={hasVelvetLamination}
                    onChange={(e) => setHasVelvetLamination(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded accent-amber-600"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block">Velvet Soft-Touch</span>
                    <span className="text-neutral-500">+PKR 1,000</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                  hasSpotUV ? 'bg-amber-50 border-amber-500' : 'bg-stone-50 border-stone-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={hasSpotUV}
                    onChange={(e) => setHasSpotUV(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded accent-amber-600"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block">Raised Spot UV</span>
                    <span className="text-neutral-500">+PKR 900</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                  isExpress24h ? 'bg-amber-50 border-amber-500' : 'bg-stone-50 border-stone-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={isExpress24h}
                    onChange={(e) => setIsExpress24h(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded accent-amber-600"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block">24h Express Dispatch</span>
                    <span className="text-neutral-500">+PKR 800</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Quotation Summary Card */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-cinzel text-amber-400 uppercase tracking-wider">
                  Al-Madina Press · Blue Area
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  Quotation Summary
                </h3>
              </div>
              <button
                onClick={handleCopyQuote}
                className="px-2.5 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg flex items-center gap-1.5 transition-colors"
                title="Copy quotation details to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Itemized Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start pb-2 border-b border-neutral-800/80">
                <div>
                  <span className="font-semibold text-white block">{selectedProduct.name}</span>
                  <span className="text-neutral-400 text-[11px]">{calculation.descriptionText}</span>
                </div>
                <span className="font-mono text-neutral-200 text-sm">
                  PKR {calculation.baseTotal.toLocaleString()}
                </span>
              </div>

              {calculation.activeAddons.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] text-amber-400/90 font-medium block uppercase tracking-wider">
                    Finishing Embellishments:
                  </span>
                  {calculation.activeAddons.map((addon) => (
                    <div key={addon.name} className="flex justify-between text-neutral-300 pl-2 text-[11px]">
                      <span>+ {addon.name}</span>
                      <span className="font-mono">+PKR {addon.cost.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              {calculation.discount > 0 && (
                <div className="flex justify-between text-emerald-400 pt-1 font-medium text-[11px]">
                  <span>Bulk Order Volume Discount (10%):</span>
                  <span className="font-mono">- PKR {calculation.discount.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div className="pt-4 border-t border-neutral-800">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase font-cinzel text-neutral-400 tracking-wider">
                  Estimated Total:
                </span>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold font-serif gold-foil-text font-mono">
                    PKR {calculation.grandTotal.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-neutral-400 block mt-0.5">
                    Pakistani Rupees (Inclusive of basic prepress)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppEstimateLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Quote via WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700/80 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Or Submit Custom File & Inquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Notice from business brief */}
            <div className="p-3 rounded-lg bg-neutral-800/60 border border-neutral-700/60 flex items-start gap-2.5 text-[11px] text-neutral-400">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                Prices are fictional examples based on standard specifications. Actual printing costs depend on paper quality, quantity, colors, finishing, and custom artwork requirements.
              </p>
            </div>

          </div>

        </div>

        {/* Complete Reference Price Table */}
        <div className="mt-16 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Official Sample Price List — Al-Madina Press
              </h3>
              <p className="text-xs text-neutral-500">
                Direct printing rates for individuals, schools, authors, and corporate offices in Islamabad.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Blue Area, Islamabad
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-700">
              <thead className="bg-stone-100 text-neutral-900 font-semibold font-cinzel text-[11px] uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3 px-6">Product / Service</th>
                  <th className="py-3 px-6">Standard Unit</th>
                  <th className="py-3 px-6">Estimated Price (PKR)</th>
                  <th className="py-3 px-6">Notes & Specification</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {SAMPLE_PRICE_LIST.map((prod) => (
                  <tr key={prod.id} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-neutral-900">
                      {prod.name}
                    </td>
                    <td className="py-3.5 px-6 text-neutral-600">
                      {prod.unit}
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-amber-900">
                      PKR {prod.basePricePKR.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-6 text-neutral-600 max-w-xs truncate">
                      {prod.priceNote}
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <button
                        onClick={() => {
                          handleProductChange(prod.id);
                          window.scrollTo({ top: document.getElementById('pricing')?.offsetTop || 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2"
                      >
                        Calculate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
