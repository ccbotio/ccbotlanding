"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const stepsMeta = [
  { num: "1", highlight: false },
  { num: "2", highlight: false },
  { num: "3", highlight: true },
];

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-medium mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.howItWorks.title} <span className="italic text-accent">{t.howItWorks.titleAccent}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border-subtle -z-0 -translate-y-1/2" />

          {stepsMeta.map((step, i) => (
            <motion.div
              key={step.num}
              className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto mb-6 text-xl font-bold font-display ${
                  step.highlight
                    ? "bg-primary border-primary text-slate-900"
                    : "bg-background-light border-border-subtle text-accent"
                }`}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold font-ui mb-2">{t.howItWorks.steps[i].title}</h3>
              <p className="text-slate-500 text-sm">{t.howItWorks.steps[i].desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://t.me/ccbotwallet_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#eaff70] text-slate-900 px-10 py-4 rounded-full text-base font-bold transition-all shadow-md font-ui inline-flex items-center gap-2 group"
          >
            {t.howItWorks.launchBot}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
