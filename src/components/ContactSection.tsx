import React, { useState } from 'react';
import { 
  BUSINESS_INFO, 
  SERVICES_LIST 
} from '../data/printingData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Upload, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefilledService || 'Wedding Invitation Cards',
    quantity: '100',
    notes: '',
    hasArtwork: 'yes',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and valid phone/WhatsApp number.');
      return;
    }
    setSubmitted(true);
  };

  const generateDirectWhatsAppUrl = () => {
    const text = `Assalam o Alaikum Al-Madina Printing Press,
My name is ${formData.name || 'Customer'}.
I would like to inquire regarding printing services:
- Service: ${formData.service}
- Approx Quantity: ${formData.quantity}
- Notes: ${formData.notes || 'Looking for pricing and turnaround time.'}
Please let me know how we can proceed.`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>Connect With Our Press Masters</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Contact Us & Request a Quote
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Visit our Blue Area workshop in Islamabad, give us a call, or send an inquiry below. We inspect your manuscripts and design files to provide same-day quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-cinzel text-amber-800 uppercase tracking-wider font-semibold">
                  Official Facility Info
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  {BUSINESS_INFO.type}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Location / Workshop</span>
                    <span className="text-neutral-600">{BUSINESS_INFO.location}</span>
                    <span className="text-[11px] text-neutral-400 block mt-0.5">Adjacent to Jinnah Avenue commercial area</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Phone & WhatsApp Hotline</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-neutral-800 hover:text-amber-800 font-mono font-medium block">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-neutral-500">Available during working hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Official Email</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-neutral-800 hover:text-amber-800 font-medium block">
                      {BUSINESS_INFO.email}
                    </a>
                    <span className="text-[11px] text-neutral-500">Send high-res PDF manuscripts & artwork</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Working Hours</span>
                    <span className="text-neutral-800 font-medium">{BUSINESS_INFO.openingHours}</span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Sunday: Closed (Available for scheduled emergency runs)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp (0300-1234567)</span>
                </a>
              </div>
            </div>

            {/* Blue Area Islamabad Map Simulation Box */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-amber-400 font-cinzel">
                <span>Location Highlight</span>
                <span className="font-mono">Capital Territory</span>
              </div>
              <h4 className="font-serif text-base font-bold text-white">
                Convenient Central Location in Blue Area
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Easily accessible from both Islamabad and Rawalpindi via Jinnah Avenue, Faisal Avenue, and Metro Bus station. Free parking and on-site sample counter.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quotation & File Submission Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Your printing inquiry for <strong>{formData.service}</strong> has been logged. Our Blue Area production team will review your specifications and contact you at <strong>{formData.phone}</strong> shortly with your exact price quote.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={generateDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp for Faster Reply</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Wedding Invitation Cards',
                        quantity: '100',
                        notes: '',
                        hasArtwork: 'yes',
                      });
                      setFileName(null);
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 border border-stone-200 rounded-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="pb-3 border-b border-stone-200">
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Send an Inquiry or Request a Price Quote
                  </h3>
                  <p className="text-neutral-500 mt-1">
                    Fill out the parameters below. We usually respond within 1 to 2 business hours.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@example.com"
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Service / Product Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Estimated Quantity (Pieces or Books)
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g. 100 pieces or 5 books"
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 mb-1">
                      Do you have ready artwork / manuscript?
                    </label>
                    <select
                      name="hasArtwork"
                      value={formData.hasArtwork}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="yes">Yes, I have print-ready PDF/Word/AI files</option>
                      <option value="need_design">I need Al-Madina team to design it</option>
                      <option value="rough_draft">I have rough draft / handwritten text</option>
                    </select>
                  </div>
                </div>

                {/* File Upload Simulator */}
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Attach Sample / Design / Manuscript (PDF, DOCX, ZIP, JPG)
                  </label>
                  <label className="p-4 border-2 border-dashed border-neutral-300 hover:border-amber-500 rounded-xl flex flex-col items-center justify-center cursor-pointer bg-stone-50 transition-colors">
                    <Upload className="w-5 h-5 text-neutral-400 mb-1" />
                    <span className="text-xs text-neutral-600 font-medium">
                      {fileName ? `Attached: ${fileName}` : 'Click to select sample file or drag and drop'}
                    </span>
                    <span className="text-[10px] text-neutral-400 mt-0.5">
                      Max file size: 25MB (Digital proofs reviewed free of charge)
                    </span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                    />
                  </label>
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Project Notes & Finishing Preferences
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Specify paper preference (e.g. 80gsm cream, 350gsm art card), gold foil stamping requirements, binding style, or expected delivery date in Islamabad."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-neutral-900 hover:bg-amber-800 shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quotation Request</span>
                  </button>
                  <p className="text-[10px] text-neutral-500 text-center mt-2">
                    Your contact information is strictly used to provide your printing estimate.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
