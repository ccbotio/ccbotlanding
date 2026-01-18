"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is CC Bot Wallet?",
        a: "CC Bot Wallet is a non-custodial cryptocurrency wallet built as a Telegram Mini App. It allows you to send, receive, and manage crypto directly within Telegram, using Passkey authentication for security.",
      },
      {
        q: "Is CC Bot Wallet free to use?",
        a: "Yes, CC Bot Wallet is free to use. You only pay standard network fees when making transactions on the Canton Network.",
      },
      {
        q: "Which blockchain does CC Bot Wallet use?",
        a: "CC Bot Wallet is built on the Canton Network, a privacy-enabled blockchain designed for institutional-grade security while maintaining decentralization.",
      },
      {
        q: "What tokens are supported?",
        a: "CC Bot Wallet supports CC tokens (our native token), USDCx, USDT, and other tokens on the Canton Network. More tokens will be added over time.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        q: "What is a Passkey?",
        a: "A Passkey is a modern authentication method that uses your device's biometric sensors (Face ID, Touch ID, fingerprint) to create cryptographic keys. Unlike passwords, Passkeys can't be phished, guessed, or stolen.",
      },
      {
        q: "Is my wallet really non-custodial?",
        a: "Yes, absolutely. We never have access to your private keys or funds. Your keys are generated and stored securely on your device. You have complete control over your assets.",
      },
      {
        q: "What happens if I lose my phone?",
        a: "Your Passkey is synced across your devices through your platform's secure cloud (iCloud Keychain for Apple, Google Password Manager for Android). You can access your wallet from another device where you're signed into the same account.",
      },
      {
        q: "Can CC Bot team access my funds?",
        a: "No. We cannot access, freeze, or control your funds in any way. This is the core principle of non-custodial wallets - you are the only one with access to your assets.",
      },
    ],
  },
  {
    category: "Sending & Receiving",
    questions: [
      {
        q: "How do I send crypto to a Telegram user?",
        a: "Simply enter the recipient's Telegram @username in the send screen. If they have a CC Bot Wallet, the funds will be sent directly. If they don't have one yet, they'll be notified to claim the funds.",
      },
      {
        q: "Can I send to a regular wallet address?",
        a: "Yes, you can send to any compatible wallet address on the Canton Network. Just enter the address in the send screen instead of a username.",
      },
      {
        q: "How do I receive crypto?",
        a: "Share your wallet address or @username with the sender. You can also generate a QR code from the receive screen for easy scanning.",
      },
      {
        q: "Are there any transaction limits?",
        a: "There are no artificial limits imposed by CC Bot Wallet. However, network conditions and your available balance will determine what you can send.",
      },
    ],
  },
  {
    category: "Rewards & Staking",
    questions: [
      {
        q: "How do I earn CC tokens?",
        a: "You can earn CC tokens by completing daily missions, maintaining login streaks, achieving milestones, and participating in special events. Check the Rewards section in the app for current opportunities.",
      },
      {
        q: "What is staking?",
        a: "Staking allows you to lock up your CC tokens to earn passive rewards. The longer you stake, the more you earn. You can unstake at any time, though some bonuses may require a minimum staking period.",
      },
      {
        q: "How are staking rewards calculated?",
        a: "Staking rewards are calculated based on the amount staked and the duration. The exact rates are displayed in the staking section of the app.",
      },
      {
        q: "When do I receive my rewards?",
        a: "Daily mission rewards are credited immediately upon completion. Staking rewards accrue continuously and can be claimed at any time.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My transaction is pending for too long",
        a: "Transactions on Canton Network typically confirm within seconds. If your transaction is pending for more than a few minutes, check your internet connection or try refreshing the app.",
      },
      {
        q: "I can't see my balance",
        a: "Try refreshing the app or checking your internet connection. If the issue persists, close and reopen Telegram, then launch the wallet again.",
      },
      {
        q: "The app isn't loading properly",
        a: "Ensure you have the latest version of Telegram installed. Clear the Telegram cache if needed, and try reopening the Mini App.",
      },
      {
        q: "How do I contact support?",
        a: "Join our Telegram community at @ccbotio for support. Our team and community members are there to help with any questions or issues.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2a2a2a] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <span className={`material-symbols-outlined text-[#875CFF] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-[#A89F91] pb-4">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#030206] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#A89F91] mb-8">
          <Link href="/" className="hover:text-[#875CFF] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">FAQ</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>

          <p className="text-[#A89F91] text-lg mb-12">
            Find answers to common questions about CC Bot Wallet.
          </p>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqs.map((category, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#875CFF] rounded-full"></span>
                  {category.category}
                </h2>
                <div className="glass-card rounded-2xl p-6">
                  {category.questions.map((faq, j) => (
                    <FAQItem key={j} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 glass-card rounded-2xl p-6 text-center">
            <span className="material-symbols-outlined text-[#875CFF] text-4xl mb-4">help_center</span>
            <h3 className="text-xl font-semibold text-white mb-2">Still Have Questions?</h3>
            <p className="text-[#A89F91] mb-6">
              Can&apos;t find what you&apos;re looking for? Join our community for personalized help.
            </p>
            <a
              href="https://t.me/ccbotio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F3FF97] text-[#030206] px-6 py-3 rounded-full font-semibold hover:bg-[#e8f085] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
              </svg>
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
