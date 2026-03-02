"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "already" | "error";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

const CANTON_COLORS = ["#F3FF97", "#5e2d79", "#D5A5E3", "#F3FF97", "#875CFF", "#D5A5E3"];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1.5,
    color: CANTON_COLORS[i % CANTON_COLORS.length],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
}

function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    setPieces(generateConfetti(40));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: p.size > 10 ? "50%" : "2px",
            rotate: `${p.rotation}deg`,
          }}
          initial={{ y: -20, opacity: 1 }}
          animate={{
            y: [0, 300 + Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 80],
            rotate: [p.rotation, p.rotation + 360 + Math.random() * 360],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Waitlist() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setStatus("already");
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setUsername("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to join. Please try again."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  }, [username, email]);

  return (
    <section id="waitlist" className="py-24 px-6 bg-background-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary/40" />
            <span className="text-[11px] uppercase tracking-[3px] text-secondary font-ui font-medium">
              {t.waitlist.label}
            </span>
          </div>

          <h2 className="text-4xl md:text-[52px] font-display text-slate-900 leading-tight mb-5">
            {t.waitlist.title}
          </h2>

          <p className="text-lg text-secondary max-w-[420px] font-body mb-8">
            {t.waitlist.description}
          </p>
        </motion.div>

        {/* Right — Form Card */}
        <motion.div
          className="bg-background-surface border border-border-subtle rounded-2xl p-10 bg-dots relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="relative z-10 text-center py-8">
              <Confetti />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <span className="material-symbols-outlined text-[#5e2d79] text-6xl mb-4 block">
                  celebration
                </span>
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-slate-900 font-ui mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.waitlist.successTitle}
              </motion.h3>
              <motion.p
                className="text-secondary font-body"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.waitlist.successDesc}
              </motion.p>
            </div>
          ) : status === "already" ? (
            <div className="relative z-10 text-center py-8">
              <span className="material-symbols-outlined text-[#D5A5E3] text-5xl mb-4 block">
                info
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-ui mb-2">
                {t.waitlist.alreadyTitle}
              </h3>
              <p className="text-secondary font-body mb-6">
                {t.waitlist.alreadyDesc}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-accent font-ui font-medium hover:underline"
              >
                {t.waitlist.goBack}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Telegram Username */}
              <div className="mb-5 text-left">
                <label className="block text-xs uppercase tracking-[1.5px] text-slate-900 font-ui font-medium mb-2">
                  {t.waitlist.telegramUsername}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent text-sm font-bold font-ui">
                    @
                  </span>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={status === "sending"}
                    placeholder="username"
                    className="w-full h-12 bg-white border border-border-subtle rounded-xl pl-9 pr-4 text-slate-900 text-sm font-body placeholder:text-secondary/40 focus:border-accent focus:ring-0 outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 text-left">
                <label className="block text-xs uppercase tracking-[1.5px] text-slate-900 font-ui font-medium mb-2">
                  {t.waitlist.emailAddress}
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-accent text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "sending"}
                    placeholder={t.waitlist.emailPlaceholder}
                    className="w-full h-12 bg-white border border-border-subtle rounded-xl pl-11 pr-4 text-slate-900 text-sm font-body placeholder:text-secondary/40 focus:border-accent focus:ring-0 outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary hover:bg-[#eaff70] text-slate-900 font-ui font-medium text-[15px] rounded-full h-[52px] transition-all hover:shadow-[0_0_20px_rgba(243,255,151,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "idle" && t.waitlist.joinWaitlist}
                {status === "sending" && t.waitlist.joining}
                {status === "error" && t.waitlist.tryAgain}
              </button>

              {status === "error" && errorMsg && (
                <p className="text-center text-xs text-red-500 mt-3 font-body">
                  {errorMsg}
                </p>
              )}

              {status === "idle" && (
                <p className="text-center text-xs text-secondary mt-4 font-body">
                  {t.waitlist.noSpam}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
