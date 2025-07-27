import { create } from 'zustand';
import { JewelryItem } from '../lib/jewelry-data';

interface JewelryStore {
  selectedItem: JewelryItem | null;
  setSelectedItem: (item: JewelryItem) => void;
  clearSelectedItem: () => void;
}

export const useJewelryStore = create<JewelryStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
  clearSelectedItem: () => set({ selectedItem: null }),
}));
