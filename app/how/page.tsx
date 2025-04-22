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
  const [positions, setPositions] = useState<Position[]>([]); // Use the Position type for state

  useEffect(() => {
    // Run only on client side
    const updatedPositions = orbitItems.map((item, i) => {
      const angle = (i / orbitItems.length) * 360;
      const radius = 200; // Adjust radius as needed
      const rad = (angle * Math.PI) / 180;
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      return { x, y }; // Return position object with x and y
    });

    setPositions(updatedPositions); // Set the calculated positions after mount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      {/* Added heading */}
      <h1 className="text-4xl font-bold mb-5 text-center">
       That is How I <span className="text-blue-400">Do It</span>
      </h1>
      <p className="text-2xl mt-[25px] text-center">
        For the React/next.js project</p>
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      
      <div className="relative w-[500px] h-[500px]">
        
      
        {/* Center - Git & CI/CD */}
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 rounded-md shadow-lg">
          <img src="/logos/githublogo.jpg" alt="GitHub" className="h-16 w-16 mb-3" />
        </div>

        {/* Orbit */}
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
                className="h-14 w-14 bg-white/20 p-2 rounded-full shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
