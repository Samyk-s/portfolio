import SectionReveal from "@/components/ui/SectionReveal";
import { skillCategories } from "@/data/experience";

export default function Skills() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal className="mb-16">
          <p className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
            Tech Stack
          </p>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2
              className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
              style={{ color: "var(--fg)" }}
            >
              Tools I use to make interfaces feel effortless.
            </h2>
            <p className="max-w-xl text-base leading-relaxed lg:ml-auto" style={{ color: "var(--fg-muted)" }}>
              I like stacks that balance speed, maintainability, and expressive
              interaction. The goal is simple: fewer rough edges between idea
              and production.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.label}
              className="group relative overflow-hidden rounded-[1.75rem] border p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-xl">
                    {cat.icon}
                  </span>
                  <span className="text-sm font-black" style={{ color: "var(--fg)" }}>
                    {cat.label}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold" style={{ color: "var(--fg-muted)" }}>
                  0{index + 1}
                </span>
              </div>
              <div className="relative flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
