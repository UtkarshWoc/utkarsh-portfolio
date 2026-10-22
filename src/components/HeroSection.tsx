"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Mail, Sparkles, Terminal, Compass } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";
import { playMicroSound } from "./AudioAmbient";

const socials = [
  { icon: Github, href: "https://github.com/UtkarshWoc", label: "GitHub" },
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
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 80, skewY: 5 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.08 },
          "-=0.3"
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
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          socialRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6 },
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
      style={{ paddingTop: "120px", paddingBottom: "80px" }}
    >
      {/* Left social strip */}
      <div
        ref={socialRef}
        className="fixed left-6 bottom-0 z-30 hidden xl:flex flex-col items-center gap-6"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onMouseEnter={() => playMicroSound("hover")}
            onClick={() => playMicroSound("click")}
            className="transition-all duration-300 hover:-translate-y-1.5"
            style={{ color: "var(--text-secondary)" }}
          >
            <Icon size={18} className="hover:text-[var(--accent-teal)] transition-colors" />
          </a>
        ))}
        <div
          className="w-px h-24"
          style={{ background: "linear-gradient(180deg, var(--accent-primary), transparent)" }}
        />
      </div>

      {/* Right email strip */}
      <div className="fixed right-6 bottom-0 z-30 hidden xl:flex flex-col items-center gap-6">
        <a
          href="mailto:utkarsh@example.com"
          onMouseEnter={() => playMicroSound("hover")}
          onClick={() => playMicroSound("click")}
          className="font-mono text-xs tracking-widest transition-all duration-300 hover:-translate-y-1.5 hover:text-[var(--accent-teal)]"
          style={{
            color: "var(--text-secondary)",
            writingMode: "vertical-rl",
          }}
        >
          utkarsh.engr@outlook.com
        </a>
        <div
          className="w-px h-24"
          style={{ background: "linear-gradient(180deg, var(--accent-primary), transparent)" }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Top badges */}
        <div className="hero-tag flex flex-wrap items-center gap-3 mb-8">
          <span className="tag flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse inline-block"
              style={{ background: "var(--accent-teal)" }}
            />
            Available for High-Impact Projects &bull; 2026
          </span>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-950/20 text-xs font-mono text-purple-300">
            <Compass size={12} className="text-teal-400" />
            Bengaluru / Global Remote
          </span>
        </div>

        {/* Editorial Awwwards Main Heading */}
        <h1
          ref={headingRef}
          className="font-display font-bold leading-[0.98] mb-8 tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 7.8vw, 7.5rem)" }}
        >
          <div className="overflow-hidden">
            <span className="hero-word inline-block font-serif italic font-normal text-purple-300/90 mr-4">
              Ambitious
            </span>
            <span className="hero-word inline-block text-white">Code.</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word inline-block gradient-text">
              Unforgettable
            </span>
          </div>
          <div className="overflow-hidden flex flex-wrap items-center gap-4">
            <span className="hero-word inline-block text-white">
              Interfaces.
            </span>
            <span className="hero-word hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-full bg-teal-950/20">
              <Sparkles size={12} className="text-yellow-400" />
              Crafted by Utkarsh
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12 text-zinc-300 font-normal"
        >
          Full-Stack Software Engineer & Competitive Programmer. I build{" "}
          <span className="text-purple-300 font-medium">real-time distributed platforms</span>,
          design immersive WebGL interfaces, and solve complex computational challenges with{" "}
          <span className="text-teal-300 font-mono text-base">O(log N)</span> precision.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#projects"
            onMouseEnter={() => playMicroSound("hover")}
            onClick={() => playMicroSound("click")}
            className="inline-flex items-center gap-2.5 px-8 py-4 font-mono text-sm tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, var(--accent-primary), #4f46e5)",
              borderRadius: "4px",
              boxShadow: "0 0 35px rgba(144, 71, 255, 0.4)",
            }}
          >
            Explore Projects
            <ArrowDown size={16} className="animate-bounce" />
          </a>
          <a
            href="#algorithms"
            onMouseEnter={() => playMicroSound("hover")}
            onClick={() => playMicroSound("click")}
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(0, 245, 212, 0.4)",
              color: "var(--accent-teal)",
              background: "rgba(0, 245, 212, 0.05)",
              borderRadius: "4px",
            }}
          >
            <Terminal size={15} />
            Interactive Benchmarks
          </a>
        </div>

        {/* Stats row with glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {[
            { value: "50+", label: "Projects Shipped", sub: "Production & Open Source" },
            { value: "1800+", label: "CP Max Rating", sub: "Codeforces Expert" },
            { value: "0.04ms", label: "Query Latency", sub: "Optimized Range Trees" },
            { value: "3+ Yrs", label: "Full-Stack Craft", sub: "Next.js, Go, Python" },
          ].map((stat) => (
            <div
              key={stat.label}
              onMouseEnter={() => playMicroSound("hover")}
              className="glass p-4 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40"
              style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
            >
              <div className="font-display text-2xl lg:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          scroll to explore
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(180deg, var(--accent-primary), transparent)",
          }}
        />
      </div>
    </section>
  );
}
