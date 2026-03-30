"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const faqs = [
  {
    q: "What is CC Bot Wallet?",
    a: "CC Bot Wallet is a self-custodial cryptocurrency wallet built as a Telegram Mini App. It lets you send, receive, and manage crypto directly within Telegram, secured by Ed25519 signing and 2-of-3 Shamir Secret Sharing.",
  },
  {
    q: "How do I create a wallet?",
    a: "Open @ccbotwallet_bot on Telegram, tap Start, and set a secure PIN. Your Ed25519 wallet is generated on-device with Shamir key splitting — no app download needed. Save your recovery code securely.",
  },
  {
    q: "How does 2-of-3 Shamir Secret Sharing protect my wallet?",
    a: "Your private key is split into 3 shares: device (encrypted with PIN), server (encrypted), and a recovery code. Any 2 shares can reconstruct the key. No single share — including the server — can access your funds alone.",
  },
  {
    q: "What is the Canton Network?",
    a: "Canton Network is a privacy-enabled, institutional-grade blockchain with sub-second finality. CC Bot Wallet is built on Canton, which is supported by Goldman Sachs, Deutsche Borse, Microsoft and other top-tier participants.",
  },
  {
    q: "Which tokens does CC Bot Wallet support?",
    a: "CC Bot Wallet supports Canton Coin (CC), USDCx (stablecoin), and cBTC (wrapped Bitcoin). You can also bridge ERC-20 tokens from Ethereum via Circle and xReserve integration.",
  },
  {
    q: "How do I use the AI Agent?",
    a: "The built-in AI Agent lets you manage your wallet through natural language. Ask it to check balances, send tokens, view history, swap tokens, or register CNS names — just type what you want in plain language.",
  },
  {
    q: "Can the AI Agent or CC Bot team access my private keys?",
    a: "No. The AI Agent only processes text commands via the wallet API. The server holds only one encrypted key share. Without a second share from your device or recovery code, it's mathematically impossible to reconstruct the signing key.",
  },
  {
    q: "How do I send crypto on Telegram?",
    a: "Use the Send command and enter the recipient's Telegram username, Canton address, or CNS name. Confirm with your PIN and the transaction settles in under one second on Canton Network.",
  },
  {
    q: "What if I lose my phone or forget my PIN?",
    a: "Recover your wallet using your recovery code combined with the server share — it meets the 2-of-3 Shamir threshold. To reset your PIN, use your recovery code. After 5 failed PIN attempts, the wallet locks for 15 minutes.",
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
        <span className="text-slate-900 font-medium pr-4 font-ui text-sm">
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
        <p className="text-secondary text-sm pb-4 font-body">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function HelpFAQ() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-ui">
        <span className="material-symbols-outlined text-accent">quiz</span>
        {t.help.faqTitle}
      </h2>
      <div className="bg-white rounded-2xl p-6 border border-border-subtle">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  );
}
