import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Timeline from "@/components/experience/Timeline";
import { officeTechStack } from "@/data/experience";
import { siteConfig } from "@/lib/utils";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  SiDocker,
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Samyak Bajracharya's work history - Frontend Engineer at Rewasoft, production CRM systems, full-stack travel platforms, hospital ecosystem projects, education, and training.",
};

const profileContacts = [
  { icon: EnvelopeIcon, label: "Email", value: siteConfig.email },
  { icon: PhoneIcon, label: "Phone", value: "+977 980-8516437" },
  { icon: MapPinIcon, label: "Location", value: siteConfig.location },
];

const techIcons = {
  react: SiReact,
  data: SiRedux,
  tools: SiDocker,
  special: SiThreedotjs,
};

const featuredTools = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiRedux, label: "Redux Toolkit" },
  { icon: SiReactquery, label: "React Query" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiThreedotjs, label: "Three.js" },
];

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                className="text-base max-w-xl leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Frontend Engineer with 1+ year of experience building
                production-grade React and Next.js applications across CRM,
                travel, and hospital ecosystem platforms.
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

        <SectionReveal className="mb-16">
          <div
            className="rounded-2xl p-6 sm:p-8 card-hover"
            style={{ background: "var(--bg-card)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
                  Profile
                </p>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--fg)" }}
                >
                  Samyak Bajracharya
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Strong in scalable UI architecture, API integration, and
                  performance optimization, with hands-on experience
                  coordinating backend services using Node.js and NestJS.
                  Comfortable delivering end-to-end features from UI development
                  to API integration and deployment in production environments.
                </p>
              </div>

              <div className="grid gap-3">
                {profileContacts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl p-3"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                    </span>
                    <span>
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--fg)" }}
                      >
                        {value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
                Office Tech Stack
              </p>
              <h2 className="text-2xl font-bold" style={{ color: "var(--fg)" }}>
                Tools used in production work
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredTools.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {officeTechStack.map((category) => {
              const Icon = techIcons[category.icon as keyof typeof techIcons];

              return (
                <div
                  key={category.label}
                  className="rounded-2xl p-5 card-hover"
                  style={{ background: "var(--bg-card)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                    </span>
                    <h3 className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <Timeline />

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
            <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
              I&apos;m open to frontend roles, full-stack product work, and
              practical web platforms that need careful implementation.
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
