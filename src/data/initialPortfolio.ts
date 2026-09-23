import { PortfolioItem } from '../types';

/**
 * Exactly 10 Official Book Covers from Kôra Studio.
 * Real covers uploaded from GitHub repo with titles without author names ("titres sans nom").
 */
export const initialPortfolioItems: PortfolioItem[] = [
  {
    id: 'kora-creative-01',
    title: {
      fr: "Le Coronavirus de A à Z",
      en: "Coronavirus from A to Z"
    },
    author: "",
    category: "education",
    country: "Afrique & Monde",
    image: "/books/coronavirus-de-a-a-z.jpg",
    description: {
      fr: "Conception graphique éditoriale professionnelle pour l'ouvrage de référence sur le coronavirus.",
      en: "Professional editorial cover design for the comprehensive coronavirus handbook."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 1,
    tags: ["Santé", "Documentation", "Édition"]
  },
  {
    id: 'kora-creative-02',
    title: {
      fr: "Le Diplôme ne suffit pas",
      en: "The Degree is Not Enough"
    },
    author: "",
    category: "personal_dev",
    country: "Afrique",
    image: "/books/le-diplome-ne-suffit-pas.jpg",
    description: {
      fr: "Couverture moderne et percutante orientée mindset, insertion professionnelle et réussite financière.",
      en: "High-impact modern cover for personal development and professional breakthrough."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 2,
    tags: ["Développement Personnel", "Carrière", "Mindset"]
  },
  {
    id: 'kora-creative-03',
    title: {
      fr: "31 Jours de Déclarations Puissantes",
      en: "31 Days of Powerful Declarations"
    },
    author: "",
    category: "religion",
    country: "Afrique",
    image: "/books/31-jours-declarations-puissantes.jpg",
    description: {
      fr: "Direction artistique sobre et spirituelle avec lettrage soigné et symbolique forte.",
      en: "Inspirational faith cover with elegant typography and spiritual symbolism."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 3,
    tags: ["Foi", "Spiritualité", "Inspiration"]
  },
  {
    id: 'kora-creative-04',
    title: {
      fr: "Humanitaire",
      en: "Humanitarian"
    },
    author: "",
    category: "other",
    country: "International",
    image: "/books/humanitaire.jpg",
    description: {
      fr: "Conception visuelle dédiée aux engagements humanitaires, missions de terrain et ONG.",
      en: "Visual identity and cover design dedicated to humanitarian missions and fieldwork."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 4,
    tags: ["Humanitaire", "Société", "Engagement"]
  },
  {
    id: 'kora-creative-05',
    title: {
      fr: "Briser les Limites",
      en: "Breaking the Limits"
    },
    author: "",
    category: "personal_dev",
    country: "Afrique",
    image: "/books/briser-les-limites-06.jpg",
    description: {
      fr: "Création dynamique et inspirante pour transcender les blocages et dépasser ses limites.",
      en: "Dynamic and motivating cover design to overcome obstacles and unlock human potential."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 5,
    tags: ["Motivation", "Leadership", "Dépassement"]
  },
  {
    id: 'kora-creative-06',
    title: {
      fr: "Peau d'Or",
      en: "Golden Skin"
    },
    author: "",
    category: "novel",
    country: "Afrique",
    image: "/books/peau-dor.jpg",
    description: {
      fr: "Créative raffinée sublimée de nuances d'or et d'élégance texturée pour ce récit captivant.",
      en: "Exquisite gold-infused cover design blending warmth, dignity, and literary prestige."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 6,
    tags: ["Roman", "Littérature", "Or"]
  },
  {
    id: 'kora-creative-07',
    title: {
      fr: "Éduquer sans Crier, C'est Possible",
      en: "Parenting Without Yelling is Possible"
    },
    author: "",
    category: "education",
    country: "Afrique & Diaspora",
    image: "/books/eduquer-sans-crier.jpg",
    description: {
      fr: "Couverture chaleureuse et bienveillante pour un guide pratique d'éducation positive et parentale.",
      en: "Warm and caring cover design for positive parenting and education."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 7,
    tags: ["Éducation", "Famille", "Parentalité"]
  },
  {
    id: 'kora-creative-08',
    title: {
      fr: "Mariage Aveugle",
      en: "Blind Marriage"
    },
    author: "",
    category: "novel",
    country: "Afrique",
    image: "/books/mariage-aveugle.jpg",
    description: {
      fr: "Atmosphère dramatique et typographie saisissante pour une fiction narrative poignante.",
      en: "Dramatic storytelling cover capturing tension, mystery, and romance."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 8,
    tags: ["Roman", "Relations", "Société"]
  },
  {
    id: 'kora-creative-09',
    title: {
      fr: "Tu me respectes, je te respecte",
      en: "You Respect Me, I Respect You"
    },
    author: "",
    category: "personal_dev",
    country: "Afrique & Diaspora",
    image: "/books/tu-me-respectes.jpg",
    description: {
      fr: "Composition graphique expressive sur le respect mutuel dans les relations humaines et le couple.",
      en: "Powerful visual expression centered on mutual respect in interpersonal relationships."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 9,
    tags: ["Respect", "Relations", "Couple"]
  },
  {
    id: 'kora-creative-10',
    title: {
      fr: "Briser les Limites",
      en: "Breaking the Limits"
    },
    author: "",
    category: "business",
    country: "Afrique",
    image: "/books/briser-les-limites-39.jpg",
    description: {
      fr: "Direction artistique percutante pour l'essor entrepreneurial et le leadership transformationnel.",
      en: "High-impact visual direction for entrepreneurial breakthrough and leadership."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 10,
    tags: ["Business", "Leadership", "Succès"]
  }
];
