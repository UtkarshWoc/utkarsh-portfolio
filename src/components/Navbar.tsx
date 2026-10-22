"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import AudioToggle, { playMicroSound } from "./AudioAmbient";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Algorithms", href: "#algorithms" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 glass" : "py-6 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo & Awwwards badge */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              onMouseEnter={() => playMicroSound("hover")}
              onClick={() => playMicroSound("click")}
              className="font-display text-xl font-bold tracking-tight group"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="gradient-text text-2xl font-black">U</span>
              <span className="text-purple-400">.</span>
              <span className="font-mono text-xs ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                dev
              </span>
            </a>

            {/* Awwwards Developer pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-purple-500/20 bg-purple-950/20 text-[10px] font-mono text-purple-300">
              <Sparkles size={11} className="text-yellow-400" />
              <span>Awwwards Inspo &bull; Developer Honoree</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => playMicroSound("hover")}
                onClick={() => playMicroSound("click")}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 animated-underline ${
                  active === link.href
                    ? "text-[var(--accent-teal)] font-medium"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls: Ambient Audio + Let's Talk CTA */}
          <div className="flex items-center gap-3">
            <AudioToggle />

            <a
              href="#contact"
              onMouseEnter={() => playMicroSound("hover")}
              onClick={() => playMicroSound("click")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), #6366f1)",
                color: "#ffffff",
                borderRadius: "9999px",
                boxShadow: "0 0 20px rgba(144, 71, 255, 0.3)",
              }}
            >
              Let&apos;s Talk ↳
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1.5 text-zinc-300 hover:text-white"
              onClick={() => {
                playMicroSound("click");
                setMenuOpen(!menuOpen);
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(5, 5, 10, 0.98)", backdropFilter: "blur(25px)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              playMicroSound("click");
              setMenuOpen(false);
            }}
            className="font-serif italic text-3xl sm:text-4xl transition-all duration-300 hover:text-[var(--accent-teal)]"
            style={{
              color: "var(--text-primary)",
              transitionDelay: `${i * 0.04}s`,
              transform: menuOpen ? "translateY(0)" : "translateY(15px)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
