"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
            <span className="text-slate-900">Terms of Service</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display italic text-slate-900 mb-4">
              Terms of{" "}
              <span className="text-accent not-italic">Service</span>
            </h1>
            <p className="text-secondary mb-12 font-body">
              Last updated: March 2026
            </p>

            <div className="space-y-8">
              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  1. Acceptance of Terms
                </h2>
                <p className="text-secondary leading-relaxed font-body">
                  By accessing or using CC Bot Wallet
                  (&quot;Service&quot;), you agree to be bound by these Terms
                  of Service (&quot;Terms&quot;). If you do not agree to
                  these Terms, please do not use our Service. CC Bot Wallet
                  is a self-custodial cryptocurrency wallet operating as a
                  Telegram Mini App on Canton Network, secured by 2-of-3
                  Shamir Secret Sharing.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  2. Eligibility
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  To use CC Bot Wallet, you must:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Be at least 18 years old or the age of majority in your
                    jurisdiction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Have a valid Telegram account
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Not be prohibited from using cryptocurrency services
                    under applicable laws
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  3. Self-Custodial Service
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
                    You are responsible for securing your PIN and Passkey
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We hold only one encrypted share and cannot access your
                    funds alone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We cannot recover wallets without your Passkey
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We cannot reverse, cancel, or modify transactions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    You bear all risk of loss of your digital assets
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  4. Wallet Security
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  You are responsible for:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Maintaining the confidentiality of your PIN and Passkey
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Setting up Passkey authentication on your device
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Ensuring your device is secure and free from malware
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    All activities that occur under your wallet
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  5. Permitted Use
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  You agree to use CC Bot Wallet only for lawful purposes.
                  You shall not:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Use the Service for illegal activities including money
                    laundering or terrorist financing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Attempt to gain unauthorized access to our systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Interfere with or disrupt the Service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-base mt-0.5">
                      cancel
                    </span>
                    Violate any applicable laws or regulations
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  6. Canton Network & Transactions
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  CC Bot Wallet operates on Canton Network. You acknowledge
                  that:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Blockchain transactions are irreversible once confirmed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Transaction fees may apply and vary based on network
                    conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We are not responsible for blockchain network delays or
                    failures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Transaction limits are tier-based and may vary
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  7. Canton Name Service (CNS)
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  If you register a CNS name:
                </p>
                <ul className="space-y-2 text-secondary font-body">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    You must not register names that infringe on trademarks
                    or intellectual property
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    Names are subject to availability and registration rules
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-accent text-base mt-0.5">
                      check_circle
                    </span>
                    We reserve the right to revoke names that violate these
                    Terms
                  </li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  8. Intellectual Property
                </h2>
                <p className="text-secondary leading-relaxed font-body">
                  All content, trademarks, and intellectual property related
                  to CC Bot Wallet are owned by us or our licensors. You may
                  not use, reproduce, or distribute our intellectual property
                  without prior written consent.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-secondary leading-relaxed font-body uppercase text-sm">
                  The Service is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, express or
                  implied. We do not guarantee that the Service will be
                  uninterrupted, secure, or error-free. Cryptocurrency
                  values are volatile and you may lose value in your
                  holdings.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  10. Limitation of Liability
                </h2>
                <p className="text-secondary leading-relaxed font-body uppercase text-sm">
                  To the maximum extent permitted by law, CC Bot Wallet
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not
                  limited to loss of profits, data, or digital assets,
                  arising from your use of the Service.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  11. Modifications
                </h2>
                <p className="text-secondary leading-relaxed font-body">
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective upon posting to the Service.
                  Your continued use of the Service after changes
                  constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-border-subtle">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-ui">
                  12. Contact Us
                </h2>
                <p className="text-secondary leading-relaxed font-body mb-4">
                  If you have questions about these Terms:
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
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
