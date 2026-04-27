import SectionReveal from "@/components/ui/SectionReveal";
import {
  certifications,
  education,
  experiences,
  professionalProjects,
} from "@/data/experience";

export default function Timeline() {
  return (
    <div className="space-y-16">
      {/* Work experience */}
      <SectionReveal>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-8 text-indigo-500">
          Work Experience
        </p>
        <div className="relative space-y-0">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Timeline connector */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute left-[1.1rem] top-10 bottom-0 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--border), transparent)",
                  }}
                />
              )}

              {/* Dot */}
              <div className="relative shrink-0 mt-1">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold z-10 relative"
                  style={{
                    background: exp.current
                      ? "var(--accent)"
                      : "var(--surface)",
                    color: exp.current ? "#fff" : "var(--fg-muted)",
                    border: "2px solid",
                    borderColor: exp.current ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {exp.company[0]}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--fg)" }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.company}
                      </span>
                      <span
                        className="tag text-[10px] px-2 py-0.5"
                        style={{ fontFamily: "inherit" }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className="text-xs font-mono font-medium"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {exp.period}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="text-sm flex items-start gap-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tag text-[10px] px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Professional projects */}
      <SectionReveal>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-8 text-indigo-500">
          Professional Projects / Key Contributions
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {professionalProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl p-6 card-hover"
              style={{ background: "var(--bg-card)" }}
            >
              <h3 className="text-base font-bold" style={{ color: "var(--fg)" }}>
                {project.title}
              </h3>
              <p
                className="text-xs font-semibold mt-1"
                style={{ color: "var(--accent)" }}
              >
                {project.tech}
              </p>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>

      {/* Education */}
      <SectionReveal>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-8 text-indigo-500">
          Education
        </p>
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="rounded-2xl p-6 card-hover"
            style={{ background: "var(--bg-card)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  {edu.institution}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className="text-xs font-mono font-medium"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {edu.period}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                  {edu.location}
                </p>
              </div>
            </div>
            <p
              className="text-sm mt-3 leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              {edu.details}
            </p>
          </div>
        ))}
      </SectionReveal>

      {/* Certifications */}
      <SectionReveal>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-8 text-indigo-500">
          Certifications / Training
        </p>
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-2xl p-6 card-hover"
            style={{ background: "var(--bg-card)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  {cert.institution}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className="text-xs font-mono font-medium"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {cert.period}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                  {cert.credential}
                </p>
              </div>
            </div>
            <p
              className="text-sm mt-3 leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              {cert.details}
            </p>
          </div>
        ))}
      </SectionReveal>
    </div>
  );
}
