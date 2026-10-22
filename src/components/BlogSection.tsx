"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Clock, BookOpen, Terminal, Sparkles } from "lucide-react";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "Demystifying CRDTs: Building Conflict-Free Real-Time State in TypeScript",
    excerpt:
      "A deep dive into State-based vs Operation-based CRDTs, LWW registers, and vector clocks. How we achieved sub-10ms peer synchronization with zero merge conflicts.",
    date: "Feb 18, 2026",
    readTime: "12 min read",
    tags: ["Distributed Systems", "CRDT", "TypeScript"],
    color: "#00f5d4",
    slug: "#",
    featured: true,
  },
  {
    title: "Awwwards-Caliber Motion: Orchestrating GSAP Timelines with WebGL Shaders",
    excerpt:
      "Behind the scenes of cinematic web experiences: coordinating GSAP ScrollTrigger physics with Three.js vertex shaders without CPU lockups or frame drops.",
    date: "Jan 28, 2026",
    readTime: "9 min read",
    tags: ["WebGL", "Three.js", "GSAP 3", "Creative"],
    color: "#9047ff",
    slug: "#",
    featured: false,
  },
  {
    title: "From Codeforces to Production: When Competitive Algorithms Save the Day",
    excerpt:
      "How Segment Trees with Lazy Propagation and Tarjan's Strongly Connected Components algorithm powered a high-throughput geospatial query engine at 100k QPS.",
    date: "Dec 14, 2025",
    readTime: "15 min read",
    tags: ["Algorithms", "C++", "Data Structures"],
    color: "#ffbe0b",
    slug: "#",
    featured: false,
  },
  {
    title: "Next.js 15 App Router Architecture: Zero-Hydration Patterns That Scale",
    excerpt:
      "Architectural insights from shipping 10+ production applications: optimal Server/Client component boundary placement, streaming Suspense, and edge caching.",
    date: "Nov 30, 2025",
    readTime: "11 min read",
    tags: ["Next.js", "React 19", "Architecture"],
    color: "#ff6584",
    slug: "#",
    featured: false,
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card-item",
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
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="relative py-28 z-10">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-400">
            06 / Technical Publications
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Engineering{" "}
            <span className="font-serif italic font-normal text-purple-300">
              Essays
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-2">
            In-depth breakdowns on distributed systems, creative WebGL graphics, and algorithmic engineering.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.slug}
              onMouseEnter={() => playMicroSound("hover")}
              onClick={() => playMicroSound("click")}
              className="blog-card-item group glass p-7 rounded-xl border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              style={{
                borderColor: "rgba(255, 255, 255, 0.08)",
                background: "rgba(10, 10, 18, 0.7)",
              }}
            >
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
                      style={{
                        color: post.color,
                        background: `${post.color}15`,
                        border: `1px solid ${post.color}35`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 leading-snug text-white group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta row */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-teal-400" />
                    {post.readTime}
                  </span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                </div>

                <span
                  className="inline-flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: post.color }}
                >
                  Read Article
                  <ArrowRight size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
