"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";

import Features from "@/components/Features";
import SecuritySection from "@/components/SecuritySection";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-background-light relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <div className="section-divider" />
      <Waitlist />

      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <SecuritySection />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Partners />
      <ContactSection />
      <Footer />
    </motion.main>
  );
}
