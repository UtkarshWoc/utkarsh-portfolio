"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 mt-20"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold gradient-text">U.</span>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              — Crafted with{" "}
              <Heart size={10} className="inline" style={{ color: "var(--accent-secondary)" }} />
              {" "}and GSAP
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["About", "Projects", "Blog", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-widest uppercase animated-underline"
                style={{ color: "var(--text-muted)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} Utkarsh. Inspired by Awwwards award-winning portfolios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
