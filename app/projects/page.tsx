import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Samyak Bajracharya — from SaaS applications and e-commerce platforms to data visualization dashboards and real-time apps.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal className="mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            My Work
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--fg)" }}
          >
            Selected Projects
          </h1>
          <p
            className="text-base max-w-lg leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            A curated collection of applications I&apos;ve designed and
            engineered — ranging from production SaaS tools to open source
            experiments.
          </p>
        </SectionReveal>

        <ProjectsGrid />
      </div>
    </div>
  );
}
