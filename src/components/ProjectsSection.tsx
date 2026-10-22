"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "QuakeScan",
    tagline: "Seismic analysis & real-time monitoring platform",
    description:
      "A full-stack geospatial application for earthquake detection, visualization, and alert systems. Built with Next.js, FastAPI, and real-time WebSocket data pipelines.",
    tags: ["Next.js", "Python", "FastAPI", "WebSockets", "PostgreSQL"],
    color: "var(--accent-primary)",
    github: "https://github.com/",
    live: "https://example.com/",
    featured: true,
  },
  {
    id: "02",
    title: "AlgoArena",
    tagline: "Competitive programming practice platform",
    description:
      "A platform for CP enthusiasts featuring curated problem sets, real-time code execution, leaderboards, and contest hosting. Supports C++, Python, Java.",
    tags: ["React", "Node.js", "Docker", "Redis", "MongoDB"],
    color: "var(--accent-teal)",
    github: "https://github.com/",
    live: "https://example.com/",
    featured: true,
  },
  {
    id: "03",
    title: "DevSpace",
    tagline: "Real-time collaborative code editor",
    description:
      "A VSCode-like in-browser IDE with real-time collaboration, AI code completion, and integrated terminal. Built on top of CodeMirror and Yjs CRDT.",
    tags: ["React", "TypeScript", "Yjs", "WebRTC", "Socket.io"],
    color: "#a78bfa",
    github: "https://github.com/",
    live: null,
    featured: true,
  },
  {
    id: "04",
    title: "NexCart",
    tagline: "Modern headless e-commerce engine",
    description:
      "A blazing-fast headless e-commerce system with a custom CMS, Stripe integration, inventory management, and AI-powered product recommendations.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind", "Prisma"],
    color: "var(--accent-secondary)",
    github: "https://github.com/",
    live: "https://example.com/",
    featured: false,
  },
  {
    id: "05",
    title: "TaskFlow",
    tagline: "Kanban project management tool",
    description:
      "A Jira-inspired project management app with drag-and-drop boards, sprint planning, burndown charts, and Slack integrations.",
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    color: "var(--accent-teal)",
    github: "https://github.com/",
    live: "https://example.com/",
    featured: false,
  },
  {
    id: "06",
    title: "PixelMint",
    tagline: "NFT minting and gallery platform",
    description:
      "A web3 platform for creating, minting, and trading NFTs. Features IPFS storage, wallet integration, and on-chain royalty management.",
    tags: ["Next.js", "Solidity", "Ethers.js", "IPFS", "Hardhat"],
    color: "#fabc0f",
    github: "https://github.com/",
    live: null,
    featured: false,
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32">
      <div className="section-container">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            02 / Projects
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2
            className="font-display text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-mono text-sm animated-underline"
            style={{ color: "var(--text-secondary)" }}
          >
            All Projects <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative glass overflow-hidden cursor-pointer transition-all duration-500"
              style={{
                borderRadius: "8px",
                transform: hoveredId === project.id ? "translateY(-8px)" : "translateY(0)",
                borderColor:
                  hoveredId === project.id
                    ? `${project.color}44`
                    : "var(--border-subtle)",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background:
                    hoveredId === project.id
                      ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                      : "transparent",
                }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-mono text-4xl font-bold opacity-10"
                    style={{ color: project.color, lineHeight: 1 }}
                  >
                    {project.id}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-all duration-200 hover:scale-110"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--text-primary)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text-muted)")
                        }
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-all duration-200 hover:scale-110"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = project.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text-muted)")
                        }
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="font-display text-xl font-bold mb-1 transition-colors duration-300"
                  style={{
                    color:
                      hoveredId === project.id ? project.color : "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-mono text-xs mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.tagline}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: "0.65rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `linear-gradient(0deg, ${project.color}10, transparent)`,
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
