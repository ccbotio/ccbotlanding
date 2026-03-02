"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GettingStarted() {
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
            <span className="text-slate-900">Getting Started</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-6">
              Getting Started with{" "}
              <span className="text-accent not-italic">CC Bot Wallet</span>
            </h1>

            <p className="text-secondary text-lg mb-12 font-body">
              Set up your self-custodial Canton wallet in under a minute.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-ui">1</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-ui">
                      Open CC Bot in Telegram
                    </h2>
                    <p className="text-secondary mb-4 font-body">
                      Search for{" "}
                      <code className="bg-background-surface px-2 py-1 rounded text-accent border border-border-subtle font-mono text-sm">
                        @ccbotwallet_bot
                      </code>{" "}
                      in Telegram and tap Start. No app download needed.
                    </p>
                    <a
                      href="https://t.me/ccbotwallet_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-[#eaff70] text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold transition-all font-ui"
                    >
                      <span className="material-symbols-outlined text-lg">
                        send
                      </span>
                      Open in Telegram
                    </a>
                  </div>
                </div>
              </section>

              {/* Step 2 */}
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-ui">2</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-ui">
                      Set Your PIN
                    </h2>
                    <p className="text-secondary mb-4 font-body">
                      Choose a secure PIN to protect your wallet. This PIN is
                      used to authorize transactions and is stored only on
                      your device.
                    </p>
                    <div className="bg-background-surface rounded-xl p-4 border border-border-subtle">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent">
                          info
                        </span>
                        <div>
                          <p className="text-slate-900 text-sm font-medium font-ui mb-1">
                            PIN Security
                          </p>
                          <p className="text-secondary text-sm font-body">
                            After 5 failed PIN attempts, your wallet locks
                            for 15 minutes. Choose a PIN you can remember but
                            others can&apos;t guess.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 3 */}
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-ui">3</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-ui">
                      Secure with Passkey
                    </h2>
                    <p className="text-secondary mb-4 font-body">
                      Set up a Passkey using your device&apos;s biometrics
                      (Face ID, Touch ID). This secures your wallet and
                      enables recovery on any device.
                    </p>
                    <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent">
                          fingerprint
                        </span>
                        <div>
                          <p className="text-slate-900 text-sm font-medium font-ui mb-1">
                            Passkey Security
                          </p>
                          <p className="text-secondary text-sm font-body">
                            Passkeys are phishing-resistant and synced across
                            your Apple or Google devices automatically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 4 */}
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-bold font-ui">
                      4
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-ui">
                      Start Using Your Wallet
                    </h2>
                    <p className="text-secondary mb-4 font-body">
                      You&apos;re all set! Your Ed25519 wallet is ready on
                      the Canton Network.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-background-surface rounded-xl p-4 border border-border-subtle">
                        <span className="material-symbols-outlined text-accent mb-2">
                          arrow_upward
                        </span>
                        <h4 className="text-slate-900 font-medium font-ui mb-1">
                          Send Tokens
                        </h4>
                        <p className="text-secondary text-sm font-body">
                          Send to Telegram usernames or Canton addresses
                        </p>
                      </div>
                      <div className="bg-background-surface rounded-xl p-4 border border-border-subtle">
                        <span className="material-symbols-outlined text-accent mb-2">
                          swap_horiz
                        </span>
                        <h4 className="text-slate-900 font-medium font-ui mb-1">
                          Bridge Assets
                        </h4>
                        <p className="text-secondary text-sm font-body">
                          Bridge tokens between Canton and Ethereum via Circle and xReserve
                        </p>
                      </div>
                      <div className="bg-background-surface rounded-xl p-4 border border-border-subtle">
                        <span className="material-symbols-outlined text-accent mb-2">
                          smart_toy
                        </span>
                        <h4 className="text-slate-900 font-medium font-ui mb-1">
                          AI Agent
                        </h4>
                        <p className="text-secondary text-sm font-body">
                          Chat with AI to manage your wallet naturally
                        </p>
                      </div>
                      <div className="bg-background-surface rounded-xl p-4 border border-border-subtle">
                        <span className="material-symbols-outlined text-accent mb-2">
                          alternate_email
                        </span>
                        <h4 className="text-slate-900 font-medium font-ui mb-1">
                          CNS Names
                        </h4>
                        <p className="text-secondary text-sm font-body">
                          Register a human-readable wallet name
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Next Steps */}
            <div className="mt-12 bg-background-surface rounded-2xl p-6 border border-border-subtle bg-dots">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-ui">
                  Next Steps
                </h3>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/docs/security"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/70 transition-colors font-ui font-medium"
                  >
                    <span className="material-symbols-outlined">shield</span>
                    Learn about Security
                  </Link>
                  <Link
                    href="/docs/faq"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/70 transition-colors font-ui font-medium"
                  >
                    <span className="material-symbols-outlined">help</span>
                    Read the FAQ
                  </Link>
                  <a
                    href="https://t.me/ccbotwalletchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/70 transition-colors font-ui font-medium"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Join our Community
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
