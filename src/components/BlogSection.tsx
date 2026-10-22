"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "Building a Real-Time Collaborative Editor with CRDT and Yjs",
    excerpt:
      "A deep dive into operational transformation and CRDT algorithms, and how I built a conflict-free collaborative editor from scratch using Yjs.",
    date: "Oct 15, 2026",
    readTime: "12 min read",
    tags: ["Systems", "WebRTC", "CRDT"],
    color: "var(--accent-primary)",
    slug: "#",
  },
  {
    title: "GSAP ScrollTrigger Mastery: From Basics to Award-Winning Animations",
    excerpt:
      "Everything I learned studying Awwwards-winning sites — the scroll choreography, pin tricks, and performance secrets that make animations buttery smooth.",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    tags: ["GSAP", "Animation", "Frontend"],
    color: "var(--accent-teal)",
    slug: "#",
  },
  {
    title: "Segment Trees Explained: From CP to Production Code",
    excerpt:
      "How segment trees that I learned solving Codeforces problems found their way into a real-time analytics system at work. Theory meets practice.",
    date: "Sep 10, 2026",
    readTime: "15 min read",
    tags: ["DSA", "C++", "Backend"],
    color: "#a78bfa",
    slug: "#",
  },
  {
    title: "Next.js App Router: Patterns I Wish I Knew Earlier",
    excerpt:
      "After building 10+ App Router projects, here are the architectural patterns, data fetching strategies, and gotchas that save me hours every project.",
    date: "Aug 22, 2026",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Performance"],
    color: "var(--accent-secondary)",
    slug: "#",
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="relative py-32">
      <div className="section-container">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            05 / Blog
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2
            className="font-display text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Thoughts &amp;{" "}
            <span className="gradient-text">Writings</span>
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-mono text-sm animated-underline"
            style={{ color: "var(--text-secondary)" }}
          >
            All Posts <ArrowRight size={14} />
          </a>
        </div>

        <div className="blog-grid grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={post.slug}
              className="blog-card group glass overflow-hidden block transition-all duration-500 hover:-translate-y-2"
              style={{
                borderRadius: "8px",
                gridColumn: i === 0 ? "span 2 / span 2" : "auto",
              }}
            >
              {/* Top color bar */}
              <div
                className="h-1 w-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${post.color}, transparent)`,
                }}
              />

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{
                        color: post.color,
                        borderColor: `${post.color}44`,
                        background: `${post.color}10`,
                        fontSize: "0.65rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="font-display text-xl font-bold mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.excerpt}
                </p>

                <div
                  className="flex items-center justify-between"
                  style={{ color: "var(--text-muted)" }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs">
                      <BookOpen size={12} />
                      {post.date}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: post.color }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
