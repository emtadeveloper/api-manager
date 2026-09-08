"use client";

import { useEffect } from "react";
import useSettingsStore from "@/stores/settings";

export function useHydrateSettings() {
  const hydrate = useSettingsStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);
}
