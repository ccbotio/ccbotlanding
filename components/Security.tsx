"use client";

import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: "shield_lock",
    title: "Non-Custodial Architecture",
    description: "Your private keys are generated and stored locally on your device. We never have access to your funds or seed phrase.",
    highlights: ["Local Key Storage", "Passkey Protection", "PIN Encryption"],
  },
  {
    icon: "lan",
    title: "Canton Network Security",
    description: "Built on Canton Network, a privacy-first blockchain with atomic transactions and smart contract safety guarantees.",
    highlights: ["Privacy by Design", "Atomic Transactions", "Enterprise-Grade"],
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="neon-orb bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#875CFF] text-sm">security</span>
            <span className="text-sm text-[#A89F91]">Security</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Security is{" "}
            <span className="gradient-text">Our Priority</span>
          </h2>
          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            Built with enterprise-grade security from the ground up.
            Your assets are protected by multiple layers of defense.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group glass-card rounded-3xl p-8 hover:border-[#875CFF]/40 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center mb-6 group-hover:border-[#875CFF]/40 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#875CFF] text-3xl">
                  {feature.icon}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#A89F91] mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-1.5 bg-[#1a1a1a] border border-[#2a2a2a] text-sm text-[#A89F91] px-3 py-1.5 rounded-full"
                  >
                    <span className="material-symbols-outlined text-[#F3FF97] text-sm">check</span>
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
