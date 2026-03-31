"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DocHeader from "./DocHeader";
import DocSidebar from "./DocSidebar";
import Search from "./Search";
import TableOfContents from "./TableOfContents";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageOrder = [
  "/docs/introduction",
  "/docs/getting-started",
  "/docs/send-receive",
  "/docs/token-swap",
  "/docs/bridge",
  "/docs/ai-agent",
  "/docs/security",
  "/docs/recovery",
  "/docs/faq",
];

const pageTitles: Record<string, string> = {
  "/docs/introduction": "Introduction",
  "/docs/getting-started": "Getting Started",
  "/docs/send-receive": "Send & Receive",
  "/docs/token-swap": "Token Swap",
  "/docs/bridge": "Bridge",
  "/docs/ai-agent": "AI Agent",
  "/docs/security": "Security",
  "/docs/recovery": "Recovery",
  "/docs/faq": "FAQ",
};

export default function DocLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const currentIndex = pageOrder.indexOf(pathname);
  const prev = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const next =
    currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <DocHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Search />
      <div className="max-w-[1400px] mx-auto flex">
        <DocSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 px-6 md:px-14 py-10">
          <div className="flex gap-10">
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* Breadcrumb */}
              <motion.div
                className="flex items-center gap-2 text-sm text-secondary mb-8 font-ui"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/docs/introduction"
                  className="hover:text-accent transition-colors"
                >
                  Docs
                </Link>
                <span className="text-border-subtle">/</span>
                <span className="text-slate-700 font-medium">
                  {pageTitles[pathname] || ""}
                </span>
              </motion.div>

              {/* Content */}
              <motion.article
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {children}
              </motion.article>

              {/* Divider */}
              <div className="section-divider mt-16" />

              {/* Prev / Next Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
              >
                {prev ? (
                  <Link
                    href={prev}
                    className="nav-card group flex items-center gap-3 p-4 rounded-2xl border border-border-subtle bg-white hover:bg-background-surface transition-all"
                  >
                    <span className="material-symbols-outlined text-secondary group-hover:text-accent text-lg transition-colors">
                      arrow_back
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-secondary font-ui mb-0.5">Previous</p>
                      <p className="text-sm font-ui font-semibold text-slate-800 group-hover:text-accent transition-colors">
                        {pageTitles[prev]}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={next}
                    className="nav-card group flex items-center justify-end gap-3 p-4 rounded-2xl border border-border-subtle bg-white hover:bg-background-surface transition-all text-right"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-secondary font-ui mb-0.5">Next</p>
                      <p className="text-sm font-ui font-semibold text-slate-800 group-hover:text-accent transition-colors">
                        {pageTitles[next]}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-secondary group-hover:text-accent text-lg transition-colors">
                      arrow_forward
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </motion.div>

              {/* Footer */}
              <div className="mt-16 pt-6 border-t border-border-subtle/30 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-[11px] text-slate-400 font-body">
                  &copy; 2026 CC Bot Wallet. All rights reserved.
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] text-slate-400 font-ui">Systems Operational</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}
