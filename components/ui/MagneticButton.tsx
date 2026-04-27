"use client";

import { ReactNode, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  strength?: number;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
  download?: boolean;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  size = "md",
  strength = 0.3,
  type = "button",
  disabled,
  target,
  rel,
  download,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(el, {
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-95",
    outline:
      "border-2 text-[var(--fg)] hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10",
    ghost: "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)]",
  };

  const outlineBorderStyle =
    variant === "outline"
      ? { borderColor: "var(--border)" }
      : {};

  const classes = cn(base, sizes[size], variants[variant], className);

  const inner = href ? (
    href.startsWith("http") || href.startsWith("mailto") || download ? (
      <a
        href={href}
        className={classes}
        style={outlineBorderStyle}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        download={download}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} style={outlineBorderStyle}>
        {children}
      </Link>
    )
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
      style={outlineBorderStyle}
    >
      {children}
    </button>
  );

  return (
    <div ref={wrapRef} className="inline-flex">
      {inner}
    </div>
  );
}
