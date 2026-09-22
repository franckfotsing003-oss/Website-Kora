export type Language = 'fr' | 'en';

export type BookCategory = 
  | 'all'
  | 'business'
  | 'personal_dev'
  | 'novel'
  | 'education'
  | 'religion'
  | 'biography'
  | 'other';

export interface PortfolioItem {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  author: string;
  category: Exclude<BookCategory, 'all'>;
  country?: string;
  countryCode?: string; // e.g. "CM", "CD", "BF", "ML", "CA", "FR"
  image: string; // URL or base64
  mockup3DImage?: string;
  description?: {
    fr: string;
    en: string;
  };
  year: number;
  featured?: boolean;
  published: boolean;
  order: number;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  countryCode: string;
  profession?: {
    fr: string;
    en: string;
  };
  bookTitle: string;
  coverImage?: string;
  message: {
    fr: string;
    en: string;
  };
  rating: number; // 5
  published: boolean;
  order: number;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: {
    fr: string;
    en: string;
  };
  answer: {
    fr: string;
    en: string;
  };
  category: 'general' | 'process' | 'pricing' | 'delivery' | 'technical';
  published: boolean;
  order: number;
}

export interface PricingPlan {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  priceFcfa: number;
  approxUsd: number;
  badge?: {
    fr: string;
    en: string;
  };
  highlighted?: boolean;
  description: {
    fr: string;
    en: string;
  };
  deliveryDays: {
    fr: string;
    en: string;
  };
  installmentsAvailable?: boolean;
  features: {
    fr: string[];
    en: string[];
  };
  whatsappPresetMessage: {
    fr: string;
    en: string;
  };
  ctaText: {
    fr: string;
    en: string;
  };
  order: number;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  shortCta: {
    fr: string;
    en: string;
  };
}

export interface SiteConfig {
  companyName: string;
  brandTitle: string;
  subtitle: string;
  leitmotiv: string;
  mission: {
    fr: string;
    en: string;
  };
  tagline: {
    fr: string;
    en: string;
  };
  whatsappNumber: string; // international format e.g. "+237670847566"
  whatsappDisplay: string;
  email: string;
  experienceYears: number;
  authorsCount: number;
  countriesCount: number;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
    twitter?: string;
  };
}
