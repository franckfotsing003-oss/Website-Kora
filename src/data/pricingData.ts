import { PricingPlan } from '../types';

export interface EditorialPackage {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  subtitle: {
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
  targetAudience: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
  adBudgetNote?: {
    fr: string;
    en: string;
  };
  whatsappPresetMessage: {
    fr: string;
    en: string;
  };
}

export const koraEditorialPackages: EditorialPackage[] = [
  {
    id: 'kora-essentiel',
    name: {
      fr: "KÔRA ESSENTIEL",
      en: "KÔRA ESSENTIAL"
    },
    subtitle: {
      fr: "Essentiel",
      en: "Essential"
    },
    priceFcfa: 150000,
    approxUsd: 250,
    targetAudience: {
      fr: "Le manuscrit est déjà finalisé et prêt à devenir un véritable ouvrage professionnel.",
      en: "The manuscript is already finalized and ready to become a genuine professional book."
    },
    features: {
      fr: [
        "Relecture et correction",
        "Mise en page intérieure",
        "Conception de la couverture",
        "Fichier PDF prêt à imprimer",
        "Préparation du fichier numérique",
        "Accompagnement à la publication"
      ],
      en: [
        "Proofreading and spell checking",
        "Interior book layout",
        "Professional cover design",
        "Print-ready PDF file",
        "Digital e-book file preparation",
        "Publication guidance"
      ]
    },
    whatsappPresetMessage: {
      fr: "Bonjour Kôra Studio ! Je souhaite des informations sur le forfait KÔRA ESSENTIEL (à partir de 150 000 FCFA / ~250$) pour mon livre. Mon manuscrit est prêt.",
      en: "Hello Kôra Studio! I would like information regarding the KÔRA ESSENTIAL package (from 150,000 FCFA / ~$250) for my book."
    }
  },
  {
    id: 'kora-standard',
    name: {
      fr: "KÔRA STANDARD",
      en: "KÔRA STANDARD"
    },
    subtitle: {
      fr: "Standard",
      en: "Standard"
    },
    priceFcfa: 275000,
    approxUsd: 450,
    badge: {
      fr: "RECOMMANDÉ",
      en: "RECOMMENDED"
    },
    highlighted: true,
    targetAudience: {
      fr: "L'auteur qui souhaite être accompagné par une équipe éditoriale, au-delà de la simple correction.",
      en: "The author who wants to be guided by an editorial team, far beyond simple proofreading."
    },
    features: {
      fr: [
        "Évaluation du manuscrit",
        "Relecture et correction approfondies",
        "Révision et accompagnement éditorial",
        "Mise en page professionnelle",
        "Couverture sur mesure",
        "Versions papier et numérique",
        "Accompagnement ISBN",
        "Contrôle éditorial final"
      ],
      en: [
        "Full manuscript appraisal",
        "In-depth proofreading and revision",
        "Editorial review and coaching",
        "Professional interior formatting",
        "Custom tailor-made cover",
        "Print and digital e-book versions",
        "ISBN registration guidance",
        "Final editorial quality control"
      ]
    },
    whatsappPresetMessage: {
      fr: "Bonjour Kôra Studio ! Je souhaite être accompagné(e) avec le forfait KÔRA STANDARD (à partir de 275 000 FCFA / ~450$). Pouvons-nous échanger ?",
      en: "Hello Kôra Studio! I want to be guided with the KÔRA STANDARD package (from 275,000 FCFA / ~$450). Can we discuss my manuscript?"
    }
  },
  {
    id: 'kora-premium',
    name: {
      fr: "KÔRA PREMIUM",
      en: "KÔRA PREMIUM"
    },
    subtitle: {
      fr: "Premium",
      en: "Premium"
    },
    priceFcfa: 450000,
    approxUsd: 750,
    targetAudience: {
      fr: "L'auteur qui veut un vrai partenaire éditorial, jusqu'au lancement.",
      en: "The author who wants a true editorial partner from manuscript all the way to book launch."
    },
    features: {
      fr: [
        "Évaluation complète du manuscrit",
        "Révision éditoriale approfondie",
        "Accompagnement éditorial personnalisé",
        "Mise en page et couverture sur mesure",
        "Versions papier et numérique",
        "Accompagnement ISBN & publication KDP",
        "Communication & stratégie de lancement",
        "Campagne Meta Ads & suivi",
        "Accompagnement post-publication"
      ],
      en: [
        "Comprehensive manuscript assessment",
        "Deep structural editorial revision",
        "Dedicated personalized editorial support",
        "Tailor-made layout and bespoke cover",
        "Print and digital e-book editions",
        "ISBN support & Amazon KDP publishing",
        "Book launch strategy & PR messaging",
        "Meta Ads campaign setup & tracking",
        "Post-publication monitoring"
      ]
    },
    adBudgetNote: {
      fr: "Le budget publicitaire n'est pas inclus dans le forfait. Ex: 450 000 FCFA (prestation) + 80 000 FCFA (budget pub) = 530 000 FCFA.",
      en: "The advertising budget is not included in the fee. E.g.: 450,000 FCFA (service) + 80,000 FCFA (ad spend) = 530,000 FCFA."
    },
    whatsappPresetMessage: {
      fr: "Bonjour Kôra Studio ! Je suis intéressé(e) par la formule KÔRA PREMIUM (à partir de 450 000 FCFA / ~750$) pour un accompagnement complet jusqu'au lancement de mon livre.",
      en: "Hello Kôra Studio! I am interested in the KÔRA PREMIUM formula (from 450,000 FCFA / ~$750) for end-to-end guidance up to book launch."
    }
  }
];

export const koraIndividualServices = [
  {
    id: 'correction',
    emoji: '✍️',
    title: {
      fr: "Correction et relecture de manuscrit",
      en: "Manuscript Proofreading & Editing"
    },
    desc: {
      fr: "Orthographe, grammaire, syntaxe, cohérence stylistique et ponctuation.",
      en: "Spelling, grammar, syntax, style coherence, and typography."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour la correction et relecture de mon manuscrit."
  },
  {
    id: 'couverture',
    emoji: '🎨',
    title: {
      fr: "Création de couverture professionnelle",
      en: "Professional Book Cover Design"
    },
    desc: {
      fr: "Direction artistique humaine sur-mesure, respect des normes d'impression et maquettes 3D.",
      en: "Tailor-made human artistic direction, strict print guidelines, and 3D mockups."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour la création de couverture de mon livre."
  },
  {
    id: 'mise-en-page',
    emoji: '📐',
    title: {
      fr: "Mise en page & préparation pré-publication",
      en: "Book Formatting & Pre-publication"
    },
    desc: {
      fr: "Gabarits professionnels, typographie soignée, césures et lettrines conformes aux standards éditoriaux.",
      en: "Editorial interior layout, drop caps, margin hierarchy, and print-ready files."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour la mise en page de mon livre."
  },
  {
    id: 'kdp',
    emoji: '🚀',
    title: {
      fr: "Publication sur Amazon KDP",
      en: "Amazon KDP Publishing"
    },
    desc: {
      fr: "Configuration du compte auteur, catégorisation, mots-clés, métadonnées et mise en ligne monde.",
      en: "Author account setup, categorization, SEO keywords, metadata, and worldwide distribution."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour la publication de mon livre sur Amazon KDP."
  },
  {
    id: 'traduction',
    emoji: '🌍',
    title: {
      fr: "Traduction Français ↔ Anglais",
      en: "French ↔ English Translation"
    },
    desc: {
      fr: "Traduction littéraire et éditoriale fidèle au ton de l'auteur pour toucher un lectorat international.",
      en: "Literary and editorial translation faithful to the author's voice for international reach."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour la traduction de mon ouvrage."
  },
  {
    id: 'isbn',
    emoji: '🔢',
    title: {
      fr: "Accompagnement ISBN & Démarches",
      en: "ISBN Registration Guidance"
    },
    desc: {
      fr: "Attribution des identifiants légaux, génération du code-barres et conseil sur le dépôt légal.",
      en: "Legal identifier filing, barcode creation, and legal copyright advice."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour l'accompagnement ISBN de mon livre."
  },
  {
    id: 'meta-ads',
    emoji: '📢',
    title: {
      fr: "Promotion Facebook & Meta Ads",
      en: "Facebook & Meta Ads Promotion"
    },
    desc: {
      fr: "Campagnes sponsorisées ciblées pour faire connaître votre livre auprès du public idéal en Afrique et dans la diaspora.",
      en: "Targeted advertising campaigns to connect your book with your ideal readership."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un devis pour une campagne de promotion Meta Ads."
  },
  {
    id: 'accompagnement-complet',
    emoji: '📚',
    title: {
      fr: "Accompagnement complet de A à Z",
      en: "Full End-to-End Editorial Support"
    },
    desc: {
      fr: "De la relecture du premier jet jusqu'à la publication, promotion et distribution de votre livre.",
      en: "From manuscript review to final publication, marketing, and distribution."
    },
    quotePreset: "Bonjour Kôra Studio, je souhaite un accompagnement éditorial complet pour mon projet de livre."
  }
];

export const comparisonFeatures = [
  {
    feature: { fr: "Évaluation & diagnostic du manuscrit", en: "Manuscript assessment & diagnostic" },
    essential: false,
    standard: true,
    premium: true
  },
  {
    feature: { fr: "Relecture et correction", en: "Proofreading & correction" },
    essential: "De base",
    standard: "Approfondie",
    premium: "Complète & Approfondie"
  },
  {
    feature: { fr: "Révision & accompagnement éditorial", en: "Editorial revision & coaching" },
    essential: false,
    standard: true,
    premium: "Personnalisé & continu"
  },
  {
    feature: { fr: "Mise en page intérieure", en: "Interior book formatting" },
    essential: "Standard",
    standard: "Professionnelle",
    premium: "Sur mesure haute couture"
  },
  {
    feature: { fr: "Conception de couverture", en: "Book cover design" },
    essential: "1 proposition",
    standard: "Sur mesure",
    premium: "Sur mesure + déclinaisons"
  },
  {
    feature: { fr: "Fichiers PDF prêt à imprimer + Web", en: "Print-ready PDF + Web files" },
    essential: true,
    standard: true,
    premium: true
  },
  {
    feature: { fr: "Accompagnement ISBN", en: "ISBN guidance" },
    essential: false,
    standard: true,
    premium: true
  },
  {
    feature: { fr: "Publication Amazon KDP", en: "Amazon KDP publication" },
    essential: "Accompagnement basique",
    standard: "Inclus",
    premium: "Optimisation SEO & KDP complète"
  },
  {
    feature: { fr: "Communication & stratégie de lancement", en: "Launch PR & Communication" },
    essential: false,
    standard: false,
    premium: true
  },
  {
    feature: { fr: "Campagne publicitaire Meta Ads", en: "Meta Ads campaign setup" },
    essential: false,
    standard: false,
    premium: "Inclus (budget pub séparé)"
  },
  {
    feature: { fr: "Suivi post-publication", en: "Post-publication follow-up" },
    essential: false,
    standard: false,
    premium: true
  }
];
