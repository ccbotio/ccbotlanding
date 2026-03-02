"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const CC_BALANCE = 2026;

export default function Hero() {
  const { t } = useTranslation();
  const [ccPrice, setCcPrice] = useState(0);
  const [ccChange, setCcChange] = useState(0);
  const [sparkline, setSparkline] = useState<number[]>([]);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch("/api/price");
        if (!res.ok) return;
        const data = await res.json();
        setCcPrice(data.price);
        setCcChange(data.change24h);
        if (data.sparkline?.length) setSparkline(data.sparkline);
      } catch {}
    }
    fetchPrice();
    const interval = setInterval(fetchPrice, 60_000);
    return () => clearInterval(interval);
  }, []);

  function buildSparklinePath(data: number[], w: number, h: number) {
    if (data.length < 2) return "";
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const stepX = w / (data.length - 1);
    return data
      .map((v, i) => {
        const x = i * stepX;
        const y = h - ((v - min) / range) * h;
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          className="flex flex-col gap-8 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight text-slate-900">
            {t.hero.title1}{" "}
            <svg
              width="86"
              height="86"
              viewBox="0 0 24 24"
              fill="none"
              className="inline-block align-middle -mt-1"
              style={{ overflow: "visible" }}
            >
              {/* Circle - stays */}
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="none"
                stroke="#5e2d79"
                strokeWidth="0.8"
              />
              {/* Paper plane - flies away */}
              <g>
                <path
                  d="M16.64 8.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"
                  fill="none"
                  stroke="#5e2d79"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;0 0;12 -14;12 -14;0 0;0 0"
                    keyTimes="0;0.2;0.4;0.5;0.75;1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;1;0;0;1;1"
                    keyTimes="0;0.3;0.4;0.5;0.7;1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </svg>
            <br />
            {t.hero.title2}{" "}
            <span className="italic text-accent">{t.hero.title3}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg font-body leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#waitlist"
              className="bg-primary hover:bg-[#eaff70] text-slate-900 px-8 py-4 rounded-full text-base font-bold transition-all shadow-sm font-ui min-w-[160px] text-center"
            >
              {t.hero.startNow}
            </a>
          </div>
        </motion.div>

        {/* Right: Phone Mockup - 3D perspective */}
        <motion.div
          className="relative flex justify-center lg:justify-center z-10 -mt-8 lg:-mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ perspective: "1200px" }}
        >
          <div className="absolute -inset-4 bg-accent/5 rounded-full blur-3xl w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          {/* 3D Phone Frame */}
          <div
            className="relative w-[280px] h-[572px] rounded-[2.8rem] shadow-[0_35px_60px_-15px_rgba(94,45,121,0.35),0_0_40px_rgba(213,165,227,0.15)] overflow-hidden p-[5px] phone-border-glow"
            style={{
              transform: "rotateY(-8deg) rotateX(3deg) rotateZ(1deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Side edge highlight */}
            <div className="absolute top-8 -right-[2px] w-[3px] h-[85%] rounded-full bg-gradient-to-b from-[#D5A5E3]/40 via-white/20 to-[#D5A5E3]/40 z-30" />
            {/* Top edge highlight */}
            <div className="absolute -top-[1px] left-[15%] w-[70%] h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent z-30" />

            <div className="relative w-full h-full bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden">
              {/* Screen reflection */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-black z-20 flex items-center justify-between px-6 pt-1">
                <span className="text-white text-[11px] font-semibold">11:11</span>
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="white"><path d="M1 4.5C1 3.67 1.67 3 2.5 3S4 3.67 4 4.5V10H1V4.5zM5.5 3C5.5 2.17 6.17 1.5 7 1.5S8.5 2.17 8.5 3V10h-3V3zM10 1c0-.83.67-1.5 1.5-1.5S13 .17 13 1v9h-3V1z" opacity="0.9"/></svg>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="white"><path d="M7 1.5C9.7 1.5 12.1 2.7 13.7 4.6L12.3 6C11 4.4 9.1 3.5 7 3.5S3 4.4 1.7 6L.3 4.6C1.9 2.7 4.3 1.5 7 1.5zM7 5.5c1.6 0 3 .7 4 1.8L9.6 8.7C8.9 7.9 8 7.5 7 7.5s-1.9.4-2.6 1.2L3 7.3C4 6.2 5.4 5.5 7 5.5zM7 9.5c.6 0 1.1.2 1.4.6L7 11.5 5.6 10.1c.3-.4.8-.6 1.4-.6z" opacity="0.9"/></svg>
                  <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="white" opacity="0.35"/><rect x="1.5" y="1.5" width="14" height="8" rx="1" fill="white" opacity="0.9"/><path d="M20 4v3a1.5 1.5 0 000-3z" fill="white" opacity="0.4"/></svg>
                </div>
              </div>
              {/* Screen Content - Wallet Dashboard */}
              <div className="absolute inset-0 top-12 bg-gradient-to-b from-[#0a0a12] to-[#030206] flex flex-col px-4 pt-4 pb-0 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[#A89F91] text-[9px]">Welcome back</p>
                    <p className="text-white text-[12px] font-bold">CC Bot Wallet</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">S</span>
                  </div>
                </div>

                {/* Balance Card */}
                <motion.div
                  className="bg-gradient-to-br from-[#1a1235] to-[#0d0a1a] rounded-2xl p-3 mb-3 border border-[#875CFF]/20"
                  animate={{ boxShadow: ["0 0 15px rgba(135,92,255,0.1)", "0 0 25px rgba(135,92,255,0.2)", "0 0 15px rgba(135,92,255,0.1)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-start justify-between">
                    {/* Left: Balance */}
                    <div>
                      <p className="text-[#A89F91] text-[9px] mb-0.5">Total Balance</p>
                      <div className="flex items-end gap-1.5">
                        <span className="text-white text-[22px] font-bold leading-none">{CC_BALANCE.toLocaleString()}</span>
                        <span className="text-[#F3FF97] text-[11px] font-semibold mb-0.5">CC</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[#A89F91] text-[9px]">
                          {ccPrice > 0 ? `$${(CC_BALANCE * ccPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "..."}
                        </span>
                        <span className={`text-[9px] font-medium ${ccChange >= 0 ? "text-[#4ADE80]" : "text-[#FF6B6B]"}`}>
                          {ccPrice > 0 ? `${ccChange >= 0 ? "+" : ""}${ccChange.toFixed(2)}%` : ""}
                        </span>
                      </div>
                    </div>
                    {/* Right: Sparkline Chart */}
                    {sparkline.length > 1 && (
                      <div className="flex flex-col items-end">
                        <p className="text-[#A89F91] text-[7px] mb-1">7d</p>
                        <svg width="80" height="32" viewBox="0 0 80 32" fill="none" className="overflow-visible">
                          <defs>
                            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#F3FF97" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#F3FF97" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Fill area */}
                          <path
                            d={`${buildSparklinePath(sparkline, 80, 28)} L80,32 L0,32 Z`}
                            fill="url(#sparkFill)"
                          />
                          {/* Line */}
                          <path
                            d={buildSparklinePath(sparkline, 80, 28)}
                            stroke="#F3FF97"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          {/* Dot at end */}
                          {(() => {
                            const min = Math.min(...sparkline);
                            const max = Math.max(...sparkline);
                            const range = max - min || 1;
                            const lastY = 28 - ((sparkline[sparkline.length - 1] - min) / range) * 28;
                            return (
                              <circle cx="80" cy={lastY} r="2" fill="#F3FF97">
                                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                              </circle>
                            );
                          })()}
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { icon: "arrow_upward", label: "Send" },
                    { icon: "arrow_downward", label: "Receive" },
                    { icon: "swap_horiz", label: "Swap" },
                    { icon: "link", label: "Bridge" },
                  ].map((action) => (
                    <div key={action.label} className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-xl bg-[#875CFF]/15 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#875CFF] text-[16px]">{action.icon}</span>
                      </div>
                      <span className="text-[#A89F91] text-[8px]">{action.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tokens Section */}
                <div className="flex-1 min-h-0">
                  <p className="text-white text-[10px] font-semibold mb-2">Tokens</p>
                  <div className="flex flex-col gap-2">
                    {/* CC Token */}
                    <div className="flex items-center gap-2.5 bg-white/[0.03] rounded-xl px-2.5 py-2">
                      <img src="/images/cclogo.jpg" alt="CC" className="w-7 h-7 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[10px] font-semibold">Canton Coin</p>
                        <p className="text-[#A89F91] text-[8px]">{ccPrice > 0 ? `$${ccPrice.toFixed(4)}` : "..."}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-[10px] font-semibold">{CC_BALANCE.toLocaleString()}</p>
                        <p className={`text-[8px] ${ccChange >= 0 ? "text-[#4ADE80]" : "text-[#FF6B6B]"}`}>
                          {ccPrice > 0 ? `${ccChange >= 0 ? "+" : ""}${ccChange.toFixed(2)}%` : ""}
                        </p>
                      </div>
                    </div>
                    {/* USDCX Token */}
                    <div className="flex items-center gap-2.5 bg-white/[0.03] rounded-xl px-2.5 py-2">
                      <img src="/images/usdcxlogo.jpg" alt="USDCx" className="w-7 h-7 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[10px] font-semibold">USDCx</p>
                        <p className="text-[#A89F91] text-[8px]">$1.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-[10px] font-semibold">120.00</p>
                        <p className="text-[#A89F91] text-[8px]">0.0%</p>
                      </div>
                    </div>
                    {/* cBTC Token */}
                    <div className="flex items-center gap-2.5 bg-white/[0.03] rounded-xl px-2.5 py-2">
                      <img src="/images/cbtclogo.jpg" alt="cBTC" className="w-7 h-7 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[10px] font-semibold">cBTC</p>
                        <p className="text-[#A89F91] text-[8px]">$67,420</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-[10px] font-semibold">0.0082</p>
                        <p className="text-[#4ADE80] text-[8px]">+1.8%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-around py-2 border-t border-white/5 -mx-4 px-2 mt-2">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="material-symbols-outlined text-[#875CFF] text-[16px]">home</span>
                    <span className="text-[#875CFF] text-[7px] font-medium">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="material-symbols-outlined text-[#A89F91] text-[16px]">explore</span>
                    <span className="text-[#A89F91] text-[7px]">Discover</span>
                  </div>
                  <div className="flex flex-col items-center -mt-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center shadow-lg shadow-[#875CFF]/30">
                      <img src="/images/ccbotagentlogo.png" alt="CC Bot" className="w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[#F3FF97] text-[7px] font-medium mt-0.5">CC Bot</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="material-symbols-outlined text-[#A89F91] text-[16px]">emoji_events</span>
                    <span className="text-[#A89F91] text-[7px]">Rewards</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="material-symbols-outlined text-[#A89F91] text-[16px]">person</span>
                    <span className="text-[#A89F91] text-[7px]">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
