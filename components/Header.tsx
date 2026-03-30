"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, langNames, Lang } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.header.howItWorks, href: "#how-it-works" },
    { label: t.header.team ?? "Team", href: "#team" },
    { label: t.header.partners, href: "#partners" },
  ];

  const productSections = [
    {
      title: t.header.product,
      items: [
        { label: t.header.productItems.swap, icon: "swap_horiz", href: "#features" },
        { label: t.header.productItems.bridge, icon: "cable", href: "#features" },
        { label: t.header.productItems.aiAgent, icon: "smart_toy", href: "#features" },
      ],
    },
    {
      title: t.header.assets,
      items: [
        { label: t.header.assetItems.cantonCoin, icon: "token", href: "#features", logo: "/images/cclogo.jpg" },
        { label: t.header.assetItems.usdcx, icon: "paid", href: "#features", logo: "/images/usdcxlogo.jpg" },
        { label: t.header.assetItems.cbtc, icon: "currency_bitcoin", href: "#features", logo: "/images/cbtclogo.jpg" },
      ],
    },
  ];

  const aboutItems = [
    { title: t.header.aboutItems.selfCustodial.title, desc: t.header.aboutItems.selfCustodial.desc, icon: "key" },
    { title: t.header.aboutItems.shamirSecurity.title, desc: t.header.aboutItems.shamirSecurity.desc, icon: "lock" },
    { title: t.header.aboutItems.shamirSharing.title, desc: t.header.aboutItems.shamirSharing.desc, icon: "share" },
    { title: t.header.aboutItems.cantonNetwork.title, desc: t.header.aboutItems.cantonNetwork.desc, icon: "hub" },
    { title: t.header.aboutItems.telegramNative.title, desc: t.header.aboutItems.telegramNative.desc, icon: "send" },
    { title: t.header.aboutItems.aiPowered.title, desc: t.header.aboutItems.aiPowered.desc, icon: "smart_toy" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D5A5E3]/20 overflow-visible">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1845] to-[#4a2d6b]" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(243,255,151,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <img src="/images/ccbotlogo.png" alt="CC Bot" className="w-10 h-10 rounded-lg" />
          <h2 className="text-2xl font-bold tracking-tight font-ui text-white">
            CC Bot Wallet
          </h2>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* About Dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="text-base font-semibold text-white/70 hover:text-[#F3FF97] transition-colors font-ui flex items-center gap-1"
            >
              {t.header.about}
              <span className={`material-symbols-outlined text-sm transition-transform ${aboutOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white rounded-2xl shadow-xl border border-border-subtle overflow-hidden"
                >
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[2px] text-secondary font-ui font-medium mb-4">
                      CC Bot Wallet
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {aboutItems.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#f7f0fa] transition-colors group"
                        >
                          <span className="material-symbols-outlined text-[#5e2d79] text-lg mt-0.5 group-hover:text-[#875CFF] transition-colors">
                            {item.icon}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 font-ui">{item.title}</p>
                            <p className="text-xs text-slate-500 font-body leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-base font-semibold text-white/70 hover:text-[#F3FF97] transition-colors font-ui flex items-center gap-1"
            >
              {t.header.product}
              <span className={`material-symbols-outlined text-sm transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-white rounded-2xl shadow-xl border border-border-subtle overflow-hidden"
                >
                  <div className="grid grid-cols-2 divide-x divide-border-subtle">
                    {productSections.map((section) => (
                      <div key={section.title} className="p-4">
                        <p className="text-[10px] uppercase tracking-[2px] text-secondary font-ui font-medium mb-3">
                          {section.title}
                        </p>
                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f7f0fa] transition-colors group"
                            >
                              {"logo" in item && item.logo ? (
                                <img src={item.logo} alt={item.label} className="w-5 h-5 rounded-full object-cover" />
                              ) : (
                                <span className="material-symbols-outlined text-[#5e2d79] text-lg group-hover:text-[#875CFF] transition-colors">
                                  {item.icon}
                                </span>
                              )}
                              <span className="text-sm font-medium text-slate-900 font-ui">
                                {item.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-white/70 hover:text-[#F3FF97] transition-colors font-ui"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Language + Launch App */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-white/70 hover:text-[#F3FF97] transition-colors font-ui text-sm"
            >
              <span className="material-symbols-outlined text-base">language</span>
              <span className="font-medium">{langNames[lang]}</span>
              <span className={`material-symbols-outlined text-xs transition-transform ${langOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-3 w-[180px] bg-white rounded-xl shadow-xl border border-border-subtle overflow-hidden"
                >
                  <div className="py-2">
                    {(Object.keys(langNames) as Lang[]).map((code) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#f7f0fa] transition-colors ${lang === code ? "bg-[#f7f0fa]" : ""}`}
                      >
                        <span className={`text-sm font-ui ${lang === code ? "text-[#5e2d79] font-semibold" : "text-slate-700"}`}>
                          {langNames[code]}
                        </span>
                        {lang === code && (
                          <span className="material-symbols-outlined text-[#5e2d79] text-sm ml-auto">check</span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Launch App Button */}
          <a
            href="https://t.me/ccbotwallet_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-primary hover:bg-[#eaff70] text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm font-ui items-center gap-2 group"
          >
            {t.header.launchApp}
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </a>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[#D5A5E3]/20 relative z-10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Mobile About Section */}
              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#D5A5E3] font-ui font-medium mb-2">
                  {t.header.about}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {aboutItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[#F3FF97] text-base mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-sm text-white/90 font-ui font-medium">{item.title}</p>
                        <p className="text-[11px] text-white/50 font-body">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Product Section */}
              {productSections.map((section) => (
                <div key={section.title}>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#D5A5E3] font-ui font-medium mb-2">
                    {section.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-1.5 text-sm text-white/70 hover:text-[#F3FF97] transition-colors font-ui"
                      >
                        {"logo" in item && item.logo ? (
                          <img src={item.logo} alt={item.label} className="w-4 h-4 rounded-full object-cover" />
                        ) : (
                          <span className="material-symbols-outlined text-[#F3FF97] text-base">{item.icon}</span>
                        )}
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="h-px bg-[#D5A5E3]/20" />

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/70 hover:text-[#F3FF97] transition-colors font-ui"
                >
                  {link.label}
                </a>
              ))}

              <div className="h-px bg-[#D5A5E3]/20" />

              {/* Mobile Language */}
              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#D5A5E3] font-ui font-medium mb-2">
                  {t.header.language}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(langNames) as Lang[]).map((code) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`px-3 py-1.5 rounded-full text-sm font-ui transition-colors ${lang === code ? "bg-[#F3FF97] text-slate-900 font-semibold" : "text-white/70 bg-white/10"}`}
                    >
                      {langNames[code]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#D5A5E3]/20" />

              <a
                href="https://t.me/ccbotwallet_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-[#eaff70] text-slate-900 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm font-ui text-center block"
              >
                {t.header.launchApp} &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
