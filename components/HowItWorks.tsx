"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Launch the Bot",
    description: "Open @ccbotio_bot in Telegram and tap Start. Your wallet is created instantly.",
    icon: "open_in_new",
  },
  {
    number: "02",
    title: "Secure with Passkey",
    description: "Set up Passkey authentication with Face ID, Touch ID, or PIN for maximum security.",
    icon: "passkey",
  },
  {
    number: "03",
    title: "Start Using",
    description: "Send to @usernames, register your CNS name, and earn rewards with daily tasks.",
    icon: "arrow_forward",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-transparent relative overflow-hidden">
      <div className="neon-orb top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#875CFF] text-sm">play_circle</span>
            <span className="text-sm text-[#A89F91]">How It Works</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Started in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            No app downloads, no complex setup. Your Canton Network wallet is ready in seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-[#1f1f1f] via-[#875CFF]/30 to-[#1f1f1f]" />
              )}

              <div className="relative glass-card rounded-2xl p-8 text-center card-hover">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F3FF97] text-[#030206] text-sm font-bold px-4 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center mx-auto mb-6 mt-4">
                  <span className="material-symbols-outlined text-[#875CFF] text-3xl">
                    {step.icon}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#A89F91] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://t.me/ccbotio_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F3FF97] text-[#030206] px-6 py-3 rounded-full font-semibold hover:bg-[#e8f085] transition-all duration-200 glow-primary"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
            </svg>
            Try It Now - It&apos;s Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
