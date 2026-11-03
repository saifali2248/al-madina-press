import React, { useState } from 'react';
import { 
  SERVICES_LIST, 
  TARGET_CUSTOMERS, 
  ServiceItem 
} from '../data/printingData';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  CreditCard, 
  FileText, 
  Award, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  FileCheck, 
  CalendarCheck, 
  Building,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'invitations' | 'books' | 'commercial' | 'binding'>('all');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'wedding-cards':
      case 'birthday-cards':
        return <Heart className="w-5 h-5 text-amber-700" />;
      case 'book-printing':
        return <BookOpen className="w-5 h-5 text-amber-700" />;
      case 'business-cards':
        return <CreditCard className="w-5 h-5 text-amber-700" />;
      case 'certificates':
        return <Award className="w-5 h-5 text-amber-700" />;
      case 'book-binding':
      case 'thesis-printing':
        return <Layers className="w-5 h-5 text-amber-700" />;
      default:
        return <FileText className="w-5 h-5 text-amber-700" />;
    }
  };

  const getTargetIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-800" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-800" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-amber-800" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-800" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-amber-800" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-amber-800" />;
      default: return <Building className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Comprehensive Printing Capabilities</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Our Full Spectrum of Printing Services
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            From precision offset printing and artisan invitation cards to corporate branding collateral and certified university thesis bindings in Islamabad.
          </p>

          {/* Service Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (10)' },
              { id: 'invitations', label: 'Invitation Cards' },
              { id: 'books', label: 'Book Printing' },
              { id: 'commercial', label: 'Corporate & Marketing' },
              { id: 'binding', label: 'Thesis & Book Binding' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === tab.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-stone-50 text-neutral-600 hover:text-neutral-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-stone-50/70 hover:bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-800">
                    {service.startingPrice}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-1.5">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">
                  Lead time: {service.turnaround}
                </span>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-amber-800"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Target Customers Strip (Section 5 from prompt) */}
        <div className="mt-20 pt-16 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-cinzel">
              Clientele & Partnerships
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Who We Serve Across Islamabad & Rawalpindi
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Tailored printing and binding solutions designed for your specific domain and volume needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TARGET_CUSTOMERS.map((cust) => (
              <div
                key={cust.title}
                className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-3">
                  {getTargetIcon(cust.iconName)}
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1.5">
                  {cust.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {cust.description}
                </p>
              </div>
            ))}

            {/* Callout box in target grid */}
            <div className="p-5 rounded-xl bg-neutral-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  Blue Area Islamabad
                </span>
                <h4 className="text-sm font-serif font-bold text-white mt-1">
                  Have a Special Requirement?
                </h4>
                <p className="text-xs text-neutral-300 mt-1.5">
                  Visit our workshop in Blue Area or send your digital files via WhatsApp for instant inspection.
                </p>
              </div>
              <button
                onClick={() => onSelectServiceForQuote('Custom Corporate Project')}
                className="mt-4 text-xs font-semibold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
              >
                <span>Talk to a Print Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
