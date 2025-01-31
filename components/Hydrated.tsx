"use client";
import { useTaskStor } from "@/store/taskStor";
import { useThemeStore } from "@/store/theme.store";
import { useEffect, useState } from "react";

export default function Hydrated({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const { theme } = useThemeStore();
  useEffect(() => {
    (async () => {
      await useTaskStor.persist.rehydrate();
      setIsHydrated(true);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      await useTaskStor.persist.rehydrate();
      const localTheme = JSON.parse(localStorage.getItem("theme") || "");
      if (localTheme) {
        document.documentElement.setAttribute(
          "data-mode",
          localTheme.state.theme
        );
        document.documentElement.className = localTheme.state.theme;
      }
    })();
  }, [theme]);
  return isHydrated ? <>{children}</> : null;
}
