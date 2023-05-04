import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLanguageStore = create(
  persist(
    (set) => ({
      language: "ar",
      setLanguageToArabic: () => set({ language: "ar" }),
      setLanguageToEnglish: () => set({ language: "en" }),
    }),
    {
      name: "language-storage",
    }
  )
);

export default useLanguageStore;
