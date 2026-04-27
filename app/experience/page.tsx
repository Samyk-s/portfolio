import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Timeline from "@/components/experience/Timeline";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Samyak Bajracharya's work history — Frontend Engineer at Rewasoft, freelance projects, and self-directed learning.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <SectionReveal className="mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            Career
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ color: "var(--fg)" }}
              >
                Experience
              </h1>
              <p
                className="text-base max-w-lg leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                3+ years of shipping production React & Next.js applications,
                from enterprise SaaS to freelance client work.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <MagneticButton
                href="/Samyak-Bajracharya-Resume.pdf"
                variant="primary"
                size="md"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Resume
              </MagneticButton>
              <MagneticButton
                href="/Samyak-Bajracharya-Cover-Letter.pdf"
                variant="outline"
                size="md"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Cover Letter
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <Timeline />

        {/* CTA */}
        <SectionReveal className="mt-20">
          <div
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--fg)" }}
            >
              Interested in working together?
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--fg-muted)" }}
            >
              I&apos;m open to full-time roles and exciting freelance
              projects.
            </p>
            <MagneticButton href="/contact" variant="primary" size="md">
              Get In Touch
              <ArrowRightIcon className="w-4 h-4" />
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
