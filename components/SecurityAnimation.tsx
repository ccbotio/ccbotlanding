"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const phases = [
  {
    id: 1,
    phase: "01/04",
    icon: "fingerprint",
    title: "Passkey Authentication",
    description: "Your device's biometric secures your wallet. Private keys are stored in the secure enclave - they never leave your device. No seed phrases to lose, no passwords to steal.",
    features: [
      "Face ID / Touch ID protected",
      "Hardware-backed key storage",
      "Phishing-resistant by design",
    ],
  },
  {
    id: 2,
    phase: "02/04",
    icon: "verified_user",
    title: "Human Verification",
    description: "15-second biometric liveness check proves you're a unique human. No KYC documents, no personal data stored. Cryptographic proof without compromising privacy.",
    features: [
      "Zero personal data collection",
      "Sybil attack prevention",
      "Privacy-preserving proof",
    ],
  },
  {
    id: 3,
    phase: "03/04",
    icon: "shield",
    title: "Anti-Bot Defense",
    description: "Multi-layer protection against automated attacks and reward farmers. Behavioral analysis, rate limiting, and verification gates ensure only real humans participate.",
    features: [
      "Real-time bot detection",
      "Behavior pattern analysis",
      "Automated threat blocking",
    ],
  },
  {
    id: 4,
    phase: "04/04",
    icon: "visibility_off",
    title: "Canton Privacy Layer",
    description: "Built on the only public blockchain with configurable privacy. Your transactions, your control. Selective disclosure means you share only what you choose.",
    features: [
      "Configurable transaction privacy",
      "Selective data disclosure",
      "Institutional-grade compliance",
    ],
  },
];

// Isometric Layer Component
function IsometricLayer({
  index,
  isActive,
  phase
}: {
  index: number;
  isActive: boolean;
  phase: number;
}) {
  const sizes = [200, 220, 240, 260];
  const offsets = [0, -70, -140, -210];
  const opacities = [1, 0.5, 0.3, 0.15];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: sizes[index],
        height: sizes[index],
        marginLeft: -sizes[index] / 2,
        marginTop: offsets[index] - sizes[index] / 2,
        transform: "rotateX(60deg) rotateZ(-45deg)",
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isActive ? 1.08 : 1,
        opacity: isActive ? 1 : 0.3,
        z: isActive ? 20 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Layer background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `rgba(243, 255, 151, ${opacities[index]})`,
          border: `2px solid rgba(243, 255, 151, ${isActive ? 0.8 : 0.3})`,
          boxShadow: isActive
            ? `0 ${30 - index * 5}px ${60 - index * 10}px rgba(0,0,0,0.4), 0 0 40px rgba(243, 255, 151, 0.3)`
            : `0 ${30 - index * 5}px ${60 - index * 10}px rgba(0,0,0,0.2)`,
        }}
        animate={{
          boxShadow: isActive
            ? `0 ${30 - index * 5}px ${60 - index * 10}px rgba(0,0,0,0.4), 0 0 60px rgba(243, 255, 151, 0.5)`
            : `0 ${30 - index * 5}px ${60 - index * 10}px rgba(0,0,0,0.2)`,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Layer content based on index */}
      {index === 0 && <PasskeyLayerContent isActive={isActive} />}
      {index === 1 && <HumanVerificationContent isActive={isActive} />}
      {index === 2 && <AntiBotContent isActive={isActive} />}
      {index === 3 && <PrivacyLayerContent isActive={isActive} />}
    </motion.div>
  );
}

// Layer 1: Passkey icons
function PasskeyLayerContent({ isActive }: { isActive: boolean }) {
  const icons = ["fingerprint", "face", "key", "smartphone"];

  return (
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
      {icons.map((icon, i) => (
        <motion.div
          key={icon}
          className="flex items-center justify-center"
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? 1 : 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: isActive ? i * 0.2 : 0,
            repeat: isActive ? Infinity : 0,
            repeatDelay: 1.5,
          }}
        >
          <span
            className="material-symbols-outlined text-[#0A0A0A]"
            style={{ fontSize: "28px" }}
          >
            {icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Layer 2: Concentric rings
function HumanVerificationContent({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border-2 border-[#F3FF97]"
          style={{
            width: `${40 + ring * 30}%`,
            height: `${40 + ring * 30}%`,
          }}
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
            opacity: isActive ? [0.3, 0.8, 0.3] : 0.3,
          }}
          transition={{
            duration: 2,
            delay: ring * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
      {isActive && (
        <motion.span
          className="material-symbols-outlined text-[#0A0A0A] z-10"
          style={{ fontSize: "32px" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          person
        </motion.span>
      )}
    </div>
  );
}

// Layer 3: Rotating squares
function AntiBotContent({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((sq) => (
        <motion.div
          key={sq}
          className="absolute border-2 border-[#F3FF97]/70"
          style={{
            width: `${80 - sq * 15}%`,
            height: `${80 - sq * 15}%`,
          }}
          animate={{
            rotate: isActive
              ? sq % 2 === 0 ? 360 : -360
              : sq * 15,
          }}
          transition={{
            duration: 8 - sq * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Layer 4: Grid of dots
function PrivacyLayerContent({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full bg-[#F3FF97]/50 border border-[#F3FF97]/30"
          animate={{
            opacity: isActive ? [0.3, 1, 0.3] : 0.3,
            scale: isActive ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            delay: isActive ? (i % 4) * 0.1 + Math.floor(i / 4) * 0.1 : 0,
            repeat: isActive ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        />
      ))}
    </div>
  );
}

// Floating particles
function Particles({ activePhase }: { activePhase: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#F3FF97]"
          style={{
            left: `${45 + Math.random() * 10}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -400 - Math.random() * 200],
            opacity: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function SecurityAnimation() {
  const [activePhase, setActivePhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const PHASE_DURATION = 6000; // 6 seconds per phase

  const nextPhase = useCallback(() => {
    setActivePhase((prev) => (prev + 1) % 4);
    setProgress(0);
  }, []);

  // Auto-advance phases
  useEffect(() => {
    if (isPaused || !isInView) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextPhase();
          return 0;
        }
        return prev + (100 / (PHASE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, isInView, nextPhase]);

  const currentPhase = phases[activePhase];

  return (
    <section
      id="security-animation"
      className="py-24 relative overflow-hidden bg-[#0A0A0A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        viewport={{ once: false, amount: 0.3 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[600px]">
          {/* Left Side - Animated Visual (60%) */}
          <div className="lg:col-span-3 relative h-[500px]" style={{ perspective: "1000px" }}>
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-[#F3FF97]/30 to-transparent" />

            {/* Particles */}
            <Particles activePhase={activePhase} />

            {/* Isometric Layers */}
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {[0, 1, 2, 3].map((index) => (
                <IsometricLayer
                  key={index}
                  index={index}
                  isActive={activePhase === index}
                  phase={activePhase}
                />
              ))}
            </div>

            {/* Active indicator glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(243, 255, 151, 0.15) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Right Side - Text Explanation (40%) */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="mb-8">
              <span className="text-[#F3FF97] text-xs font-semibold tracking-[3px] uppercase">
                Security Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Four Layers of Protection
              </h2>
            </div>

            {/* Dynamic Explanation Card */}
            <motion.div
              className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-3xl p-8"
              layout
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phase indicator */}
                  <span className="text-[#F3FF97] text-sm font-semibold">
                    {currentPhase.phase}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F3FF97]/10 border border-[#F3FF97]/20 flex items-center justify-center my-4">
                    <span className="material-symbols-outlined text-[#F3FF97] text-3xl">
                      {currentPhase.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {currentPhase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A89F91] text-base leading-relaxed mb-6">
                    {currentPhase.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {currentPhase.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="material-symbols-outlined text-[#F3FF97] text-lg">
                          check
                        </span>
                        <span className="text-[#A89F91] text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="h-1 bg-[#1F1F1F] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#F3FF97] rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {phases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActivePhase(i);
                      setProgress(0);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activePhase === i
                        ? "bg-[#F3FF97] shadow-[0_0_10px_rgba(243,255,151,0.5)]"
                        : "bg-[#1F1F1F] hover:bg-[#2F2F2F]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://t.me/ccbotio_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F3FF97] text-[#0A0A0A] px-6 py-3 rounded-full font-semibold mt-8 hover:bg-[#e8f085] transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="material-symbols-outlined text-lg">lock</span>
              Experience Secure Wallet
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
