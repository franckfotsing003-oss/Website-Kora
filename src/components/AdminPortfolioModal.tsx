import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useLanguage } from '../context/LanguageContext';
import { PortfolioItem, BookCategory } from '../types';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Upload, 
  Download, 
  RotateCcw, 
  Save, 
  Check, 
  Image as ImageIcon,
  BookOpen,
  Search
} from 'lucide-react';

interface AdminPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortfolioModal: React.FC<AdminPortfolioModalProps> = ({ isOpen, onClose }) => {
  const { 
    items, 
    addItem, 
    updateItem, 
    deleteItem, 
    togglePublished, 
    reorderItems, 
    resetToDefault,
    exportBackupJson,
    importBackupJson
  } = usePortfolio();

  const { t } = useLanguage();

  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Form state
  const [formTitleFr, setFormTitleFr] = useState('');
  const [formTitleEn, setFormTitleEn] = useState('');
  const [formAuthor, setFormAuthor] = useState('');
  const [formCategory, setFormCategory] = useState<Exclude<BookCategory, 'all'>>('business');
  const [formCountry, setFormCountry] = useState('');
  const [formCountryCode, setFormCountryCode] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formDescFr, setFormDescFr] = useState('');
  const [formDescEn, setFormDescEn] = useState('');
  const [formYear, setFormYear] = useState(new Date().getFullYear());
  const [formFeatured, setFormFeatured] = useState(false);
  const [formPublished, setFormPublished] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonImportRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const resetForm = () => {
    setFormTitleFr('');
    setFormTitleEn('');
    setFormAuthor('');
    setFormCategory('business');
    setFormCountry('');
    setFormCountryCode('');
    setFormImage('');
    setFormDescFr('');
    setFormDescEn('');
    setFormYear(new Date().getFullYear());
    setFormFeatured(false);
    setFormPublished(true);
    setEditingItem(null);
    setIsAddingNew(false);
  };

  const startEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormTitleFr(item.title.fr);
    setFormTitleEn(item.title.en || item.title.fr);
    setFormAuthor(item.author);
    setFormCategory(item.category);
    setFormCountry(item.country || '');
    setFormCountryCode(item.countryCode || '');
    setFormImage(item.image);
    setFormDescFr(item.description?.fr || '');
    setFormDescEn(item.description?.en || '');
    setFormYear(item.year || new Date().getFullYear());
    setFormFeatured(item.featured || false);
    setFormPublished(item.published);
  };

  const startAddNew = () => {
    resetForm();
    setIsAddingNew(true);
  };

  // Image file handler
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitleFr || !formAuthor || !formImage) {
      alert("Veuillez renseigner au moins le titre, l'auteur et une image.");
      return;
    }

    const payload = {
      title: {
        fr: formTitleFr,
        en: formTitleEn || formTitleFr
      },
      author: formAuthor,
      category: formCategory,
      country: formCountry,
      countryCode: formCountryCode,
      image: formImage,
      description: {
        fr: formDescFr,
        en: formDescEn || formDescFr
      },
      year: formYear,
      featured: formFeatured,
      published: formPublished
    };

    if (editingItem) {
      updateItem(editingItem.id, payload);
    } else {
      addItem(payload);
    }

    resetForm();
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;

    reorderItems(newItems);
  };

  const handleJsonImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const ok = importBackupJson(reader.result);
          if (ok) {
            setImportStatus("Importation réussie !");
            setTimeout(() => setImportStatus(null), 3000);
          } else {
            alert("Erreur lors de l'importation du fichier JSON.");
          }
        }
      };
      reader.readAsText(file);
    }
  };

  const filteredItems = items.filter(i => {
    const q = searchTerm.toLowerCase();
    return i.title.fr.toLowerCase().includes(q) || i.author.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-hidden animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl flex flex-col h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                {t.admin.title}
              </h2>
              <p className="text-xs text-zinc-400">
                {items.length} {t.admin.itemsCount} · {t.admin.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Panel: Form (Add or Edit) */}
          <div className="lg:col-span-5 bg-zinc-900/60 border border-white/10 rounded-xl p-4 sm:p-5 h-fit">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                {editingItem ? <Edit3 className="w-4 h-4 text-red-400" /> : <Plus className="w-4 h-4 text-red-400" />}
                <span>{editingItem ? t.admin.editCover : t.admin.addNew}</span>
              </h3>

              {(editingItem || isAddingNew) && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  {t.admin.cancel}
                </button>
              )}
            </div>

            <form onSubmit={handleSave} className="space-y-3.5 text-xs">
              
              {/* Title FR */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  {t.admin.itemTitleFr} *
                </label>
                <input
                  type="text"
                  required
                  value={formTitleFr}
                  onChange={(e) => setFormTitleFr(e.target.value)}
                  placeholder="Ex: Les Secrets de la Finance"
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Title EN */}
              <div>
                <label className="block text-zinc-400 font-medium mb-1">
                  {t.admin.itemTitleEn}
                </label>
                <input
                  type="text"
                  value={formTitleEn}
                  onChange={(e) => setFormTitleEn(e.target.value)}
                  placeholder="Ex: Secrets of Finance"
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Author & Country */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.admin.author} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    placeholder="Nom de l'auteur"
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.admin.country}
                  </label>
                  <input
                    type="text"
                    value={formCountry}
                    onChange={(e) => setFormCountry(e.target.value)}
                    placeholder="Ex: Cameroun"
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Category & Year */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.admin.category}
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="business">Business</option>
                    <option value="personal_dev">Développement Personnel</option>
                    <option value="novel">Roman</option>
                    <option value="education">Éducation</option>
                    <option value="religion">Religion & Foi</option>
                    <option value="biography">Biographie</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    {t.admin.year}
                  </label>
                  <input
                    type="number"
                    value={formYear}
                    onChange={(e) => setFormYear(parseInt(e.target.value) || 2025)}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Image Input (URL + Local File Upload) */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  {t.admin.imageUrl} *
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="https://... ou téléversez un fichier"
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-[11px] focus:outline-none focus:border-red-500"
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-lg border border-white/10 text-xs transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{t.admin.uploadFile}</span>
                    </button>
                    {formImage && (
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Image chargée
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnail Preview */}
                {formImage && (
                  <div className="mt-2 w-20 aspect-[1/1.5] rounded-lg overflow-hidden border border-white/20 relative">
                    <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  {t.admin.descriptionFr}
                </label>
                <textarea
                  rows={2}
                  value={formDescFr}
                  onChange={(e) => setFormDescFr(e.target.value)}
                  placeholder="Points forts du design..."
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-zinc-300">
                  <input
                    type="checkbox"
                    checked={formPublished}
                    onChange={(e) => setFormPublished(e.target.checked)}
                    className="rounded accent-red-600"
                  />
                  <span>{t.admin.isPublished}</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-zinc-300">
                  <input
                    type="checkbox"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="rounded accent-red-600"
                  />
                  <span>{t.admin.isFeatured}</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-red-600/30 transition-colors mt-2"
              >
                <Save className="w-4 h-4" />
                <span>{t.admin.save}</span>
              </button>

            </form>
          </div>

          {/* Right Panel: List of all covers with actions */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-900/60 p-3 rounded-xl border border-white/10">
              
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t.admin.searchAdmin}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* Export JSON */}
                <button
                  type="button"
                  onClick={exportBackupJson}
                  title={t.admin.exportJson}
                  className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg border border-white/10 text-xs flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export</span>
                </button>

                {/* Import JSON */}
                <input
                  type="file"
                  ref={jsonImportRef}
                  accept=".json"
                  onChange={handleJsonImport}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => jsonImportRef.current?.click()}
                  title={t.admin.importJson}
                  className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg border border-white/10 text-xs flex items-center gap-1"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Import</span>
                </button>

                {/* Reset to Default */}
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Réinitialiser les couvertures d'origine ?")) {
                      resetToDefault();
                    }
                  }}
                  title={t.admin.resetToDefault}
                  className="p-2 bg-zinc-800 hover:bg-red-950 text-zinc-400 hover:text-red-300 rounded-lg border border-white/10 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {importStatus && (
              <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs p-2.5 rounded-lg text-center font-bold">
                {importStatus}
              </div>
            )}

            {/* List Table/Cards */}
            <div className="space-y-2.5 max-h-[52vh] overflow-y-auto pr-1">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    item.published 
                      ? 'bg-zinc-900/80 border-white/10' 
                      : 'bg-zinc-950/60 border-white/5 opacity-60'
                  }`}
                >
                  {/* Thumbnail & Title */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 aspect-[1/1.5] rounded bg-zinc-800 overflow-hidden shrink-0 border border-white/10">
                      <img src={item.image} alt={item.title.fr} className="w-full h-full object-cover" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">
                        {item.title.fr}
                      </h4>
                      <p className="text-[11px] text-zinc-400 truncate">
                        {item.author} · <span className="uppercase text-red-400">{item.category}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions & Reorder buttons */}
                  <div className="flex items-center gap-1.5 shrink-0 ml-3">
                    {/* Move Up */}
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleMove(index, 'up')}
                      className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-20 rounded"
                      title="Monter"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>

                    {/* Move Down */}
                    <button
                      type="button"
                      disabled={index === filteredItems.length - 1}
                      onClick={() => handleMove(index, 'down')}
                      className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-20 rounded"
                      title="Descendre"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Toggle Published */}
                    <button
                      type="button"
                      onClick={() => togglePublished(item.id)}
                      className={`p-1.5 rounded ${
                        item.published ? 'text-emerald-400 hover:text-emerald-300' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                      title={item.published ? "Masquer du site" : "Publier sur le site"}
                    >
                      {item.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => startEdit(item)}
                      className="p-1.5 text-zinc-300 hover:text-red-400 rounded"
                      title="Modifier"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(t.admin.deleteConfirm)) {
                          deleteItem(item.id);
                        }
                      }}
                      className="p-1.5 text-zinc-500 hover:text-red-500 rounded"
                      title="Supprimer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Modifications sauvegardées automatiquement dans votre navigateur.</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-1.5 rounded-lg transition-colors"
          >
            Fermer le CMS
          </button>
        </div>

      </div>
    </div>
  );
};
