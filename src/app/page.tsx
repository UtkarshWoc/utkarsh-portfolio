import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AlgorithmsSection from "@/components/AlgorithmsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-purple-500/30 selection:text-white" style={{ background: "var(--bg-primary)" }}>
      {/* Three.js WebGL Interactive 3D Particle Mesh Background */}
      <ThreeCanvas />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Dynamic Navigation with Ambient Audio Toggle */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Decorative Divider */}
      <div className="section-divider" />

      {/* 01: About Section */}
      <AboutSection />
      <div className="section-divider" />

      {/* 02: Projects Portfolio */}
      <ProjectsSection />
      <div className="section-divider" />

      {/* 03: Algorithmic Mastery & Interactive Terminal */}
      <AlgorithmsSection />
      <div className="section-divider" />

      {/* 04: Skills & Tech Stack */}
      <SkillsSection />
      <div className="section-divider" />

      {/* 05: Experience & Timeline */}
      <ExperienceSection />
      <div className="section-divider" />

      {/* 06: Technical Publications & Blog */}
      <BlogSection />
      <div className="section-divider" />

      {/* 07: Contact & Transmission */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
