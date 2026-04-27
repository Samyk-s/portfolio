import SectionReveal from "@/components/ui/SectionReveal";
import { skillCategories } from "@/data/experience";

export default function Skills() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal className="mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-indigo-500">
            Tech Stack
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--fg)" }}
          >
            What I work with
          </h2>
        </SectionReveal>

        <SectionReveal
          stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
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
      </div>
    </section>
  );
}
