"use client";

import Link from "next/link";
import { Project } from "@/types";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="card-hover group rounded-2xl overflow-hidden flex flex-col relative"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Gradient header */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-end p-5 shrink-0`}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Action buttons */}
        <div className="relative flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-200"
              aria-label="Live site"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3
            className="text-base font-bold mb-1.5 group-hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1.5"
            style={{ color: "var(--fg)" }}
          >
            {project.title}
            <FiArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
          </h3>
          <p
            className="text-sm leading-relaxed line-clamp-2"
            style={{ color: "var(--fg-muted)" }}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Tech stack */}
        <div
          className="flex flex-wrap gap-1.5 mt-auto pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag text-[10px] px-2 py-0.5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tag text-[10px] px-2 py-0.5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0"
        aria-label={`View ${project.title} case study`}
      />
    </article>
  );
}
