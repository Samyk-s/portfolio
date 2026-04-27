"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/lib/utils";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-hero]");
    gsap.fromTo(
      items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div data-hero className="opacity-0 mb-6">
            <span className="tag tag-accent inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              Available for new opportunities
            </span>
          </div>

          {/* Headline */}
          <h1
            data-hero
            className="opacity-0 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ color: "var(--fg)" }}
          >
            Building the{" "}
            <span className="gradient-text">web experiences</span>{" "}
            that matter.
          </h1>

          {/* Sub-headline */}
          <p
            data-hero
            className="opacity-0 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
            style={{ color: "var(--fg-muted)" }}
          >
            I&apos;m{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
              Samyak Bajracharya
            </strong>
            , a Frontend Engineer in Kathmandu, Nepal. I craft fast, beautiful,
            and accessible interfaces with React & Next.js — from idea to
            production.
          </p>

          {/* CTAs */}
          <div data-hero className="opacity-0 flex flex-wrap items-center gap-3 mb-14">
            <MagneticButton
              href="/projects"
              variant="primary"
              size="lg"
            >
              View My Work
              <ArrowRightIcon className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton
              href="/Samyak-Bajracharya-Resume.pdf"
              variant="outline"
              size="lg"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Resume
            </MagneticButton>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
                style={{
                  color: "var(--fg-muted)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
                style={{
                  color: "var(--fg-muted)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            data-hero
            className="opacity-0 flex flex-wrap gap-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {s.value}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--fg-muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ color: "var(--fg-muted)" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--fg-muted), transparent)" }}
        />
      </div>
    </section>
  );
}
