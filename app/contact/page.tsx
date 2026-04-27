import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/utils";
import { ArrowDownTrayIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Samyak Bajracharya — Frontend Engineer based in Kathmandu, Nepal. Open to full-time roles and freelance projects.",
};

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
];

const socials = [
  { icon: FiGithub, label: "GitHub", href: siteConfig.github },
  { icon: FiLinkedin, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: FiTwitter, label: "Twitter", href: siteConfig.twitter },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <SectionReveal className="mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            Contact
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--fg)" }}
          >
            Let&apos;s work together.
          </h1>
          <p
            className="text-base max-w-lg leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            I&apos;m currently open to full-time frontend roles and exciting
            freelance projects. Whether you have a job opening, a project
            idea, or just want to say hi — my inbox is open.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info */}
            <SectionReveal
              stagger
              className="space-y-3"
              from="left"
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl p-4 card-hover"
                  style={{ background: "var(--bg-card)" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--accent-soft)" }}
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
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </SectionReveal>

            {/* Socials */}
            <SectionReveal from="left" delay={0.1}>
              <div
                className="rounded-xl p-4 card-hover"
                style={{ background: "var(--bg-card)" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Socials
                </p>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200"
                      style={{
                        background: "var(--surface)",
                        color: "var(--fg-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Resume downloads */}
            <SectionReveal from="left" delay={0.15}>
              <div
                className="rounded-xl p-4 card-hover space-y-2"
                style={{ background: "var(--bg-card)" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Documents
                </p>
                <a
                  href="/Samyak-Bajracharya-Resume.pdf"
                  download
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <ArrowDownTrayIcon
                    className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                  <div>
                    <p className="text-xs font-semibold">Resume</p>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      PDF · Updated 2025
                    </p>
                  </div>
                </a>
                <a
                  href="/Samyak-Bajracharya-Cover-Letter.pdf"
                  download
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <ArrowDownTrayIcon
                    className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                  <div>
                    <p className="text-xs font-semibold">Cover Letter</p>
                    <p
                      className="text-[10px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      PDF · Updated 2025
                    </p>
                  </div>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Contact form */}
          <SectionReveal className="lg:col-span-3">
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
