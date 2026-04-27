"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactForm from "@/components/contact/ContactForm";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/lib/utils";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const whatsappMessage = "Hi ! I want to contact you about ....";
const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  whatsappMessage
)}`;

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
  {
    icon: ClockIcon,
    label: "Response",
    value: "Usually within 24 hours",
    href: null,
  },
];

const socials = [
  { icon: FiGithub, label: "GitHub", href: siteConfig.github },
  { icon: FiLinkedin, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: FiInstagram, label: "Instagram", href: siteConfig.instagram },
];

const documents = [
  {
    label: "Resume",
    meta: "PDF - Frontend Engineer",
    href: "/Samyak-Bajracharya-Resume.pdf",
  },
  {
    label: "Cover Letter",
    meta: "PDF - Role-ready intro",
    href: "/Samyak-Bajracharya-Cover-Letter.pdf",
  },
];

const focusAreas = ["Frontend roles", "Freelance builds", "UI polish", "React & Next.js"];

export default function ContactPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-reveal]",
        { y: 26, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
        }
      );

      gsap.fromTo(
        "[data-contact-line]",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.to("[data-contact-float]", {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="overflow-hidden pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="relative mb-14">
          <div
            data-contact-float
            className="absolute right-0 top-4 hidden h-28 w-28 rounded-full border lg:block"
            style={{
              borderColor: "var(--border)",
              background:
                "radial-gradient(circle at 35% 35%, var(--accent-soft), transparent 68%)",
            }}
          />

          <div data-contact-reveal className="mb-5">
            <span className="tag tag-accent inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Available for frontend work
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <h1
                data-contact-reveal
                className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--fg)" }}
              >
                Have a role, project, or interface that needs real care?
              </h1>
              <p
                data-contact-reveal
                className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--fg-muted)" }}
              >
                Send the details and I&apos;ll reply with next steps. I&apos;m
                open to frontend roles, freelance product work, and thoughtful
                collaborations around React, Next.js, and polished UI.
              </p>
            </div>

            <div data-contact-reveal className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              <div data-contact-line className="h-px w-full bg-indigo-500/40" />
              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href={whatsappUrl}
                  variant="primary"
                  size="md"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp me
                </MagneticButton>
                <MagneticButton href="#contact-form" variant="outline" size="md">
                  <PaperAirplaneIcon className="h-4 w-4" />
                  Use form
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-5">
          <aside className="space-y-5 lg:col-span-2">
            <section data-contact-reveal className="space-y-3">
              <div className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon
                  className="h-5 w-5"
                  style={{ color: "var(--accent)" }}
                />
                <h2 className="text-sm font-bold" style={{ color: "var(--fg)" }}>
                  Direct details
                </h2>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="block truncate text-sm font-semibold"
                        style={{ color: "var(--fg)" }}
                      >
                        {value}
                      </span>
                    </span>
                    {href && (
                      <ArrowTopRightOnSquareIcon
                        className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100"
                        style={{ color: "var(--accent)" }}
                      />
                    )}
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3 rounded-xl p-4 card-hover"
                    style={{ background: "var(--bg-card)" }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="group flex items-center gap-3 rounded-xl p-4 card-hover"
                    style={{ background: "var(--bg-card)" }}
                  >
                    {content}
                  </div>
                );
              })}
            </section>

            <section
              data-contact-reveal
              className="rounded-xl p-4 card-hover"
              style={{ background: "var(--bg-card)" }}
            >
              <h2
                className="mb-3 text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "var(--fg-muted)" }}
              >
                Find me online
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: "var(--surface)",
                      color: "var(--fg-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: "var(--accent)" }}
                    />
                    {label}
                  </a>
                ))}
              </div>
            </section>

            <section
              data-contact-reveal
              className="rounded-xl p-4 card-hover"
              style={{ background: "var(--bg-card)" }}
            >
              <h2
                className="mb-3 text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "var(--fg-muted)" }}
              >
                Documents
              </h2>
              <div className="space-y-2">
                {documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.href}
                    download
                    className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--fg)",
                    }}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <ArrowDownTrayIcon
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold">{doc.label}</span>
                      <span
                        className="block truncate text-[10px]"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {doc.meta}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </aside>

          <section
            id="contact-form"
            data-contact-reveal
            className="scroll-mt-28 lg:col-span-3"
          >
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
