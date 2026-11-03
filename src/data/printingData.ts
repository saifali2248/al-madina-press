export interface ServiceItem {
  id: string;
  title: string;
  category: 'invitations' | 'books' | 'commercial' | 'binding';
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  turnaround: string;
  minOrder: string;
  features: string[];
  imageKey?: string;
}

export interface CardSample {
  id: string;
  title: string;
  category: 'wedding' | 'birthday' | 'corporate' | 'engagement';
  eventSubtitle: string;
  defaultHostNames: string;
  defaultEventDate: string;
  defaultVenue: string;
  paperStock: string;
  foilOptions: ('Gold Hot Foil' | 'Silver Chrome' | 'Rose Gold' | 'Blind Embossed')[];
  envelopeColor: string;
  themeColor: string;
  accentColor: string;
  description: string;
  pricePer100: number; // in PKR
  badgeText: string;
  cardImage: string;
  frontMotif: string;
  bismillahText?: boolean;
}

export interface PricingProduct {
  id: string;
  name: string;
  category: string;
  unit: string;
  baseQuantity: number;
  basePricePKR: number;
  priceNote: string;
  options?: {
    label: string;
    choices: { name: string; priceMultiplier?: number; flatAddon?: number }[];
  }[];
}

export type WritingStyleKey = 'royal' | 'artisan' | 'modern';

export interface WritingStyleConfig {
  key: WritingStyleKey;
  label: string;
  badge: string;
  brandTitle: string;
  brandArabic: string;
  brandSubtitle: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  description: string;
  slogan: string;
  fontClass: string;
  serifClass: string;
  quoteButtonText: string;
  exploreButtonText: string;
}

export const WRITING_STYLES: Record<WritingStyleKey, WritingStyleConfig> = {
  royal: {
    key: 'royal',
    label: 'Royal Calligraphy & Heritage',
    badge: 'Imperial Calligraphic Heritage',
    brandTitle: 'AL-MADINA',
    brandArabic: 'المدينہ پرنٹنگ پریس',
    brandSubtitle: 'ROYAL PRESS · BLUE AREA ISLAMABAD',
    headline: 'Where Sacred Calligraphy Meets',
    headlineAccent: 'Master Printcraft',
    subheadline: 'Bespoke Pakistani Bridal Suites, Archival Book Bindings & Fine Letterpress',
    description: 'Welcome to Al-Madina Printing Press—Islamabad’s revered atelier for luxury wedding invitation cards, Quranic & scholarly book printing, and bespoke corporate stationery. Where heirloom hot-stamped gold foil, hand-milled velvet cardstocks, and German Heidelberg fidelity unite to honor life’s most auspicious moments.',
    slogan: '“Your Ideas, Printed to Perfection — With Royal Craftsmanship.”',
    fontClass: 'font-cinzel',
    serifClass: 'font-cormorant',
    quoteButtonText: 'Commission a Royal Quote',
    exploreButtonText: 'Explore Atelier Services',
  },
  artisan: {
    key: 'artisan',
    label: 'Artisan Letterpress & Atelier',
    badge: 'Master Bookbinders & Craftsmen',
    brandTitle: 'Al-Madina',
    brandArabic: 'مطبع المدينہ',
    brandSubtitle: 'ARTISAN LETTERPRESS & BINDERY · ISLAMABAD',
    headline: 'Curators of Fine Paper &',
    headlineAccent: 'Tactile Impressions',
    subheadline: 'Hand-Bound Hardcovers, Foil-Debossed Invitations & Scholarly Publications',
    description: 'Rooted in the cultural capital of Pakistan at Blue Area, Islamabad, Al-Madina Printing Press transforms pure Italian linens, Japanese cotton boards, and rich archival inks into heirloom wedding invitations and Smyth-sewn literary volumes. Every fold, blind deboss, and golden seal is finished with artisan devotion.',
    slogan: '“Your Ideas, Printed to Perfection — Crafted by Hand & Press.”',
    fontClass: 'font-serif-luxury italic',
    serifClass: 'font-cormorant',
    quoteButtonText: 'Request Artisan Estimate',
    exploreButtonText: 'Discover Handcrafted Services',
  },
  modern: {
    key: 'modern',
    label: 'Modern Executive & Commercial',
    badge: 'High-Precision Commercial Press',
    brandTitle: 'AL-MADINA',
    brandArabic: 'AL-MADINA PRESS',
    brandSubtitle: 'PRINTING PRESS · BLUE AREA ISLAMABAD',
    headline: 'Professional Printing Solutions for',
    headlineAccent: 'Every Occasion',
    subheadline: 'Next-Generation Offset Lithography, Premium Invitations & Rapid Publishing',
    description: 'Welcome to Al-Madina Printing Press, your trusted partner for premium book printing, elegant invitation cards, and professional commercial printing services. From a single thesis volume to bulk publisher runs, we deliver flawless quality, creative excellence, and dependable turnaround at competitive prices.',
    slogan: '“Your Ideas, Printed to Perfection.”',
    fontClass: 'font-sans font-bold',
    serifClass: 'font-serif-luxury',
    quoteButtonText: 'Request a Quote',
    exploreButtonText: 'Explore Our Services',
  },
};

export const BUSINESS_INFO = {
  name: 'Al-Madina Printing Press',
  type: 'Printing Press, Book Printing & Invitation Cards',
  location: 'Blue Area, Islamabad, Pakistan',
  phone: '0300-1234567',
  phoneDisplay: '0300-1234567',
  whatsappNumber: '923001234567',
  email: 'info@almadinaprinting.example',
  openingHours: 'Monday–Saturday, 9:00 AM – 8:00 PM',
  slogan: 'Your Ideas, Printed to Perfection.',
  headline: 'Professional Printing Solutions for Every Occasion',
  aboutSummary:
    'Al-Madina Printing Press is a professional printing service provider specializing in high-quality book printing, wedding invitation cards, business stationery, and custom printing solutions. We are committed to delivering excellent print quality, creative designs, affordable prices, and timely service for individuals, businesses, schools, and organizations.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'wedding-cards',
    title: 'Wedding Invitation Cards',
    category: 'invitations',
    shortDesc: 'Traditional, modern, and bespoke Pakistani wedding card suites.',
    fullDesc: 'Exquisite Nikkah, Barat, and Walima cards featuring heavy velvet cardstock, intricate gold and silver hot-foil calligraphy, die-cut floral patterns, personalized wax seals, and matching RSVP inserts.',
    startingPrice: 'PKR 5,000 / 100 pcs',
    turnaround: '3–5 working days',
    minOrder: '50 pieces',
    features: ['Gold & silver hot-stamped foil', 'Luxury velvet & handmade cardstock', 'Custom laser-cut gatefold & pockets', 'Custom Arabic/Urdu calligraphy', 'Matching envelopes with gold wax seals'],
  },
  {
    id: 'book-printing',
    title: 'Book Printing',
    category: 'books',
    shortDesc: 'Textbooks, novels, Islamic literature, and educational publications.',
    fullDesc: 'High-speed offset and digital book manufacturing. We handle everything from manuscript layout formatting to plate making, multi-signature folding, section sewing, and precision trimming.',
    startingPrice: 'PKR 8 / B&W page',
    turnaround: '5–10 working days for bulk',
    minOrder: '100 copies (short runs available)',
    features: ['70gsm to 100gsm woodfree & offset paper', 'Crisp high-definition monochrome & 4-color print', 'ISBN & copyright page layout review', 'Full-color high-gloss or soft-touch matte covers', 'Foil embossed book spine lettering'],
  },
  {
    id: 'birthday-cards',
    title: 'Birthday Invitation Cards',
    category: 'invitations',
    shortDesc: 'Personalized birthday invitations for kids, milestones, and family celebrations.',
    fullDesc: 'Vibrant, celebratory invitations with customized themes, photo insertions, gold glitter foil accents, and die-cut shapes tailored for children, youth, and golden jubilee anniversaries.',
    startingPrice: 'PKR 2,000 / 50 pcs',
    turnaround: '2–3 working days',
    minOrder: '30 pieces',
    features: ['Custom character & royal themes', 'Premium 350gsm art cardstock', 'Gloss or matte protective coating', 'Custom RSVP & thank-you tags', 'Matching envelopes included'],
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    category: 'commercial',
    shortDesc: 'Executive business cards for corporate leaders, consultants, and teams.',
    fullDesc: 'Make an unforgettable first impression with ultra-thick cotton cardstock, tactile spot UV embossing, metallic foil edges, and velvet soft-touch lamination.',
    startingPrice: 'PKR 800 / 100 pcs',
    turnaround: '24–48 hours',
    minOrder: '100 pieces',
    features: ['350gsm to 450gsm cardstock', 'Raised spot UV glossy logo highlights', 'Gold, silver & rose gold edge gilding', 'Double-sided precision color reproduction', 'Rounded corner die-cut option'],
  },
  {
    id: 'brochures-flyers',
    title: 'Brochures & Flyers',
    category: 'commercial',
    shortDesc: 'Promotional tri-fold, bi-fold, and marketing flyers for businesses.',
    fullDesc: 'High-impact marketing collateral printed on premium 128gsm to 150gsm art paper with vibrant 4-color offset inks that showcase your products and brand story with crystal clarity.',
    startingPrice: 'PKR 3,500 / 100 pcs',
    turnaround: '2–3 working days',
    minOrder: '100 pieces',
    features: ['Tri-fold, Z-fold, and Bi-fold options', '128gsm/150gsm glossy & matte art paper', 'Precision machine creasing & folding', 'High-speed automated bulk runs', 'Free digital proof prior to press'],
  },
  {
    id: 'pamphlets',
    title: 'Pamphlets & Leaflets',
    category: 'commercial',
    shortDesc: 'Cost-effective advertising and informational handouts for campaigns.',
    fullDesc: 'Optimized for mass distribution for retail openings, medical clinics, educational admissions, and civic awareness across Islamabad and Rawalpindi.',
    startingPrice: 'PKR 2,500 / 500 pcs',
    turnaround: '24–48 hours',
    minOrder: '250 pieces',
    features: ['80gsm to 105gsm lightweight paper', 'Single or double-sided full color', 'Sharp typography and photography', 'Economical bulk packaging', 'Rapid dispatch for events'],
  },
  {
    id: 'thesis-printing',
    title: 'Thesis Printing & Binding',
    category: 'binding',
    shortDesc: 'University dissertations, research papers, and PhD project reports.',
    fullDesc: 'Strict formatting compliance for Pakistani universities including Quaid-i-Azam University (QAU), NUST, FAST-NU, COMSATS, IIUI, and Bahria. Premium leatherette cover with hot gold foil university crest.',
    startingPrice: 'PKR 2,500 / copy',
    turnaround: 'Same day / 24-hour express',
    minOrder: '1 copy',
    features: ['Standard Black, Maroon, Navy & Green hardcovers', 'Hot gold foil stamped title and spine', '80gsm Century/Alabaster archival paper', 'Compliant university margin specifications', 'Includes digital CD sleeve insertion'],
  },
  {
    id: 'book-binding',
    title: 'Professional Book Binding',
    category: 'binding',
    shortDesc: 'Hardcover rexine, softcover perfect bind, cloth cover, and spiral binding.',
    fullDesc: 'State-of-the-art binding line guaranteeing durable spine integrity, lay-flat reading ease, and library-grade archival preservation for documents, registers, and books.',
    startingPrice: 'PKR 800 / book',
    turnaround: '1–3 working days',
    minOrder: '1 book',
    features: ['Hardcover rexine with gold foil stamping', 'Hot-melt polyurethane perfect binding', 'Heavy-duty steel double-wire spiral', 'Satin ribbon bookmark attachment', 'Corner protectors in brass or silver'],
  },
  {
    id: 'letterheads-envelopes',
    title: 'Letterheads & Envelopes',
    category: 'commercial',
    shortDesc: 'Executive corporate stationery, billing sheets, and branded envelopes.',
    fullDesc: 'Complete corporate identity sets printed on laser-printer friendly imported 100gsm executive bond paper with matching DL and A4 peel-and-seal envelopes.',
    startingPrice: 'PKR 2,200 / 200 pcs',
    turnaround: '2–3 working days',
    minOrder: '100 pieces',
    features: ['100gsm executive bond paper', 'Peel-and-seal security envelopes', 'Exact Pantone corporate color matching', 'Watermark simulation options', 'Matching presentation folders available'],
  },
  {
    id: 'certificates',
    title: 'Certificates & Diplomas',
    category: 'commercial',
    shortDesc: 'Prestigious award certificates for schools, universities, and corporate events.',
    fullDesc: 'Anti-counterfeit features, metallic foil borders, embossed seal stamps, and heavy textured parchment paper designed to celebrate achievement with dignity.',
    startingPrice: 'PKR 1,500 / 50 pcs',
    turnaround: '1–2 working days',
    minOrder: '25 pieces',
    features: ['300gsm textured linen/parchment card', 'Gold hot-foil medallion and borders', 'Blind embossed institutional seal', 'Individual variable student name printing', 'Faux-leather presentation diploma folders'],
  },
];

export const SAMPLE_PRICE_LIST: PricingProduct[] = [
  {
    id: 'p-business-cards',
    name: 'Business Cards',
    category: 'Stationery',
    unit: '100 pieces',
    baseQuantity: 100,
    basePricePKR: 800,
    priceNote: 'Standard 350gsm art card with matte or gloss lamination.',
  },
  {
    id: 'p-wedding-cards',
    name: 'Wedding Invitation Cards',
    category: 'Invitations',
    unit: '100 pieces',
    baseQuantity: 100,
    basePricePKR: 5000,
    priceNote: 'Includes luxury cardstock, envelope, gold foil stamping & Urdu/English typesetting.',
  },
  {
    id: 'p-birthday-cards',
    name: 'Birthday Invitation Cards',
    category: 'Invitations',
    unit: '50 pieces',
    baseQuantity: 50,
    basePricePKR: 2000,
    priceNote: 'Custom theme, high-resolution color print, envelopes included.',
  },
  {
    id: 'p-bw-book',
    name: 'Black & White Book Printing',
    category: 'Book Printing',
    unit: 'per page',
    baseQuantity: 100,
    basePricePKR: 8,
    priceNote: '80gsm high-opacity imported paper, crisp 1200dpi monochrome print.',
  },
  {
    id: 'p-color-print',
    name: 'Color Printing',
    category: 'Digital Print',
    unit: 'per page',
    baseQuantity: 20,
    basePricePKR: 30,
    priceNote: '100gsm art/bond paper, rich 4-color digital toner or offset.',
  },
  {
    id: 'p-brochures',
    name: 'Brochures & Flyers',
    category: 'Marketing',
    unit: '100 pieces',
    baseQuantity: 100,
    basePricePKR: 3500,
    priceNote: '128gsm art paper, double-sided full color with machine tri-fold.',
  },
  {
    id: 'p-thesis',
    name: 'Thesis Printing & Binding',
    category: 'Academic',
    unit: 'complete book',
    baseQuantity: 1,
    basePricePKR: 2500,
    priceNote: 'Complete printing up to 120 pages with gold-foil embossed hardcover rexine.',
  },
  {
    id: 'p-hardcover',
    name: 'Hardcover Book Binding',
    category: 'Binding',
    unit: 'per book',
    baseQuantity: 1,
    basePricePKR: 800,
    priceNote: 'Heavy greyboard core, gold-foil lettering, bookmark ribbon, section sewn.',
  },
];

export const INVITATION_CARD_SAMPLES: CardSample[] = [
  {
    id: 'card-royal-emerald',
    title: 'The Royal Emerald Nikkah Suite',
    category: 'wedding',
    eventSubtitle: 'Solemnization of Nikkah & Reception',
    defaultHostNames: 'Hira Khan & Zain Shah',
    defaultEventDate: 'Saturday, 18th November 2026',
    defaultVenue: 'Serena Hotel, Shamadan Hall, Islamabad',
    paperStock: '380gsm Emerald Velvet Cardstock',
    foilOptions: ['Gold Hot Foil', 'Rose Gold'],
    envelopeColor: '#0b3d2e',
    themeColor: '#083325',
    accentColor: '#d4af37',
    description: 'Our flagship bridal suite featuring traditional Mughal geometric arches, gold hot-stamped Quranic blessings, deep emerald velvet, matching RSVP insert, and an authentic royal monogram wax seal.',
    pricePer100: 6800,
    badgeText: 'Bestseller',
    cardImage: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    frontMotif: 'mughal-arch',
    bismillahText: true,
  },
  {
    id: 'card-ivory-walima',
    title: 'Ivory Pearl & Gold Walima Card',
    category: 'wedding',
    eventSubtitle: 'Auspicious Walima Celebration',
    defaultHostNames: 'Daniyal Ahmed & Ayla Tariq',
    defaultEventDate: 'Sunday, 22nd November 2026',
    defaultVenue: 'Islamabad Club Marquee, Islamabad',
    paperStock: '350gsm Textured Italian Linen',
    foilOptions: ['Gold Hot Foil', 'Blind Embossed'],
    envelopeColor: '#f7f4ee',
    themeColor: '#2b2319',
    accentColor: '#caa048',
    description: 'Understated aristocratic elegance with warm ivory textured paper, blind-embossed floral corners, delicate golden border filigree, and a double-folded personalized inner insert.',
    pricePer100: 5200,
    badgeText: 'Classic Luxury',
    cardImage: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    frontMotif: 'floral-filigree',
    bismillahText: true,
  },
  {
    id: 'card-maroon-mehndi',
    title: 'Ruby Maroon & Gold Shehnai Suite',
    category: 'wedding',
    eventSubtitle: 'Joyous Mehndi & Sangeet Night',
    defaultHostNames: 'Zunaira Malik & Bilal Chaudhry',
    defaultEventDate: 'Friday, 13th November 2026',
    defaultVenue: 'The Monal Marquee, Expressway, Islamabad',
    paperStock: '360gsm Deep Maroon Silk Matte',
    foilOptions: ['Gold Hot Foil'],
    envelopeColor: '#4a0e17',
    themeColor: '#4a0e17',
    accentColor: '#e5b342',
    description: 'Vibrant celebratory aesthetics for festive wedding nights. Features golden dholak and paisley motifs, golden tassel ties, and rich ruby red satin finish.',
    pricePer100: 5000,
    badgeText: 'Festive Favorite',
    cardImage: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    frontMotif: 'paisley-traditional',
    bismillahText: true,
  },
  {
    id: 'card-royal-prince-bday',
    title: 'Little Prince Gold Foil Birthday',
    category: 'birthday',
    eventSubtitle: '1st Birthday Royal Celebration',
    defaultHostNames: 'Master Rayyan Qureshi',
    defaultEventDate: 'Sunday, 5th December 2026 at 4:30 PM',
    defaultVenue: 'McDonald’s F-9 Park Playland / Marquee, Islamabad',
    paperStock: '320gsm Pearlized Sky Blue Card',
    foilOptions: ['Gold Hot Foil', 'Silver Chrome'],
    envelopeColor: '#1e3a5f',
    themeColor: '#0f2744',
    accentColor: '#d4af37',
    description: 'Charming keepsake birthday invitation with a golden embossed crown emblem, pastel starry backdrop, custom photo aperture, and matching royal thank-you tag.',
    pricePer100: 3800,
    badgeText: 'Kids Special',
    cardImage: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    frontMotif: 'royal-crown',
    bismillahText: false,
  },
  {
    id: 'card-minimalist-monogram',
    title: 'Minimalist Vellum & Wax Seal Engagement',
    category: 'engagement',
    eventSubtitle: 'Celebration of Engagement & Ring Ceremony',
    defaultHostNames: 'Safa Farooq & Hamza Siddiqui',
    defaultEventDate: 'Saturday, 12th December 2026',
    defaultVenue: 'Margalla Hotel, Hall of Roses, Islamabad',
    paperStock: 'Translucent 180gsm Vellum & 400gsm Cotton',
    foilOptions: ['Gold Hot Foil', 'Blind Embossed'],
    envelopeColor: '#36383b',
    themeColor: '#1c1e21',
    accentColor: '#caa048',
    description: 'Contemporary European minimalism fused with South Asian hospitality. Semi-translucent frosted vellum overlay wrapped around heavy cotton card with genuine hand-stamped metallic wax seal.',
    pricePer100: 5500,
    badgeText: 'Modern Aesthetic',
    cardImage: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    frontMotif: 'interlocking-monogram',
    bismillahText: true,
  },
  {
    id: 'card-corporate-annual',
    title: 'Executive Summit & Annual Gala',
    category: 'corporate',
    eventSubtitle: 'Annual Leadership Banquet & Awards',
    defaultHostNames: 'Islamabad Business Chamber & Tech Council',
    defaultEventDate: 'Thursday, 17th December 2026 at 7:00 PM',
    defaultVenue: 'Marriott Hotel, Crystal Ballroom, Islamabad',
    paperStock: '400gsm Charcoal Plike Matte',
    foilOptions: ['Silver Chrome', 'Gold Hot Foil'],
    envelopeColor: '#111827',
    themeColor: '#111827',
    accentColor: '#93c5fd',
    description: 'Prestigious corporate invitation card with silver hot-foil typography, individual barcode/QR verification badge, RSVP tear-off slip, and rigid black presentation envelope.',
    pricePer100: 6000,
    badgeText: 'Corporate Choice',
    cardImage: '/src/assets/images/business_stationery_cards_1793701436364.jpg',
    frontMotif: 'modern-geometric',
    bismillahText: false,
  },
];

export const TARGET_CUSTOMERS = [
  {
    title: 'Authors & Independent Publishers',
    description: 'Complete book manufacturing from manuscript proofing to hardcover gold spine foil and short-run digital batches.',
    iconName: 'BookOpen',
  },
  {
    title: 'Schools, Colleges & Universities',
    description: 'Curriculum textbooks, exam question papers, student diaries, prospectus folders, and gold-stamped diplomas.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Wedding Planners & Families',
    description: 'Bespoke Pakistani wedding suites (Barat, Walima, Mehndi) with velvet cardstock, laser cutting, and matching envelopes.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Businesses & Corporate Offices',
    description: 'Executive stationery, raised UV spot business cards, brochures, multi-part carbonless invoice books, and marketing kits.',
    iconName: 'Briefcase',
  },
  {
    title: 'Students & University Researchers',
    description: 'Rapid 24-hour university thesis printing and hard-bound gold foil binding matching QAU, NUST, FAST and COMSATS rules.',
    iconName: 'FileCheck',
  },
  {
    title: 'Event Organizers & Exhibitors',
    description: 'Rollup banners, exhibition catalogs, conference delegate badges, VIP entrance passes, and promotional flyers.',
    iconName: 'CalendarCheck',
  },
  {
    title: 'Religious Institutions & Seminaries',
    description: 'Quranic publication binding, Ramadan calendars, Islamic prayer books, fundraising receipts, and Eid celebration cards.',
    iconName: 'Building',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'High-Quality Printing Materials',
    description: 'We source certified European cardstocks, archival 80gsm imported book papers, and vibrant German offset printing inks.',
  },
  {
    title: 'Affordable & Competitive Prices',
    description: 'Direct factory pricing right from our Blue Area workshop with transparent per-unit rates and generous volume discounts.',
  },
  {
    title: 'Custom Invitation Card Designs',
    description: 'In-house graphic artists to craft customized calligraphy in Urdu, Arabic, and English with live digital mockups before printing.',
  },
  {
    title: 'Professional Book Binding',
    description: 'Heavy-duty Smyth sewing, perfect polyurethane binding, and durable gold-embossed rexine hardcovers that last generations.',
  },
  {
    title: 'Bulk Order Printing Capacity',
    description: 'Equipped with multi-color Heidelberg presses capable of handling 50,000+ impressions per day with zero compromise on precision.',
  },
  {
    title: 'Timely Delivery Across Twin Cities',
    description: 'Guaranteed dispatch timelines, 24-hour emergency thesis turnaround, and safe courier delivery across Islamabad & Rawalpindi.',
  },
  {
    title: 'Customer-Focused Service',
    description: 'Over 15 years of trusted service in Blue Area, Islamabad with dedicated account managers guiding you from sample to print.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-wedding-emerald',
    title: 'Royal Emerald Nikkah Card Suite',
    category: 'Wedding Cards',
    specs: '380gsm Velvet · Gold Hot Foil · Custom Seal',
    image: '/src/assets/images/wedding_card_royal_gold_1793701436832.jpg',
    description: 'Luxury South Asian wedding card suite featuring laser-cut Islamic archways and hot-stamped gold Quranic ayat.',
  },
  {
    id: 'g-books-library',
    title: 'Artisan Hardcover Book Series',
    category: 'Book Printing',
    specs: '80gsm Woodfree · Cloth Spine · Gold Foil Stamped',
    image: '/src/assets/images/book_printing_hardcover_1793701435988.jpg',
    description: 'Hardbound literary and educational publications with Smyth section sewing and gold embossed spine titles.',
  },
  {
    id: 'g-stationery-suite',
    title: 'Executive Corporate Stationery',
    category: 'Business Cards & Stationery',
    specs: '400gsm Cotton Card · Raised Spot UV · Matching Envelopes',
    image: '/src/assets/images/business_stationery_cards_1793701436364.jpg',
    description: 'Minimalist corporate identity package with blind debossed letterheads and executive heavy cardstock business cards.',
  },
  {
    id: 'g-press-facility',
    title: 'Master Heidelberg Offset Press Facility',
    category: 'Facility & Equipment',
    specs: 'Heidelberg 4-Color · Automated Paper Cutters',
    image: '/src/assets/images/hero_printing_press_1793701434855.jpg',
    description: 'Our state-of-the-art production floor in Blue Area Islamabad executing high-volume commercial and artistic print runs.',
  },
  {
    id: 'g-thesis-classic',
    title: 'University Doctoral Dissertation',
    category: 'Thesis Binding',
    specs: 'Faux-Leather Maroon Rexine · Golden Spine Embossed',
    image: '/src/assets/images/book_printing_hardcover_1793701435988.jpg',
    description: 'Standard Pakistani university hardcover thesis binding strictly following NUST and Quaid-i-Azam University submission manuals.',
  },
  {
    id: 'g-marketing-brochures',
    title: 'Luxury Real Estate Tri-Fold Brochures',
    category: 'Brochures & Flyers',
    specs: '150gsm Art Paper · Matte Lamination · Creased',
    image: '/src/assets/images/business_stationery_cards_1793701436364.jpg',
    description: 'High-gamut promotional brochures for commercial projects and luxury residential properties in Islamabad.',
  },
];
