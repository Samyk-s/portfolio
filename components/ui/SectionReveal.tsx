"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  from?: "bottom" | "left" | "right";
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  from = "bottom",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars = {
      bottom: { y: 40, x: 0 },
      left: { y: 0, x: -40 },
      right: { y: 0, x: 40 },
    }[from];

    const ctx = gsap.context(() => {
      const targets = stagger ? Array.from(el.children) : el;
      gsap.fromTo(
        targets,
        { ...fromVars, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, stagger, from]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
