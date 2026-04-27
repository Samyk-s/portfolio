"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const popularTags = ["All", "Next.js", "React", "TypeScript", "Three.js", "GSAP"];

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;

    return projects.filter((project) =>
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(activeTag.toLowerCase())
      )
    );
  }, [activeTag]);

  const featuredCount = useMemo(
    () => filtered.filter((project) => project.featured).length,
    [filtered]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-filter",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.045,
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card", grid);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 36,
          scale: 0.96,
          rotateX: -8,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: {
            amount: 0.32,
            grid: "auto",
            from: "start",
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [activeTag, filtered.length]);

  return (
    <div ref={rootRef}>
      <div
        className="mb-8 rounded-[2rem] border p-4 backdrop-blur-xl sm:p-5"
        style={{
          background: "color-mix(in srgb, var(--bg-card) 84%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">
              Explore the stack
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>
              Filter the work by technology and watch the grid reshuffle.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:flex">
            {[
              { value: filtered.length, label: "Projects" },
              { value: featuredCount, label: "Featured" },
              { value: activeTag, label: "Filter" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl px-3 py-2 text-center"
                style={{ background: "var(--surface)" }}
              >
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

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => {
            const isActive = activeTag === tag;

            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="project-filter rounded-2xl px-4 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: isActive ? "var(--accent)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--fg-muted)",
                  border: "1px solid",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                  boxShadow: isActive
                    ? "0 14px 28px -16px rgba(99, 102, 241, 0.8)"
                    : "none",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid gap-5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p style={{ color: "var(--fg-muted)" }}>
            No projects found for &quot;{activeTag}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
