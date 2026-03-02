"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-6 bg-white">
      <motion.div
        className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-10 md:p-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-accent via-slate-900 to-slate-900" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            {t.cta.title}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 font-body">
            {t.cta.description}
          </p>
          <a
            href="https://t.me/ccbotwallet_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#eaff70] text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary/20 font-ui transform hover:scale-105"
          >
            {t.cta.button}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
