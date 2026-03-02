"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section
      className="py-24 px-6 bg-background-surface border-t border-border-subtle"
      id="partners"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            {t.partners.title} <span className="italic text-accent">{t.partners.titleAccent}</span>
          </h2>
          <p className="text-slate-600 max-w-xl text-lg font-body">
            {t.partners.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-2xl border-2 border-[#D5A5E3]/50 border-dashed p-6 flex items-center justify-center aspect-square hover:border-accent hover:border-solid hover:shadow-lg hover:shadow-accent/10 transition-all cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="absolute inset-0 bg-dots opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="material-symbols-outlined text-[#D5A5E3] group-hover:text-accent transition-colors text-3xl relative z-10">
                add
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
