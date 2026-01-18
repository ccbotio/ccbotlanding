"use client";

import { motion } from "framer-motion";

export default function PartnerBar() {
  return (
    <section className="py-12 border-y border-[#1f1f1f] bg-[#0a0a0a]/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm text-[#a89f91] uppercase tracking-wider">
            Trusted by leading platforms
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src="/images/cantonlogo.png"
              alt="Canton Network"
              className="h-24 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
