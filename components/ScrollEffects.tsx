"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Premium Scroll Progress Indicator
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F3FF97] via-[#d4e157] to-[#F3FF97] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// Floating Orb that follows scroll
export function ScrollOrb() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  const springY = useSpring(y, { stiffness: 50, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className="fixed right-10 top-1/4 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
      style={{
        y: springY,
        scale: springScale,
        opacity,
        background: "radial-gradient(circle, rgba(243, 255, 151, 0.15) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}

// Magnetic Section Wrapper
export function MagneticSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? -mousePosition.y : 0,
        rotateY: isHovered ? mousePosition.x : 0,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// Reveal on Scroll with Blur Effect
export function BlurReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(20px)", y: 60 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Children Animation
export function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax Text Effect
export function ParallaxText({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ y: springY }}>
      {children}
    </motion.div>
  );
}

// Smooth Section Divider with Animation
export function SectionDivider() {
  return (
    <motion.div
      className="relative h-px w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3FF97]/50 to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
    </motion.div>
  );
}

// Custom Cursor Glow (follows mouse)
export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
        opacity: isVisible ? 0.15 : 0,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{
        background: "radial-gradient(circle, rgba(243, 255, 151, 0.4) 0%, transparent 70%)",
      }}
    />
  );
}

// Number Counter Animation
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, (duration * 1000) / steps);
      }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}
