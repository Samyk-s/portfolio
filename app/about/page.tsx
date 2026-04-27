import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { skillCategories } from "@/data/experience";
import { siteConfig } from "@/lib/utils";
import {
  ArrowDownTrayIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Samyak Bajracharya — Frontend Engineer based in Kathmandu, Nepal. 3+ years building React, Next.js, and TypeScript applications.",
};

const values = [
  {
    icon: "⚡",
    title: "Performance-first",
    desc: "I optimize for Core Web Vitals, bundle size, and render efficiency from day one — not as an afterthought.",
  },
  {
    icon: "♿",
    title: "Accessible by default",
    desc: "Every interface I build follows WCAG standards. Good UX includes everyone.",
  },
  {
    icon: "🧩",
    title: "Component thinking",
    desc: "I design reusable, composable systems that scale across teams and products without fighting themselves.",
  },
  {
    icon: "📐",
    title: "Pixel-perfect craft",
    desc: "Details matter. I sweat the spacing, the easing curves, the hover states — because users notice.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <SectionReveal className="mb-20">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            About Me
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Building the web with care and craft.
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Hi, I&apos;m Samyak — a Frontend Engineer based in Kathmandu,
                Nepal. I&apos;ve spent the last 3+ years turning complex
                problems into clean, fast, and delightful web experiences.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                My stack is centred around{" "}
                <strong style={{ color: "var(--fg)" }}>
                  React, Next.js, and TypeScript
                </strong>
                , with deep experience in state management (Redux Toolkit,
                React Query), animation (GSAP, Three.js), and production
                deployment (Docker, Vercel).
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                When I&apos;m not building, I&apos;m learning — currently
                exploring WebGL shaders, AI-assisted interfaces, and
                design systems at scale.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <MagneticButton
                  href="/Samyak-Bajracharya-Resume.pdf"
                  variant="primary"
                  size="md"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Download Resume
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

            {/* Info card */}
            <div
              className="rounded-2xl p-6 space-y-4 card-hover"
              style={{ background: "var(--bg-card)" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold mb-2">
                SB
              </div>

              {[
                {
                  icon: MapPinIcon,
                  text: siteConfig.location,
                  label: "Location",
                },
                {
                  icon: EnvelopeIcon,
                  text: siteConfig.email,
                  label: "Email",
                  href: `mailto:${siteConfig.email}`,
                },
              ].map(({ icon: Icon, text, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--surface)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-wide"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium hover:text-indigo-500 transition-colors"
                        style={{ color: "var(--fg)" }}
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                        {text}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div
                className="flex gap-2 pt-2"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <FiGithub className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <FiLinkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Values */}
        <SectionReveal className="mb-20">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            How I Work
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10"
            style={{ color: "var(--fg)" }}
          >
            Principles I build by
          </h2>
          <SectionReveal stagger className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 card-hover"
                style={{ background: "var(--bg-card)" }}
              >
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </SectionReveal>
        </SectionReveal>

        {/* Skills */}
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            Tech Stack
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10"
            style={{ color: "var(--fg)" }}
          >
            Tools of the trade
          </h2>
          <SectionReveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                className="rounded-2xl p-5 card-hover"
                style={{ background: "var(--bg-card)" }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--fg)" }}
                  >
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </SectionReveal>
        </SectionReveal>
      </div>
    </div>
  );
}
