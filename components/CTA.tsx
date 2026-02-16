"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="neon-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#F3FF97] text-sm animate-pulse">circle</span>
            <span className="text-sm text-[#A89F91]">Live on Canton Network</span>
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="gradient-text">Canton Journey</span>
          </h2>

          <p className="text-[#A89F91] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Experience the first Telegram wallet on Canton Network.
            Non-custodial, biometric-secured, and completely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://t.me/ccbotwallet_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#F3FF97] text-[#030206] px-6 py-3 rounded-full font-semibold hover:bg-[#e8f085] transition-all duration-200 glow-primary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
              </svg>
              Launch CC Bot Wallet
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#0d0d0d]/80 border border-[#875CFF]/30 text-white px-6 py-3 rounded-full font-semibold hover:border-[#875CFF]/60 hover:bg-[#1a1a1a] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">description</span>
              Read Documentation
            </motion.a>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: "shield_lock", text: "Non-Custodial" },
              { icon: "passkey", text: "Passkey Secured" },
              { icon: "lan", text: "Canton Network" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-[#A89F91]">
                <span className="material-symbols-outlined text-lg text-[#875CFF]">{badge.icon}</span>
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
