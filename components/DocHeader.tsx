"use client";

import Link from "next/link";
import { SearchTrigger } from "./Search";

export default function DocHeader({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D5A5E3]/20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1845] to-[#4a2d6b]" />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(243,255,151,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-white/70 hover:text-[#F3FF97] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <Link href="/docs/introduction" className="flex items-center gap-2.5">
            <img src="/images/ccbotlogo.png" alt="CC Bot" className="w-9 h-9 rounded-lg" />
            <h2 className="text-lg font-bold tracking-tight font-ui text-white">
              CC Bot Wallet
            </h2>
          </Link>
          <div className="hidden sm:flex items-center">
            <div className="w-px h-5 bg-white/20 mx-3" />
            <span className="text-[13px] text-white/50 font-ui font-medium">Documentation</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <SearchTrigger />
          <a
            href="https://www.ccbot.io"
            className="text-[13px] text-white/50 hover:text-[#F3FF97] transition-colors font-ui hidden sm:block"
          >
            Website
          </a>
          <a
            href="https://t.me/ccbotwalletchat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-white/50 hover:text-[#F3FF97] transition-colors font-ui hidden sm:flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">send</span>
            Community
          </a>
          <a
            href="https://t.me/ccbotwallet_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#eaff70] text-slate-900 px-5 py-2 rounded-full text-[13px] font-bold transition-all font-ui flex items-center gap-1.5 group"
          >
            Launch App
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
