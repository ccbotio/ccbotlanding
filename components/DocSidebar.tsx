"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Overview",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: "home" },
      { title: "Getting Started", href: "/docs/getting-started", icon: "rocket_launch" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Send & Receive", href: "/docs/send-receive", icon: "swap_horiz" },
      { title: "Token Swap", href: "/docs/token-swap", icon: "currency_exchange" },
      { title: "Bridge", href: "/docs/bridge", icon: "cable" },
      { title: "AI Agent", href: "/docs/ai-agent", icon: "smart_toy", logo: "/images/ccbotagentlogo.png" },
    ],
  },
  {
    title: "Security",
    items: [
      { title: "Security", href: "/docs/security", icon: "shield" },
      { title: "Recovery", href: "/docs/recovery", icon: "key" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "FAQ", href: "/docs/faq", icon: "help" },
    ],
  },
];

export default function DocSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[57px] left-0 z-40 lg:z-auto w-[280px] h-screen lg:h-[calc(100vh-57px)] bg-white/95 lg:bg-white/60 backdrop-blur-md border-r border-border-subtle overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 pt-7">
          {sections.map((section, si) => (
            <div key={section.title} className="mb-7">
              <div className="flex items-center gap-2 mb-3 px-3">
                <span className="w-1 h-1 rounded-full bg-accent/40 inline-block" />
                <span className="text-[10px] uppercase tracking-[2.5px] text-secondary font-ui font-semibold">
                  {section.title}
                </span>
              </div>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-ui border-l-2 ${
                        isActive
                          ? "active border-l-accent bg-accent/[0.06]"
                          : "text-slate-500 border-l-transparent hover:text-slate-800"
                      }`}
                    >
                      <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-gradient-to-br from-accent to-[#875CFF]"
                          : "bg-secondary/15 group-hover:bg-accent/20"
                      }`}>
                        {"logo" in item && item.logo ? (
                          <img src={item.logo as string} alt={item.title} className="w-[18px] h-[18px] rounded-full" />
                        ) : (
                          <span className={`material-symbols-outlined text-[12px] ${
                            isActive ? "text-white" : "text-secondary group-hover:text-accent"
                          }`}>
                            {item.icon}
                          </span>
                        )}
                      </div>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Help card - matching landing page card style */}
          <div className="mt-6 mx-2 p-5 rounded-2xl bg-background-surface border border-border-subtle relative overflow-hidden">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-base">chat</span>
                <p className="text-xs font-ui font-semibold text-slate-800">Need help?</p>
              </div>
              <p className="text-[11px] text-slate-500 font-body leading-relaxed mb-3">
                Join our community for support and updates.
              </p>
              <a
                href="https://t.me/ccbotwalletchat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-accent font-ui font-semibold hover:underline"
              >
                Telegram Community
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
