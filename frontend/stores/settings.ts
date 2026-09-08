"use client";

import { create } from "zustand";

export type FontType = "yekan" | "vazir";

export interface PrimaryPreset {
  name: string;
  value: string;
  light: string;
  dark: string;
}

export const PRIMARY_PRESETS: PrimaryPreset[] = [
  {
    name: "نارنجی",
    value: "#f59e0b",
    light: "#ffa600",
    dark: "#a95101",
  },
  {
    name: "آبی",
    value: "#0C68E9",
    light: "#6bb1f8",
    dark: "#063ba7",
  },
  {
    name: "بنفش",
    value: "#8E33FF",
    light: "#c684ff",
    dark: "#5119b7",
  },
  {
    name: "قرمز",
    value: "#FF3030",
    light: "#ffc1ac",
    dark: "#b71833",
  },
  {
    name: "سبز",
    value: "#22C55E",
    light: "#77ed8b",
    dark: "#118d57",
  },
  {
    name: "ارغوانی",
    value: "#7635dc",
    light: "#b985f4",
    dark: "#431a9e",
  },
];

export const DEFAULT_THEME = true;
export const DEFAULT_FONT_TYPE: FontType = "yekan";
export const DEFAULT_FONT_SIZE = 14;
export const DEFAULT_PRIMARY_COLOR = "#f59e0b";

const FONT_SIZE_MIN = 12;
const FONT_SIZE_MAX = 20;

const isValidFontType = (value: string | null): value is FontType => {
  return value === "yekan" || value === "vazir";
};

const getPreset = (value: string) => {
  return PRIMARY_PRESETS.find((preset) => preset.value.toLowerCase() === value.toLowerCase()) ?? PRIMARY_PRESETS[0];
};

const applySettingsToDocument = ({
  isDark,
  fontType,
  fontSize,
  primaryColor,
}: {
  isDark: boolean;
  fontType: FontType;
  fontSize: number;
  primaryColor: string;
}) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const preset = getPreset(primaryColor);

  root.setAttribute("data-theme", isDark ? "dark" : "light");

  root.setAttribute("data-font", fontType);

  root.setAttribute("data-font-size", String(fontSize));

  root.setAttribute("data-primary-color", preset.value);

  root.style.setProperty("--app-font-size", `${fontSize}px`);

  root.style.setProperty("--app-primary", preset.value);

  root.style.setProperty("--app-primary-light", preset.light);

  root.style.setProperty("--app-primary-dark", preset.dark);
};

interface SettingsState {
  isDark: boolean;
  fontType: FontType;
  fontSize: number;
  primaryColor: string;
  hydrated: boolean;

  hydrate: () => void;

  toggleTheme: () => void;

  setFontType: (value: FontType) => void;

  setFontSize: (value: number) => void;

  setPrimaryColor: (preset: PrimaryPreset) => void;

  resetSettings: () => void;
}

const useSettingsStore = create<SettingsState>((set, get) => ({
  isDark: DEFAULT_THEME,

  fontType: DEFAULT_FONT_TYPE,

  fontSize: DEFAULT_FONT_SIZE,

  primaryColor: DEFAULT_PRIMARY_COLOR,

  hydrated: false,

  hydrate: () => {
    if (typeof window === "undefined" || get().hydrated) {
      return;
    }

    const savedTheme = localStorage.getItem("theme");

    const savedFont = localStorage.getItem("font");

    const savedFontSize = localStorage.getItem("fontSize");

    const savedPrimaryColor = localStorage.getItem("primaryColor");

    const isDark = savedTheme === "light" ? false : savedTheme === "dark" ? true : DEFAULT_THEME;

    const fontType = isValidFontType(savedFont) ? savedFont : DEFAULT_FONT_TYPE;

    const parsedFontSize = Number(savedFontSize);

    const fontSize =
      Number.isFinite(parsedFontSize) && parsedFontSize >= FONT_SIZE_MIN && parsedFontSize <= FONT_SIZE_MAX
        ? parsedFontSize
        : DEFAULT_FONT_SIZE;

    const primaryExists =
      savedPrimaryColor &&
      PRIMARY_PRESETS.some((preset) => preset.value.toLowerCase() === savedPrimaryColor.toLowerCase());

    const primaryColor = primaryExists && savedPrimaryColor ? savedPrimaryColor : DEFAULT_PRIMARY_COLOR;

    set({
      isDark,
      fontType,
      fontSize,
      primaryColor,
      hydrated: true,
    });

    applySettingsToDocument({
      isDark,
      fontType,
      fontSize,
      primaryColor,
    });
  },

  toggleTheme: () => {
    const next = !get().isDark;

    set({
      isDark: next,
    });

    applySettingsToDocument({
      isDark: next,
      fontType: get().fontType,
      fontSize: get().fontSize,
      primaryColor: get().primaryColor,
    });

    localStorage.setItem("theme", next ? "dark" : "light");
  },

  setFontType: (value) => {
    set({
      fontType: value,
    });

    applySettingsToDocument({
      isDark: get().isDark,
      fontType: value,
      fontSize: get().fontSize,
      primaryColor: get().primaryColor,
    });

    localStorage.setItem("font", value);
  },

  setFontSize: (value) => {
    const next = Math.min(FONT_SIZE_MAX, Math.max(FONT_SIZE_MIN, value));

    set({
      fontSize: next,
    });

    applySettingsToDocument({
      isDark: get().isDark,
      fontType: get().fontType,
      fontSize: next,
      primaryColor: get().primaryColor,
    });

    localStorage.setItem("fontSize", String(next));
  },

  setPrimaryColor: (preset) => {
    set({
      primaryColor: preset.value,
    });

    applySettingsToDocument({
      isDark: get().isDark,
      fontType: get().fontType,
      fontSize: get().fontSize,
      primaryColor: preset.value,
    });

    localStorage.setItem("primaryColor", preset.value);
  },

  resetSettings: () => {
    set({
      isDark: DEFAULT_THEME,
      fontType: DEFAULT_FONT_TYPE,
      fontSize: DEFAULT_FONT_SIZE,
      primaryColor: DEFAULT_PRIMARY_COLOR,
    });

    applySettingsToDocument({
      isDark: DEFAULT_THEME,
      fontType: DEFAULT_FONT_TYPE,
      fontSize: DEFAULT_FONT_SIZE,
      primaryColor: DEFAULT_PRIMARY_COLOR,
    });

    localStorage.setItem("theme", "dark");

    localStorage.setItem("font", DEFAULT_FONT_TYPE);

    localStorage.setItem("fontSize", String(DEFAULT_FONT_SIZE));

    localStorage.setItem("primaryColor", DEFAULT_PRIMARY_COLOR);
  },
}));

export default useSettingsStore;
