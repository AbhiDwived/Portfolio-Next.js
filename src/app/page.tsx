"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SeoSection from "@/components/SeoSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingOrbs from "@/components/FloatingOrbs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ParticleBackground />
      <FloatingOrbs />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SeoSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
