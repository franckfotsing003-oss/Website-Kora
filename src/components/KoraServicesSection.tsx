import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  Check, 
  MessageCircle, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Palette, 
  FileText, 
  Languages, 
  Barcode, 
  TrendingUp, 
  Printer, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  HelpCircle,
  Eye,
  Info,
  ChevronRight
} from 'lucide-react';

export const KoraServicesSection: React.FC = () => {
  const { language } = useLanguage();

  // State for Cover formula active tab in Service 03
  const [selectedCoverFormula, setSelectedCoverFormula] = useState<'standard' | 'premium' | 'prestige'>('premium');
  const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);

  // Cover formulas data exactly as specified
  const coverFormulas = [
    {
      id: 'standard',
      name: 'Formule Standard',
      price: '20 000 FCFA',
      approxUsd: '≈ 35 $',
      badge: 'Essentiel',
      features: [
        '1 proposition de design',
        '2 retouches incluses',
        '1 mockup',
        'Fichier PDF prêt pour impression (HD)'
      ],
      whatsappMsg: "Bonjour Kôra Studio, je souhaite demander une proforma pour la Conception de Couverture (Formule Standard à 20 000 FCFA) pour mon livre :"
    },
    {
      id: 'premium',
      name: 'Formule Premium',
      price: '35 000 FCFA',
      approxUsd: '≈ 60 $',
      badge: 'Populaire',
      highlighted: true,
      features: [
        '2 propositions de design',
        '4 retouches incluses',
        '4 mockups',
        'Fichier PDF prêt pour impression (HD)'
      ],
      whatsappMsg: "Bonjour Kôra Studio, je souhaite demander une proforma pour la Conception de Couverture (Formule Premium à 35 000 FCFA) pour mon livre :"
    },
    {
      id: 'prestige',
      name: 'Formule Prestige',
      price: '50 000 FCFA',
      approxUsd: '≈ 85 $',
      badge: 'Excellence',
      features: [
        'Concept créatif sur mesure',
        'Design premium',
        'Mockup 3D réaliste',
        'Fichier PDF prêt pour impression (HD)',
        'Retouches illimitées'
      ],
      whatsappMsg: "Bonjour Kôra Studio, je souhaite demander une proforma pour la Conception de Couverture (Formule Prestige à 50 000 FCFA) pour mon livre :"
    }
  ];

  return (
    <div id="services-offres" className="relative">
      
      {/* ========================================================
          1. NIVEAU 1 — LES 3 SERVICES PHARES (« Nos services »)
          ======================================================== */}
      <section id="services" className="py-20 lg:py-28 bg-[#090a0d] border-t border-amber-400/20 relative overflow-hidden">
        
        {/* Ambient gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-amber-400/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Main Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1c170e] border border-amber-400/40 px-4 py-1.5 rounded-full mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                Services Phares · Kôra Studio
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
              Nos services
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Choisissez uniquement les services dont votre ouvrage a besoin, ou confiez-nous l’ensemble du projet avec notre accompagnement complet.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-black/60 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
              <span>✨ Vous choisissez ce dont vous avez besoin. Kôra s’occupe du reste.</span>
            </div>
          </div>

          {/* 3 Flagship Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8">
            
            {/* ----------------------------------------------------
                SERVICE 01 — RELECTURE, CORRECTION & REFORMULATION
                ---------------------------------------------------- */}
            <div 
              id="service-relecture"
              className="rounded-3xl p-6 sm:p-8 bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-950/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-[#1a150d] border border-amber-400/30 px-3 py-1 rounded-full">
                    01 — Service Phare
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3">
                  Relecture, correction & reformulation
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Améliorez la qualité de votre manuscrit grâce à une correction approfondie, une amélioration de la fluidité et une reformulation lorsque cela est nécessaire, tout en respectant votre style et votre univers.
                </p>

                {/* Tarifs Table */}
                <div className="mb-6 rounded-2xl bg-black/50 border border-white/5 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-300 border-b border-white/10 pb-2">
                    <span>Volume du manuscrit</span>
                    <span>Tarif (FCFA)</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-zinc-200 hover:text-white transition-colors">
                      <span className="text-zinc-300">Moins de 15 000 mots</span>
                      <span className="font-bold text-amber-300">110 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-200 hover:text-white transition-colors">
                      <span className="text-zinc-300">15 000 – 25 000 mots</span>
                      <span className="font-bold text-amber-300">160 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-200 hover:text-white transition-colors">
                      <span className="text-zinc-300">25 000 – 35 000 mots</span>
                      <span className="font-bold text-amber-300">220 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-200 hover:text-white transition-colors">
                      <span className="text-zinc-300">35 000 – 45 000 mots</span>
                      <span className="font-bold text-amber-300">270 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-200 hover:text-white transition-colors">
                      <span className="text-zinc-300">45 000 – 60 000 mots</span>
                      <span className="font-bold text-amber-300">340 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-200 pt-1 border-t border-white/5">
                      <span className="text-zinc-400 font-medium">Plus de 60 000 mots</span>
                      <span className="font-bold text-amber-400">Sur devis</span>
                    </div>
                  </div>
                </div>

                {/* Quality bullet highlights */}
                <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Orthographe, grammaire, typographie & concordance des temps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Amélioration de la fluidité et du rythme de lecture</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite demander une proforma pour la Relecture, correction & reformulation de mon manuscrit. Nombre de mots estimé :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold btn-gold text-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-black" />
                  <span>Demander une proforma</span>
                </a>
              </div>
            </div>

            {/* ----------------------------------------------------
                SERVICE 02 — MISE EN PAGE PROFESSIONNELLE
                ---------------------------------------------------- */}
            <div 
              id="service-mise-en-page"
              className="rounded-3xl p-6 sm:p-8 bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-950/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-[#1a150d] border border-amber-400/30 px-3 py-1 rounded-full">
                    02 — Service Phare
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3">
                  Mise en page professionnelle
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Transformez votre manuscrit en un ouvrage propre, structuré et agréable à lire, prêt pour la publication numérique ou l’impression.
                </p>

                {/* Tarifs Cards */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 hover:border-amber-400/30 transition-all">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-zinc-200">Jusqu’à 15 000 mots</span>
                      <span className="text-sm font-black text-amber-300">20 000 FCFA</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">Environ 50 à 70 pages</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 hover:border-amber-400/30 transition-all">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-zinc-200">De 15 001 à 40 000 mots</span>
                      <span className="text-sm font-black text-amber-300">40 000 FCFA</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">Environ 70 à 160 pages</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 hover:border-amber-400/30 transition-all">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-zinc-200">De 40 001 à 80 000 mots</span>
                      <span className="text-sm font-black text-amber-300">65 000 FCFA</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">Environ 160 à 320 pages</span>
                  </div>
                </div>

                {/* Deliverables details */}
                <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Gabarit normé pour impression & version e-book / PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Table des matières dynamique, folios, en-têtes et césures</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite demander une proforma pour la Mise en page professionnelle de mon livre. Volume estimé (mots ou pages) :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold btn-gold text-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-black" />
                  <span>Demander une proforma</span>
                </a>
              </div>
            </div>

            {/* ----------------------------------------------------
                SERVICE 03 — CONCEPTION DE COUVERTURE
                ---------------------------------------------------- */}
            <div 
              id="service-couverture"
              className="rounded-3xl p-6 sm:p-8 bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-950/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-[#1a150d] border border-amber-400/30 px-3 py-1 rounded-full">
                    03 — Service Phare
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Palette className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3">
                  Conception de couverture
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  Une couverture professionnelle pensée pour attirer l’attention, représenter votre ouvrage et lui donner une véritable identité visuelle.
                </p>

                {/* 3 Formules Selector Pills */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">3 Formules disponibles</span>
                    <button
                      type="button"
                      onClick={() => setIsCoverModalOpen(true)}
                      className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline decoration-amber-400/40 inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Découvrir les formules</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/60 rounded-xl border border-white/5">
                    {coverFormulas.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedCoverFormula(f.id as any)}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all ${
                          selectedCoverFormula === f.id
                            ? 'bg-amber-400 text-black shadow-md'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {f.name.replace('Formule ', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Formula Details Card */}
                {(() => {
                  const active = coverFormulas.find(f => f.id === selectedCoverFormula)!;
                  return (
                    <div className="rounded-2xl p-4 bg-gradient-to-b from-[#18140e] to-black border border-amber-400/40 mb-6 shadow-inner">
                      <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-white/10">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                            {active.badge}
                          </span>
                          <h4 className="text-base font-extrabold text-white">
                            {active.name}
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="text-base sm:text-lg font-black text-amber-300">
                            {active.price}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {active.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={createWhatsAppLink(coverFormulas.find(f => f.id === selectedCoverFormula)?.whatsappMsg || "Bonjour Kôra Studio, je souhaite demander une proforma pour la Conception de Couverture :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold btn-gold text-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-black" />
                  <span>Demander une proforma</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Notice */}
          <div className="text-center">
            <p className="text-xs text-zinc-400 italic">
              Vous pouvez commander un seul service, ou combiner plusieurs services selon l'état actuel de votre manuscrit.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. NIVEAU 2 — ACCOMPAGNEMENT COMPLET (Mise en valeur)
          ======================================================== */}
      <section id="accompagnement-complet" className="py-20 lg:py-24 bg-gradient-to-b from-[#0e0c08] via-[#141009] to-[#090a0d] border-t-2 border-amber-400/40 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-400/15 blur-[180px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-[#1b160e] via-[#14110b] to-black border-2 border-amber-400/60 shadow-2xl shadow-amber-950/40">
            
            {/* Top Ribbon Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
              <span>Niveau 2 · Formule Complète Clé en Main</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Vision & Proposition */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 mb-2">
                    Accompagnement complet
                  </h3>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
                    Vous préférez tout confier à une seule équipe ?
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-amber-200/95 font-medium leading-relaxed">
                  Relecture & correction + mise en page professionnelle + conception de couverture : nous vous accompagnons sur l’ensemble de la préparation de votre ouvrage.
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5">
                  « Une seule équipe, un seul interlocuteur et une vision cohérente sur toute la chaîne de préparation de votre livre. »
                </p>

                {/* 5 Advantages exactly as requested */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Les avantages pour l'auteur :
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-amber-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">Un gain de temps et d’énergie</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-amber-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">Une meilleure cohérence entre les différentes étapes</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-amber-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">Un rendu professionnel de l’ensemble de l’ouvrage</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-amber-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">Un accompagnement personnalisé</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-amber-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">Un interlocuteur unique</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Pricing & Call to Action */}
              <div className="lg:col-span-5 bg-black/60 border border-amber-400/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center space-y-6 shadow-xl">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mx-auto mb-4">
                    <UserCheck className="w-8 h-8" />
                  </div>

                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 block mb-2">
                    Offre Tout-en-Un
                  </span>

                  <h4 className="text-xl sm:text-2xl font-black text-white font-display mb-3">
                    Accompagnement Complet
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    Nous harmonisons la relecture de votre texte, la mise en page de vos pages et le design de votre couverture sous la direction d'un interlocuteur dédié.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#1a150d] border border-amber-400/30 mb-2">
                    <span className="text-xs text-zinc-400 block mb-1">Estimation transparente :</span>
                    <p className="text-xs sm:text-sm font-bold text-amber-200">
                      Tarif personnalisé selon le volume du manuscrit et les prestations choisies.
                    </p>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite bénéficier de votre Accompagnement Complet (Relecture + Mise en page + Couverture) pour mon ouvrage. Voici les détails de mon projet :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-extrabold btn-gold text-black shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-black text-black" />
                  <span>Demander ma proforma</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          3. NIVEAU 3 — SERVICES ÉDITORIAUX CONNEXES (« Pour aller plus loin »)
          ======================================================== */}
      <section id="services-connexes" className="py-20 lg:py-24 bg-[#08090b] border-t border-white/5 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header (Moins dominant visuellement) */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/10 px-3.5 py-1.5 rounded-full mb-3 shadow">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Pour aller plus loin · Prestations complémentaires
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
              Services éditoriaux connexes
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Selon les besoins de votre projet, Kôra Studio peut également vous accompagner sur différentes étapes complémentaires liées à la préparation, à la publication et à la promotion de votre ouvrage.
            </p>
          </div>

          {/* 4 Connex Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 01 — TRADUCTION */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-all">
                    <Languages className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                    Connexe 01
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Traduction
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Traduction de votre ouvrage pour vous permettre d’élargir votre lectorat à d’autres marchés et langues.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite échanger au sujet de la Traduction de mon ouvrage :")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <span>Nous contacter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 02 — ACCOMPAGNEMENT À L’OBTENTION DU CODE ISBN */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-all">
                    <Barcode className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                    Connexe 02
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Accompagnement code ISBN
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Accompagnement dans les démarches liées à l’obtention du code ISBN de votre ouvrage et du dépôt légal.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite être accompagné(e) dans les démarches pour l'obtention du code ISBN de mon livre :")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <span>Nous contacter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 03 — PROMOTION DU LIVRE (Meta Ads & Amazon KDP) */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-all">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                    Connexe 03
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Promotion du livre
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  Accompagnement dans la promotion de votre ouvrage, notamment à travers les campagnes Meta Ads et la mise en avant de votre livre sur Amazon KDP.
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] font-semibold text-amber-300/90 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                    Meta Ads
                  </span>
                  <span className="text-[10px] font-semibold text-amber-300/90 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                    Amazon KDP
                  </span>
                </div>
              </div>

              <a
                href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite échanger sur la Promotion de mon livre (Meta Ads ou Amazon KDP) :")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <span>Nous contacter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 04 — IMPRESSION DE L’OUVRAGE */}
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-all">
                    <Printer className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                    Connexe 04
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Impression de l’ouvrage
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Nous vous accompagnons dans la préparation et l’organisation de l’impression de votre ouvrage, selon vos besoins et votre localisation (recherche ou coordination d'imprimeurs).
                </p>
              </div>

              <a
                href={createWhatsAppLink("Bonjour Kôra Studio, je souhaite échanger sur la préparation et l'organisation de l'Impression de mon ouvrage :")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <span>Nous contacter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          MODAL: DÉTAIL DES 3 FORMULES DE COUVERTURE
          ======================================================== */}
      {isCoverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#12100b] border-2 border-amber-400/50 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">Service 03</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Les 3 Formules de Conception de Couverture
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCoverModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {coverFormulas.map((formula) => (
                <div
                  key={formula.id}
                  className={`rounded-2xl p-5 border flex flex-col justify-between ${
                    formula.highlighted
                      ? 'bg-gradient-to-b from-[#20180d] to-[#120f0a] border-amber-400 shadow-xl'
                      : 'bg-black/50 border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-amber-400 uppercase">
                        {formula.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{formula.name}</h4>
                    <p className="text-lg font-black text-amber-300 mb-4">{formula.price}</p>

                    <ul className="space-y-2 text-xs text-zinc-300 mb-4">
                      {formula.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={createWhatsAppLink(formula.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold btn-gold text-black transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
                    <span>Demander une proforma</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsCoverModalOpen(false)}
                className="text-xs text-zinc-400 hover:text-white underline"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
