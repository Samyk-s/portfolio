"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const shine = shineRef.current;
    if (!card || !glow || !shine) return;

    const handleMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 9;
      const rotateX = ((y / rect.height) - 0.5) * -9;

      gsap.to(card, {
        rotateX,
        rotateY,
        y: -8,
        duration: 0.55,
        ease: "power3.out",
      });
      gsap.to(glow, {
        opacity: 1,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(shine, {
        x: `${(x / rect.width) * 100}%`,
        opacity: 0.38,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.55)",
      });
      gsap.to(glow, { opacity: 0, duration: 0.35, ease: "power2.out" });
      gsap.to(shine, { opacity: 0, duration: 0.35, ease: "power2.out" });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="project-card group relative flex min-h-[430px] transform-gpu flex-col overflow-hidden rounded-[1.75rem] border"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-48 w-48 rounded-full bg-white/25 opacity-0 blur-3xl"
      />

      <div className={`relative h-56 shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient} p-5`}>
        <div
          ref={shineRef}
          className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-[-18deg] bg-white/35 opacity-0 blur-xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_45%)]" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/25" />
        <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full border border-white/20" />

        <div className="relative z-20 flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="rounded-full bg-black/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Case Study
            </p>
            <h3 className="max-w-[13rem] text-2xl font-black leading-none tracking-[-0.04em] text-white">
              {project.title}
            </h3>
          </div>

          <div className="relative z-30 flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/35"
                aria-label={`${project.title} GitHub`}
              >
                <FiGithub className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/35"
                aria-label={`${project.title} live site`}
              >
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <p className="mb-5 text-sm leading-relaxed line-clamp-3" style={{ color: "var(--fg-muted)" }}>
          {project.shortDescription}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-2">
          <div className="rounded-2xl p-3" style={{ background: "var(--surface)" }}>
            <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
              Role
            </p>
            <p className="mt-1 line-clamp-1 text-xs font-black" style={{ color: "var(--fg)" }}>
              {project.role}
            </p>
          </div>
          <div className="rounded-2xl p-3" style={{ background: "var(--surface)" }}>
            <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
              Stack
            </p>
            <p className="mt-1 text-xs font-black" style={{ color: "var(--fg)" }}>
              {project.techStack.length} tools
            </p>
          </div>
        </div>

        <div className="mt-auto border-t pt-4" style={{ borderColor: "var(--border)" }}>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="tag px-2 py-0.5 text-[10px]">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tag px-2 py-0.5 text-[10px]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm font-black text-indigo-500">
            <span>View project</span>
            <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} case study`}
      />
    </article>
  );
}
