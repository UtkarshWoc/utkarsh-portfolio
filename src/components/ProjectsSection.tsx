"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowRight, Activity, Cpu, Layers, Sparkles } from "lucide-react";
import { Github } from "@/components/Icons";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "all" | "fullstack" | "distributed" | "creative";
  categoryLabel: string;
  description: string;
  metric: string;
  tags: string[];
  color: string;
  github: string;
  live: string | null;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    title: "QuakeScan",
    tagline: "Real-time Seismic Analysis & Alert Engine",
    category: "distributed",
    categoryLabel: "Distributed Systems",
    description:
      "Full-scale geospatial platform detecting and visualizing micro-earthquakes in real time. Features WebSocket telemetry streaming, automated Richter threshold alerting, and sub-second geospatial clustering.",
    metric: "50k+ Geo Events Processed",
    tags: ["Next.js 15", "Python FastAPI", "WebSockets", "PostGIS", "Redis"],
    color: "#00f5d4",
    github: "https://github.com/UtkarshWoc/quakescan",
    live: "https://quakescan.vercel.app",
    featured: true,
  },
  {
    id: "02",
    title: "AlgoArena",
    tagline: "Competitive Programming Head-to-Head Duel Platform",
    category: "fullstack",
    categoryLabel: "Full Stack",
    description:
      "Interactive code duel platform for competitive programmers with real-time sandbox execution, memory/runtime benchmark visualization, and live Elo rating recalculation.",
    metric: "10,000+ Executed Tests",
    tags: ["React", "Docker Sandbox", "Node.js", "Redis PubSub", "PostgreSQL"],
    color: "#9047ff",
    github: "https://github.com/UtkarshWoc/algo-arena",
    live: "https://algoarena.dev",
    featured: true,
  },
  {
    id: "03",
    title: "DevSpace CRDT",
    tagline: "Ultra-low Latency Collaborative IDE",
    category: "distributed",
    categoryLabel: "Distributed Systems",
    description:
      "Browser-native coding environment featuring conflict-free replicated data types (Yjs CRDT), peer-to-peer WebRTC mesh network, and deterministic split-brain resolution.",
    metric: "<8ms Sync Latency",
    tags: ["TypeScript", "Yjs CRDT", "WebRTC", "CodeMirror 6", "Tailwind"],
    color: "#ff6584",
    github: "https://github.com/UtkarshWoc/devspace-crdt",
    live: null,
    featured: true,
  },
  {
    id: "04",
    title: "Vortex 3D Gallery",
    tagline: "Interactive WebGL Spatial Showcase",
    category: "creative",
    categoryLabel: "Creative WebGL",
    description:
      "Award-inspired 3D spatial exhibition utilizing Three.js custom vertex shaders, volumetric post-processing bloom, and GSAP scroll-triggered physics.",
    metric: "60 FPS Stable WebGL",
    tags: ["Three.js", "GLSL Shaders", "GSAP 3", "Next.js", "Web Audio"],
    color: "#ffbe0b",
    github: "https://github.com/UtkarshWoc/vortex-3d",
    live: "https://vortex-gallery.vercel.app",
    featured: false,
  },
  {
    id: "05",
    title: "CloudPulse",
    tagline: "Distributed Microservices Telemetry Observer",
    category: "distributed",
    categoryLabel: "Distributed Systems",
    description:
      "High-throughput tracing and metric ingestion pipeline built with Go and Kafka. Collects metrics across Kubernetes clusters with real-time anomaly detection.",
    metric: "100k+ Msg/Sec Throughput",
    tags: ["Go", "Apache Kafka", "Prometheus", "Grafana", "Docker"],
    color: "#00f5d4",
    github: "https://github.com/UtkarshWoc/cloud-pulse",
    live: null,
    featured: false,
  },
  {
    id: "06",
    title: "NeuralNexus",
    tagline: "Algorithmic Graph Neural Network Visualizer",
    category: "creative",
    categoryLabel: "Creative WebGL",
    description:
      "Visual playground for inspecting graph neural network embeddings, message-passing stages, and high-dimensional clustering via t-SNE projection.",
    metric: "500k+ Visualized Nodes",
    tags: ["React", "D3.js", "WebGL", "Python", "PyTorch Geometric"],
    color: "#9047ff",
    github: "https://github.com/UtkarshWoc/neural-nexus",
    live: "https://neuralnexus.dev",
    featured: false,
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "fullstack" | "distributed" | "creative">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="projects" ref={sectionRef} className="py-28 relative z-10">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-purple-400">
            02 / Engineering Portfolio
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Featured{" "}
              <span className="font-serif italic font-normal text-purple-300">
                Architectures
              </span>
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-2">
              Production systems, distributed real-time platforms, and experimental WebGL interactive works.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "distributed", label: "Distributed" },
              { id: "fullstack", label: "Full Stack" },
              { id: "creative", label: "Creative & WebGL" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  playMicroSound("click");
                  setActiveCategory(tab.id as typeof activeCategory);
                }}
                onMouseEnter={() => playMicroSound("hover")}
                className="px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-300"
                style={{
                  background:
                    activeCategory === tab.id
                      ? "rgba(144, 71, 255, 0.25)"
                      : "rgba(255, 255, 255, 0.03)",
                  color:
                    activeCategory === tab.id
                      ? "var(--accent-teal)"
                      : "var(--text-secondary)",
                  border:
                    activeCategory === tab.id
                      ? "1px solid var(--accent-primary)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-anim group relative glass overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              style={{
                borderColor:
                  hoveredId === project.id
                    ? `${project.color}66`
                    : "rgba(255, 255, 255, 0.07)",
                background: "rgba(10, 10, 18, 0.75)",
                boxShadow:
                  hoveredId === project.id
                    ? `0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${project.color}22`
                    : "none",
              }}
              onMouseEnter={() => {
                playMicroSound("hover");
                setHoveredId(project.id);
              }}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top Accent Gradient Border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{
                  background:
                    hoveredId === project.id
                      ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                      : "transparent",
                }}
              />

              <div className="p-6">
                {/* Header row: ID & Live Action Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-zinc-800 text-zinc-400">
                    {project.id} &bull; {project.categoryLabel}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Source Code"
                        onClick={() => playMicroSound("click")}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Deployment"
                        onClick={() => playMicroSound("click")}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                        style={{ color: project.color }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-teal-300/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 mb-5">
                  <Activity size={12} style={{ color: project.color }} />
                  <span>{project.metric}</span>
                </div>
              </div>

              {/* Tags Footer */}
              <div
                className="px-6 py-3.5 border-t flex flex-wrap gap-1.5"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  background: "rgba(0, 0, 0, 0.2)",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/UtkarshWoc"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playMicroSound("hover")}
            onClick={() => playMicroSound("click")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 font-mono text-xs tracking-wider transition-all duration-300 hover:bg-purple-950/30 hover:border-purple-400 hover:scale-105"
          >
            <Github size={15} />
            Explore 50+ More Repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
