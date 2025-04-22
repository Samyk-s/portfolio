"use client";

type LogoItem = {
  src: string;
  alt: string;
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
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      {/* 🔄 Orbit Animation */}
      <div className="relative w-[500px] h-[500px]"> {/* Increased size of orbit container */}
        {/* Center - Git & CI/CD */}
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 rounded-md shadow-lg">
          <img src="/logos/githublogo.jpg" alt="GitHub" className="h-16 w-16 mb-3" /> {/* Square GitHub logo */}
        </div>

        {/* Orbit */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10">
          {orbitItems.map((item, i) => {
            const angle = (i / orbitItems.length) * 360;
            const radius = 200; // Increased the orbit radius for better spacing
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-14 w-14 bg-white/20 p-2 rounded-full shadow-md" // Larger images in orbit
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
