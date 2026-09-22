import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { comparisonFeatures } from '../data/pricingData';
import { Check, X, Sparkles } from 'lucide-react';

export const PricingComparisonTable: React.FC = () => {
  const { language } = useLanguage();

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
            <Check className="w-3.5 h-3.5" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-zinc-600">
          <X className="w-4 h-4" />
        </div>
      );
    }
    return <span className="font-semibold text-zinc-200 text-xs">{val}</span>;
  };

  return (
    <div className="bg-zinc-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          Tableau Comparatif des Forfaits Éditoriaux
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Détail exhaustif des livrables inclus dans chaque niveau d'accompagnement
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-zinc-400 uppercase tracking-wider">
              <th className="py-4 px-4 font-bold text-white w-2/5">Livrables & Prestations</th>
              <th className="py-4 px-3 text-center">
                Kôra Essentiel<br/>
                <span className="text-[11px] text-amber-300 font-bold">150 000 FCFA</span>
              </th>
              <th className="py-4 px-3 text-center bg-amber-950/20 text-amber-300 font-bold rounded-t-xl border-x border-amber-500/20">
                Kôra Standard ⭐<br/>
                <span className="text-[11px] text-amber-400 font-extrabold">275 000 FCFA</span>
              </th>
              <th className="py-4 px-3 text-center">
                Kôra Premium<br/>
                <span className="text-[11px] text-amber-300 font-bold">450 000 FCFA</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {comparisonFeatures.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 font-medium text-zinc-300">
                  {row.feature[language] || row.feature.fr}
                </td>
                <td className="py-3.5 px-3 text-center">
                  {renderCell(row.essential)}
                </td>
                <td className="py-3.5 px-3 text-center bg-amber-950/10 border-x border-amber-500/10">
                  {renderCell(row.standard)}
                </td>
                <td className="py-3.5 px-3 text-center">
                  {renderCell(row.premium)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion / Cards */}
      <div className="md:hidden space-y-4">
        {comparisonFeatures.map((row, idx) => (
          <div key={idx} className="bg-zinc-900/80 border border-white/10 p-4 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-white text-sm border-b border-white/10 pb-1.5">
              {row.feature[language] || row.feature.fr}
            </h4>
            <div className="grid grid-cols-3 gap-2 pt-1 text-zinc-300">
              <div className="text-center">
                <span className="text-zinc-500 block text-[10px]">Essentiel (150k)</span>
                <div className="mt-1">{renderCell(row.essential)}</div>
              </div>
              <div className="bg-amber-950/30 p-2 rounded-xl border border-amber-500/20 text-center">
                <span className="text-amber-300 block text-[10px] font-bold">Standard (275k)</span>
                <div className="mt-1">{renderCell(row.standard)}</div>
              </div>
              <div className="text-center">
                <span className="text-zinc-500 block text-[10px]">Premium (450k)</span>
                <div className="mt-1">{renderCell(row.premium)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
