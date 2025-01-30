"use client";
import { useTaskStor } from "@/store/taskStor";
import { useEffect, useState } from "react";

export default function Hydrated({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    (async () => {
      await useTaskStor.persist.rehydrate();
      setIsHydrated(true);
    })();
  }, []);
  if (isHydrated) {
    return <>{children}</>;
  }
}
