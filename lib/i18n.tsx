"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "./translations/en";
import { es } from "./translations/es";
import { fr } from "./translations/fr";
import { ko } from "./translations/ko";
import { ja } from "./translations/ja";

export type Lang = "en" | "es" | "fr" | "ko" | "ja";

export const langNames: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  ko: "한국어",
  ja: "日本語",
};

type Translations = typeof en;

const allTranslations: Record<Lang, Translations> = { en, es, fr, ko, ja };

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: allTranslations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
