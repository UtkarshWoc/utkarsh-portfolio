"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:utkarsh@example.com", label: "Email" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 80, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.08 },
          "-=0.2"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          socialRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "100px" }}
    >
      {/* Left social strip */}
      <div
        ref={socialRef}
        className="fixed left-8 bottom-0 z-30 hidden lg:flex flex-col items-center gap-6"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <Icon size={18} />
          </a>
        ))}
        <div
          className="w-px h-24"
          style={{ background: "linear-gradient(180deg, var(--accent-primary), transparent)" }}
        />
      </div>

      {/* Right email strip */}
      <div className="fixed right-8 bottom-0 z-30 hidden lg:flex flex-col items-center gap-6">
        <a
          href="mailto:utkarsh@example.com"
          className="font-mono text-xs tracking-widest transition-all duration-300 hover:-translate-y-1"
          style={{
            color: "var(--text-secondary)",
            writingMode: "vertical-rl",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          utkarsh@example.com
        </a>
        <div
          className="w-px h-24"
          style={{ background: "linear-gradient(180deg, var(--accent-primary), transparent)" }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Tag */}
        <div className="hero-tag mb-8">
          <span className="tag">
            <span
              className="w-2 h-2 rounded-full animate-pulse inline-block"
              style={{ background: "var(--accent-teal)" }}
            />
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="font-display font-bold leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          <div className="overflow-hidden">
            <span className="hero-word inline-block">Hello,</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word inline-block gradient-text">I&apos;m Utkarsh</span>
          </div>
          <div className="overflow-hidden flex flex-wrap gap-4">
            <span className="hero-word inline-block" style={{ color: "var(--text-secondary)" }}>
              Full-Stack
            </span>
            <span className="hero-word inline-block" style={{ color: "var(--text-secondary)" }}>
              Dev
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          I build{" "}
          <span style={{ color: "var(--accent-primary)" }}>immersive digital experiences</span>,
          solve algorithmic challenges, and craft{" "}
          <span style={{ color: "var(--accent-teal)" }}>scalable software</span> that ships.
          Competitive programmer by passion, freelance developer by practice.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--accent-primary), #8b5cf6)",
              borderRadius: "2px",
              boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)",
            }}
          >
            View My Work
            <ArrowDown size={16} className="animate-bounce" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid var(--accent-primary)",
              color: "var(--accent-primary)",
              borderRadius: "2px",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-12">
          {[
            { value: "50+", label: "Projects Shipped" },
            { value: "1800+", label: "CP Problems Solved" },
            { value: "3+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display text-3xl font-bold gradient-text"
              >
                {stat.value}
              </div>
              <div
                className="font-mono text-xs tracking-widest uppercase mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          scroll
        </span>
        <div
          className="w-px h-16"
          style={{
            background: "linear-gradient(180deg, var(--accent-primary), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
