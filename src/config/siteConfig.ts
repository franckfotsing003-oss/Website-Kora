import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  companyName: "Kôra Studio",
  brandTitle: "Kôra",
  subtitle: "Studio éditorial digital",
  leitmotiv: "Un intermédiaire. Une équipe. Un projet.",
  mission: {
    fr: "Accompagner les auteurs africains francophones dans la transformation de leurs manuscrits en ouvrages professionnels, prêts à être publiés et diffusés.",
    en: "Supporting French-speaking African authors in transforming their manuscripts into professional books, ready to be published and distributed."
  },
  tagline: {
    fr: "Studio éditorial digital 100% en ligne, sans frontières. De la relecture à la publication.",
    en: "100% online editorial digital studio, without borders. From manuscript editing to publication."
  },
  whatsappNumber: "+237670847566", 
  whatsappDisplay: "+237 670 84 75 66",
  email: "korastudio@gmail.com",
  experienceYears: 7,
  authorsCount: 230,
  countriesCount: 14,
  socials: {
    facebook: "https://facebook.com/korastudio",
    instagram: "https://instagram.com/korastudio",
    tiktok: "https://tiktok.com/@korastudio",
    linkedin: "https://linkedin.com/company/korastudio",
    twitter: "https://x.com/korastudio"
  }
};

export const createWhatsAppLink = (customText?: string, phoneNumber?: string): string => {
  const rawNumber = phoneNumber || siteConfig.whatsappNumber;
  const number = rawNumber.replace(/[^0-9]/g, '');
  const text = customText || "Bonjour Kôra Studio, je souhaite discuter de mon projet de livre et découvrir vos services.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

