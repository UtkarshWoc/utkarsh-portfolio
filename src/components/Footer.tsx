"use client";

import { Heart, Sparkles } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";
import { playMicroSound } from "./AudioAmbient";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="relative py-12 mt-20 z-10 border-t"
      style={{
        borderColor: "rgba(255, 255, 255, 0.08)",
        background: "rgba(5, 5, 8, 0.9)",
      }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold gradient-text">U.</span>
            <span className="font-mono text-xs text-zinc-400">
              Utkarsh &bull; Full-Stack &amp; Competitive Algorithms
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["About", "Projects", "Algorithms", "Skills", "Experience", "Blog", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onMouseEnter={() => playMicroSound("hover")}
                className="font-mono text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/UtkarshWoc", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={() => playMicroSound("hover")}
                onClick={() => playMicroSound("click")}
                className="text-zinc-400 hover:text-purple-400 transition-all hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs font-mono text-zinc-500">
          <p>© {year} Utkarsh. Engineered with Next.js 15, Three.js, and GSAP.</p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Sparkles size={13} className="text-yellow-400" />
            <span>Awwwards Developer SOTD Inspired Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
