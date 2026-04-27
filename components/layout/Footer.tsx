"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: siteConfig.github, label: "GitHub" },
  { icon: FiLinkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: siteConfig.twitter, label: "Twitter" },
  { icon: FiMail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold">
              <span style={{ color: "var(--fg)" }}>samyak</span>
              <span className="text-indigo-500">.</span>
            </Link>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--fg-muted)" }}
            >
              Frontend Engineer · Kathmandu, Nepal
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--fg-muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
                style={{
                  color: "var(--fg-muted)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--fg-muted)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Samyak Bajracharya. Built with Next.js
            & TailwindCSS.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors duration-200 hover:text-indigo-500"
            style={{ color: "var(--fg-muted)" }}
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
