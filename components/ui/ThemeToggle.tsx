"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 cursor-pointer"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--fg-muted)",
      }}
    >
      <span
        className="absolute transition-all duration-300"
        style={{ opacity: theme === "light" ? 1 : 0, transform: theme === "light" ? "scale(1) rotate(0deg)" : "scale(0) rotate(90deg)" }}
      >
        <SunIcon className="w-4 h-4" />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{ opacity: theme === "dark" ? 1 : 0, transform: theme === "dark" ? "scale(1) rotate(0deg)" : "scale(0) rotate(-90deg)" }}
      >
        <MoonIcon className="w-4 h-4" />
      </span>
    </button>
  );
}
