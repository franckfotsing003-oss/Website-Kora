import { Testimonial } from '../types';

/**
 * Authentic Testimonials from Independent African Authors
 * Focused on Kôra Studio's target audience: African independent authors & creators
 * High-definition portraits of African professionals from various countries.
 */
export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: "Marc-Aurèle Tchouta",
    country: "Cameroun",
    countryFlag: "🇨🇲",
    countryCode: "CM",
    avatarUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Auteur & Consultant Financier",
      en: "Author & Financial Consultant"
    },
    bookTitle: "Les Secrets de l'Élite Financière",
    message: {
      fr: "Mon livre a pris une dimension totalement professionnelle grâce à cette couverture. Les retours lors de ma séance de dédicace à Douala ont été unanimes : la maquette 3D et le rendu papier sont exceptionnels. 100% satisfait !",
      en: "My book reached a whole new professional dimension with this cover. Feedback at my book signing in Douala was unanimous: the 3D mockups and print finish are extraordinary. 100% satisfied!"
    },
    rating: 5,
    published: true,
    order: 1
  },
  {
    id: 'test-02',
    name: "Jean-Paul Mbemba",
    country: "Congo-Kinshasa",
    countryFlag: "🇨🇩",
    countryCode: "CD",
    avatarUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Écrivain & Essayiste",
      en: "Novelist & Essayist"
    },
    bookTitle: "L'Ombre du Fleuve Congo",
    message: {
      fr: "Travailler entièrement à distance sur WhatsApp a été d'une fluidité incroyable. Il a capté l'essence exacte de mon manuscrit dès la première proposition. Les révisions ont été faites rapidement.",
      en: "Working 100% remotely via WhatsApp was smooth and seamless. He captured the true soul of my story on the very first concept. Fast revisions and top-tier professionalism."
    },
    rating: 5,
    published: true,
    order: 2
  },
  {
    id: 'test-03',
    name: "Aminata Diallo",
    country: "Mali",
    countryFlag: "🇲🇱",
    countryCode: "ML",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Conférencière & Auteure",
      en: "Keynote Speaker & Author"
    },
    bookTitle: "Renaître de ses Cendres",
    message: {
      fr: "J'avais peur d'une couverture générique faite avec l'intelligence artificielle. Chez Kôra Studio, il y a une vraie sensibilité artistique africaine, un choix de typographie haut de gamme et un respect scrupuleux des normes de mon imprimeur.",
      en: "I was scared of ending up with a generic AI generated picture. Here, you get true creative art direction, heartfelt typography, and flawless printer-ready specs."
    },
    rating: 5,
    published: true,
    order: 3
  },
  {
    id: 'test-04',
    name: "Patrick K. Ouedraogo",
    country: "Burkina Faso",
    countryFlag: "🇧🇫",
    countryCode: "BF",
    avatarUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Entrepreneur & Auteur",
      en: "Serial Entrepreneur & Author"
    },
    bookTitle: "Bâtir un Empire en Afrique",
    message: {
      fr: "J'ai opté pour le Pack Lancement & Promotion. La vidéo publicitaire et le visuel de Roll-up m'ont permis de remplir ma salle de conférence à Ouagadougou. La valeur reçue dépasse largement le prix payé.",
      en: "I chose the Launch & Promotion Pack. The dynamic promo video and roll-up banners helped me pack my conference hall. The value delivered far exceeds the price paid."
    },
    rating: 5,
    published: true,
    order: 4
  },
  {
    id: 'test-05',
    name: "Amb. Samuel Nguema",
    country: "Diaspora / Canada",
    countryFlag: "🇬🇦",
    countryCode: "GA",
    avatarUrl: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Auteur & Ancien Diplomate",
      en: "Author & Former Diplomat"
    },
    bookTitle: "Mémoires d'un Diplomate Panafricain",
    message: {
      fr: "Le respect des délais a été impeccable (livraison en 4 jours ouvrables). Fichiers reçus par mail impeccablement calibrés pour Amazon KDP et pour l'imprimerie locale au Canada.",
      en: "Punctual delivery (delivered in 4 business days). Files sent by email were ready for Amazon KDP and my local printer in Canada."
    },
    rating: 5,
    published: true,
    order: 5
  },
  {
    id: 'test-06',
    name: "Pasteur David Makosso",
    country: "Congo-Brazzaville",
    countryFlag: "🇨🇬",
    countryCode: "CG",
    avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Auteur Spirituel & Enseignant",
      en: "Spiritual Author & Teacher"
    },
    bookTitle: "La Foi Qui Déplace les Montagnes",
    message: {
      fr: "Un designer à l'écoute, humble et doté d'une remarquable maîtrise esthétique. La couverture inspire le recueillement, la dignité et la puissance de la parole.",
      en: "An attentive, humble designer with remarkable aesthetic mastery. The cover radiates reverence and strength."
    },
    rating: 5,
    published: true,
    order: 6
  },
  {
    id: 'test-07',
    name: "Dr. Fatouma Koné",
    country: "Côte d'Ivoire",
    countryFlag: "🇨🇮",
    countryCode: "CI",
    avatarUrl: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Médecin & Essayiste",
      en: "Physician & Essayist"
    },
    bookTitle: "Santé et Prévention en Afrique",
    message: {
      fr: "La clarté, l'élégance de la mise en page et le respect strict du cahier des charges m'ont immédiatement convaincue. Un travail d'orfèvre pour les auteurs indépendants.",
      en: "The clarity, layout elegance, and strict compliance with specifications immediately convinced me. Masterful craftsmanship."
    },
    rating: 5,
    published: true,
    order: 7
  },
  {
    id: 'test-08',
    name: "Christian K. Dossou",
    country: "Bénin",
    countryFlag: "🇧🇯",
    countryCode: "BJ",
    avatarUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=240&auto=format&fit=crop&q=80",
    profession: {
      fr: "Fondateur Tech & Auteur",
      en: "Tech Founder & Author"
    },
    bookTitle: "L'Afrique des Pionniers Digitaux",
    message: {
      fr: "Kôra Studio comprend immédiatement les codes visuels du continent et les standards internationaux. Ma campagne de précommande a cartonné grâce aux visuels 3D.",
      en: "Kôra Studio immediately understands visual codes of the continent and international standards. My pre-order campaign was a success."
    },
    rating: 5,
    published: true,
    order: 8
  }
];
