"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 38, scale: 0.96, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.32,
            grid: "auto",
            from: "start",
          },
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 md:py-32">
      <div className="absolute left-8 top-24 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="absolute bottom-16 right-12 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal className="mb-16">
          <p className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
            Selected Work
          </p>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2
                className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
                style={{ color: "var(--fg)" }}
              >
                Featured projects, same cards as the full gallery.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                Start here for the highlights. These use the exact project card
                component from the main projects page, including the same hover
                tilt, glow, metadata, and case-study link.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black text-indigo-500 transition-all hover:-translate-y-1"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              All projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid gap-5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
