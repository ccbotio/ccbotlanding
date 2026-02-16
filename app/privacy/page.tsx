"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#030206] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030206]/80 backdrop-blur-lg border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/ccbotlogo.png" alt="CC Bot" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-semibold">CC Bot Wallet</span>
          </Link>
          <Link href="/" className="text-[#A89F91] hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#F3FF97] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-[#A89F91] mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-[#A89F91]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                CC Bot Wallet ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our non-custodial cryptocurrency wallet service on Telegram, built on Canton Network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Non-Custodial Nature</h2>
              <p className="leading-relaxed">
                CC Bot Wallet is a non-custodial wallet. This means:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Your private keys are generated and stored locally on your device</li>
                <li>We never have access to your private keys, seed phrases, or funds</li>
                <li>You have full control and responsibility over your assets</li>
                <li>We cannot recover your wallet if you lose your credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                Due to our non-custodial architecture, we collect minimal information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Telegram User ID:</strong> To identify your wallet within the Telegram Mini App</li>
                <li><strong className="text-white">Public Wallet Addresses:</strong> To facilitate transactions on Canton Network</li>
                <li><strong className="text-white">Transaction History:</strong> Only what is publicly available on the blockchain</li>
                <li><strong className="text-white">CNS Names:</strong> If you register a Canton Name Service identifier</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information We Do NOT Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Private keys or seed phrases</li>
                <li>Passwords or PINs (stored locally on your device only)</li>
                <li>Biometric data (processed locally by your device)</li>
                <li>Personal identification documents</li>
                <li>Bank account or credit card information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. How We Use Information</h2>
              <p className="leading-relaxed">
                The limited information we collect is used to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Provide and maintain our wallet services</li>
                <li>Process transactions on Canton Network</li>
                <li>Enable username-based transfers within Telegram</li>
                <li>Provide customer support when requested</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>End-to-end encryption for all communications</li>
                <li>Passkey authentication support</li>
                <li>Local biometric authentication (Face ID, Touch ID)</li>
                <li>PIN encryption stored only on your device</li>
                <li>Canton Network's built-in privacy features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
              <p className="leading-relaxed">
                Our service integrates with:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong className="text-white">Telegram:</strong> For the Mini App platform</li>
                <li><strong className="text-white">Canton Network:</strong> For blockchain transactions</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Please review their respective privacy policies for information about their data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Export your wallet data at any time</li>
                <li>Delete your account and associated data</li>
                <li>Access information we have about you</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Telegram: <a href="https://t.me/ccbotwallet_bot" className="text-[#F3FF97] hover:underline">@ccbotwallet_bot</a></li>
                <li>X (Twitter): <a href="https://x.com/ccbotio" className="text-[#F3FF97] hover:underline">@ccbotio</a></li>
                <li>GitHub: <a href="https://github.com/ccbotio" className="text-[#F3FF97] hover:underline">github.com/ccbotio</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of any material changes through our Telegram channel or within the app. Your continued use of CC Bot Wallet after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89F91] text-sm">
            &copy; {new Date().getFullYear()} CC Bot Wallet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#F3FF97] text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-[#A89F91] text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
