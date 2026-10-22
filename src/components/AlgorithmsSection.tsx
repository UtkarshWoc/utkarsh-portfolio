"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TerminalCP from "./TerminalCP";
import { Trophy, Target, Award, Cpu } from "lucide-react";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

const cpStats = [
  {
    platform: "Codeforces",
    handle: "UtkarshWoc",
    rating: "1820+ Max",
    rank: "Expert",
    color: "#00f5d4",
    icon: Trophy,
    highlight: "Top 4% Global",
  },
  {
    platform: "LeetCode",
    handle: "utkarsh_cp",
    rating: "2140+ Rating",
    rank: "Knight",
    color: "#ffbe0b",
    icon: Target,
    highlight: "1,200+ Solved",
  },
  {
    platform: "CodeChef",
    handle: "utkarsh_coder",
    rating: "5 Star (2050+)",
    rank: "Division 1",
    color: "#9047ff",
    icon: Award,
    highlight: "Global Rank < 300",
  },
  {
    platform: "ICPC Regional",
    handle: "Competitive",
    rating: "Asia-West",
    rank: "Regionalist",
    color: "#ff6584",
    icon: Cpu,
    highlight: "Top 50 Regional",
  },
];

export default function AlgorithmsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".algo-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".algo-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".algo-cards-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="algorithms" ref={sectionRef} className="py-24 relative z-10">
      <div className="section-container">
        {/* Section Header */}
        <div className="algo-header mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[var(--accent-teal)] tracking-widest uppercase">
              // 03 &bull; Algorithmic Mastery
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Mathematical Rigor &amp;{" "}
            <span className="font-serif italic font-normal text-purple-300">
              Competitive Precision
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base mt-3 leading-relaxed">
            Beyond standard engineering: proven ability to model and solve NP-hard, graph-theoretic, and high-concurrency algorithmic challenges under extreme latency limits.
          </p>
        </div>

        {/* CP Platform Highlights */}
        <div className="algo-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cpStats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.platform}
                onMouseEnter={() => playMicroSound("hover")}
                className="algo-card glass p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 group"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.08)",
                  background: "rgba(10, 10, 18, 0.6)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: `rgba(${item.color === "#00f5d4" ? "0, 245, 212" : item.color === "#9047ff" ? "144, 71, 255" : "255, 190, 11"}, 0.15)`,
                      color: item.color,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: item.color,
                      border: `1px solid ${item.color}33`,
                    }}
                  >
                    {item.rank}
                  </span>
                </div>

                <div className="font-display text-lg font-bold text-white">
                  {item.platform}
                </div>
                <div className="font-mono text-sm font-semibold mt-0.5" style={{ color: item.color }}>
                  {item.rating}
                </div>
                <div className="text-[11px] text-zinc-500 mt-2 font-mono flex items-center justify-between">
                  <span>@{item.handle}</span>
                  <span className="text-zinc-400">{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Benchmark Terminal */}
        <TerminalCP />
      </div>
    </section>
  );
}
