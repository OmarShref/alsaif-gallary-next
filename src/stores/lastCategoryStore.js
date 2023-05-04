import { create } from "zustand";

const useLastCategoryStore = create((set) => ({
  lastCategory: "",
  index: 0,
  setLastCategory: (url) => set({ lastCategory: url }),
  setIndex: (i) => set({ index: i }),
}));

export default useLastCategoryStore;
