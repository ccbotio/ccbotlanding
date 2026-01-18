"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Phone tilts backward as you scroll down
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  return (
    <section ref={sectionRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="neon-orb top-20 left-1/4 -translate-x-1/2" />
      <div className="neon-orb bottom-40 right-1/4 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#875CFF]/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#F3FF97] rounded-full animate-pulse" />
              <span className="text-sm text-[#A89F91]">
                Built on Canton Network
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white via-50% to-[#F3FF97] bg-clip-text text-transparent"
            >
              First Passkey Wallet Experience on Telegram
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#A89F91] mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Send crypto to any Telegram user with just their username.
              Non-custodial, Passkey-secured, and built for the future of finance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://t.me/ccbotio_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F3FF97] text-[#030206] px-6 py-3 rounded-full font-semibold hover:bg-[#e8f085] transition-all duration-200 glow-primary"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                </svg>
                Start in Telegram
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-[#0d0d0d]/80 border border-[#875CFF]/30 text-white px-6 py-3 rounded-full font-semibold hover:border-[#875CFF]/60 hover:bg-[#1a1a1a] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-lg">play_circle</span>
                How It Works
              </a>
            </motion.div>

          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-center"
          >
            <motion.div
              className="relative"
              style={{
                rotateX: smoothRotateX,
                scale: smoothScale,
                y: smoothY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              {/* iPhone 17 Pro Max Frame */}
              <div className="relative w-[260px] md:w-[290px] animate-float">
                <div className="bg-[#1a1a1a] rounded-[45px] p-2 border border-[#333] shadow-2xl" style={{ aspectRatio: '9/19.5' }}>
                  <div className="bg-gradient-to-b from-[#0d0d12] to-[#030206] rounded-[38px] overflow-hidden h-full relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />

                    {/* Status Bar - iPhone Style */}
                    <div className="flex justify-between items-center px-5 pt-3 pb-1 text-white">
                      <span className="text-[14px] font-semibold">00:28</span>
                      <div className="flex gap-1.5 items-center">
                        {/* Signal Bars */}
                        <svg className="w-4 h-3" viewBox="0 0 18 12" fill="white">
                          <rect x="0" y="8" width="3" height="4" rx="0.5" fillOpacity="0.3"/>
                          <rect x="5" y="5" width="3" height="7" rx="0.5" fillOpacity="0.3"/>
                          <rect x="10" y="2" width="3" height="10" rx="0.5" fill="white"/>
                          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="white"/>
                        </svg>
                        {/* WiFi */}
                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white">
                          <path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 5c2.5 0 4.5 1.5 5.5 3.5-.3.3-.7.5-1 .5-1-1.5-2.5-2.5-4.5-2.5S5 7.5 4 9c-.3 0-.7-.2-1-.5C4 6.5 5.5 5 8 5zm0-4c4 0 7 2 9 5-.3.3-.7.5-1 .5C14.5 4.5 11.5 3 8 3S1.5 4.5 0 6.5c-.3 0-.7-.2-1-.5 2-3 5-5 9-5z"/>
                        </svg>
                        {/* Battery */}
                        <div className="flex items-center gap-0.5">
                          <div className="w-6 h-3 border border-white/40 rounded-sm p-0.5">
                            <div className="w-full h-full bg-[#F3FF97] rounded-[1px]"/>
                          </div>
                          <div className="w-0.5 h-1.5 bg-white/40 rounded-r-sm"/>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-4 pb-8 pt-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-lg">person</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Welcome back</div>
                            <div className="text-[#A89F91] text-xs">@cryptouser</div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[#A89F91]">notifications</span>
                      </div>

                      {/* Balance Card */}
                      <div className="bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] rounded-2xl p-4 mb-4">
                        <div className="text-white/80 text-xs mb-1">Total Balance</div>
                        <div className="text-white text-2xl font-bold mb-3">$12,458.32</div>
                        <div className="flex gap-2">
                          <span className="inline-flex items-center gap-1 text-[#030206] text-xs bg-[#F3FF97] px-2 py-1 rounded-full font-medium">
                            <span className="material-symbols-outlined text-xs">trending_up</span>
                            +5.2%
                          </span>
                          <span className="text-white/70 text-xs">Today</span>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          { icon: "arrow_upward", label: "Send" },
                          { icon: "arrow_downward", label: "Receive" },
                          { icon: "swap_horiz", label: "Swap" },
                          { icon: "more_horiz", label: "More" },
                        ].map((action, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center border border-[#2a2a2a]">
                              <span className="material-symbols-outlined text-[#875CFF] text-lg">{action.icon}</span>
                            </div>
                            <span className="text-[#A89F91] text-[9px]">{action.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Assets */}
                      <div className="text-white text-sm font-medium mb-3">Assets</div>
                      <div className="space-y-2">
                        {[
                          { name: "CC", symbol: "CC", amount: "1,250", value: "$8,234.12", change: "+5.2%" },
                          { name: "USDCx", symbol: "USDCx", amount: "4,224.20", value: "$4,224.20", change: "+0.1%" },
                          { name: "USDT", symbol: "USDT", amount: "500.00", value: "$500.00", change: "+0.0%" },
                        ].map((asset, i) => (
                          <div key={i} className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-3 border border-[#2a2a2a]">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#875CFF]/30 to-[#D5A5E3]/20 flex items-center justify-center">
                                <span className="text-[#F3FF97] text-xs font-bold">{asset.symbol[0]}</span>
                              </div>
                              <div>
                                <div className="text-white text-xs font-medium">{asset.name}</div>
                                <div className="text-[#A89F91] text-[10px]">{asset.amount} {asset.symbol}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white text-xs">{asset.value}</div>
                              <div className="text-[#F3FF97] text-[10px]">{asset.change}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telegram Logo with Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-6 top-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] rounded-full blur-2xl opacity-40 scale-150" />
                  {/* Logo Container */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(135, 92, 255, 0.3)",
                        "0 0 40px rgba(135, 92, 255, 0.5)",
                        "0 0 20px rgba(135, 92, 255, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative w-16 h-16 bg-gradient-to-br from-[#875CFF] to-[#D5A5E3] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
