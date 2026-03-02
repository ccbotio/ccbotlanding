"use client";

import { I18nProvider } from "@/lib/i18n";
import { ReactNode } from "react";
import FloatingChat from "@/components/FloatingChat";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      {children}
      <FloatingChat />
    </I18nProvider>
  );
}
