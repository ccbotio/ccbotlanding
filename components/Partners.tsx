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

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-8 text-center overflow-hidden">
            {/* Animated background glow */}
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-[#875CFF]/10 via-[#D5A5E3]/10 to-[#875CFF]/10 blur-3xl"
            />

            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-dashed border-[#875CFF]/30 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[#875CFF] text-2xl">rocket_launch</span>
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Partner Announcements Coming Soon
              </h3>
              <p className="text-[#A89F91] max-w-md mx-auto mb-6">
                We&apos;re in discussions with major players in the blockchain ecosystem.
                Follow our announcements channel to be the first to know.
              </p>

              <a
                href="https://t.me/ccbotio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#875CFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a4fee] transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                </svg>
                Follow Announcements
              </a>
            </div>
          </div>
        </motion.div>

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
