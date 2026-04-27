"use client";

import { useEffect, useRef } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { skillCategories } from "@/data/experience";
import { siteConfig } from "@/lib/utils";
import {
  ArrowDownTrayIcon,
  MapPinIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    icon: "01",
    title: "Performance-first",
    desc: "I shape interfaces to feel instant: clean rendering, thoughtful loading, and smooth motion that supports the story.",
  },
  {
    icon: "02",
    title: "Accessible by default",
    desc: "Beautiful work should be usable work. I build with semantic structure, keyboard paths, and readable contrast from the start.",
  },
  {
    icon: "03",
    title: "Component thinking",
    desc: "I turn messy UI problems into reusable systems that stay flexible as products and teams grow.",
  },
  {
    icon: "04",
    title: "Pixel-perfect craft",
    desc: "The tiny details matter: spacing, rhythm, easing curves, hover states, and all the invisible polish users can feel.",
  },
];

const storyStats = [
  { value: "17", label: "Years building production UI" },
  { value: "8", label: "Projects shaped with React" },
  { value: "100%", label: "Focused on clean user flow" },
];

export default function AboutContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(".about-kicker, .about-title-word, .about-copy, .about-cta", {
        opacity: 0,
        y: 24,
      });
      gsap.set(cardRef.current, { opacity: 0, y: 34, rotateX: -6 });

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .to(".about-kicker", { opacity: 1, y: 0, duration: 0.55 })
        .to(
          ".about-title-word",
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.08 },
          "-=0.2"
        )
        .to(".about-copy", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.45")
        .to(".about-cta", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.35")
        .to(cardRef.current, { opacity: 1, y: 0, rotateX: 0, duration: 0.9 }, "-=0.8");

      gsap.to(".about-orb", {
        y: (index) => (index % 2 === 0 ? -28 : 24),
        x: (index) => (index % 2 === 0 ? 18 : -16),
        scale: (index) => 1 + index * 0.06,
        duration: 4.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
      });

      gsap.to(".story-stat", {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".story-stat-wrap",
          start: "top 85%",
        },
      });

      gsap.fromTo(
        ".skill-pill",
        { opacity: 0, y: 14, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.8)",
          stagger: 0.025,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        whatsappRef.current,
        { opacity: 0, y: 24, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, delay: 0.7, ease: "back.out(1.8)" }
      );

      gsap.to(".whatsapp-ring", {
        scale: 1.35,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden pt-28 pb-28">
      <div className="about-orb absolute -top-24 left-4 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="about-orb absolute top-60 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="about-orb absolute bottom-16 left-1/4 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <section ref={heroRef} className="mb-20">
          <p className="about-kicker mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
            <SparklesIcon className="h-4 w-4" />
            About Me
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <h1
                className="mb-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                style={{ color: "var(--fg)" }}
              >
                {["Designing", "interfaces", "that", "feel", "alive."].map((word) => (
                  <span key={word} className="about-title-word mr-3 inline-block">
                    {word === "alive." ? <span className="gradient-text">{word}</span> : word}
                  </span>
                ))}
              </h1>

              <div className="max-w-2xl space-y-4">
                <p className="about-copy text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Hi, I&apos;m Samyak, a Frontend Engineer in Kathmandu who turns complex product ideas into fast, clean, and delightful web experiences.
                </p>
                <p className="about-copy text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  I work where craft meets engineering: React, Next.js, TypeScript, GSAP, Three.js, and production systems that stay maintainable after launch.
                </p>
                <p className="about-copy text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Lately I&apos;m exploring WebGL shaders, AI-assisted interfaces, and design systems that make teams move with more confidence.
                </p>
              </div>

              <div className="about-cta mt-8 flex flex-wrap gap-3">
                <MagneticButton href="/Samyak-Bajracharya-Resume.pdf" variant="primary" size="md">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Download Resume
                </MagneticButton>
                <MagneticButton href="/Samyak-Bajracharya-Cover-Letter.pdf" variant="outline" size="md">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Cover Letter
                </MagneticButton>
              </div>
            </div>

            <div
              ref={cardRef}
              className="relative rounded-[2rem] border p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl"
              style={{ background: "color-mix(in srgb, var(--bg-card) 86%, transparent)", borderColor: "var(--border)" }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-30 blur-2xl" />
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-2xl font-black text-white shadow-lg shadow-indigo-500/30">
                  SB
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>
                    Frontend Engineer
                  </p>
                  <h2 className="text-2xl font-black tracking-tight" style={{ color: "var(--fg)" }}>
                    Samyak Bajracharya
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPinIcon, text: siteConfig.location, label: "Location" },
                  { icon: EnvelopeIcon, text: siteConfig.email, label: "Email", href: `mailto:${siteConfig.email}` },
                ].map(({ icon: Icon, text, label, href }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl p-3" style={{ background: "var(--surface)" }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/60 dark:bg-white/5">
                      <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold transition-colors hover:text-indigo-500" style={{ color: "var(--fg)" }}>
                          {text}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                          {text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all hover:-translate-y-1 hover:border-indigo-400/60" style={{ background: "var(--surface)", color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                  <FiGithub className="h-4 w-4 transition-transform group-hover:rotate-[-8deg]" />
                  GitHub
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all hover:-translate-y-1 hover:border-indigo-400/60" style={{ background: "var(--surface)", color: "var(--fg-muted)", borderColor: "var(--border)" }}>
                  <FiLinkedin className="h-4 w-4 transition-transform group-hover:rotate-[8deg]" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <SectionReveal className="story-stat-wrap mb-20 grid gap-4 sm:grid-cols-3">
          {storyStats.map((stat) => (
            <div key={stat.label} className="story-stat translate-y-4 rounded-3xl border p-6 opacity-0" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="gradient-text text-4xl font-black tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--fg-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </SectionReveal>

        <SectionReveal className="mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500">How I Work</p>
          <h2 className="mb-10 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: "var(--fg)" }}>
            Principles I build by
          </h2>
          <SectionReveal stagger className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="group rounded-3xl p-6 card-hover" style={{ background: "var(--bg-card)" }}>
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 font-mono text-sm font-black text-indigo-500 transition-transform group-hover:rotate-6 group-hover:scale-110">
                  {v.icon}
                </span>
                <h3 className="mb-3 text-lg font-black tracking-tight" style={{ color: "var(--fg)" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </SectionReveal>
        </SectionReveal>

        <SectionReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500">Tech Stack</p>
          <h2 className="mb-10 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: "var(--fg)" }}>
            Tools I use to make pixels behave
          </h2>
          <SectionReveal stagger className="skills-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="rounded-3xl p-5 card-hover" style={{ background: "var(--bg-card)" }}>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill tag opacity-0">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </SectionReveal>
        </SectionReveal>
      </div>

      <a
        ref={whatsappRef}
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Samyak, I saw your portfolio and would like to chat.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Samyak on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-2xl shadow-emerald-500/35 transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7"
      >
        <span className="whatsapp-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <FaWhatsapp className="h-6 w-6" />
        </span>
        <span className="relative hidden pr-1 text-sm sm:inline">Let&apos;s chat</span>
      </a>
    </div>
  );
}
