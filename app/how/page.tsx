"use client";

import { useEffect, useState } from "react";

type LogoItem = {
  src: string;
  alt: string;
};

type Position = {
  x: number;
  y: number;
};

const orbitItems: LogoItem[] = [
  { src: "/logos/canva.jpg", alt: "Canva" },
  { src: "/logos/react.jpg", alt: "React" },
  { src: "/logos/nextjs.jpg", alt: "Next.js" },
  { src: "/logos/tailwindcss.jpg", alt: "TailwindCSS" },
  { src: "/logos/vite.jpg", alt: "Vite" },
  { src: "/logos/yarn.jpg", alt: "Yarn" },
  { src: "/logos/firebase.jpg", alt: "Firebase" },
  { src: "/logos/lighthouse.jpg", alt: "Lighthouse" },
  { src: "/logos/jest.jpg", alt: "Jest" },
  { src: "/logos/cypress.jpg", alt: "Cypress" },
  { src: "/logos/postman.jpg", alt: "Postman" },
];

export default function TechOrbit() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [containerSize, setContainerSize] = useState(500);

  useEffect(() => {
    const updateOrbit = () => {
      const width = window.innerWidth;
      let radius: number;
      let size: number;

      if (width < 480) {
        radius = 100;
        size = 260;
      } else if (width < 768) {
        radius = 140;
        size = 340;
      } else {
        radius = 200;
        size = 500;
      }

      setContainerSize(size);
      setPositions(
        orbitItems.map((_, i) => {
          const angle = (i / orbitItems.length) * 360;
          const rad = (angle * Math.PI) / 180;
          return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) };
        })
      );
    };

    updateOrbit();
    window.addEventListener("resize", updateOrbit);
    return () => window.removeEventListener("resize", updateOrbit);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center">
        That is How I <span className="text-blue-400">Do It</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mt-4 text-center mb-16 sm:mb-24 md:mb-[150px] max-w-xl">
        This is my digital toolkit — the stuff I love and trust to build cool
        things.
      </p>

      <div
        className="relative flex-shrink-0"
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-4 rounded-md shadow-lg">
          <img
            src="/logos/githublogo.jpg"
            alt="GitHub"
            className="h-10 w-10 sm:h-16 sm:w-16 mb-3"
          />
        </div>

        {/* Orbit ring */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10">
          {positions.map((pos, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `calc(50% + ${pos.y}px)`,
                left: `calc(50% + ${pos.x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={orbitItems[i].src}
                alt={orbitItems[i].alt}
                className="h-8 w-8 sm:h-11 sm:w-11 md:h-14 md:w-14 bg-white/20 p-1 sm:p-2 rounded-full shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
