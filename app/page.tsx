"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerBar from "@/components/PartnerBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import RewardsEngine from "@/components/RewardsEngine";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Partners from "@/components/Partners";
import {
  GlowingScrollProgress,
  MagneticMouse,
  FloatingParticles,
  MorphingBlobs,
  RippleEffect,
  FilmGrain,
  ScrollLightBeam,
  CornerAccents,
  ScrollVignette,
} from "@/components/PremiumEffects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Quantum Genesis Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content with staggered reveal */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            className="min-h-screen bg-background-dark relative overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Premium Visual Effects */}
            <GlowingScrollProgress />
            <MagneticMouse />
            <FloatingParticles />
            <MorphingBlobs />
            <RippleEffect />
            <FilmGrain />
            <ScrollLightBeam />
            <CornerAccents />
            <ScrollVignette />

            {/* Main Content */}
            <Header />
            <Hero />
            <PartnerBar />
            <Features />
            <HowItWorks />
            <RewardsEngine />
            <Partners />
            <CTA />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
