import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import SectionReveal from "@/components/ui/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />

      {/* CTA banner */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionReveal>
            <div
              className="relative overflow-hidden rounded-[2rem] p-10 text-center shadow-2xl shadow-indigo-500/10 sm:p-16"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-soft) 0%, color-mix(in srgb, var(--bg-card) 88%, transparent) 58%, transparent 100%)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="relative">
              <p className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
                Let&apos;s Work Together
              </p>
              <h2
                className="mx-auto mb-5 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
                style={{ color: "var(--fg)" }}
              >
                Have a product idea that needs to feel sharper?
              </h2>
              <p
                className="mx-auto mb-8 max-w-xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                I&apos;m currently open to full-time roles and freelance
                projects. If the interface matters, I&apos;d love to help make
                it fast, expressive, and easy to use.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Get In Touch
                  <ArrowRightIcon className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  href="/Samyak-Bajracharya-Resume.pdf"
                  variant="outline"
                  size="lg"
                >
                  View Resume
                </MagneticButton>
              </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
