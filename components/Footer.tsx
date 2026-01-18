"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Rewards", href: "#rewards" },
    { label: "Partners", href: "#partners" },
  ],
  Resources: [
    { label: "Getting Started", href: "/docs/getting-started" },
    { label: "Security", href: "/docs/security" },
    { label: "FAQ", href: "/docs/faq" },
    { label: "Support", href: "https://t.me/ccbotio" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "Telegram Bot",
    href: "https://t.me/ccbotio_bot",
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/></svg>
  },
  {
    label: "Announcements",
    href: "https://t.me/ccbotio",
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5.5 9.5L9 13l-3.5 3.5L7 18l5-5-5-5-1.5 1.5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4z"/></svg>
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/ccbotio",
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
  {
    label: "GitHub",
    href: "https://github.com/ccbotio",
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-lg font-semibold mb-4 hover:text-[#875CFF] transition-colors duration-200 cursor-pointer">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[#FFFFFF] text-sm hover:text-[#875CFF] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brand + Contact Us - Right */}
          <div className="col-span-2 md:col-span-1 md:text-right">
            <a href="#" className="inline-flex items-center gap-2 mb-4 md:justify-end">
              <img
                src="/images/ccbotlogo.png"
                alt="CC Bot Wallet"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-lg font-semibold text-white">CC Bot Wallet</span>
            </a>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-white hover:text-[#875CFF] hover:border-[#875CFF]/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1f1f1f]">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} CC Bot Wallet. All rights reserved.
          </p>

          {/* Right - Legal Links */}
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-white text-sm hover:text-[#875CFF] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white text-sm hover:text-[#875CFF] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
