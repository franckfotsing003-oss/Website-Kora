import { FAQItem } from '../types';

export const initialFaqItems: (FAQItem & { hasFacebookButton?: boolean })[] = [
  {
    id: 'faq-01',
    category: 'general',
    question: {
      fr: "Kôra Studio est-il une maison d’édition ?",
      en: "Is Kôra Studio a publishing house?"
    },
    answer: {
      fr: "Non. Kôra Studio est un studio éditorial digital. Nous accompagnons les auteurs indépendants dans différentes étapes de préparation de leurs ouvrages, mais nous ne sommes pas une maison d’édition.",
      en: "No. Kôra Studio is a digital editorial studio. We support independent authors through the various stages of preparing their books, but we are not a publishing house."
    },
    published: true,
    order: 1
  },
  {
    id: 'faq-02',
    category: 'general',
    question: {
      fr: "Où êtes-vous situés ?",
      en: "Where are you located?"
    },
    answer: {
      fr: "Kôra Studio fonctionne 100 % en ligne. Nous n’avons pas de siège physique ouvert au public. Les échanges, la transmission des fichiers, le suivi du projet et la livraison des fichiers finaux se font à distance. Cela nous permet d’accompagner des auteurs où qu’ils se trouvent.",
      en: "Kôra Studio operates 100% online. We have no physical headquarters open to the public. Communications, file exchanges, project monitoring, and final delivery are all carried out remotely. This allows us to support authors wherever they are located."
    },
    published: true,
    order: 2
  },
  {
    id: 'faq-03',
    category: 'process',
    hasFacebookButton: true,
    question: {
      fr: "Comment puis-je être sûr de votre sérieux ?",
      en: "How can I be sure of your reliability?"
    },
    answer: {
      fr: "Kôra Studio accompagne des auteurs indépendants depuis plusieurs années. Vous pouvez également découvrir certains travaux réalisés pour des auteurs que nous avons accompagnés en consultant notre page Facebook et nos différentes réalisations.",
      en: "Kôra Studio has been supporting independent authors for several years. You can also discover some of the work completed for authors we have guided by visiting our Facebook page and viewing our portfolio."
    },
    published: true,
    order: 3
  },
  {
    id: 'faq-04',
    category: 'pricing',
    question: {
      fr: "Puis-je choisir uniquement un service ?",
      en: "Can I choose only a single service?"
    },
    answer: {
      fr: "Oui. Vous êtes entièrement libre de choisir uniquement le service dont votre ouvrage a besoin : relecture/correction, mise en page ou conception de couverture.",
      en: "Yes. You are completely free to choose only the service your book needs: proofreading/editing, interior layout, or cover design."
    },
    published: true,
    order: 4
  },
  {
    id: 'faq-05',
    category: 'pricing',
    question: {
      fr: "Puis-je confier tout mon ouvrage à Kôra Studio ?",
      en: "Can I entrust my entire book project to Kôra Studio?"
    },
    answer: {
      fr: "Oui. Notre accompagnement complet réunit nos trois services phares : relecture & correction, mise en page professionnelle et conception de couverture. Le tarif est établi selon le volume de votre manuscrit et les prestations retenues.",
      en: "Yes. Our complete package brings together our three flagship services: proofreading & editing, professional typesetting, and cover design. The price is customized according to the volume of your manuscript and the selected services."
    },
    published: true,
    order: 5
  },
  {
    id: 'faq-06',
    category: 'process',
    question: {
      fr: "Proposez-vous d’autres services ?",
      en: "Do you offer other services?"
    },
    answer: {
      fr: "Oui. En complément de nos trois services phares, nous proposons également des services éditoriaux connexes : traduction, accompagnement à l’obtention du code ISBN, promotion du livre (notamment Meta Ads et Amazon KDP) et accompagnement pour l’impression de l’ouvrage.",
      en: "Yes. In addition to our three flagship services, we also offer related editorial services: translation, assistance with obtaining an ISBN code, book promotion (notably Meta Ads and Amazon KDP), and guidance for book printing."
    },
    published: true,
    order: 6
  },
  {
    id: 'faq-07',
    category: 'process',
    question: {
      fr: "Comment se déroule une collaboration ?",
      en: "How does a collaboration work?"
    },
    answer: {
      fr: "Le processus est simple :\n\n1. Vous nous présentez votre projet.\n2. Nous identifions vos besoins.\n3. Nous vous proposons les prestations adaptées.\n4. Nous vous transmettons une proforma.\n5. Après validation, un contrat est établi entre les deux parties.\n6. Le travail démarre selon les conditions convenues.\n7. Les fichiers finaux vous sont livrés à distance.",
      en: "The process is straightforward:\n\n1. You introduce your project.\n2. We identify your needs.\n3. We propose the appropriate services.\n4. We send you a proforma invoice.\n5. Upon validation, an agreement is established between both parties.\n6. Work begins according to agreed terms.\n7. Final files are delivered remotely."
    },
    published: true,
    order: 7
  }
];
