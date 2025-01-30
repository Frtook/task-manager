import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface ThemeState {
  theme: "dark" | "light";
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: () =>
        set((state) => ({
          ...state,
          theme: get().theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
