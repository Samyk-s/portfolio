"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.techStack.includes(activeTag)),
    [activeTag]
  );

  const popularTags = ["All", "Next.js", "React", "TypeScript", "Three.js", "GSAP"];

  return (
    <div>
      {/* Filter tabs */}
      <SectionReveal className="mb-10">
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background:
                  activeTag === tag ? "var(--accent)" : "var(--surface)",
                color:
                  activeTag === tag ? "#fff" : "var(--fg-muted)",
                border: "1px solid",
                borderColor:
                  activeTag === tag ? "var(--accent)" : "var(--border)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </SectionReveal>

      {/* Grid */}
      <SectionReveal
        stagger
        key={activeTag}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SectionReveal>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p style={{ color: "var(--fg-muted)" }}>
            No projects found for &quot;{activeTag}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
