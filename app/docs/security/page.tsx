"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const securityFeatures = [
  {
    icon: "passkey",
    title: "Passkey Authentication",
    description: "Your wallet is secured with Passkeys - the next generation of authentication. Passkeys use your device's biometric sensors (Face ID, Touch ID, fingerprint) to create cryptographic keys that can't be phished, guessed, or stolen.",
    details: [
      "No passwords to remember or lose",
      "Biometric verification for every transaction",
      "Keys never leave your device",
      "Phishing-resistant by design",
    ],
  },
  {
    icon: "key_off",
    title: "Non-Custodial Architecture",
    description: "We never have access to your private keys or funds. Your wallet is entirely under your control, running on the Canton Network with decentralized security.",
    details: [
      "You own your keys",
      "No central point of failure",
      "Funds can't be frozen by us",
      "True self-custody",
    ],
  },
  {
    icon: "lock",
    title: "End-to-End Encryption",
    description: "All communications between your device and the blockchain are encrypted. Your transaction data is protected at every step.",
    details: [
      "TLS 1.3 encryption",
      "Secure key exchange",
      "No data stored on our servers",
      "Privacy-preserving design",
    ],
  },
  {
    icon: "verified_user",
    title: "Canton Network Security",
    description: "Built on Canton Network, a privacy-enabled blockchain designed for institutional-grade security and compliance without compromising decentralization.",
    details: [
      "Sub-transaction privacy",
      "Atomic transactions",
      "Regulatory compliance ready",
      "Enterprise-grade infrastructure",
    ],
  },
];

export default function SecurityDocs() {
  return (
    <main className="min-h-screen bg-[#030206] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#A89F91] mb-8">
          <Link href="/" className="hover:text-[#875CFF] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Security</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security <span className="gradient-text">Architecture</span>
          </h1>

          <p className="text-[#A89F91] text-lg mb-12">
            CC Bot Wallet is built with security as the foundation. Learn how we protect your assets and privacy.
          </p>

          {/* Security Overview */}
          <div className="glass-card rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">shield</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Our Security Promise</h2>
                <p className="text-[#A89F91]">
                  Your security is our top priority. CC Bot Wallet combines cutting-edge cryptography,
                  non-custodial architecture, and the security of the Canton Network to give you
                  complete control over your digital assets.
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="space-y-8">
            {securityFeatures.map((feature, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#875CFF]/20 to-[#D5A5E3]/10 border border-[#875CFF]/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#875CFF]">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-[#A89F91]">{feature.description}</p>
                  </div>
                </div>
                <div className="ml-14">
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {feature.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-[#A89F91] text-sm">
                        <span className="material-symbols-outlined text-[#F3FF97] text-base">check_circle</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Security Best Practices</h2>
            <div className="glass-card rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F3FF97]">smartphone</span>
                  <div>
                    <h4 className="text-white font-medium">Keep Your Device Secure</h4>
                    <p className="text-[#A89F91] text-sm">Always use screen lock and keep your device software updated.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F3FF97]">visibility_off</span>
                  <div>
                    <h4 className="text-white font-medium">Never Share Your Passkey</h4>
                    <p className="text-[#A89F91] text-sm">Your Passkey is personal. Never share biometric access with others.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F3FF97]">verified</span>
                  <div>
                    <h4 className="text-white font-medium">Verify Recipients</h4>
                    <p className="text-[#A89F91] text-sm">Always double-check usernames and addresses before sending funds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F3FF97]">report</span>
                  <div>
                    <h4 className="text-white font-medium">Report Suspicious Activity</h4>
                    <p className="text-[#A89F91] text-sm">If you notice anything unusual, contact our support immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Security Team */}
          <div className="mt-12 glass-card rounded-2xl p-6 border-[#875CFF]/30">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#875CFF] text-2xl">security</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Found a Security Issue?</h3>
                <p className="text-[#A89F91] mb-4">
                  We take security seriously. If you&apos;ve discovered a vulnerability, please report it responsibly through our community channel.
                </p>
                <a
                  href="https://t.me/ccbotio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#875CFF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7a4fee] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
