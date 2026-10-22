"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechStart Scaleups",
    period: "2024 — Present",
    location: "Bengaluru, India (Remote)",
    description:
      "Led development of a distributed microservices SaaS platform serving 50K+ daily active users. Architected low-latency WebSocket data streaming and Redis pub/sub pipelines, cutting API tail latency by 40%.",
    tags: ["Next.js 15", "Go", "PostgreSQL", "Redis", "Docker", "AWS"],
    color: "#00f5d4",
  },
  {
    type: "work",
    title: "Freelance Creative Developer & Consultant",
    company: "Global Clients & Startups",
    period: "2022 — Present",
    location: "Global Remote",
    description:
      "Designed and shipped 20+ bespoke web platforms, interactive WebGL 3D showcases, and high-conversion e-commerce engines for clients across US, Europe, and India.",
    tags: ["Three.js", "GSAP", "React", "FastAPI", "Stripe", "Vercel"],
    color: "#9047ff",
  },
  {
    type: "work",
    title: "Backend Engineering Intern",
    company: "DataFlow Systems",
    period: "2023 — 2024",
    location: "Bengaluru, India",
    description:
      "Constructed high-throughput telemetry ingestion pipelines processing over 1M+ daily events. Built RESTful & GraphQL microservices with rigorous caching layers reducing database CPU utilization by 60%.",
    tags: ["Python", "FastAPI", "Apache Kafka", "MongoDB", "Redis"],
    color: "#ffbe0b",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    company: "Premier Institute of Technology",
    period: "2020 — 2024",
    location: "India",
    description:
      "Graduated with First-Class Honors (8.9 CGPA). Active competitive programming leader — ICPC Asia-West Regionalist, Codeforces Expert (1800+ rating), TA for Advanced Data Structures & Algorithms course.",
    tags: ["Algorithms", "Distributed Systems", "Graph Theory", "Operating Systems"],
    color: "#ff6584",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-header",
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

      gsap.fromTo(
        ".experience-timeline-node",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 z-10">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-purple-400">
            05 / Journey &amp; Impact
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Header */}
        <div className="experience-header mb-16">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Career{" "}
            <span className="font-serif italic font-normal text-purple-300">
              Trajectory
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-2">
            A track record of shipping production software, scaling architectures, and mentoring engineering peers.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative">
          {/* Vertical central glowing line */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, var(--accent-primary), var(--accent-teal), transparent)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`experience-timeline-node relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Center marker dot */}
                <div
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 20px ${exp.color}`,
                    zIndex: 20,
                  }}
                />

                {/* Left side when even, Right side when odd */}
                <div className={i % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div
                    onMouseEnter={() => playMicroSound("hover")}
                    className="glass p-6 sm:p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 group"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.08)",
                      background: "rgba(11, 11, 20, 0.75)",
                    }}
                  >
                    {/* Badge */}
                    <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}35`,
                        }}
                      >
                        {exp.type === "work" ? <Briefcase size={12} /> : <GraduationCap size={12} />}
                        {exp.type === "work" ? "Professional Role" : "Academic"}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="font-mono text-sm font-semibold mt-1 mb-2" style={{ color: exp.color }}>
                      {exp.company}
                    </div>

                    <div
                      className={`flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-5 font-normal">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={i % 2 === 0 ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
