"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is CC Bot Wallet?",
        a: "CC Bot Wallet is a self-custodial cryptocurrency wallet built as a Telegram Mini App. It allows you to send, receive, and manage crypto directly within Telegram, secured by Ed25519 signing and 2-of-3 Shamir Secret Sharing.",
      },
      {
        q: "Is CC Bot Wallet free to use?",
        a: "Yes, CC Bot Wallet is free to use. You only pay standard network fees when making transactions on the Canton Network.",
      },
      {
        q: "Which blockchain does CC Bot Wallet use?",
        a: "CC Bot Wallet is built on the Canton Network, a privacy-enabled blockchain with sub-second finality designed for institutional-grade security while maintaining decentralization.",
      },
      {
        q: "What tokens are supported?",
        a: "CC Bot Wallet supports Canton Coin (CC), USDCx, and other tokens on the Canton Network. You can also bridge assets from Ethereum via Circle and xReserve integration.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        q: "How does Shamir Secret Sharing work?",
        a: "Your Ed25519 private key is split into three shares: one on your device (encrypted with PIN), one on our server (encrypted), and a recovery code. Any two of these three shares can reconstruct your signing key, so no single share alone can access your funds.",
      },
      {
        q: "What happens if I lose my phone?",
        a: "You can recover your wallet using your recovery code combined with the server share, meeting the 2-of-3 threshold needed to reconstruct your key.",
      },
      {
        q: "Can the CC Bot team access my funds?",
        a: "No. The server only holds one encrypted share of your key. Without a second share from your device or recovery code, it's mathematically impossible to reconstruct the signing key. This is the core self-custody guarantee.",
      },
    ],
  },
  {
    category: "Sending & Receiving",
    questions: [
      {
        q: "How do I send crypto to someone on Telegram?",
        a: "Use the Send command in the bot and enter the recipient's Telegram username or Canton wallet address. Verify the details and confirm with your PIN. The transaction settles in under one second.",
      },
      {
        q: "Can I use CNS names instead of addresses?",
        a: "Yes! If the recipient has registered a Canton Name Service (CNS) name, you can send directly to their human-readable .canton name instead of a long address.",
      },
      {
        q: "How do I bridge assets from Ethereum?",
        a: "CC Bot Wallet supports cross-chain bridging via Circle and xReserve. You can bridge ERC-20 tokens from Ethereum to Canton Network directly within the bot interface.",
      },
      {
        q: "Are there any transaction limits?",
        a: "Transaction limits are tier-based. New wallets start with basic limits that increase as you verify your identity and build transaction history.",
      },
    ],
  },
  {
    category: "AI Agent",
    questions: [
      {
        q: "What is the AI Agent?",
        a: "CC Bot Wallet includes an AI-powered chat assistant that helps you manage your wallet through natural language. You can check balances, send tokens, view transaction history, and get help by chatting normally.",
      },
      {
        q: "Can the AI Agent access my private keys?",
        a: "No. The AI Agent only processes your text commands and interacts with the wallet API. It never has access to your private keys, PIN, or key shares.",
      },
      {
        q: "What commands does the AI Agent support?",
        a: "The AI Agent can help with checking balances, sending tokens, viewing transaction history, swapping tokens, registering CNS names, and general wallet management. Just describe what you want to do in plain language.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My transaction is pending for too long",
        a: "Transactions on Canton Network typically confirm within one second. If your transaction is pending, check your internet connection or try refreshing the app.",
      },
      {
        q: "I forgot my PIN",
        a: "You can reset your PIN using your recovery code. Go to Settings in the bot and select 'Reset PIN'. After 5 failed PIN attempts, your wallet locks for 15 minutes as a security measure.",
      },
      {
        q: "The app isn't loading properly",
        a: "Ensure you have the latest version of Telegram installed. Clear the Telegram cache if needed, and try reopening the Mini App.",
      },
      {
        q: "How do I contact support?",
        a: "Join our Telegram community at @ccbotwalletchat for support, or email support@ccbot.io. Our team is there to help with any questions or issues.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-slate-900 font-medium pr-4 font-ui">
          {question}
        </span>
        <span
          className={`material-symbols-outlined text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-secondary pb-4 font-body">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
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
            <span className="text-slate-900">FAQ</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-6">
              Frequently Asked{" "}
              <span className="text-accent not-italic">Questions</span>
            </h1>

            <p className="text-secondary text-lg mb-12 font-body">
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
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-ui">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {category.category}
                  </h2>
                  <div className="bg-white rounded-2xl p-6 border border-border-subtle">
                    {category.questions.map((faq, j) => (
                      <FAQItem key={j} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-12 bg-background-surface rounded-2xl p-8 text-center border border-border-subtle bg-dots">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-accent text-4xl mb-4">
                  help_center
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-ui">
                  Still Have Questions?
                </h3>
                <p className="text-secondary mb-6 font-body">
                  Can&apos;t find what you&apos;re looking for? Join our
                  community for personalized help.
                </p>
                <a
                  href="https://t.me/ccbotwalletchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-[#eaff70] text-slate-900 px-6 py-3 rounded-full font-bold transition-all shadow-sm font-ui"
                >
                  <span className="material-symbols-outlined text-lg">
                    send
                  </span>
                  Join Community Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
