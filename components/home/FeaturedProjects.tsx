"use client";

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import SectionReveal from "@/components/ui/SectionReveal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <SectionReveal className="mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            Selected Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--fg)" }}
            >
              Projects I&apos;m proud of
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              All projects
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </SectionReveal>

        {/* Project cards */}
        <SectionReveal
          stagger
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="card-hover group rounded-2xl overflow-hidden flex flex-col relative"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Gradient header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-end p-5 shrink-0`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="relative flex gap-2 z-10">
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
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3
                    className="text-base font-bold mb-1.5 group-hover:text-indigo-500 transition-colors duration-200"
                    style={{ color: "var(--fg)" }}
                  >
                    {project.title}
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

              {/* Full-card overlay link */}
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-[1]"
                aria-label={`View ${project.title}`}
              />
            </article>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
