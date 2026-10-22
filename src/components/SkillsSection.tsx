"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    label: "Frontend",
    color: "var(--accent-primary)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js / WebGL", level: 75 },
      { name: "GSAP / Framer", level: 80 },
      { name: "CSS / Tailwind", level: 92 },
    ],
  },
  {
    label: "Backend",
    color: "var(--accent-teal)",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 75 },
      { name: "REST / GraphQL", level: 88 },
    ],
  },
  {
    label: "Competitive Prog.",
    color: "#a78bfa",
    skills: [
      { name: "C++ (STL)", level: 92 },
      { name: "Data Structures", level: 90 },
      { name: "Dynamic Programming", level: 85 },
      { name: "Graph Theory", level: 82 },
      { name: "Math / Number Theory", level: 78 },
    ],
  },
  {
    label: "DevOps / Tools",
    color: "var(--accent-secondary)",
    skills: [
      { name: "Docker / Kubernetes", level: 72 },
      { name: "AWS / Vercel", level: 78 },
      { name: "Git / CI/CD", level: 88 },
      { name: "Linux / Bash", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
];

const techIcons = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Docker", "PostgreSQL", "Redis", "Three.js", "GSAP",
  "C++", "AWS", "Figma", "Git", "MongoDB",
];

function SkillBar({
  name,
  level,
  color,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  animate: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => setAnimate(true),
    });

    gsap.fromTo(
      ".skills-heading",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    return () => trigger.kill();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32">
      <div className="section-container">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            03 / Skills
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <h2
          className="skills-heading font-display text-5xl md:text-6xl font-bold mb-16 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          My{" "}
          <span className="gradient-text-pink">Arsenal</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.label}
              id={`skill-tab-${i}`}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2 font-mono text-sm tracking-wider transition-all duration-300"
              style={{
                borderRadius: "2px",
                border: `1px solid ${i === activeTab ? cat.color : "var(--border-subtle)"}`,
                background: i === activeTab ? `${cat.color}20` : "transparent",
                color: i === activeTab ? cat.color : "var(--text-secondary)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills panel */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="glass p-8" style={{ borderRadius: "8px" }}>
            {skillCategories[activeTab].skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skillCategories[activeTab].color}
                animate={animate}
              />
            ))}
          </div>

          {/* Right panel — rotating tech cloud */}
          <div className="flex flex-col gap-6">
            <div
              className="glass p-6 flex-1"
              style={{ borderRadius: "8px" }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techIcons.map((tech, i) => (
                  <span
                    key={tech}
                    className="tag transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      borderColor:
                        i % 4 === 0
                          ? "rgba(108,99,255,0.3)"
                          : i % 4 === 1
                          ? "rgba(0,212,170,0.3)"
                          : i % 4 === 2
                          ? "rgba(167,139,250,0.3)"
                          : "rgba(255,101,132,0.3)",
                      color:
                        i % 4 === 0
                          ? "var(--accent-primary)"
                          : i % 4 === 1
                          ? "var(--accent-teal)"
                          : i % 4 === 2
                          ? "#a78bfa"
                          : "var(--accent-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CP Rating card */}
            <div
              className="glass p-6"
              style={{ borderRadius: "8px" }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Competitive Programming
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { platform: "Codeforces", rating: "1800+", color: "#f57327" },
                  { platform: "LeetCode", rating: "Top 5%", color: "#fabc0f" },
                  { platform: "CodeChef", rating: "4★", color: "#a78bfa" },
                ].map((cp) => (
                  <div key={cp.platform} className="text-center">
                    <div
                      className="font-display text-2xl font-bold"
                      style={{ color: cp.color }}
                    >
                      {cp.rating}
                    </div>
                    <div
                      className="font-mono text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {cp.platform}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
