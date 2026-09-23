import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioItem, BookCategory } from '../types';
import { initialPortfolioItems } from '../data/initialPortfolio';

interface PortfolioContextType {
  items: PortfolioItem[];
  publishedItems: PortfolioItem[];
  addItem: (item: Omit<PortfolioItem, 'id' | 'order'>) => void;
  updateItem: (id: string, updated: Partial<PortfolioItem>) => void;
  deleteItem: (id: string) => void;
  togglePublished: (id: string) => void;
  reorderItems: (newItems: PortfolioItem[]) => void;
  resetToDefault: () => void;
  exportBackupJson: () => void;
  importBackupJson: (jsonData: string) => boolean;
}

const STORAGE_KEY = 'kora_studio_creatives_v2_official';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading portfolio from storage', e);
    }
    return initialPortfolioItems;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save portfolio items to localStorage', e);
    }
  }, [items]);

  const publishedItems = items
    .filter(item => item.published)
    .sort((a, b) => a.order - b.order);

  const addItem = (itemData: Omit<PortfolioItem, 'id' | 'order'>) => {
    const newItem: PortfolioItem = {
      ...itemData,
      id: `cov-${Date.now()}`,
      order: items.length + 1
    };
    setItems(prev => [newItem, ...prev]);
  };

  const updateItem = (id: string, updated: Partial<PortfolioItem>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const togglePublished = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, published: !item.published } : item));
  };

  const reorderItems = (newItems: PortfolioItem[]) => {
    const reordered = newItems.map((item, idx) => ({ ...item, order: idx + 1 }));
    setItems(reordered);
  };

  const resetToDefault = () => {
    setItems(initialPortfolioItems);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportBackupJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `portfolio-couvertures-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importBackupJson = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setItems(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON file', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        items,
        publishedItems,
        addItem,
        updateItem,
        deleteItem,
        togglePublished,
        reorderItems,
        resetToDefault,
        exportBackupJson,
        importBackupJson
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
