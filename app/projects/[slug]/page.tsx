import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { siteConfig } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    author: { "@type": "Person", name: siteConfig.name },
    url: project.liveUrl,
    applicationCategory: "WebApplication",
  };

  return (
    <div className="pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <SectionReveal className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-500"
            style={{ color: "var(--fg-muted)" }}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            All Projects
          </Link>
        </SectionReveal>

        {/* Project hero */}
        <SectionReveal className="mb-10">
          <div
            className={`relative h-56 sm:h-72 rounded-3xl bg-gradient-to-br ${project.gradient} mb-8 overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {project.title}
              </h1>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Role", value: project.role },
              { label: "Timeline", value: project.timeline },
              {
                label: "Stack",
                value: `${project.techStack.length} technologies`,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            {project.overview}
          </p>
        </SectionReveal>

        {/* Tech Stack */}
        <SectionReveal className="mb-10">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--fg)" }}
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag tag-accent px-3 py-1.5 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Features */}
        <SectionReveal className="mb-10">
          <h2
            className="text-xl font-bold mb-5 flex items-center gap-2"
            style={{ color: "var(--fg)" }}
          >
            <CheckCircleIcon className="w-5 h-5 text-indigo-500" />
            Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                <span className="mt-0.5 text-indigo-500 shrink-0">✦</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        {/* Challenges & Solutions */}
        <SectionReveal className="mb-10">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Challenges */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-base font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg)" }}
              >
                <ExclamationTriangleIcon className="w-4 h-4 text-amber-500" />
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <span className="font-semibold" style={{ color: "var(--fg)" }}>
                      {i + 1}.{" "}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-base font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--fg)" }}
              >
                <LightBulbIcon className="w-4 h-4 text-emerald-500" />
                Solutions
              </h2>
              <ul className="space-y-3">
                {project.solutions.map((s, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <span className="font-semibold" style={{ color: "var(--fg)" }}>
                      {i + 1}.{" "}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <h3
                className="text-base font-bold mb-1"
                style={{ color: "var(--fg)" }}
              >
                Interested in similar work?
              </h3>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                Let&apos;s discuss your next project.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              {project.liveUrl && (
                <MagneticButton
                  href={project.liveUrl}
                  variant="primary"
                  size="md"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </MagneticButton>
              )}
              <MagneticButton href="/contact" variant="outline" size="md">
                Get In Touch
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
