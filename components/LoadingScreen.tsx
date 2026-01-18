"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Particle component for the genesis effect
const Particle = ({ delay, index }: { delay: number; index: number }) => {
  const angle = (index / 60) * Math.PI * 2;
  const radius = 150 + Math.random() * 200;
  const endX = Math.cos(angle) * radius;
  const endY = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        background: index % 3 === 0 ? "#F3FF97" : index % 3 === 1 ? "#875CFF" : "#D5A5E3",
        boxShadow: index % 3 === 0
          ? "0 0 10px #F3FF97, 0 0 20px #F3FF97"
          : index % 3 === 1
            ? "0 0 10px #875CFF, 0 0 20px #875CFF"
            : "0 0 10px #D5A5E3, 0 0 20px #D5A5E3",
        left: "50%",
        top: "50%",
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, endX * 0.3, endX],
        y: [0, endY * 0.3, endY],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 1.5,
        delay: delay + 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    />
  );
};

// Network line component
const NetworkLine = ({ delay, startAngle, endAngle }: { delay: number; startAngle: number; endAngle: number }) => {
  const startRadius = 80;
  const endRadius = 120;
  const x1 = Math.cos(startAngle) * startRadius;
  const y1 = Math.sin(startAngle) * startRadius;
  const x2 = Math.cos(endAngle) * endRadius;
  const y2 = Math.sin(endAngle) * endRadius;

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x1}
      y2={y1}
      stroke="url(#lineGradient)"
      strokeWidth="1"
      initial={{ x2: x1, y2: y1, opacity: 0 }}
      animate={{ x2, y2, opacity: [0, 1, 0.5] }}
      transition={{ duration: 0.8, delay: delay + 1.2, ease: "easeOut" }}
    />
  );
};

// Glitch text effect
const GlitchText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.1 }}
    >
      <motion.span
        className="absolute text-[#875CFF] font-mono text-sm tracking-widest"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        animate={{
          x: [0, -2, 2, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 0.2, delay: delay + 0.1, repeat: 2 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute text-[#D5A5E3] font-mono text-sm tracking-widest"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        animate={{
          x: [0, 2, -2, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 0.2, delay: delay + 0.1, repeat: 2 }}
      >
        {text}
      </motion.span>
      <span className="font-mono text-sm tracking-widest text-white">{text}</span>
    </motion.div>
  );
};

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const particlesRef = useRef<number[]>([...Array(60)].map((_, i) => i));
  const linesRef = useRef<{ startAngle: number; endAngle: number }[]>(
    [...Array(12)].map((_, i) => ({
      startAngle: (i / 12) * Math.PI * 2,
      endAngle: ((i + 1) / 12) * Math.PI * 2 + Math.random() * 0.5,
    }))
  );

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),      // Genesis spark
      setTimeout(() => setPhase(2), 800),      // Particle explosion
      setTimeout(() => setPhase(3), 1800),     // Network formation
      setTimeout(() => setPhase(4), 2600),     // Logo reveal
      setTimeout(() => setPhase(5), 3400),     // Final pulse
      setTimeout(() => {
        setShowContent(false);
        setTimeout(onComplete, 500);
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, #030206 0%, #0a0a0f 50%, #0d0d12 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Scan lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
            }}
          />

          {/* Genesis Spark - Phase 1, hide when logo appears */}
          {phase < 4 && (
            <motion.div
              className="absolute"
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [0, 1.5, 1],
                opacity: [0, 1, 1],
              } : {}}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Core glow */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#F3FF97]"
                  animate={phase >= 1 ? {
                    boxShadow: [
                      "0 0 20px #F3FF97, 0 0 40px #F3FF97, 0 0 60px #875CFF",
                      "0 0 40px #F3FF97, 0 0 80px #F3FF97, 0 0 120px #875CFF",
                      "0 0 20px #F3FF97, 0 0 40px #F3FF97, 0 0 60px #875CFF",
                    ],
                  } : {}}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />

                {/* Pulse rings */}
                {phase >= 2 && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#875CFF]"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 8, opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#D5A5E3]"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 12, opacity: 0 }}
                      transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#F3FF97]"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 16, opacity: 0 }}
                      transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Particle Explosion - Phase 2 */}
          {phase >= 2 && (
            <div className="absolute">
              {particlesRef.current.map((i) => (
                <Particle key={i} index={i} delay={Math.random() * 0.3} />
              ))}
            </div>
          )}

          {/* Network Formation - Phase 3, stays visible with logo */}
          {phase >= 3 && (
            <motion.svg
              className="absolute w-[300px] h-[300px]"
              viewBox="-150 -150 300 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#875CFF" />
                  <stop offset="100%" stopColor="#D5A5E3" />
                </linearGradient>
              </defs>
              {linesRef.current.map((line, i) => (
                <NetworkLine
                  key={i}
                  delay={i * 0.05}
                  startAngle={line.startAngle}
                  endAngle={line.endAngle}
                />
              ))}
              {/* Network nodes - purple instead of yellow */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 100;
                return (
                  <motion.circle
                    key={i}
                    cx={Math.cos(angle) * radius}
                    cy={Math.sin(angle) * radius}
                    r="3"
                    fill="#875CFF"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                    style={{ filter: "drop-shadow(0 0 6px #875CFF)" }}
                  />
                );
              })}
            </motion.svg>
          )}

          {/* Logo Reveal - Phase 4 */}
          {phase >= 4 && (
            <>
              {/* Logo - exactly centered in the network circle */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(135, 92, 255, 0.5))",
                      "drop-shadow(0 0 40px rgba(135, 92, 255, 0.8))",
                      "drop-shadow(0 0 20px rgba(135, 92, 255, 0.5))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.img
                    src="/images/ccbotlogo.png"
                    alt="CC Bot"
                    className="w-28 h-28 rounded-3xl"
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>

              {/* Brand name - positioned below the network circle */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: "calc(50% + 100px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.4 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <GlitchText text="CC BOT WALLET" delay={2.8} />
                  <motion.p
                    className="text-[#A89F91] text-xs tracking-[0.3em] uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 0.4 }}
                  >
                    Initializing
                  </motion.p>
                </div>
              </motion.div>
            </>
          )}

          {/* Final Energy Pulse - Phase 5 */}
          {phase >= 5 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.8 }}
              style={{
                background: "radial-gradient(circle at center, rgba(243, 255, 151, 0.3) 0%, transparent 70%)",
              }}
            />
          )}

          {/* Corner decorations */}
          <div className="absolute top-8 left-8">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#F3FF97] animate-pulse" />
              <span className="text-[#A89F91] text-xs font-mono">SYS.INIT</span>
            </motion.div>
          </div>

          <div className="absolute bottom-8 right-8">
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="text-[#875CFF] text-xs font-mono">v2.0.0</div>
              <div className="text-[#A89F91] text-[10px] font-mono">QUANTUM.READY</div>
            </motion.div>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#1a1a1a] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#875CFF] via-[#D5A5E3] to-[#F3FF97] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
