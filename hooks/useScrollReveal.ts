"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.9,
      ease = "power3.out",
      delay = 0,
      start = "top 88%",
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, x, opacity },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useScrollRevealChildren<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions & { stagger?: number } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.9,
      ease = "power3.out",
      delay = 0,
      stagger = 0.1,
      start = "top 88%",
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(el.children),
        { y, x, opacity },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
