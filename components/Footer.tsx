"use client";

import { useTranslation } from "@/lib/i18n";

const socials = [
  { icon: "send", href: "https://t.me/ccbotwalletchat", label: "Telegram" },
  { icon: "close", href: "https://x.com/ccbotio", label: "X" },
  { icon: "code", href: "https://github.com/ccbotio", label: "GitHub" },
  { icon: "campaign", href: "https://t.me/ccbotwallet", label: "Announcements" },
];

type LinkItem = { label: string; href: string; external?: boolean };

function LinkColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="font-bold font-ui text-slate-900 mb-6">{title}</h4>
      <ul className="space-y-3 text-sm text-slate-700 font-body">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const productLinks: LinkItem[] = [
    { label: t.header.features, href: "#features" },
    { label: t.header.howItWorks, href: "#how-it-works" },
    { label: t.header.partners, href: "#partners" },
  ];

  const helpLinks: LinkItem[] = [
    { label: t.footer.help, href: "/help" },
  ];

  const communityLinks: LinkItem[] = [
    { label: t.footer.communityChat, href: "https://t.me/ccbotwalletchat", external: true },
    { label: t.footer.announcements, href: "https://t.me/ccbotwallet", external: true },
    { label: t.footer.telegramBot, href: "https://t.me/ccbotwallet_bot", external: true },
  ];

  const companyLinks: LinkItem[] = [
    { label: t.footer.about, href: "#" },
    { label: t.footer.contactLink, href: "mailto:contact@ccbot.io", external: true },
  ];

  const legalLinks: LinkItem[] = [
    { label: t.footer.privacyPolicy, href: "/privacy" },
    { label: t.footer.termsOfService, href: "/terms" },
  ];

  return (
    <footer className="bg-white border-t border-border-subtle pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-10 mb-16">
          <LinkColumn title={t.footer.product} links={productLinks} />
          <LinkColumn title={t.footer.help} links={helpLinks} />
          <LinkColumn title={t.footer.community} links={communityLinks} />
          <LinkColumn title={t.footer.company} links={companyLinks} />
          <LinkColumn title={t.footer.legal} links={legalLinks} />

          {/* Brand + Social Icons */}
          <div className="flex flex-col items-end gap-5 col-span-2 md:col-span-1">
            <div className="relative rounded-2xl p-8 flex flex-col items-center gap-6 overflow-hidden min-w-[220px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a1845] to-[#4a2d6b]" />
              <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: "radial-gradient(circle, rgba(243,255,151,0.8) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              <div className="relative z-10 flex items-center gap-3">
                <img src="/images/ccbotlogo.png" alt="CC Bot" className="w-11 h-11 rounded-lg" />
                <h2 className="text-xl font-bold font-ui text-white">
                  CC Bot Wallet
                </h2>
              </div>
              <div className="relative z-10 grid grid-cols-4 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F3FF97] hover:bg-[#F3FF97] hover:text-[#2a1845] hover:border-[#F3FF97] transition-all"
                    aria-label={s.label}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-body">
            &copy; 2026 {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
