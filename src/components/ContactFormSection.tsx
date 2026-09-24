import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, createWhatsAppLink } from '../config/siteConfig';
import { 
  Send, 
  MessageCircle, 
  Sparkles, 
  Mail, 
  Phone,
  BookOpen,
  FileText
} from 'lucide-react';
import { KoralieAvatar } from './KoralieMascot';

export const ContactFormSection: React.FC = () => {
  const { t } = useLanguage();

  const [authorName, setAuthorName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [genre, setGenre] = useState('Business & Économie');
  const [serviceOrPackage, setServiceOrPackage] = useState('Kôra Standard (275 000 FCFA) ⭐ Recommandé');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedMessage = `Bonjour Kôra Studio ! Je souhaite échanger sur mon projet d'ouvrage.
- Auteur : ${authorName}
- Titre : ${bookTitle || 'À définir'}
- Genre littéraire : ${genre}
- Service / Formule : ${serviceOrPackage}
- WhatsApp : ${whatsappNumber || 'Ce numéro'}
- Email : ${email || 'Non renseigné'}
- Détails du projet : ${message || 'À préciser'}`;

    window.open(createWhatsAppLink(formattedMessage), '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0c0d11] border-t border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Context & Fast WhatsApp Access */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {t.contactForm.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                  {t.contactForm.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {t.contactForm.subtitle}
                </p>
              </div>

              {/* Direct WhatsApp Callout with Mascot Koralie */}
              <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-3">
                  <KoralieAvatar size="sm" showHalo={true} />
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">
                      Conseil direct avec Koralie
                    </span>
                    <span className="text-[11px] text-zinc-400 block">
                      Réponse moyenne en moins de 15 minutes
                    </span>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink("Bonjour Koralie, je remplis le formulaire pour mon manuscrit.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-950/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Nous écrire sur WhatsApp</span>
                </a>
              </div>

              {/* Contact metadata */}
              <div className="space-y-2 text-xs text-zinc-400 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp : <strong className="text-zinc-200">{siteConfig.whatsappDisplay}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email : <strong className="text-zinc-200">{siteConfig.email}</strong></span>
                </div>
                <div className="pt-2 text-[11px] text-amber-400/90 font-medium">
                  « Un intermédiaire. Une équipe. Un projet. »
                </div>
              </div>
            </div>

            {/* Right Column: Express Brief Form */}
            <div className="lg:col-span-7 bg-zinc-950/90 border border-white/5 p-6 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Author Name */}
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.contactForm.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder={t.contactForm.namePlaceholder}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      {t.contactForm.whatsappLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder={t.contactForm.whatsappPlaceholder}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Book Title & Genre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      {t.contactForm.bookTitleLabel}
                    </label>
                    <input
                      type="text"
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder={t.contactForm.bookTitlePlaceholder}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      {t.contactForm.genreLabel}
                    </label>
                    <select
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Business & Entrepreneuriat">Business & Entrepreneuriat</option>
                      <option value="Développement Personnel">Développement Personnel</option>
                      <option value="Roman & Littérature">Roman & Littérature</option>
                      <option value="Essai & Société">Essai & Société</option>
                      <option value="Religion & Spiritualité">Religion & Spiritualité</option>
                      <option value="Biographie & Mémoires">Biographie & Mémoires</option>
                      <option value="Éducation & Jeunesse">Éducation & Jeunesse</option>
                      <option value="Autre genre">Autre genre</option>
                    </select>
                  </div>
                </div>

                {/* Service or Editorial Package Selection */}
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.contactForm.serviceInterestLabel}
                  </label>
                  <select
                    value={serviceOrPackage}
                    onChange={(e) => setServiceOrPackage(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-500"
                  >
                    <optgroup label="Formules Clé en Main">
                      <option value="Kôra Standard (275 000 FCFA) ⭐ Recommandé">Kôra Standard (275 000 FCFA) ⭐ Recommandé</option>
                      <option value="Kôra Essentiel (150 000 FCFA)">Kôra Essentiel (150 000 FCFA)</option>
                      <option value="Kôra Premium (450 000 FCFA)">Kôra Premium (450 000 FCFA)</option>
                    </optgroup>
                    <optgroup label="Services Individuels sur Devis">
                      <option value="Service individuel : Relecture & Correction">Service individuel : Relecture & Correction</option>
                      <option value="Service individuel : Création de couverture">Service individuel : Création de couverture</option>
                      <option value="Service individuel : Mise en page intérieure">Service individuel : Mise en page intérieure</option>
                      <option value="Service individuel : Publication Amazon KDP">Service individuel : Publication Amazon KDP</option>
                      <option value="Service individuel : Traduction Français ↔ Anglais">Service individuel : Traduction Français ↔ Anglais</option>
                      <option value="Service individuel : Démarches ISBN">Service individuel : Démarches ISBN</option>
                      <option value="Service individuel : Transcription Livre → Audio">Service individuel : Transcription Livre → Audio</option>
                      <option value="Service individuel : Promotion Meta Ads">Service individuel : Promotion Meta Ads</option>
                      <option value="Service individuel : Kit de lancement">Service individuel : Kit de lancement</option>
                      <option value="Accompagnement complet sur mesure">Accompagnement complet sur mesure</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.contactForm.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactForm.messagePlaceholder}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                {/* Submit button with true Gold Gradient */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 btn-gold text-black font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-black" />
                  <span>{t.contactForm.submitBtn}</span>
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
