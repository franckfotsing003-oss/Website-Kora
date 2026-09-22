import { Testimonial } from '../types';

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: "Marc-Aurèle Tchouta",
    country: "Cameroun",
    countryFlag: "🇨🇲",
    countryCode: "CM",
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
    profession: {
      fr: "Conférencière & Auteure",
      en: "Keynote Speaker & Author"
    },
    bookTitle: "Renaître de ses Cendres",
    message: {
      fr: "J'avais peur d'une couverture générique faite avec l'intelligence artificielle. Ici, il y a une vraie réflexion artistique, un choix de typographie sensible et un respect scrupuleux des consignes de mon imprimeur.",
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
    profession: {
      fr: "Entrepreneur & Auteur",
      en: "Serial Entrepreneur & Author"
    },
    bookTitle: "Bâtir un Empire en Afrique",
    message: {
      fr: "J'ai opté pour le Pack Lancement & Promotion. La vidéo publicitaire et le visuel de Roll-up m'ont permis de remplir ma salle de conférence. La valeur reçue dépasse largement le prix payé.",
      en: "I chose the Launch & Promotion Pack. The dynamic promo video and roll-up banners helped me pack my conference hall. The value delivered far exceeds the price paid."
    },
    rating: 5,
    published: true,
    order: 4
  },
  {
    id: 'test-05',
    name: "Amb. Samuel Nguema",
    country: "Canada",
    countryFlag: "🇨🇦",
    countryCode: "CA",
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
    profession: {
      fr: "Auteur Spirituel",
      en: "Spiritual Author"
    },
    bookTitle: "La Foi Qui Déplace les Montagnes",
    message: {
      fr: "Un designer à l'écoute, humble et doté d'une remarquable maîtrise esthétique. La couverture inspire le recueillement et la puissance.",
      en: "An attentive, humble designer with remarkable aesthetic mastery. The cover radiates reverence and strength."
    },
    rating: 5,
    published: true,
    order: 6
  }
];
