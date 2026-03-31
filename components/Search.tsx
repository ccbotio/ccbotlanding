"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const searchIndex = [
  { title: "Introduction", href: "/docs/introduction", keywords: "what is cc bot wallet overview canton network self-custodial telegram" },
  { title: "Getting Started", href: "/docs/getting-started", keywords: "setup create wallet pin biometric recovery code step" },
  { title: "Send & Receive", href: "/docs/send-receive", keywords: "transfer send receive telegram username party id qr code" },
  { title: "Token Swap", href: "/docs/token-swap", keywords: "swap exchange cc usdcx treasury dvp batch auction p2p mev" },
  { title: "Bridge", href: "/docs/bridge", keywords: "bridge ethereum usdc usdcx circle xreserve cctp deposit withdrawal multi-chain evm" },
  { title: "AI Agent", href: "/docs/ai-agent", keywords: "ai agent assistant bot smart offer portfolio monitoring alerts" },
  { title: "Security", href: "/docs/security", keywords: "security shamir secret sharing aes encryption pin biometric session" },
  { title: "Recovery", href: "/docs/recovery", keywords: "recovery code forgot pin lost device email restore backup" },
  { title: "FAQ", href: "/docs/faq", keywords: "faq questions help support troubleshooting" },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.length > 0
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setOpen(false); setQuery(""); }} />
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl border border-border-subtle overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border-subtle">
          <span className="material-symbols-outlined text-secondary text-xl">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent outline-none text-slate-900 font-ui text-sm placeholder:text-secondary/60"
          />
          <kbd className="hidden sm:flex items-center gap-0.5 px-2 py-1 rounded-md bg-background-surface border border-border-subtle text-[10px] text-secondary font-ui">
            ESC
          </kbd>
        </div>
        {query.length > 0 && (
          <div className="max-h-[300px] overflow-y-auto p-2">
            {results.length > 0 ? (
              results.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-background-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-accent text-lg">description</span>
                  <div>
                    <p className="text-sm font-ui font-semibold text-slate-900">{item.title}</p>
                    <p className="text-[11px] text-secondary font-body">{item.href}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center">
                <p className="text-sm text-secondary font-body">No results found for &ldquo;{query}&rdquo;</p>
              </div>
            )}
          </div>
        )}
        {query.length === 0 && (
          <div className="px-5 py-6 text-center">
            <p className="text-xs text-secondary font-body">Type to search across all documentation pages</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchTrigger() {
  const [, setOpen] = useState(false);

  function handleClick() {
    const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
    document.dispatchEvent(event);
  }

  return (
    <button
      onClick={handleClick}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white/50 hover:text-white/80 hover:border-white/30 transition-colors text-[12px] font-ui"
    >
      <span className="material-symbols-outlined text-[14px]">search</span>
      <span>Search</span>
      <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white/10 text-[10px]">&#8984;K</kbd>
    </button>
  );
}
