"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CodeBracketSquareIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/lib/utils";

const stats = [
  { value: "2+", label: "Years" },
  { value: "17", label: "Projects" },
  { value: "11", label: "Clients" },
];

const helpCards = [
  {
    icon: CursorArrowRaysIcon,
    title: "Interactive UI",
    text: "Interfaces that feel responsive, guided, and polished.",
  },
  {
    icon: CodeBracketSquareIcon,
    title: "Frontend Systems",
    text: "Reusable React and Next.js foundations that scale cleanly.",
  },
  {
    icon: CheckCircleIcon,
    title: "Production Polish",
    text: "Performance, accessibility, animation, and final-fit details.",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-hero]", { opacity: 0, y: 28 });
      gsap.set(".hero-help-card", { opacity: 0, y: 24, scale: 0.96 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to("[data-hero]", {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
      }).to(
        ".hero-help-card",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
        },
        "-=0.35"
      );

      gsap.to(".home-soft-orb", {
        x: (index) => (index % 2 === 0 ? 18 : -18),
        y: (index) => (index % 2 === 0 ? -24 : 20),
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      gsap.to(".hero-path-dot", {
        y: -8,
        opacity: 1,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="home-soft-orb absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="home-soft-orb absolute right-[-7rem] top-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="home-soft-orb absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div data-hero className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Available for frontend work
            </span>
          </div>

          <h1
            data-hero
            className="mx-auto mb-6 max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
            style={{ color: "var(--fg)" }}
          >
            I build websites people can{" "}
            <span className="gradient-text">understand, enjoy, and trust.</span>
          </h1>

          <p
            data-hero
            className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--fg-muted)" }}
          >
            Hi, I&apos;m Samyak, a Frontend Engineer from Kathmandu. I turn
            product ideas into fast, accessible, animated web experiences using
            React, Next.js, TypeScript, and GSAP.
          </p>

          <div data-hero className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href="/projects" variant="primary" size="lg">
              Explore Projects
              <ArrowRightIcon className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline" size="lg">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              Start a Conversation
            </MagneticButton>
            <MagneticButton href="/Samyak-Bajracharya-Resume.pdf" variant="ghost" size="lg">
              <ArrowDownTrayIcon className="h-4 w-4" />
              Resume
            </MagneticButton>
          </div>

          <div data-hero className="mb-12 flex flex-wrap items-center justify-center gap-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 hover:-translate-y-1"
              style={{
                color: "var(--fg-muted)",
                borderColor: "var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 hover:-translate-y-1"
              style={{
                color: "var(--fg-muted)",
                borderColor: "var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <div
              className="ml-1 grid grid-cols-3 overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 py-2.5">
                  <p className="text-sm font-black" style={{ color: "var(--fg)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {helpCards.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="hero-help-card group relative overflow-hidden rounded-[1.75rem] border p-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "color-mix(in srgb, var(--bg-card) 86%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs font-bold" style={{ color: "var(--fg-muted)" }}>
                  0{index + 1}
                </span>
              </div>
              <h2 className="relative mb-2 text-lg font-black tracking-tight" style={{ color: "var(--fg)" }}>
                {title}
              </h2>
              <p className="relative text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex"
        style={{ color: "var(--fg-muted)" }}
      >
        <span className="hero-path-dot h-1.5 w-1.5 rounded-full bg-current opacity-40" />
        <span className="hero-path-dot h-1.5 w-1.5 rounded-full bg-current opacity-40" />
        <span className="hero-path-dot h-1.5 w-1.5 rounded-full bg-current opacity-40" />
      </div>
    </section>
  );
}
