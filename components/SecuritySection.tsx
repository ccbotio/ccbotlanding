"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const cantonFeatureIcons = [
  "account_balance",
  "verified",
  "token",
  "diversity_3",
];

// Wall Street — minimal architectural line art
function WallStreetIllustration() {
  const c = { p: "#5e2d79", l: "#D5A5E3", y: "#F3FF97" };
  return (
    <svg viewBox="0 0 440 320" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wsGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.y} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c.y} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c.l} />
          <stop offset="100%" stopColor={c.y} />
        </linearGradient>
      </defs>

      {/* ── Skyline silhouette (background layer) ── */}
      <motion.g opacity={0.25}
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }}
        viewport={{ once: true }} transition={{ duration: 1 }}>
        {/* Far left tower */}
        <rect x="18" y="170" width="22" height="108" stroke={c.p} strokeWidth="1" fill="none" />
        <rect x="24" y="160" width="10" height="10" stroke={c.p} strokeWidth="0.7" fill="none" />
        {/* Left mid building */}
        <rect x="46" y="200" width="30" height="78" stroke={c.p} strokeWidth="1" fill="none" />
        {/* Right mid building */}
        <rect x="366" y="190" width="28" height="88" stroke={c.p} strokeWidth="1" fill="none" />
        <path d="M366 190 L380 175 L394 190" stroke={c.p} strokeWidth="0.7" fill="none" />
        {/* Far right tower */}
        <rect x="400" y="165" width="24" height="113" stroke={c.p} strokeWidth="1" fill="none" />
      </motion.g>

      {/* ── Ground plane ── */}
      <motion.line x1="0" y1="278" x2="440" y2="278" stroke={c.p} strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} />

      {/* ── NYSE FACADE ── */}
      {/* Platform / Stylobate */}
      <motion.rect x="95" y="268" width="250" height="10" rx="1" stroke={c.p} strokeWidth="1.2" fill={c.p} fillOpacity="0.05"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} />

      {/* Steps */}
      {[0, 1, 2].map((s) => (
        <motion.line key={`s${s}`}
          x1={90 - s * 6} y1={278 + (s + 1) * 5} x2={350 + s * 6} y2={278 + (s + 1) * 5}
          stroke={c.p} strokeWidth={0.8} opacity={0.5}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 + s * 0.05 }} />
      ))}

      {/* Back wall */}
      <motion.rect x="105" y="95" width="230" height="173" stroke={c.p} strokeWidth="0.8" fill={c.p} fillOpacity="0.03"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.2 }} />

      {/* Entablature */}
      <motion.rect x="92" y="88" width="256" height="9" rx="0.5" stroke={c.p} strokeWidth="1.2" fill={c.p} fillOpacity="0.06"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }} />
      <motion.line x1="92" y1="86" x2="348" y2="86" stroke={c.p} strokeWidth="0.7" opacity={0.6}
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.32 }} />

      {/* 6 Columns */}
      {[118, 158, 198, 242, 282, 322].map((x, i) => (
        <motion.g key={`c${i}`}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.35 + i * 0.06, duration: 0.4 }}>
          {/* Shaft */}
          <rect x={x - 5} y="98" width="10" height="168" stroke={c.p} strokeWidth="1" fill={c.p} fillOpacity="0.02" rx="1" />
          {/* Fluting */}
          <line x1={x - 2} y1="102" x2={x - 2} y2="262" stroke={c.p} strokeWidth="0.3" opacity={0.2} />
          <line x1={x} y1="102" x2={x} y2="262" stroke={c.p} strokeWidth="0.3" opacity={0.25} />
          <line x1={x + 2} y1="102" x2={x + 2} y2="262" stroke={c.p} strokeWidth="0.3" opacity={0.2} />
          {/* Capital */}
          <path d={`M${x - 7} 98 Q${x} 93 ${x + 7} 98`} stroke={c.p} strokeWidth="0.9" fill="none" />
          <rect x={x - 7} y="98" width="14" height="3" stroke={c.p} strokeWidth="0.6" fill="none" />
          {/* Base */}
          <rect x={x - 6} y="266" width="12" height="3" rx="0.5" stroke={c.p} strokeWidth="0.7" fill="none" />
        </motion.g>
      ))}

      {/* ── PEDIMENT ── */}
      <motion.path d="M88 86 L220 22 L352 86" stroke={c.p} strokeWidth="1.5" strokeLinejoin="round" fill={c.p} fillOpacity="0.03"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} />
      {/* Inner tympanum */}
      <motion.path d="M100 85 L220 30 L340 85" stroke={c.p} strokeWidth="0.6" opacity={0.35} fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.4 }} />

      {/* Flag */}
      <motion.line x1="220" y1="22" x2="220" y2="6" stroke={c.p} strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7 }} />
      <motion.path d="M220 6 Q228 4 234 8 Q228 12 220 10 Z" fill={c.y} fillOpacity="0.5" stroke={c.y} strokeWidth="0.6"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.95 }} />

      {/* Entrance */}
      <motion.path d="M210 268 L210 230 Q220 222 230 230 L230 268" stroke={c.p} strokeWidth="1" fill={c.p} fillOpacity="0.05"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.7 }} />

      {/* Windows — subtle grid */}
      {[130, 155, 180, 260, 285, 310].map((x, i) => (
        <motion.g key={`w${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.03 }}>
          <rect x={x} y="210" width="10" height="16" rx="0.5" stroke={c.p} strokeWidth="0.6" fill={c.p} fillOpacity="0.03" />
          <rect x={x} y="180" width="10" height="16" rx="0.5" stroke={c.p} strokeWidth="0.6" fill={c.p} fillOpacity="0.03" />
          <rect x={x} y="150" width="10" height="16" rx="0.5" stroke={c.p} strokeWidth="0.6" fill={c.p} fillOpacity="0.03" />
        </motion.g>
      ))}

      {/* ── CHART OVERLAY ── */}
      {/* Chart area glow */}
      <motion.path
        d="M60 260 Q100 255 140 240 Q180 225 220 205 Q260 185 300 160 Q340 140 380 110 L380 278 L60 278 Z"
        fill="url(#wsGlow)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.6 }}
      />
      {/* Chart line */}
      <motion.path
        d="M60 260 C100 252 130 244 160 232 S210 210 240 198 S290 172 320 155 S360 130 380 110"
        stroke="url(#chartGrad)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
      />
      {/* Data points */}
      {[[160, 232], [240, 198], [320, 155], [380, 110]].map(([cx, cy], i) => (
        <motion.g key={`dp${i}`}
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.6 + i * 0.12, type: "spring", stiffness: 300 }}>
          <circle cx={cx} cy={cy} r="3" fill={c.y} />
          <circle cx={cx} cy={cy} r="6" stroke={c.y} strokeWidth="0.5" fill="none" opacity="0.3" />
        </motion.g>
      ))}

      {/* ── NETWORK NODES (blockchain/fintech touch) ── */}
      {[[42, 145], [28, 210], [408, 130], [425, 200]].map(([cx, cy], i) => (
        <motion.g key={`n${i}`}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.4 + i * 0.1, type: "spring" }}>
          <circle cx={cx} cy={cy} r="3" stroke={c.l} strokeWidth="0.7" fill={c.l} fillOpacity="0.08" />
          <circle cx={cx} cy={cy} r="1" fill={c.l} fillOpacity="0.4" />
        </motion.g>
      ))}
      {/* Node connections */}
      <motion.line x1="42" y1="145" x2="28" y2="210" stroke={c.l} strokeWidth="0.4" opacity={0.2} strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.7 }} />
      <motion.line x1="408" y1="130" x2="425" y2="200" stroke={c.l} strokeWidth="0.4" opacity={0.2} strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.75 }} />
      <motion.line x1="42" y1="145" x2="88" y2="86" stroke={c.l} strokeWidth="0.3" opacity={0.1} strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} />
      <motion.line x1="408" y1="130" x2="352" y2="86" stroke={c.l} strokeWidth="0.3" opacity={0.1} strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.85 }} />
    </svg>
  );
}

export default function SecuritySection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 bg-background-light border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Wall Street Illustration */}
        <motion.div
          className="order-2 lg:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden bg-white border border-border-subtle flex items-center justify-center p-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="relative z-10 w-full h-full">
            <WallStreetIllustration />
          </div>
          {/* Badge */}
          <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-md border border-border-subtle flex items-center gap-2">
            <img src="/images/cantonlogo.png" alt="Canton Network" className="w-5 h-5 object-contain" />
            <span className="text-xs font-bold font-ui text-slate-800">
              Canton Network
            </span>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display italic mb-6 text-slate-900">
            {t.security.title} <span className="not-italic text-accent">{t.security.titleAccent}</span>
          </h2>
          <div className="w-16 h-1 bg-primary mb-8" />
          <p className="text-lg text-slate-600 mb-8 font-body">
            {t.security.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cantonFeatureIcons.map((icon, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="material-symbols-outlined text-accent mt-0.5 text-xl">
                  {icon}
                </span>
                <div>
                  <strong className="block text-slate-900 font-ui text-sm">
                    {t.security.items[i].title}
                  </strong>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t.security.items[i].desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
