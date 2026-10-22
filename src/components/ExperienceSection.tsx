"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechStart Inc.",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Led development of a microservices-based SaaS platform serving 50K+ users. Architected real-time collaboration features using WebSockets and Redis pub/sub. Reduced API response times by 40% through query optimization.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    color: "var(--accent-primary)",
  },
  {
    type: "work",
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2022 — Present",
    location: "India",
    description:
      "Built and shipped 20+ projects for clients across e-commerce, fintech, and ed-tech domains. Specialized in high-performance Next.js applications with custom CMS integrations.",
    tags: ["React", "Next.js", "Shopify", "Stripe", "Vercel"],
    color: "var(--accent-teal)",
  },
  {
    type: "work",
    title: "Backend Developer Intern",
    company: "DataFlow Labs",
    period: "2023 — 2024",
    location: "Bangalore, India",
    description:
      "Developed data ingestion pipelines processing 1M+ events/day. Built RESTful APIs for mobile applications. Implemented caching strategies reducing database load by 60%.",
    tags: ["Python", "FastAPI", "AWS", "Kafka", "MongoDB"],
    color: "#a78bfa",
  },
  {
    type: "education",
    title: "B.Tech Computer Science",
    company: "IIIT Hyderabad",
    period: "2020 — 2024",
    location: "Hyderabad, India",
    description:
      "Graduated with distinction (8.9 CGPA). Active competitive programmer — participated in ICPC Regionals, Google Code Jam, Facebook Hacker Cup. Teaching assistant for DSA courses.",
    tags: ["DSA", "OS", "DBMS", "Algorithms", "Networks"],
    color: "var(--accent-secondary)",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-timeline",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-32">
      <div className="section-container">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            04 / Experience
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <h2
          className="font-display text-5xl md:text-6xl font-bold mb-16 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Where I&apos;ve{" "}
          <span className="gradient-text">Worked</span>
        </h2>

        {/* Timeline */}
        <div className="exp-timeline relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--accent-primary), var(--accent-teal), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`exp-item relative md:grid md:grid-cols-2 gap-12 mb-16 ${
                i % 2 === 0 ? "" : "md:[&>*]:order-2 md:[&>*:last-child]:order-1"
              }`}
            >
              {/* Dot on timeline */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: "50%",
                  top: "24px",
                  transform: "translate(-50%, -50%)",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: exp.color,
                  boxShadow: `0 0 15px ${exp.color}`,
                  zIndex: 10,
                }}
              />

              {/* Content */}
              <div className={`${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                <div
                  className="glass p-6 hover:border-current transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    borderRadius: "8px",
                    cursor: "default",
                  }}
                >
                  {/* Type badge */}
                  <div className={`flex mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span
                      className="tag"
                      style={{
                        color: exp.color,
                        borderColor: `${exp.color}44`,
                        background: `${exp.color}10`,
                      }}
                    >
                      {exp.type === "work" ? "💼 Work" : "🎓 Education"}
                    </span>
                  </div>

                  <h3
                    className="font-display text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </h3>
                  <div
                    className="font-mono text-sm mb-1"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </div>
                  <div
                    className="flex gap-3 mb-4 flex-wrap"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="font-mono text-xs">{exp.period}</span>
                    <span className="font-mono text-xs">·</span>
                    <span className="font-mono text-xs">{exp.location}</span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag" style={{ fontSize: "0.65rem" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer col */}
              <div />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
