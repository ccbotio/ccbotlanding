"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const securityLayers = [
  {
    id: 1,
    title: "Passkey Authentication",
    description: "Your device's biometric secures your wallet. Private keys stored in secure enclave.",
    icon: "fingerprint",
    badge: "ACTIVE",
    color: "#F3FF97",
  },
  {
    id: 2,
    title: "Human Verification",
    description: "15-second biometric liveness check. Zero personal data collection.",
    icon: "verified_user",
    badge: "VERIFIED",
    color: "#D5A5E3",
  },
  {
    id: 3,
    title: "Anti-Bot Defense",
    description: "Multi-layer protection against automated attacks and reward farmers.",
    icon: "shield",
    badge: "PROTECTED",
    color: "#875CFF",
  },
  {
    id: 4,
    title: "Canton Privacy",
    description: "Configurable transaction privacy. Your data, your control.",
    icon: "visibility_off",
    badge: "PRIVATE",
    color: "#F3FF97",
  },
];

// Hexagon Node Component
function HexNode({
  x,
  y,
  size,
  delay,
  isActive,
  pulseColor
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  isActive: boolean;
  pulseColor: string;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isActive ? [1, 1.2, 1] : 1,
        opacity: isActive ? 1 : 0.3
      }}
      transition={{
        duration: 2,
        delay,
        repeat: isActive ? Infinity : 0,
        repeatType: "reverse"
      }}
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size * 1.15,
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: isActive
            ? `linear-gradient(135deg, ${pulseColor}40, ${pulseColor}10)`
            : "rgba(255,255,255,0.05)",
          border: `1px solid ${isActive ? pulseColor : "rgba(255,255,255,0.1)"}`,
        }}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `radial-gradient(circle at center, ${pulseColor}30, transparent)`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}

// Data Stream Particle
function DataParticle({ startX, startY, endX, endY, delay, color }: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        left: startX,
        top: startY,
      }}
      animate={{
        left: [startX, endX],
        top: [startY, endY],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Scanning Line Effect
function ScanLine({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, #F3FF97, transparent)",
        boxShadow: "0 0 20px #F3FF97, 0 0 40px #F3FF97",
      }}
      initial={{ top: "0%", opacity: 0 }}
      animate={isActive ? {
        top: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Central Core
function SecurityCore({ activeLayer }: { activeLayer: number }) {
  const currentLayer = securityLayers[activeLayer];

  return (
    <div className="relative w-48 h-48">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid transparent",
          borderTopColor: currentLayer.color,
          borderRightColor: `${currentLayer.color}50`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          border: `1px solid ${currentLayer.color}30`,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Inner core */}
      <motion.div
        className="absolute inset-8 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at center, ${currentLayer.color}20, transparent)`,
          border: `1px solid ${currentLayer.color}40`,
        }}
        animate={{
          boxShadow: [
            `0 0 20px ${currentLayer.color}20, inset 0 0 20px ${currentLayer.color}10`,
            `0 0 40px ${currentLayer.color}40, inset 0 0 40px ${currentLayer.color}20`,
            `0 0 20px ${currentLayer.color}20, inset 0 0 20px ${currentLayer.color}10`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          key={activeLayer}
          className="material-symbols-outlined text-4xl"
          style={{ color: currentLayer.color }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {currentLayer.icon}
        </motion.span>
      </motion.div>

      {/* Orbiting dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i === activeLayer ? currentLayer.color : "#333",
            boxShadow: i === activeLayer ? `0 0 10px ${currentLayer.color}` : "none",
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: Math.cos((i / 4) * Math.PI * 2 + Date.now() / 2000) * 90 - 4,
            y: Math.sin((i / 4) * Math.PI * 2 + Date.now() / 2000) * 90 - 4,
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  );
}

// Security Layer Card
function SecurityCard({
  layer,
  index,
  isActive,
  onClick
}: {
  layer: typeof securityLayers[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Connection line to center */}
      <motion.div
        className="absolute top-1/2 h-px"
        style={{
          width: 60,
          left: index % 2 === 0 ? "100%" : "auto",
          right: index % 2 === 0 ? "auto" : "100%",
          background: isActive
            ? `linear-gradient(${index % 2 === 0 ? "90deg" : "270deg"}, ${layer.color}, transparent)`
            : "linear-gradient(90deg, #333, transparent)",
        }}
        animate={{ opacity: isActive ? 1 : 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative p-6 rounded-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: isActive ? `${layer.color}08` : "rgba(13, 13, 13, 0.8)",
          border: `1px solid ${isActive ? `${layer.color}50` : "#1f1f1f"}`,
        }}
        whileHover={{ scale: 1.02 }}
        animate={{
          boxShadow: isActive
            ? `0 0 30px ${layer.color}20, inset 0 0 30px ${layer.color}05`
            : "none",
        }}
      >
        {/* Accent bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: layer.color }}
          animate={{ opacity: isActive ? 1 : 0.3 }}
        />

        {/* Scan effect */}
        {isActive && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, ${layer.color}10, transparent, ${layer.color}05)`,
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${layer.color}15`,
              border: `1px solid ${layer.color}30`,
            }}
            animate={{
              scale: isActive ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ color: layer.color }}
            >
              {layer.icon}
            </span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-white">{layer.title}</h4>
              <motion.span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: isActive ? layer.color : "transparent",
                  color: isActive ? "#0A0A0A" : layer.color,
                  border: `1px solid ${layer.color}50`,
                }}
                animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
              >
                {layer.badge}
              </motion.span>
            </div>
            <p className="text-sm text-[#A89F91] leading-relaxed">
              {layer.description}
            </p>
          </div>
        </div>

        {/* Active indicator particles */}
        {isActive && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: layer.color,
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function SecurityAnimation() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Auto-advance layers
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentLayer = securityLayers[activeLayer];

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030206 0%, #0A0A0A 50%, #030206 100%)" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(135, 92, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(135, 92, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating hexagons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <HexNode
            key={i}
            x={Math.random() * 100 + "%"}
            y={Math.random() * 100 + "%"}
            size={30 + Math.random() * 40}
            delay={Math.random() * 2}
            isActive={Math.floor(i / 5) === activeLayer}
            pulseColor={securityLayers[Math.floor(i / 5) % 4].color}
          />
        ))}
      </div>

      {/* Scan line */}
      <ScanLine isActive={true} />

      <motion.div
        className="relative max-w-7xl mx-auto px-6"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(135, 92, 255, 0.1)",
              border: "1px solid rgba(135, 92, 255, 0.3)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#F3FF97]"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#A89F91] tracking-wider uppercase">
              Security Architecture
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Four Layers of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${currentLayer.color}, #875CFF)`,
              }}
            >
              Protection
            </span>
          </h2>

          <p className="text-[#A89F91] text-lg max-w-2xl mx-auto">
            Enterprise-grade security stack protecting your assets at every level
          </p>
        </motion.div>

        {/* Main content - Cards on sides, Core in center */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left cards */}
          <div className="space-y-6">
            {securityLayers.slice(0, 2).map((layer, i) => (
              <SecurityCard
                key={layer.id}
                layer={layer}
                index={i}
                isActive={activeLayer === i}
                onClick={() => setActiveLayer(i)}
              />
            ))}
          </div>

          {/* Center - Core visualization */}
          <div className="flex items-center justify-center py-12">
            <div className="relative">
              {/* Data streams to center */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const radius = 150;
                  return (
                    <DataParticle
                      key={i}
                      startX={Math.cos(angle) * radius + 96}
                      startY={Math.sin(angle) * radius + 96}
                      endX={96}
                      endY={96}
                      delay={i * 0.3}
                      color={securityLayers[i % 4].color}
                    />
                  );
                })}
              </div>

              <SecurityCore activeLayer={activeLayer} />

              {/* Layer indicator dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {securityLayers.map((layer, i) => (
                  <motion.button
                    key={i}
                    className="w-3 h-3 rounded-full transition-all"
                    style={{
                      background: activeLayer === i ? layer.color : "#333",
                      boxShadow: activeLayer === i ? `0 0 15px ${layer.color}` : "none",
                    }}
                    onClick={() => setActiveLayer(i)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="space-y-6">
            {securityLayers.slice(2, 4).map((layer, i) => (
              <SecurityCard
                key={layer.id}
                layer={layer}
                index={i + 2}
                isActive={activeLayer === i + 2}
                onClick={() => setActiveLayer(i + 2)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://t.me/ccbotio_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg"
            style={{
              background: `linear-gradient(135deg, ${currentLayer.color}, #875CFF)`,
              color: "#0A0A0A",
            }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${currentLayer.color}50` }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined">lock</span>
            Experience Secure Wallet
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
