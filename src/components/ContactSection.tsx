"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, MapPin, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";
import { playMicroSound } from "./AudioAmbient";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-left-anim",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".contact-right-anim",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playMicroSound("click");
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    playMicroSound("success");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 z-10">
      <div className="section-container relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-400">
            07 / Transmission
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Initiate a{" "}
            <span className="font-serif italic font-normal text-purple-300">
              Conversation
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base mt-2">
            Interested in hiring for a mission-critical role, commissioning a bespoke high-end platform, or discussing competitive algorithms? Send a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left info column */}
          <div className="contact-left-anim lg:col-span-5 space-y-6">
            {/* Status card */}
            <div className="glass p-6 rounded-xl border border-zinc-800 bg-zinc-950/60">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500" />
                </span>
                <span className="font-mono text-sm font-bold text-teal-300">
                  Direct Inquiries Open &bull; 2026
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Average reply time: under 12 hours. Open for senior engineering roles, freelance contracts, and technical advisory.
              </p>
            </div>

            {/* Direct details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl glass border border-zinc-800/80">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-zinc-500">
                    Primary Dispatch
                  </div>
                  <a
                    href="mailto:utkarsh.engr@outlook.com"
                    onMouseEnter={() => playMicroSound("hover")}
                    className="font-mono text-sm text-zinc-200 hover:text-teal-300 transition-colors"
                  >
                    utkarsh.engr@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl glass border border-zinc-800/80">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-zinc-500">
                    Location &amp; Coordinates
                  </div>
                  <div className="font-mono text-sm text-zinc-200">
                    Bengaluru, India (IST / UTC+5:30)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl glass border border-zinc-800/80">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-zinc-500">
                    Working Mode
                  </div>
                  <div className="font-mono text-sm text-zinc-200">
                    Remote-first worldwide &bull; Asynchronous
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
                Verified Cryptographic &amp; Social Links
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/UtkarshWoc", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/", label: "Twitter / X" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onMouseEnter={() => playMicroSound("hover")}
                    onClick={() => playMicroSound("click")}
                    className="w-11 h-11 rounded-lg glass border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-400 hover:bg-purple-950/30 transition-all hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="contact-right-anim lg:col-span-7">
            <div className="glass p-7 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/70">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Transmission Dispatched
                  </h3>
                  <p className="text-zinc-400 font-mono text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out. Your transmission has been recorded. I will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 rounded-full border border-teal-500/40 text-teal-300 font-mono text-xs hover:bg-teal-950/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="ada@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Project Specifications / Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your architectural goals, timeline, or engineering challenge..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    onMouseEnter={() => playMicroSound("hover")}
                    className="w-full py-4 rounded-lg font-mono text-sm tracking-wider text-white font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-primary), #4f46e5)",
                      boxShadow: "0 0 25px rgba(144, 71, 255, 0.3)",
                    }}
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Encrypting &amp; Dispatching...
                      </span>
                    ) : (
                      <>
                        <Send size={15} />
                        Transmit Message ↳
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
