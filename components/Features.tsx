"use client";

import { motion } from "framer-motion";

// Custom minimalist SVG icons
const FeatureIcons = {
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 19V5M12 5l-4 4M12 5l4 4" />
      <circle cx="12" cy="19" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <circle cx="19" cy="8" r="1.5" fill="currentColor" />
      <circle cx="19" cy="16" r="1.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <circle cx="5" cy="16" r="1.5" fill="currentColor" />
      <circle cx="5" cy="8" r="1.5" fill="currentColor" />
      <path d="M12 9V5.5M14.6 10.5l3-1.75M14.6 13.5l3 1.75M12 15v3.5M9.4 13.5l-3 1.75M9.4 10.5l-3-1.75" />
    </svg>
  ),
  at: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1a3 3 0 006 0v-1a10 10 0 10-4 8" />
    </svg>
  ),
  passkey: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="16" r="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z" />
      <circle cx="9.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9.5 14.5c0 1.38 1.12 2 2.5 2s2.5-.62 2.5-2" />
    </svg>
  ),
};

const features = [
  {
    icon: "send",
    title: "Send by Username",
    description: "Transfer crypto to any Telegram user using just their @username. No complex wallet addresses required.",
  },
  {
    icon: "network",
    title: "Canton Network Native",
    description: "Built on Canton Network, the privacy-first blockchain designed for institutional-grade transactions.",
  },
  {
    icon: "at",
    title: "Canton Name Service",
    description: "Register your unique CNS name for easy-to-remember wallet addresses and seamless transfers.",
  },
  {
    icon: "passkey",
    title: "Passkey Security",
    description: "Secure your wallet with Passkey, Face ID, Touch ID, or PIN. Next-gen authentication for your assets.",
  },
  {
    icon: "shield",
    title: "Non-Custodial",
    description: "Your keys, your crypto. Private keys are stored locally and never leave your device.",
  },
  {
    icon: "ai",
    title: "AI Agent",
    description: "Your personal AI-powered assistant for smart transactions, portfolio insights, and on-chain analytics.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#875CFF] text-sm">widgets</span>
            <span className="text-sm text-[#A89F91]">Features</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful Features,{" "}
            <span className="gradient-text">Simple Experience</span>
          </h2>
          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            Everything you need to manage your crypto on Canton Network,
            right inside Telegram.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group glass-card rounded-2xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5A5E3]/15 to-[#D5A5E3]/5 border border-[#D5A5E3]/20 flex items-center justify-center mb-4 group-hover:border-[#D5A5E3]/40 transition-colors duration-300 text-[#D5A5E3]">
                {FeatureIcons[feature.icon as keyof typeof FeatureIcons]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#A89F91] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
