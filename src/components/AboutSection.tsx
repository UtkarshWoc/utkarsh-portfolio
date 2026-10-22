"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { emoji: "⚡", label: "Performance-obsessed" },
  { emoji: "🧠", label: "Algorithmic thinker" },
  { emoji: "🎨", label: "Design-minded dev" },
  { emoji: "🔧", label: "Systems builder" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".about-trait",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-traits",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32"
    >
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent-primary)" }}>
            01 / About
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="about-content">
            <h2
              className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Crafting{" "}
              <span className="gradient-text">experiences</span>
              <br />
              that matter.
            </h2>

            <div className="space-y-5 mb-10" style={{ color: "var(--text-secondary)" }}>
              <p className="text-lg leading-relaxed">
                I&apos;m a full-stack developer and competitive programmer who thrives at the intersection 
                of <span style={{ color: "var(--accent-primary)" }}>engineering rigor</span> and{" "}
                <span style={{ color: "var(--accent-teal)" }}>creative expression</span>. 
                I love building things that feel alive.
              </p>
              <p className="leading-relaxed">
                From crafting WebGL shaders to optimizing database queries, I care deeply about 
                every layer of the stack. When I&apos;m not shipping products, you&apos;ll find me 
                grinding competitive programming on Codeforces or contributing to open source.
              </p>
              <p className="leading-relaxed">
                I&apos;ve worked with startups and enterprises across India, helping them build 
                products used by thousands of users. My freelance work spans from MVPs to 
                production-grade systems.
              </p>
            </div>

            {/* Traits */}
            <div className="about-traits grid grid-cols-2 gap-3">
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className="about-trait glass flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-300 hover:border-[var(--accent-primary)]"
                  style={{ borderRadius: "4px" }}
                >
                  <span className="text-xl">{trait.emoji}</span>
                  <span className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
                    {trait.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="about-image flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, var(--accent-primary), transparent)" }}
              />

              {/* Avatar box */}
              <div
                className="relative w-80 h-80 glass overflow-hidden"
                style={{ borderRadius: "8px" }}
              >
                {/* Placeholder avatar with initials */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.1))",
                  }}
                >
                  <span
                    className="font-display text-8xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-teal))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    U
                  </span>
                </div>

                {/* Overlay grid */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 glass px-4 py-3 flex flex-col"
                style={{ borderRadius: "4px", minWidth: "140px" }}
              >
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  Current Status
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "var(--accent-teal)",
                      boxShadow: "0 0 8px var(--accent-teal)",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: "var(--accent-teal)" }}
                  >
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
