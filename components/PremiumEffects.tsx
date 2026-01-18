"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

// Aurora Borealis Background Effect
export function AuroraBackground() {
  const { scrollYProgress } = useScroll();

  const hue1 = useTransform(scrollYProgress, [0, 0.5, 1], [60, 80, 60]);
  const hue2 = useTransform(scrollYProgress, [0, 0.5, 1], [120, 60, 120]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30"
        style={{
          y: y1,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%,
              hsla(${hue1}, 100%, 70%, 0.15) 0%,
              transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%,
              hsla(${hue2}, 100%, 70%, 0.1) 0%,
              transparent 50%)
          `,
        }}
      />
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] opacity-20"
        style={{
          y: y2,
          background: `
            radial-gradient(ellipse 50% 80% at 70% 20%,
              rgba(243, 255, 151, 0.2) 0%,
              transparent 60%)
          `,
        }}
      />
    </div>
  );
}

// Floating Particles System
export function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#F3FF97]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Smooth Reveal Text Animation
export function RevealText({
  children,
  className = ""
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Liquid Section Transition
export function LiquidTransition() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke="rgba(243, 255, 151, 0.1)"
          strokeWidth="0.5"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

// Interactive Ripple Effect
export function RippleEffect() {
  const [ripples, setRipples] = useState<Array<{
    id: number;
    x: number;
    y: number;
  }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const id = Date.now();
      const x = 50 + (Math.random() - 0.5) * 30;
      const y = (window.scrollY / document.body.scrollHeight) * 100;

      setRipples(prev => [...prev.slice(-5), { id, x, y }]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border border-[#F3FF97]/30"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          onAnimationComplete={() => {
            setRipples(prev => prev.filter(r => r.id !== ripple.id));
          }}
        />
      ))}
    </div>
  );
}

// Magnetic Mouse Follower
export function MagneticMouse() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[9998]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(243, 255, 151, 0.06) 0%, transparent 70%)',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-[#F3FF97]/50 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}

// Scroll-based Card 3D Effect
export function Card3D({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / rect.height) * -10;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

// Scroll Progress with Glow
export function GlowingScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Background line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#1a1a1a] z-[100]" />
      {/* Progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #F3FF97 0%, #d4e157 50%, #F3FF97 100%)',
          boxShadow: '0 0 20px rgba(243, 255, 151, 0.5), 0 0 40px rgba(243, 255, 151, 0.3)',
        }}
      />
    </>
  );
}

// Text Scramble Effect on Scroll
export function ScrambleText({
  children,
  className = ""
}: {
  children: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(children);
  const [hasAnimated, setHasAnimated] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const scramble = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    let iteration = 0;
    const maxIterations = children.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return children[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(children);
      }
    }, 30);
  }, [children, hasAnimated]);

  return (
    <motion.span
      className={className}
      onViewportEnter={scramble}
      viewport={{ once: true }}
    >
      {displayText}
    </motion.span>
  );
}

// Morphing Background Blobs
export function MorphingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-50">
      <motion.div
        className="absolute w-[600px] h-[600px] -top-[300px] -left-[300px]"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(243, 255, 151, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] -bottom-[250px] -right-[250px]"
        animate={{
          borderRadius: [
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(243, 255, 151, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}

// Scroll Velocity Text
export function VelocityText() {
  const { scrollY } = useScroll();
  const [velocity, setVelocity] = useState(0);
  const prevScrollY = useRef(0);

  useAnimationFrame(() => {
    const currentScrollY = scrollY.get();
    const newVelocity = currentScrollY - prevScrollY.current;
    setVelocity(newVelocity);
    prevScrollY.current = currentScrollY;
  });

  const skewX = useSpring(velocity * 0.5, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[#F3FF97]/20 text-sm font-mono z-50 pointer-events-none"
      style={{ skewX }}
    >
      {Math.abs(velocity) > 5 ? '◆◆◆' : '◇◇◇'}
    </motion.div>
  );
}

// Subtle Film Grain Overlay
export function FilmGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Smooth Light Beam that follows scroll
export function ScrollLightBeam() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0]);

  return (
    <motion.div
      className="fixed left-0 w-[1px] h-32 pointer-events-none z-[5]"
      style={{
        top: y,
        opacity,
        background: 'linear-gradient(to bottom, transparent, #F3FF97, transparent)',
        boxShadow: '0 0 20px #F3FF97, 0 0 40px #F3FF97',
      }}
    />
  );
}

// Floating Geometric Shapes
export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 60, x: 10, delay: 0 },
    { type: 'square', size: 40, x: 85, delay: 2 },
    { type: 'triangle', size: 50, x: 70, delay: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${shape.x}%`, top: '20%' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 20 + i * 5,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full border border-[#F3FF97]/20"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="border border-[#F3FF97]/20 rotate-45"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="border-l border-b border-[#F3FF97]/20"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size/2}px solid transparent`,
                borderRight: `${shape.size/2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(243, 255, 151, 0.1)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Scroll-based Vignette Effect
export function ScrollVignette() {
  const { scrollYProgress } = useScroll();
  const intensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{
        opacity: intensity,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
      }}
    />
  );
}

// Subtle Gradient Shift on Scroll
export function GradientShift() {
  const { scrollYProgress } = useScroll();
  const hue = useTransform(scrollYProgress, [0, 0.5, 1], [60, 65, 60]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{
        background: useTransform(hue, (h) =>
          `radial-gradient(ellipse 80% 50% at 50% 50%, hsla(${h}, 100%, 75%, 0.1) 0%, transparent 60%)`
        ),
      }}
    />
  );
}

// Elegant Corner Accents
export function CornerAccents() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3]">
      {/* Top Left */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-[#F3FF97]/40 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-[#F3FF97]/40 to-transparent" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-gradient-to-l from-[#F3FF97]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-gradient-to-t from-[#F3FF97]/40 to-transparent" />
      </motion.div>
    </div>
  );
}
