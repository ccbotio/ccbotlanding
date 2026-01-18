"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "arrow_outward",
    title: "Send by Username",
    description: "Transfer crypto to any Telegram user using just their @username. No complex wallet addresses required.",
  },
  {
    icon: "lan",
    title: "Canton Network Native",
    description: "Built on Canton Network, the privacy-first blockchain designed for institutional-grade transactions.",
  },
  {
    icon: "id_card",
    title: "Canton Name Service",
    description: "Register your unique CNS name for easy-to-remember wallet addresses and seamless transfers.",
  },
  {
    icon: "passkey",
    title: "Passkey Security",
    description: "Secure your wallet with Passkey, Face ID, Touch ID, or PIN. Next-gen authentication for your assets.",
  },
  {
    icon: "shield_lock",
    title: "Non-Custodial",
    description: "Your keys, your crypto. Private keys are stored locally and never leave your device.",
  },
  {
    icon: "token",
    title: "Task Rewards",
    description: "Complete daily tasks, maintain streaks, and earn CC tokens while using the wallet.",
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center mb-4 group-hover:border-[#875CFF]/40 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#875CFF] text-2xl">
                  {feature.icon}
                </span>
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
