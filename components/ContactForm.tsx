"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6">
            <span className="material-symbols-outlined text-[#875CFF] text-sm">mail</span>
            <span className="text-sm text-[#A89F91]">Get in Touch</span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>

          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#875CFF]/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#875CFF]/50 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#875CFF]/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#875CFF]/50 transition-colors duration-200 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-[#A89F91] text-sm">
                Or email us directly at{" "}
                <a href="mailto:support@ccbot.io" className="text-[#875CFF] hover:text-[#D5A5E3] transition-colors">
                  support@ccbot.io
                </a>
              </p>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#F3FF97] text-[#030206] px-8 py-4 rounded-full font-semibold hover:bg-[#e8f085] transition-all duration-200 whitespace-nowrap"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
