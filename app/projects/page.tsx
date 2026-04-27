import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Samyak Bajracharya, from SaaS applications and e-commerce platforms to data visualization dashboards and real-time apps.",
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden pt-28 pb-28">
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -right-20 top-72 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal className="mb-14">
          <p className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
            My Work
          </p>
          <h1
            className="mb-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            style={{ color: "var(--fg)" }}
          >
            Selected projects with motion, systems, and polish.
          </h1>
          <p
            className="max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            A curated collection of applications I&apos;ve designed and
            engineered, from production SaaS tools to interactive dashboards and
            visual experiments.
          </p>
        </SectionReveal>

        <ProjectsGrid />
      </div>
    </div>
  );
}
