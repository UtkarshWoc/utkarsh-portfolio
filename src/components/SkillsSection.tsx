"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { playMicroSound } from "./AudioAmbient";
import { Cpu, Layout, Server, Database, GitBranch, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillGroup {
  id: string;
  label: string;
  icon: typeof Layout;
  color: string;
  skills: { name: string; level: number; note: string }[];
}

const skillCategories: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend & Creative",
    icon: Layout,
    color: "#00f5d4",
    skills: [
      { name: "React 19 / Next.js 15", level: 96, note: "App Router, SSR/RSC, Server Actions" },
      { name: "TypeScript 5", level: 92, note: "Strict generics, type-level invariants" },
      { name: "Three.js / WebGL / GLSL", level: 82, note: "Parametric geometries, custom fragment shaders" },
      { name: "GSAP 3 / ScrollTrigger", level: 88, note: "Complex choreographies, timeline physics" },
      { name: "Tailwind CSS / Canvas API", level: 94, note: "Pixel-accurate responsive design systems" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    icon: Server,
    color: "#9047ff",
    skills: [
      { name: "Go / Microservices", level: 86, note: "Goroutines, gRPC, distributed services" },
      { name: "Python / FastAPI", level: 90, note: "Async endpoints, PyTorch model serving" },
      { name: "Node.js / Express", level: 90, note: "Event-driven pipelines, streaming APIs" },
      { name: "PostgreSQL / PostGIS", level: 88, note: "Complex indexing, geospatial spatial queries" },
      { name: "Redis / WebSockets", level: 85, note: "PubSub channels, sub-millisecond caching" },
    ],
  },
  {
    id: "cp",
    label: "Algorithms & CP",
    icon: Terminal,
    color: "#ffbe0b",
    skills: [
      { name: "Modern C++ (C++20/STL)", level: 94, note: "Memory management, zero-cost abstractions" },
      { name: "Advanced Data Structures", level: 92, note: "Segment Trees, Fenwick, Treaps, DSU" },
      { name: "Dynamic Programming", level: 88, note: "Digit DP, Bitmask DP, Convex Hull Trick" },
      { name: "Graph Theory", level: 90, note: "Max Flow (Dinic), Bridge Finding, Tarjan's SCC" },
      { name: "Number Theory / Combinatorics", level: 82, note: "Modular inverse, sieve, matrix exponentiation" },
    ],
  },
  {
    id: "devops",
    label: "Cloud & Architecture",
    icon: Database,
    color: "#ff6584",
    skills: [
      { name: "Docker / Containerization", level: 85, note: "Multi-stage builds, alpine minimization" },
      { name: "Kafka & Event Streaming", level: 78, note: "Partitioning, consumer groups, replayable logs" },
      { name: "CI/CD & GitHub Actions", level: 88, note: "Automated linting, testing, Docker registry deploy" },
      { name: "Linux Systems & Bash", level: 84, note: "Network diagnostics, systemd, memory profiling" },
      { name: "AWS / Cloudflare / Vercel", level: 82, note: "Edge workers, S3 pipelines, serverless functions" },
    ],
  },
];

const techCloud = [
  "Next.js", "React", "TypeScript", "Three.js", "GSAP", "TailwindCSS",
  "Go", "FastAPI", "Python", "C++", "PostgreSQL", "Redis",
  "Apache Kafka", "Docker", "WebSockets", "Web Audio API", "GLSL", "Git",
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentCategory = skillCategories[activeTab];

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 z-10">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-400">
            04 / Technical Arsenal
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Header */}
        <div className="skills-header mb-12">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Capabilities &amp;{" "}
            <span className="font-serif italic font-normal text-purple-300">
              Stack Mastery
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-2">
            Continuous deep-dive across systems engineering, creative frontend development, and algorithmic problem solving.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = i === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playMicroSound("click");
                  setActiveTab(i);
                }}
                onMouseEnter={() => playMicroSound("hover")}
                className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 rounded-lg"
                style={{
                  border: `1px solid ${isActive ? cat.color : "rgba(255, 255, 255, 0.08)"}`,
                  background: isActive ? `${cat.color}18` : "rgba(10, 10, 18, 0.6)",
                  color: isActive ? cat.color : "var(--text-secondary)",
                  boxShadow: isActive ? `0 0 20px ${cat.color}25` : "none",
                }}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Active Skills List */}
          <div className="lg:col-span-8 glass p-6 sm:p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/60">
            <div className="space-y-6">
              {currentCategory.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold" style={{ color: currentCategory.color }}>
                      {skill.level}%
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-zinc-500 mb-2">
                    {skill.note}
                  </p>

                  {/* Progress bar with smooth glow */}
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${currentCategory.color}88, ${currentCategory.color})`,
                        boxShadow: `0 0 10px ${currentCategory.color}66`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar — Tech Cloud & Architectural Philosophy */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60">
              <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-4 flex items-center gap-2">
                <Cpu size={14} className="text-teal-400" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techCloud.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => playMicroSound("hover")}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-purple-400/50 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60">
              <h3 className="font-mono text-xs tracking-widest uppercase text-purple-400 mb-2 flex items-center gap-2">
                <GitBranch size={14} />
                Engineering Standards
              </h3>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono mt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Type-safe end-to-end schemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Deterministic state reconciliation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Sub-100ms first paint &amp; 60fps WebGL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Zero regression testing &amp; CI automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
