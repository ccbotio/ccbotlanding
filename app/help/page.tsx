"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpFAQ from "@/components/HelpFAQ";
import HelpChat from "@/components/HelpChat";
import { useTranslation } from "@/lib/i18n";

export default function HelpPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-secondary mb-8 font-body">
            <Link href="/" className="hover:text-accent transition-colors">
              {t.docs.home}
            </Link>
            <span>/</span>
            <span className="text-slate-900">Help</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-4">
              {t.help.title}{" "}
              <span className="text-accent not-italic">{t.help.titleAccent}</span>
            </h1>
            <p className="text-secondary text-lg mb-12 font-body">
              {t.help.subtitle}
            </p>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <HelpFAQ />
              <HelpChat />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
