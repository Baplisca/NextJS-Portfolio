import { create } from "zustand";

interface IPageStore {
  page: string;
  setPage: (page: string) => void;
}

export const usePageStore = create<IPageStore>((set, get) => ({
  page: "about",
  setPage: (page: string) => set({ page }),
}));
