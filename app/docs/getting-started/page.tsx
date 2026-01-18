"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <main className="min-h-screen bg-[#030206] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#A89F91] mb-8">
          <Link href="/" className="hover:text-[#875CFF] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Getting Started</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Getting Started with <span className="gradient-text">CC Bot Wallet</span>
          </h1>

          <p className="text-[#A89F91] text-lg mb-12">
            Learn how to set up and use CC Bot Wallet in just a few simple steps.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <section className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Open CC Bot in Telegram</h2>
                  <p className="text-[#A89F91] mb-4">
                    Start by opening our Telegram bot. Click the button below or search for <code className="bg-[#1a1a1a] px-2 py-1 rounded text-[#F3FF97]">@ccbotio_bot</code> in Telegram.
                  </p>
                  <a
                    href="https://t.me/ccbotio_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#875CFF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7a4fee] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                    </svg>
                    Open in Telegram
                  </a>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Create Your Passkey</h2>
                  <p className="text-[#A89F91] mb-4">
                    When you first open the wallet, you&apos;ll be prompted to create a Passkey. This uses your device&apos;s biometric authentication (Face ID, Touch ID, or fingerprint) to secure your wallet.
                  </p>
                  <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#F3FF97]">info</span>
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Why Passkeys?</p>
                        <p className="text-[#A89F91] text-sm">
                          Passkeys are more secure than passwords. They use cryptographic keys stored on your device and can&apos;t be phished or stolen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Fund Your Wallet</h2>
                  <p className="text-[#A89F91] mb-4">
                    Once your wallet is created, you can fund it by:
                  </p>
                  <ul className="space-y-3 text-[#A89F91]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#875CFF] text-lg">arrow_downward</span>
                      <span>Receiving crypto from another wallet using your wallet address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#875CFF] text-lg">person</span>
                      <span>Receiving from other Telegram users via your @username</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#875CFF] text-lg">qr_code</span>
                      <span>Scanning a QR code to receive funds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Start Sending & Receiving</h2>
                  <p className="text-[#A89F91] mb-4">
                    You&apos;re all set! Now you can:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                      <span className="material-symbols-outlined text-[#F3FF97] mb-2">arrow_upward</span>
                      <h4 className="text-white font-medium mb-1">Send Crypto</h4>
                      <p className="text-[#A89F91] text-sm">Send to any Telegram user using just their @username</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                      <span className="material-symbols-outlined text-[#F3FF97] mb-2">swap_horiz</span>
                      <h4 className="text-white font-medium mb-1">Swap Tokens</h4>
                      <p className="text-[#A89F91] text-sm">Exchange between supported tokens instantly</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                      <span className="material-symbols-outlined text-[#F3FF97] mb-2">savings</span>
                      <h4 className="text-white font-medium mb-1">Stake Tokens</h4>
                      <p className="text-[#A89F91] text-sm">Earn passive rewards by staking your CC tokens</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                      <span className="material-symbols-outlined text-[#F3FF97] mb-2">redeem</span>
                      <h4 className="text-white font-medium mb-1">Earn Rewards</h4>
                      <p className="text-[#A89F91] text-sm">Complete daily missions and earn CC tokens</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Next Steps */}
          <div className="mt-12 glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/security"
                className="inline-flex items-center gap-2 text-[#875CFF] hover:text-[#D5A5E3] transition-colors"
              >
                <span className="material-symbols-outlined">shield</span>
                Learn about Security
              </Link>
              <Link
                href="/docs/faq"
                className="inline-flex items-center gap-2 text-[#875CFF] hover:text-[#D5A5E3] transition-colors"
              >
                <span className="material-symbols-outlined">help</span>
                Read the FAQ
              </Link>
              <a
                href="https://t.me/ccbotio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#875CFF] hover:text-[#D5A5E3] transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                Join our Community
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
