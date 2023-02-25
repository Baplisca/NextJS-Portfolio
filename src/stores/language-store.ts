import { create } from "zustand";

interface ILanguageStore {
  isEnglish: boolean;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<ILanguageStore>((set, get) => ({
  isEnglish: false,
  setLanguage: (lang: string) => set({ isEnglish: lang == "En" }),
}));
