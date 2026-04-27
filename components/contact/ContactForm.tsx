"use client";

import { useState, FormEvent } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.formSubmitToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: `Portfolio Contact: ${form.subject}`,
            _template: "table",
            _captcha: "false",
            _replyto: form.email,
          }),
        }
      );

      if (res.ok) {
        setSent(true);
        setForm(initialForm);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setError(`Something went wrong. Please email me directly at ${siteConfig.email}.`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-[var(--font-geist-sans)]";
  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
  };

  if (sent) {
    return (
      <div
        className="rounded-2xl p-10 text-center card-hover"
        style={{ background: "var(--bg-card)" }}
      >
        <div className="flex justify-center mb-4">
          <CheckCircleIcon
            className="w-14 h-14"
            style={{ color: "var(--accent)" }}
          />
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "var(--fg)" }}
        >
          Message sent!
        </h3>
        <p style={{ color: "var(--fg-muted)" }} className="text-sm">
          Thanks for reaching out. Your message was sent to my email, and I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 sm:p-8 space-y-4 card-hover"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--fg-muted)" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Samyak Bajracharya"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
            }
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--fg-muted)" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
            }
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
          style={{ color: "var(--fg-muted)" }}
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="Frontend role · Freelance project · Collaboration"
          className={inputClass}
          style={inputStyle}
          onFocus={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")
          }
          onBlur={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
          }
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
          style={{ color: "var(--fg-muted)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about the opportunity or project..."
          className={`${inputClass} resize-none`}
          style={inputStyle}
          onFocus={(e) =>
            ((e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)")
          }
          onBlur={(e) =>
            ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border)")
          }
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <MagneticButton
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message →"}
      </MagneticButton>

      <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        This sends directly to{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium hover:text-indigo-500 transition-colors"
          style={{ color: "var(--fg)" }}
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </form>
  );
}
