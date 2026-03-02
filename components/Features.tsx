"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";

const featuresMeta = [
  { num: "01", icon: "key" },
  { num: "02", icon: "swap_horiz" },
  { num: "03", icon: "smart_toy" },
  { num: "04", icon: "cable" },
  { num: "05", icon: "alternate_email" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface CantonData {
  price: number;
  change24h: number;
  chartPoints: number[];
}

function useCantonData() {
  const [data, setData] = useState<CantonData | null>(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [priceRes, chartRes] = await Promise.all([
          fetch("/api/canton-price"),
          fetch("/api/canton-chart"),
        ]);
        const priceJson = await priceRes.json();
        const chartJson = await chartRes.json();

        if (priceJson["canton-network"] && chartJson.prices) {
          // Sample ~40 points from chart data
          const prices: number[] = chartJson.prices.map((p: [number, number]) => p[1]);
          const step = Math.max(1, Math.floor(prices.length / 40));
          const sampled = prices.filter((_: number, i: number) => i % step === 0);

          setData({
            price: priceJson["canton-network"].usd,
            change24h: priceJson["canton-network"].usd_24h_change,
            chartPoints: sampled,
          });
        }
      } catch {
        // fallback
      }
    }
    fetchAll();
    const interval = setInterval(fetchAll, 60_000);
    return () => clearInterval(interval);
  }, []);

  return data;
}

function Sparkline({ points, positive }: { points: number[]; positive: boolean }) {
  if (points.length < 2) return null;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const h = 64;
  const w = 300;

  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * w,
    y: h - ((p - min) / range) * (h - 4) - 2,
  }));

  const linePath = coords.map((c, i) => (i === 0 ? `M${c.x},${c.y}` : `L${c.x},${c.y}`)).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
  const color = "#F3FF97";
  const colorFaded = "rgba(243,255,151,0.15)";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colorFaded} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparkFill)" />
      <path d={linePath} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Last point glow */}
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="3" fill={color} />
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="6" fill={color} opacity="0.3" />
    </svg>
  );
}

export default function Features() {
  const { t } = useTranslation();
  const cantonData = useCantonData();

  return (
    <section className="py-24 px-6 bg-white" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            {t.features.title} <span className="italic text-accent">{t.features.titleAccent}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            {t.features.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresMeta.map((f, i) => (
            <motion.div
              key={f.num}
              variants={cardVariants}
              className="group bg-background-surface border border-border-subtle rounded-2xl p-8 relative overflow-hidden bg-dots hover:border-accent/30 transition-colors"
            >
              <div className="absolute top-6 right-6 text-accent/20 font-display text-4xl italic font-bold group-hover:text-accent/40 transition-colors">
                {f.num}
              </div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 border border-border-subtle group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300 overflow-hidden">
                {f.icon === "smart_toy" ? (
                  <motion.img
                    src="/images/ccbotagentlogo.png"
                    alt="CC Bot Agent"
                    className="w-10 h-10 rounded-lg"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.span
                    className="material-symbols-outlined"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {f.icon}
                  </motion.span>
                )}
              </div>
              <h3 className="text-xl font-bold font-ui mb-3 text-slate-900">
                {t.features.items[i].title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.items[i].desc}</p>
            </motion.div>
          ))}

          {/* Special Card 06: AI Agent / Canton Token */}
          <motion.div
            variants={cardVariants}
            className="group bg-accent text-white rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-ui font-bold">
                  {t.features.liveMarket}
                </span>
              </div>
              <h3 className="text-3xl font-display italic mb-1 text-primary">
                {t.features.cantonCoin}
              </h3>
              <p className="text-5xl font-ui font-bold mb-2">
                {cantonData ? `$${cantonData.price.toFixed(4)}` : "—"}
              </p>
              <p className="text-sm text-primary">
                {cantonData
                  ? `${cantonData.change24h >= 0 ? "+" : ""}${cantonData.change24h.toFixed(2)}% (24h)`
                  : t.features.loading}
              </p>
            </div>
            <div className="mt-6 relative z-10">
              {cantonData?.chartPoints ? (
                <Sparkline points={cantonData.chartPoints} positive={cantonData.change24h >= 0} />
              ) : (
                <div className="h-16 w-full flex items-end gap-1 opacity-80">
                  {[40, 60, 50, 70, 55, 85, 95].map((h, i) => (
                    <div key={i} className="w-full rounded-t-sm bg-white/30" style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
