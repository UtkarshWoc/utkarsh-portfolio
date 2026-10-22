"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";

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
        ".contact-left",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(108,99,255,0.05), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            06 / Contact
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        <h2
          className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Let&apos;s{" "}
          <span className="gradient-text">Connect</span>
        </h2>
        <p
          className="text-lg mb-16 max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          I&apos;m always open to new opportunities, interesting projects, or just a good 
          tech conversation. Drop me a message!
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div className="contact-left space-y-8">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 glass flex items-center justify-center"
                style={{ borderRadius: "8px" }}
              >
                <MapPin size={18} style={{ color: "var(--accent-primary)" }} />
              </div>
              <div>
                <div
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  Based in
                </div>
                <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  India 🇮🇳
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 glass flex items-center justify-center"
                style={{ borderRadius: "8px" }}
              >
                <Mail size={18} style={{ color: "var(--accent-teal)" }} />
              </div>
              <div>
                <div
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email
                </div>
                <a
                  href="mailto:utkarsh@example.com"
                  className="font-semibold animated-underline"
                  style={{ color: "var(--text-primary)" }}
                >
                  utkarsh@example.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Find me on
              </div>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/",
                    label: "GitHub",
                    color: "var(--text-secondary)",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/",
                    label: "LinkedIn",
                    color: "#0077b5",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com/",
                    label: "Twitter",
                    color: "#1da1f2",
                  },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 glass flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                    style={{ borderRadius: "8px" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.querySelector("svg")!.style.color = color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.querySelector("svg")!.style.color = "var(--text-secondary)")
                    }
                  >
                    <Icon size={20} style={{ color: "var(--text-secondary)" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="glass p-6"
              style={{ borderRadius: "8px" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "var(--accent-teal)",
                    boxShadow: "0 0 10px var(--accent-teal)",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Available for Work
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                I&apos;m currently open to full-time roles, freelance projects, and 
                interesting collaborations. Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  id: "contact-name",
                  label: "Name",
                  type: "text",
                  key: "name",
                  placeholder: "John Doe",
                },
                {
                  id: "contact-email",
                  label: "Email",
                  type: "email",
                  key: "email",
                  placeholder: "john@example.com",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={field.id}
                    className="block font-mono text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formState[field.key as "name" | "email"]}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, [field.key]: e.target.value }))
                    }
                    required
                    className="w-full px-4 py-3 glass font-mono text-sm outline-none transition-all duration-300 focus:border-[var(--accent-primary)]"
                    style={{
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      background: "rgba(10,10,18,0.5)",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 glass font-mono text-sm outline-none transition-all duration-300 focus:border-[var(--accent-primary)] resize-none"
                  style={{
                    borderRadius: "4px",
                    color: "var(--text-primary)",
                    background: "rgba(10,10,18,0.5)",
                  }}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-3 py-4 font-mono text-sm tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, var(--accent-teal), #00a88a)"
                    : "linear-gradient(135deg, var(--accent-primary), #8b5cf6)",
                  borderRadius: "4px",
                  boxShadow: "0 0 30px rgba(108,99,255,0.3)",
                }}
              >
                {sending ? (
                  <>
                    <div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      style={{ animation: "spin 1s linear infinite" }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
