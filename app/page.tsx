"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";

import Features from "@/components/Features";
import SecuritySection from "@/components/SecuritySection";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-background-light relative overflow-x-hidden"
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
      <Team />
      <div className="section-divider" />
      <Partners />
      <ContactSection />
      <Footer />
    </main>
  );
}
