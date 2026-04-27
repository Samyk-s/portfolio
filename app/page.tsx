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
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionReveal>
            <div
              className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-soft) 0%, transparent 60%)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
                Let&apos;s Work Together
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "var(--fg)" }}
              >
                Have a project in mind?
              </h2>
              <p
                className="text-base max-w-md mx-auto mb-8 leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                I&apos;m currently open to full-time roles and freelance
                projects. Let&apos;s build something great together.
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
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
