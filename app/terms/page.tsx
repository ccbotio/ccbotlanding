"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-[#A89F91] mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-[#A89F91]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using CC Bot Wallet ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. CC Bot Wallet is a non-custodial cryptocurrency wallet operating as a Telegram Mini App on Canton Network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
              <p className="leading-relaxed">
                To use CC Bot Wallet, you must:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Have a valid Telegram account</li>
                <li>Not be prohibited from using cryptocurrency services under applicable laws</li>
                <li>Not be located in a jurisdiction where cryptocurrency services are prohibited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Non-Custodial Service</h2>
              <p className="leading-relaxed">
                CC Bot Wallet is a non-custodial wallet service. This means:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>You are solely responsible for securing your private keys and seed phrases</li>
                <li>We do not store, have access to, or control your private keys</li>
                <li>We cannot recover lost or forgotten credentials</li>
                <li>We cannot reverse, cancel, or modify transactions</li>
                <li>You bear all risk of loss of your digital assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Wallet Security</h2>
              <p className="leading-relaxed">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Maintaining the confidentiality of your PIN, Passkey, and biometric data</li>
                <li>Securely backing up your seed phrase</li>
                <li>Ensuring your device is secure and free from malware</li>
                <li>All activities that occur under your wallet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Permitted Use</h2>
              <p className="leading-relaxed">
                You agree to use CC Bot Wallet only for lawful purposes. You shall not:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Use the Service for illegal activities including money laundering or terrorist financing</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service to transmit malware or harmful code</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Canton Network & Transactions</h2>
              <p className="leading-relaxed">
                CC Bot Wallet operates on Canton Network. You acknowledge that:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Blockchain transactions are irreversible once confirmed</li>
                <li>Transaction fees may apply and vary based on network conditions</li>
                <li>We are not responsible for blockchain network delays or failures</li>
                <li>You are responsible for verifying transaction details before confirmation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Canton Name Service (CNS)</h2>
              <p className="leading-relaxed">
                If you register a CNS name:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>You must not register names that infringe on trademarks or intellectual property</li>
                <li>Names are subject to availability and registration rules</li>
                <li>We reserve the right to revoke names that violate these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Rewards Program</h2>
              <p className="leading-relaxed">
                Our rewards program is subject to the following:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Rewards are earned through legitimate use of the Service</li>
                <li>We reserve the right to modify or terminate the rewards program</li>
                <li>Abuse or manipulation of the rewards system may result in disqualification</li>
                <li>Rewards have no cash value unless explicitly stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, trademarks, and intellectual property related to CC Bot Wallet are owned by us or our licensors. You may not use, reproduce, or distribute our intellectual property without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. CRYPTOCURRENCY VALUES ARE VOLATILE AND YOU MAY LOSE VALUE IN YOUR HOLDINGS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CC BOT WALLET SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR DIGITAL ASSETS, ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless CC Bot Wallet and its affiliates from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Service. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Termination</h2>
              <p className="leading-relaxed">
                We may suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason. Upon termination, you retain access to your private keys and can export your wallet to another service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Telegram: <a href="https://t.me/ccbotio_bot" className="text-[#F3FF97] hover:underline">@ccbotio_bot</a></li>
                <li>X (Twitter): <a href="https://x.com/ccbotio" className="text-[#F3FF97] hover:underline">@ccbotio</a></li>
                <li>GitHub: <a href="https://github.com/ccbotio" className="text-[#F3FF97] hover:underline">github.com/ccbotio</a></li>
              </ul>
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
            <Link href="/privacy" className="text-[#A89F91] text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#F3FF97] text-sm">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
