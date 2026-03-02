"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-secondary mb-8 font-body">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">Privacy Policy</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-4">
              Privacy <span className="text-accent not-italic">Policy</span>
            </h1>
            <p className="text-secondary mb-12 font-body">
              Last updated: January 2025
            </p>

            <div className="space-y-8">
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  1. Introduction
                </h2>
                <p className="text-secondary leading-relaxed font-body">
                  CC Bot Wallet (&quot;we&quot;, &quot;our&quot;, or
                  &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we handle information when
                  you use our self-custodial cryptocurrency wallet service on
                  Telegram, built on Canton Network.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  2. Self-Custodial Nature
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  CC Bot Wallet is a self-custodial wallet using 2-of-3
                  Shamir Secret Sharing. This means:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Your Ed25519 private key is split into three shares. We
                    only hold one encrypted share
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We cannot reconstruct your key or access your funds with
                    a single share
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    You have full control and responsibility over your assets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Recovery requires your Passkey. We cannot recover your
                    wallet alone
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  3. Information We Collect
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  Due to our self-custodial architecture, we collect minimal
                  information:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li>
                    <strong className="text-slate-900">
                      Telegram User ID:
                    </strong>{" "}
                    To identify your wallet within the Telegram Mini App
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Public Wallet Address:
                    </strong>{" "}
                    To facilitate transactions on Canton Network
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Encrypted Server Share:
                    </strong>{" "}
                    One of three Shamir shares, stored in AES-256-GCM
                    encrypted form
                  </li>
                  <li>
                    <strong className="text-slate-900">CNS Names:</strong> If
                    you register a Canton Name Service identifier
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  4. Information We Do NOT Collect
                </h2>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Complete private keys (only one encrypted share)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    PINs or Passkey credentials (processed locally on your
                    device only)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Biometric data (processed locally by your device)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Personal identification documents
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  5. How We Use Information
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  The limited information we collect is used to:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Provide and maintain our wallet services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Process transactions on Canton Network
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Enable username-based transfers within Telegram
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Provide customer support when requested
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  6. Data Security
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  We implement the following security measures:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    AES-256-GCM encryption for stored key shares
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    WebAuthn / Passkey authentication support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    PIN brute-force protection with progressive lockouts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Rate limiting on all sensitive API endpoints
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Zero-memory key handling. Keys never stored in plaintext
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  7. Third-Party Services
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  Our service integrates with:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li>
                    <strong className="text-slate-900">Telegram:</strong> For
                    the Mini App platform
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Canton Network:
                    </strong>{" "}
                    For blockchain transactions
                  </li>
                  <li>
                    <strong className="text-slate-900">Circle &amp; xReserve:</strong> For
                    cross-chain bridging
                  </li>
                </ul>
                <p className="mt-4 text-secondary leading-relaxed font-body">
                  Please review their respective privacy policies for
                  information about their data practices.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  8. Your Rights
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Export your wallet data at any time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Delete your account and associated data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Access information we have about you
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Opt-out of non-essential communications
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  9. Contact Us
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  If you have questions about this Privacy Policy:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:support@ccbot.io"
                      className="text-accent hover:underline"
                    >
                      support@ccbot.io
                    </a>
                  </li>
                  <li>
                    Telegram:{" "}
                    <a
                      href="https://t.me/ccbotwalletchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      @ccbotwalletchat
                    </a>
                  </li>
                  <li>
                    X:{" "}
                    <a
                      href="https://x.com/ccbotio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      @ccbotio
                    </a>
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  10. Changes to This Policy
                </h2>
                <p className="text-secondary leading-relaxed font-body">
                  We may update this Privacy Policy from time to time. We
                  will notify users of any material changes through our
                  Telegram channel or within the app. Your continued use of
                  CC Bot Wallet after changes constitutes acceptance of the
                  updated policy.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
