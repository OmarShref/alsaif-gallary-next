import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLanguageStore = create(
  persist(
    (set) => ({
      language: "ar",
    }),
    {
      name: "language-storage",
    }
  )
);

export default useLanguageStore;
