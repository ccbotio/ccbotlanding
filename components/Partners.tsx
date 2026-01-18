"use client";

import { motion } from "framer-motion";

// Empty partner slots with animated effects
const partnerSlots = [1, 2, 3, 4, 5, 6];

export default function Partners() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#875CFF] text-sm">handshake</span>
            <span className="text-sm text-[#A89F91]">Strategic Partners</span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Building the Future <span className="gradient-text">Together</span>
          </h2>

          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            We&apos;re partnering with leading blockchain protocols, exchanges, and infrastructure providers
            to deliver the best experience for our users.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {partnerSlots.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#875CFF]/0 via-[#875CFF]/50 to-[#D5A5E3]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Card */}
              <div className="relative aspect-square bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl flex flex-col items-center justify-center p-4 group-hover:border-[#875CFF]/30 transition-all duration-500">
                {/* Pulsing dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#875CFF]/10 to-[#D5A5E3]/5 border border-[#875CFF]/20 flex items-center justify-center mb-3"
                >
                  <span className="material-symbols-outlined text-[#875CFF]/50 text-2xl">add</span>
                </motion.div>

                {/* Shimmer line placeholder */}
                <div className="w-16 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "linear",
                    }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#875CFF]/20 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interested in Partnering? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-[#A89F91]">
            Interested in partnering with CC Bot Wallet?{" "}
            <a
              href="https://t.me/ccbotio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#875CFF] hover:text-[#D5A5E3] transition-colors"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
