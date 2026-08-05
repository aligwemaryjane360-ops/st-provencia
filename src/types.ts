export interface Product {
  id: 'sparkling' | 'still';
  name: string;
  subtitle: string;
  bottleColor: string;
  accentHex: string;
  badge: string;
  volume: string;
  ph: string;
  tds: string; // Total Dissolved Solids
  description: string;
  tastingNotes: string[];
  bestPairedWith: string[];
  image: string;
  bottleDetails: {
    origin: string;
    filtration: string;
    bubbles?: string;
    mouthfeel: string;
    packaging: string;
  };
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  venue: string;
  location: string;
  avatar?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface B2BInquiryForm {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: 'hotel' | 'restaurant' | 'retailer' | 'corporate' | 'private';
  estimatedVolume: string;
  bottlePreference: 'both' | 'sparkling' | 'still';
  message: string;
}
