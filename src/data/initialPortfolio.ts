import { PortfolioItem } from '../types';

/**
 * Exactly 10 curated books for Kôra Studio showcase.
 * Formatted in 1:1 square ratio and smoothly animated from right to left.
 */
export const initialPortfolioItems: PortfolioItem[] = [
  {
    id: 'cov-01',
    title: {
      fr: "Les Secrets de l'Élite Financière",
      en: "Secrets of the Financial Elite"
    },
    author: "Marc-Aurèle Tchouta",
    category: "business",
    country: "Cameroun",
    countryCode: "CM",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    mockup3DImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Design épuré et percutant alliant typographie dorée en relief et noir satiné, pensé pour rayonner en tête de gondole.",
      en: "Sleek, high-impact design featuring embossed gold typography and satin black finish, built to stand out on shelves."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 1,
    tags: ["Business", "Finances", "Typographie Dorée"]
  },
  {
    id: 'cov-02',
    title: {
      fr: "Renaître de ses Cendres",
      en: "Rising From the Ashes"
    },
    author: "Aminata Diallo",
    category: "personal_dev",
    country: "Mali",
    countryCode: "ML",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Composition émotionnelle et chaleureuse symbolisant la résilience et le renouveau personnel.",
      en: "Warm and evocative composition symbolizing resilience, courage, and personal breakthrough."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 2,
    tags: ["Développement Personnel", "Motivation", "Résilience"]
  },
  {
    id: 'cov-03',
    title: {
      fr: "L'Ombre du Fleuve Congo",
      en: "Shadow Over the Congo River"
    },
    author: "Jean-Paul Mbemba",
    category: "novel",
    country: "Congo-Kinshasa",
    countryCode: "CD",
    image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Thriller politique et mystère avec une ambiance crépusculaire dramatique et un contraste saisissant.",
      en: "Political thriller and gripping drama featuring a moody twilight aesthetic and sharp typography."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 3,
    tags: ["Roman", "Thriller", "Fiction Africaine"]
  },
  {
    id: 'cov-04',
    title: {
      fr: "Bâtir un Empire en Afrique",
      en: "Building an Empire in Africa"
    },
    author: "Patrick K. Ouédraogo",
    category: "business",
    country: "Burkina Faso",
    countryCode: "BF",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Style moderne et autoritaire pour un guide entrepreneurial majeur, calibré pour attirer les dirigeants.",
      en: "Modern and authoritative visual direction for an executive business playbook."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 4,
    tags: ["Entrepreneuriat", "Stratégie", "Leadership"]
  },
  {
    id: 'cov-05',
    title: {
      fr: "La Foi Qui Déplace les Montagnes",
      en: "Faith That Moves Mountains"
    },
    author: "Pasteur David Makosso",
    category: "religion",
    country: "Congo-Brazzaville",
    countryCode: "CG",
    image: "https://images.unsplash.com/photo-1507842229451-79b1be886a27?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Ouvrage spirituel inspirant avec un travail de lumière céleste et de typographie sereine.",
      en: "Inspiring spiritual book cover with transcendent lighting and refined serif lettering."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 5,
    tags: ["Spiritualité", "Inspiration", "Chrétien"]
  },
  {
    id: 'cov-06',
    title: {
      fr: "Mémoires d'un Diplomate Panafricain",
      en: "Memoirs of a Pan-African Diplomat"
    },
    author: "Amb. Samuel Nguema",
    category: "biography",
    country: "Gabon & Diaspora",
    countryCode: "GA",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Édition biographique de prestige, reliure visuelle soignée et respect de l'héritage historique.",
      en: "Prestige biographical edition with historical dignity and timeless editorial balance."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 6,
    tags: ["Biographie", "Histoire", "Mémoires"]
  },
  {
    id: 'cov-07',
    title: {
      fr: "Guide Moderne des Mathématiques Supérieures",
      en: "Modern Guide to Higher Mathematics"
    },
    author: "Dr. Eric Kamdem",
    category: "education",
    country: "Cameroun",
    countryCode: "CM",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Manuel universitaire structuré, géométrie rigoureuse et lisibilité maximale.",
      en: "Structured academic manual designed with geometric precision and crystal-clear hierarchy."
    },
    year: 2024,
    featured: true,
    published: true,
    order: 7,
    tags: ["Éducation", "Sciences", "Universitaire"]
  },
  {
    id: 'cov-08',
    title: {
      fr: "Le Chant des Baobabs",
      en: "Song of the Baobabs"
    },
    author: "Fatou Traoré",
    category: "novel",
    country: "Mali",
    countryCode: "ML",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Roman poétique et envoûtant, palette de coucher de soleil chaud et typographie narrative soignée.",
      en: "Poetic African fiction with a glowing sunset palette and delicate narrative typography."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 8,
    tags: ["Roman", "Poésie", "Littérature"]
  },
  {
    id: 'cov-09',
    title: {
      fr: "L'Art de Négocier à l'International",
      en: "The Art of Global Negotiation"
    },
    author: "Dr. Selim Yilmaz",
    category: "business",
    country: "Sénégal & Diaspora",
    countryCode: "SN",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Livre d'affaires bilingue, design architectural géométrique pour un rayonnement mondial.",
      en: "International business book, minimalist architectural grid built for global distribution."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 9,
    tags: ["Business", "Négociation", "International"]
  },
  {
    id: 'cov-10',
    title: {
      fr: "L'Éveil du Leader Intègre",
      en: "The Awakening of an Ethical Leader"
    },
    author: "Reine Kouassi",
    category: "personal_dev",
    country: "Côte d'Ivoire",
    countryCode: "CI",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80",
    description: {
      fr: "Manuel de leadership transformationnel et d'éthique pour les jeunes cadres africains.",
      en: "Transformational leadership manual for ethical leadership in contemporary Africa."
    },
    year: 2025,
    featured: true,
    published: true,
    order: 10,
    tags: ["Leadership", "Management", "Afrique"]
  }
];
