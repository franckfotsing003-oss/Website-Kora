import { PortfolioItem } from '../types';

/**
 * Curated Collection of Official Book Covers from Kôra Studio.
 * Row 1 (Items 1-10): Official prestige showcase covers.
 * Row 2 (Items 11-20): 10 custom requested book covers from user's GitHub assets:
 *   - Kora Books (3) Vendre ou Mourir Pauvre
 *   - Kora Books (5) Jesus Transforme-moi
 *   - Kora Books (6) Une Epoque Formidable
 *   - Kora Books (8) Le grand Menage
 *   - Kora Books (9) Tu me respectes je te respectes
 *   - Kora Books (10) Entre l'autel et la chair
 *   - Kora Books (11) Diplomatie Militaire
 *   - Kora Books (12) Tu me respectes je te respectes
 *   - Kora Books (13) Eduquer sans crier c'est possible
 *   - Kora Books (14) L'anniversaire de la parentalité
 */
export const initialPortfolioItems: PortfolioItem[] = [
  // ==========================================
  // LIGNE 1 : SÉRIE SIGNATURE (Défilement Droite -> Gauche)
  // ==========================================
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
  },

  // ==========================================
  // LIGNE 2 : SÉRIE ÉDITION (Défilement Gauche -> Droite - Sens Inverse)
  // Les 10 livres spécifiés dans la demande utilisateur
  // ==========================================
  {
    id: 'kora-creative-11',
    title: {
      fr: "Vendre ou Mourir Pauvre",
      en: "Sell or Die Poor"
    },
    author: "Paul Pogbus",
    category: "business",
    country: "Afrique & Diaspora",
    image: "/books/kora-books-3.jpg",
    description: {
      fr: "Kora Books (3) — Stratégies directes de vente, de persuasion et d'émancipation financière pour entrepreneurs africains.",
      en: "Kora Books (3) — High-stakes sales mastery and business breakthrough strategies."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 11,
    tags: ["Vente", "Business", "Finances"]
  },
  {
    id: 'kora-creative-12',
    title: {
      fr: "Jésus, Transforme-moi",
      en: "Jesus, Transform Me"
    },
    author: "Francis II Eboutou",
    category: "religion",
    country: "Afrique",
    image: "/books/kora-books-5.jpg",
    description: {
      fr: "Kora Books (5) — Ouvrage puissant de prière, de renouveau spirituel et de transformation intérieure.",
      en: "Kora Books (5) — Inspiring spiritual transformation and faith empowerment book."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 12,
    tags: ["Foi", "Spiritualité", "Renouveau"]
  },
  {
    id: 'kora-creative-13',
    title: {
      fr: "Une Époque Formidable",
      en: "A Formidable Era"
    },
    author: "Coulibaly Katchimbio",
    category: "novel",
    country: "Afrique",
    image: "/books/kora-books-6.jpg",
    description: {
      fr: "Kora Books (6) — Regard lucide et roman percutant sur les mutations culturelles, sociétales et générationnelles.",
      en: "Kora Books (6) — Captivating literary exploration of generational and cultural transformation."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 13,
    tags: ["Roman", "Société", "Culture"]
  },
  {
    id: 'kora-creative-14',
    title: {
      fr: "Le Grand Ménage",
      en: "The Great Clean-up"
    },
    author: "Aboua Ahiwa",
    category: "personal_dev",
    country: "Afrique",
    image: "/books/kora-books-8.jpg",
    description: {
      fr: "Kora Books (8) — Méthode d'assainissement mental, émotionnel et relationnel pour repartir sur des bases saines.",
      en: "Kora Books (8) — Essential personal growth and mental decluttering guide."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 14,
    tags: ["Mindset", "Développement Personnel", "Clarté"]
  },
  {
    id: 'kora-creative-15',
    title: {
      fr: "Tu me respectes, je te respecte",
      en: "You Respect Me, I Respect You"
    },
    author: "Merveils Kadjo",
    category: "personal_dev",
    country: "Afrique & Diaspora",
    image: "/books/kora-books-9.jpg",
    description: {
      fr: "Kora Books (9) — Le socle inviolable du respect réciproque dans le milieu professionnel, familial et intime.",
      en: "Kora Books (9) — Mutual respect principles for balanced and dignified relationships."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 15,
    tags: ["Respect", "Relations", "Valeurs"]
  },
  {
    id: 'kora-creative-16',
    title: {
      fr: "Entre l'Autel et la Chair",
      en: "Between the Altar and the Flesh"
    },
    author: "Auteur Kôra",
    category: "religion",
    country: "Afrique",
    image: "/books/kora-books-10.jpg",
    description: {
      fr: "Kora Books (10) — La confrontation intime entre vocations sacrées et faiblesses humaines avec une plume sans fard.",
      en: "Kora Books (10) — Deep spiritual reflection on devotion, inner struggles, and human vulnerability."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 16,
    tags: ["Spiritualité", "Vérité", "Intériorité"]
  },
  {
    id: 'kora-creative-17',
    title: {
      fr: "Diplomatie Militaire",
      en: "Military Diplomacy"
    },
    author: "Auteur Kôra",
    category: "other",
    country: "Afrique & International",
    image: "/books/kora-books-11.jpg",
    description: {
      fr: "Kora Books (11) — Analyse stratégique approfondie sur le rôle des officiers dans la négociation et la stabilité régionale.",
      en: "Kora Books (11) — Strategic analysis on military roles in foreign diplomacy and defense policy."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 17,
    tags: ["Géopolitique", "Stratégie", "Défense"]
  },
  {
    id: 'kora-creative-18',
    title: {
      fr: "Tu me respectes, je te respecte",
      en: "You Respect Me, I Respect You (Special Edition)"
    },
    author: "Merveils Kadjo",
    category: "personal_dev",
    country: "Afrique & Diaspora",
    image: "/books/kora-books-12.jpg",
    description: {
      fr: "Kora Books (12) — Édition spéciale approfondie axée sur la dignité du couple et les pactes relationnels durables.",
      en: "Kora Books (12) — Special edition exploring couple dynamics, mutual honor, and long-term harmony."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 18,
    tags: ["Couple", "Dignité", "Harmonie"]
  },
  {
    id: 'kora-creative-19',
    title: {
      fr: "Éduquer sans Crier, C'est Possible",
      en: "Parenting Without Yelling is Possible"
    },
    author: "Chanceline Kenkeu Epse Feize",
    category: "education",
    country: "Afrique & Diaspora",
    image: "/books/kora-books-13.jpg",
    description: {
      fr: "Kora Books (13) — Outils concrets et psychologie de l'enfant pour poser des limites saines sans hausser la voix.",
      en: "Kora Books (13) — Positive parenting techniques to nurture cooperative, confident children."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 19,
    tags: ["Parentalité", "Éducation", "Famille"]
  },
  {
    id: 'kora-creative-20',
    title: {
      fr: "L'Anniversaire de la Parentalité",
      en: "The Birthday of Parenting"
    },
    author: "Auteur Kôra",
    category: "education",
    country: "Afrique",
    image: "/books/kora-books-14.jpg",
    description: {
      fr: "Kora Books (14) — Un hommage vibrant et un guide chaleureux célébrant l'engagement, l'amour et la sagesse parentale.",
      en: "Kora Books (14) — A celebratory journey honoring parental wisdom, dedication, and legacy."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 20,
    tags: ["Parentalité", "Transmission", "Amour"]
  }
];
