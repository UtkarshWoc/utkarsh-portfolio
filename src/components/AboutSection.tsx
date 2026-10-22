"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, Sparkles, Terminal, MapPin, CheckCircle2 } from "lucide-react";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { icon: Zap, label: "Performance-Obsessed", desc: "Sub-millisecond query optimization & zero-overhead code", color: "#00f5d4" },
  { icon: Terminal, label: "Algorithmic Rigor", desc: "Expert on Codeforces, deep mastery of graph theory & DP", color: "#9047ff" },
  { icon: Sparkles, label: "Awwwards Creative Craft", desc: "Interactive WebGL, GSAP timelines, fluid microinteractions", color: "#ffbe0b" },
  { icon: Code2, label: "End-to-End Architecture", desc: "Next.js, FastAPI, Go microservices, event streams & Docker", color: "#ff6584" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".about-image-card",
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".about-trait-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-traits-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 z-10">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-400">
            01 / Identity &amp; Philosophy
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="about-content lg:col-span-7">
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Bridging{" "}
              <span className="font-serif italic font-normal text-purple-300">
                algorithmic rigor
              </span>{" "}
              with digital craftsmanship.
            </h2>

            <div className="space-y-4 mb-8 text-zinc-300 text-base md:text-lg leading-relaxed font-normal">
              <p>
                I&apos;m <span className="text-white font-medium">Utkarsh</span>, a software engineer who operates at the crossroads of computational algorithms and immersive web design. I don&apos;t just code features; I engineer experiences that feel alive, responsive, and mathematically sound.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                Whether deploying geospatial real-time seismic detection engines (QuakeScan), writing custom GLSL shaders, or tackling Codeforces Division 1 contests, I build for scale, beauty, and resilience.
              </p>
            </div>

            {/* Trait Cards */}
            <div className="about-traits-grid grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.label}
                    onMouseEnter={() => playMicroSound("hover")}
                    className="about-trait-item glass p-4 rounded-xl border transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 group"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.08)",
                      background: "rgba(12, 12, 22, 0.6)",
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          background: `${trait.color}18`,
                          color: trait.color,
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <span className="font-mono text-xs font-semibold text-white">
                        {trait.label}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-snug pl-9">
                      {trait.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Avatar Card */}
          <div className="about-image-card lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glowing ambient halo */}
              <div
                className="absolute -inset-4 rounded-2xl blur-3xl opacity-25"
                style={{
                  background: "radial-gradient(circle, var(--accent-primary), var(--accent-teal), transparent 70%)",
                }}
              />

              {/* Main Avatar Card Frame */}
              <div
                className="relative rounded-2xl glass p-2.5 border overflow-hidden transition-all duration-500 hover:border-purple-400/60"
                style={{
                  borderColor: "rgba(144, 71, 255, 0.25)",
                  background: "rgba(10, 10, 18, 0.8)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(144, 71, 255, 0.1)",
                }}
              >
                {/* Top card header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 text-[11px] font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5 text-teal-400">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping inline-block" />
                    SYSTEM ID: UTKARSH.ENG
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <MapPin size={11} /> 12.97°N, 77.59°E
                  </span>
                </div>

                {/* Avatar Image container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-zinc-800/80 group">
                  <Image
                    src="/utkarsh_avatar.jpg"
                    alt="Utkarsh - Full Stack Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle scanline overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "100% 4px",
                    }}
                  />
                </div>

                {/* Bottom Card Details */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-white text-base">
                      Utkarsh
                    </div>
                    <div className="font-mono text-[11px] text-purple-300">
                      Full-Stack &bull; CP Competitor
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-[11px]">
                    <CheckCircle2 size={12} />
                    Open to Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
