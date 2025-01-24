import { create } from "zustand";

interface Store {
  lang: string;
  setLang: (lang: string) => void;
  data: any;
  setData: (data: any) => void;
}

export const useStore = create<Store>((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),
  data: null,
  setData: (data) => set({ data }),
}));
export default useStore;
