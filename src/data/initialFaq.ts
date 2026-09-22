import { FAQItem } from '../types';

export const initialFaqItems: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'general',
    question: {
      fr: "Kôra Studio est-il une maison d'édition traditionnelle ?",
      en: "Is Kôra Studio a traditional publishing house?"
    },
    answer: {
      fr: "Non. Nous n'avons pas de siège physique coûteux, et nous ne sommes pas une maison d'édition classique. Kôra est un studio éditorial indépendant qui accompagne les auteurs indépendants d'Afrique francophone dans la concrétisation de leurs ouvrages. C'est vous qui financez votre projet, et vous conservez 100% de vos droits d'auteur et de vos bénéfices.",
      en: "No. We have no physical headquarters and are not a traditional publisher. Kôra is an independent digital editorial studio guiding independent African authors through book production. The author finances their own project, keeping 100% of their copyright and royalties."
    },
    published: true,
    order: 1
  },
  {
    id: 'faq-02',
    category: 'process',
    question: {
      fr: "Que signifie votre leitmotiv « Un intermédiaire. Une équipe. Un projet. » ?",
      en: "What does your motto 'One contact. One team. One project.' mean?"
    },
    answer: {
      fr: "Vous n'avez plus besoin de courir après trois ou quatre prestataires différents (correcteur, graphiste, maquettiste, spécialiste KDP). Chez Kôra Studio, un seul interlocuteur dédié coordonne l'ensemble d'une équipe pluridisciplinaire pour mener votre projet à bien de bout en bout.",
      en: "You no longer need to manage multiple independent contractors (proofreader, cover designer, interior typesetter, Amazon specialist). At Kôra Studio, one dedicated contact coordinates a full multidisciplinary editorial team for your project."
    },
    published: true,
    order: 2
  },
  {
    id: 'faq-03',
    category: 'pricing',
    question: {
      fr: "Puis-je commander un seul service de façon individuelle sans prendre une formule complète ?",
      en: "Can I order an individual service without taking a full package?"
    },
    answer: {
      fr: "Oui, absolument ! Nous pouvons gérer chaque prestation de façon individuelle sur devis personnalisé : création de couverture seule, relecture/correction seule, mise en page intérieure seule, démarches ISBN, livre audio, ou publication Amazon KDP.",
      en: "Yes, absolutely! We handle each service individually on a custom quote: cover design alone, proofreading alone, interior formatting alone, ISBN registration, audiobook conversion, or Amazon KDP distribution."
    },
    published: true,
    order: 3
  },
  {
    id: 'faq-04',
    category: 'pricing',
    question: {
      fr: "L'impression physique des livres est-elle incluse dans les forfaits ?",
      en: "Is physical book printing included in the packages?"
    },
    answer: {
      fr: "L'impression n'est pas incluse dans les forfaits (Kôra Essentiel, Standard, Premium). Son coût varie selon le format, le nombre de pages, le type de papier, la reliure, le pelliculage et le tirage souhaité. L'impression fait l'objet d'un devis séparé et transparent établi selon vos besoins exacts.",
      en: "Printing is not included in the standard editorial packages because costs depend on trim size, page count, paper choice, binding, and quantity. Printing is quoted separately according to your exact requirements."
    },
    published: true,
    order: 4
  },
  {
    id: 'faq-05',
    category: 'process',
    question: {
      fr: "Comment s'organise l'accompagnement 100% en ligne et à distance ?",
      en: "How does the 100% online and remote support work?"
    },
    answer: {
      fr: "Où que vous soyez (Afrique, Europe, Amériques...), notre accompagnement vous suit ! Tous les échanges et validations d'épreuves s'effectuent de façon fluide via WhatsApp. À la fin, tous vos fichiers certifiés haute définition et e-book vous sont transmis par email sécurisé.",
      en: "Wherever you are located (Africa, Europe, Americas...), our support follows you. All communication and proofing happens smoothly via WhatsApp, with final delivery of high-definition files via secure email."
    },
    published: true,
    order: 5
  },
  {
    id: 'faq-06',
    category: 'pricing',
    question: {
      fr: "Proposez-vous des facilités de paiement échelonnées ?",
      en: "Do you offer flexible installment payment plans?"
    },
    answer: {
      fr: "Oui ! Nous aidons chaque auteur à concrétiser son projet à son rythme et selon ses moyens. Le règlement est généralement échelonné (acompte au démarrage, paiement intermédiaire lors des épreuves et solde à la livraison finale).",
      en: "Yes! We help every author bring their book to life at their own pace and budget. Payments are structured in installments (kickoff deposit, milestone progress, and balance upon final delivery)."
    },
    published: true,
    order: 6
  }
];
