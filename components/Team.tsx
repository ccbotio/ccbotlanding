"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

const founders = [
  {
    nameKey: "seher",
    image: "/images/seher.jpg",
    linkedin: "https://www.linkedin.com/in/seher-eroglu",
    mail: "seher@ccbot.io",
  },
  {
    nameKey: "ferhat",
    image: "/images/ferhat.jpg",
    linkedin: "https://www.linkedin.com/in/ferhat-nazli/",
    mail: "ferhat@ccbot.io",
  },
];

export default function Team() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 bg-background-light" id="team">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            {t.team.title}{" "}
            <span className="italic text-accent">{t.team.titleAccent}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-body">
            {t.team.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, i) => {
            const member = t.team.members[founder.nameKey as keyof typeof t.team.members];
            return (
              <motion.div
                key={founder.nameKey}
                className="group bg-background-surface border border-border-subtle rounded-2xl p-8 text-center relative overflow-hidden hover:border-accent/30 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="absolute inset-0 bg-dots opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src={founder.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-2 border-border-subtle group-hover:border-accent/40 transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-ui text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm font-ui mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-3 mt-2">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white border border-border-subtle flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href={`mailto:${founder.mail}`}
                      className="w-9 h-9 rounded-full bg-white border border-border-subtle flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
