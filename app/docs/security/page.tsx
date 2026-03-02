"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const securityFeatures = [
  {
    icon: "key",
    title: "2-of-3 Shamir Secret Sharing",
    description:
      "Your Ed25519 private key is split into three shares using Shamir Secret Sharing. Only two shares are needed to reconstruct the key for signing. No single point of failure.",
    details: [
      "Device share stored locally on your phone",
      "Server share held in encrypted storage",
      "Passkey-based recovery on any device",
      "Any two shares reconstruct the signing key",
    ],
  },
  {
    icon: "fingerprint",
    title: "Passkey / WebAuthn Recovery",
    description:
      "Recover your wallet using WebAuthn Passkeys with biometric authentication tied to your device. No seed phrases to remember or lose.",
    details: [
      "Face ID / Touch ID verification",
      "Phishing-resistant by design",
      "Synced across your Apple or Google devices",
      "Replaces traditional seed phrases",
    ],
  },
  {
    icon: "lock",
    title: "AES-256-GCM Encryption",
    description:
      "All key shares are encrypted at rest using AES-256-GCM. Zero-memory key handling ensures private keys are never stored in plaintext memory.",
    details: [
      "Military-grade encryption standard",
      "Keys wiped from memory after use",
      "Encrypted local storage on device",
      "Secure key derivation with PBKDF2",
    ],
  },
  {
    icon: "shield",
    title: "PIN Brute-Force Protection",
    description:
      "Your wallet PIN is protected against brute-force attacks with progressive lockouts and rate limiting on all sensitive endpoints.",
    details: [
      "5 failed attempts trigger 15-minute lockout",
      "Rate limiting on authentication endpoints",
      "Secure PIN hashing (never stored in plaintext)",
      "Session-based security tokens",
    ],
  },
];

export default function SecurityDocs() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-secondary mb-8 font-body">
            <Link
              href="/"
              className="hover:text-accent transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">Security</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-6">
              Security{" "}
              <span className="text-accent not-italic">Architecture</span>
            </h1>

            <p className="text-secondary text-lg mb-12 font-body">
              CC Bot Wallet is built with security as the foundation. Learn
              how we protect your assets with Ed25519 signing and Shamir
              Secret Sharing.
            </p>

            {/* Security Overview */}
            <div className="bg-background-surface rounded-2xl p-6 mb-12 border border-border-subtle bg-dots">
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-2xl">
                    shield
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 font-ui">
                    Our Security Promise
                  </h2>
                  <p className="text-secondary font-body">
                    Your private keys are generated on-device and never
                    transmitted. CC Bot Wallet combines Ed25519 cryptography,
                    2-of-3 Shamir Secret Sharing, and the Canton Network to
                    give you complete self-custody over your digital assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-6">
              {securityFeatures.map((feature, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-border-subtle"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-accent">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-ui">
                        {feature.title}
                      </h3>
                      <p className="text-secondary font-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-14">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {feature.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-slate-600 text-sm font-body"
                        >
                          <span className="material-symbols-outlined text-accent text-base">
                            check_circle
                          </span>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-ui">
                Security Best Practices
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-border-subtle">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent">
                      smartphone
                    </span>
                    <div>
                      <h4 className="text-slate-900 font-medium font-ui">
                        Keep Your Device Secure
                      </h4>
                      <p className="text-secondary text-sm font-body">
                        Always use screen lock and keep your device software
                        updated.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent">
                      save
                    </span>
                    <div>
                      <h4 className="text-slate-900 font-medium font-ui">
                        Set Up Your Passkey
                      </h4>
                      <p className="text-secondary text-sm font-body">
                        Enable Passkey authentication for secure wallet
                        recovery across your devices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent">
                      pin
                    </span>
                    <div>
                      <h4 className="text-slate-900 font-medium font-ui">
                        Choose a Strong PIN
                      </h4>
                      <p className="text-secondary text-sm font-body">
                        Use a unique PIN for CC Bot Wallet. Avoid common
                        patterns like 1234 or your birthday.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent">
                      verified
                    </span>
                    <div>
                      <h4 className="text-slate-900 font-medium font-ui">
                        Verify Recipients
                      </h4>
                      <p className="text-secondary text-sm font-body">
                        Always double-check usernames and addresses before
                        sending funds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Security Team */}
            <div className="mt-12 bg-accent/5 rounded-2xl p-6 border border-accent/20">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent text-2xl">
                  security
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-ui">
                    Found a Security Issue?
                  </h3>
                  <p className="text-secondary mb-4 font-body">
                    We take security seriously. If you&apos;ve discovered a
                    vulnerability, please report it responsibly.
                  </p>
                  <a
                    href="mailto:support@ccbot.io"
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors font-ui"
                  >
                    <span className="material-symbols-outlined text-lg">
                      mail
                    </span>
                    Report to support@ccbot.io
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
