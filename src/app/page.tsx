import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Background layer */}
      <ParticleBackground />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />

      {/* Divider */}
      <div className="section-divider" />

      <AboutSection />
      <div className="section-divider" />

      <ProjectsSection />
      <div className="section-divider" />

      <SkillsSection />
      <div className="section-divider" />

      <ExperienceSection />
      <div className="section-divider" />

      <BlogSection />
      <div className="section-divider" />

      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
