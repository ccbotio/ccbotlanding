"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section className="relative overflow-hidden" style={{ padding: "54px 0" }}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1845] to-[#4a2d6b]" />

      {/* Animated Wave Mesh Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        {/* Lilac waves */}
        <path stroke="rgba(213,165,227,0.16)" strokeWidth="1.5" fill="none">
          <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M0,120 C360,40 720,220 1440,120;M0,135 C380,60 700,200 1440,140;M0,120 C360,40 720,220 1440,120" />
        </path>
        <path stroke="rgba(213,165,227,0.13)" strokeWidth="1.5" fill="none">
          <animate attributeName="d" dur="24s" repeatCount="indefinite" values="M0,200 C360,100 720,300 1440,200;M0,215 C380,120 700,280 1440,220;M0,200 C360,100 720,300 1440,200" />
        </path>
        <path stroke="rgba(213,165,227,0.10)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="22s" repeatCount="indefinite" values="M0,300 C320,200 760,400 1440,300;M0,315 C340,220 740,380 1440,320;M0,300 C320,200 760,400 1440,300" />
        </path>
        <path stroke="rgba(213,165,227,0.08)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="26s" repeatCount="indefinite" values="M0,400 C400,300 800,500 1440,400;M0,415 C420,320 780,480 1440,420;M0,400 C400,300 800,500 1440,400" />
        </path>

        {/* Purple waves */}
        <path stroke="rgba(135,92,255,0.12)" strokeWidth="1.5" fill="none">
          <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M0,160 C400,60 800,260 1440,160;M0,175 C420,80 780,240 1440,180;M0,160 C400,60 800,260 1440,160" />
        </path>
        <path stroke="rgba(135,92,255,0.09)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="25s" repeatCount="indefinite" values="M0,250 C400,150 800,350 1440,250;M0,265 C420,170 780,330 1440,270;M0,250 C400,150 800,350 1440,250" />
        </path>
        <path stroke="rgba(135,92,255,0.07)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="28s" repeatCount="indefinite" values="M0,350 C440,250 880,450 1440,350;M0,365 C460,270 860,430 1440,370;M0,350 C440,250 880,450 1440,350" />
        </path>
        <path stroke="rgba(135,92,255,0.05)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="30s" repeatCount="indefinite" values="M0,470 C360,370 760,550 1440,470;M0,485 C380,390 740,530 1440,490;M0,470 C360,370 760,550 1440,470" />
        </path>

        {/* Canton Yellow accent waves */}
        <path stroke="rgba(243,255,151,0.06)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="22s" repeatCount="indefinite" values="M0,180 C300,80 700,280 1440,180;M0,195 C320,100 680,260 1440,200;M0,180 C300,80 700,280 1440,180" />
        </path>
        <path stroke="rgba(243,255,151,0.04)" strokeWidth="1" fill="none">
          <animate attributeName="d" dur="27s" repeatCount="indefinite" values="M0,330 C380,230 820,430 1440,330;M0,345 C400,250 800,410 1440,350;M0,330 C380,230 820,430 1440,330" />
        </path>
      </svg>

      <div className="relative z-10 max-w-[960px] mx-auto px-6">
        {/* Two Column: Left heading + Right form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Heading & Subtitle */}
          <motion.div
            className="flex flex-col justify-center lg:pt-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F3FF97]/40" />
              <span className="text-[11px] uppercase tracking-[3px] text-[#F3FF97]/60 font-ui font-medium">
                {t.contact.label}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display italic text-white mb-4 leading-tight">
              We&apos;d Love to
              <br />
              Hear from <span className="text-[#F3FF97]">You</span>
            </h2>

            <p className="text-base text-[#D5A5E3]/80 max-w-[400px] font-body mb-6">
              Have questions, feedback, or partnership inquiries? Drop us a
              message and we&apos;ll get back to you soon.
            </p>

            {/* Email badge */}
            <a
              href="mailto:contact@ccbot.io"
              className="inline-flex items-center gap-3 bg-white/[0.08] border border-[#D5A5E3]/20 rounded-full px-5 py-3 backdrop-blur-sm hover:border-[#F3FF97]/40 hover:bg-white/[0.12] transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#F3FF97]/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#F3FF97] text-base">mail</span>
              </span>
              <span className="text-white/90 font-mono text-sm group-hover:text-[#F3FF97] transition-colors">
                contact@ccbot.io
              </span>
              <span className="material-symbols-outlined text-[#D5A5E3]/40 text-sm group-hover:text-[#F3FF97]/60 group-hover:translate-x-0.5 transition-all">
                arrow_forward
              </span>
            </a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.06] border border-[#D5A5E3]/20 rounded-2xl p-6 backdrop-blur-[12px]"
            >
              <div className="mb-4">
                <label className="block text-[11px] uppercase tracking-[2px] text-white/80 font-ui font-medium mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={status === "sending"}
                  className="w-full bg-transparent border-0 border-b border-[#D5A5E3]/30 text-white text-sm font-body h-11 px-0 focus:border-[#F3FF97] focus:ring-0 focus:shadow-[0_2px_8px_rgba(243,255,151,0.15)] transition-all outline-none placeholder:text-[#D5A5E3]/30 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[11px] uppercase tracking-[2px] text-white/80 font-ui font-medium mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={status === "sending"}
                  className="w-full bg-transparent border-0 border-b border-[#D5A5E3]/30 text-white text-sm font-body h-11 px-0 focus:border-[#F3FF97] focus:ring-0 focus:shadow-[0_2px_8px_rgba(243,255,151,0.15)] transition-all outline-none placeholder:text-[#D5A5E3]/30 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[11px] uppercase tracking-[2px] text-white/80 font-ui font-medium mb-2">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  disabled={status === "sending"}
                  className="w-full bg-transparent border-0 border-b border-[#D5A5E3]/30 text-white text-sm font-body h-11 px-0 focus:border-[#F3FF97] focus:ring-0 focus:shadow-[0_2px_8px_rgba(243,255,151,0.15)] transition-all outline-none placeholder:text-[#D5A5E3]/30 disabled:opacity-50"
                  placeholder="Partnership Inquiry"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[11px] uppercase tracking-[2px] text-white/80 font-ui font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={status === "sending"}
                  rows={4}
                  className="w-full bg-transparent border border-[#D5A5E3]/20 rounded-lg text-white text-sm font-body p-3 focus:border-[#F3FF97] focus:ring-0 focus:shadow-[0_0_12px_rgba(243,255,151,0.1)] transition-all outline-none resize-none placeholder:text-[#D5A5E3]/30 disabled:opacity-50"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#F3FF97] hover:bg-[#eaff70] text-[#030206] font-ui font-medium text-[15px] rounded-full h-[50px] transition-all hover:shadow-[0_0_20px_rgba(243,255,151,0.25)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "idle" && t.contact.send}
                {status === "sending" && t.contact.sending}
                {status === "success" && t.contact.successTitle}
                {status === "error" && "Failed to Send ✕"}
              </button>

              {status === "error" && errorMsg && (
                <p className="text-center text-xs text-red-400 mt-3 font-body">
                  {errorMsg}
                </p>
              )}

              {status === "success" && (
                <p className="text-center text-xs text-[#F3FF97] mt-3 font-body">
                  {t.contact.successDesc}
                </p>
              )}

              {status === "idle" && (
                <p className="text-center text-xs text-[#D5A5E3]/50 mt-4 font-body">
                  We typically respond within 24 hours.
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
