"use client";

import { useEffect, useRef } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import {
  HiOutlinePencilAlt,
  HiCode,
  HiDeviceMobile,
  HiOutlineCloudDownload,
  HiSearch,
  HiLightningBolt,
  HiFire,
} from "react-icons/hi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LogoItem = {
  src: string;
  alt: string;
};

function LogoRow({ title, items }: { title: string; items: LogoItem[] }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((tech: LogoItem, idx: number) => (
          <img
            key={idx}
            src={tech.src}
            alt={tech.alt}
            className="h-20 w-auto bg-white/10 p-3 rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

const techData: { [category: string]: LogoItem[] } = {
  uiux: [
    { src: "/logos/canva.jpg", alt: "Canva" },
    { src: "/logos/tailwindcss.jpg", alt: "TailwindCSS" },
    { src: "/logos/flowbite.jpg", alt: "Flowbite" },
    { src: "/logos/gsap.jpg", alt: "GSAP" },
    { src: "/logos/mui.jpg", alt: "Material UI" },
  ],
  frontend: [
    { src: "/logos/react.jpg", alt: "React" },
    { src: "/logos/nextjs.jpg", alt: "Next.js" },
  ],
  versionControl: [
    { src: "/logos/github.jpg", alt: "GitHub" },
    { src: "/logos/gitlab.jpg", alt: "GitLab" },
    { src: "/logos/firebase.jpg", alt: "Firebase" },
  ],
  packageTools: [
    { src: "/logos/npm.jpg", alt: "npm" },
    { src: "/logos/yarn.jpg", alt: "yarn" },
    { src: "/logos/vite.jpg", alt: "Vite" },
    { src: "/logos/vercel.jpg", alt: "Vercel" },
  ],
  seoTesting: [
    { src: "/logos/lighthouse.jpg", alt: "Lighthouse" },
    { src: "/logos/jest.jpg", alt: "Jest" },
    { src: "/logos/cypress.jpg", alt: "Cypress" },
    { src: "/logos/postman.jpg", alt: "Postman" },
  ],
  devops: [
    { src: "/logos/docker.jpg", alt: "Docker" },
    { src: "/logos/cicd.jpg", alt: "CI/CD" },
    { src: "/logos/vscode.jpg", alt: "VS Code" },
  ],
  game: [{ src: "/logos/unity.jpg", alt: "Unity" }],
};

export function Whattech() {
  const timelineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  // Helper to assign refs dynamically
  const setRef = (el: HTMLDivElement | null, index: number) => {
    if (el) timelineRefs.current[index] = el;
  };

  const categories = [
    {
      title: "UI/UX Styling",
      items: techData.uiux,
      icon: HiOutlinePencilAlt,
    },
    {
      title: "Frontend Development",
      items: techData.frontend,
      icon: HiDeviceMobile,
    },
    {
      title: "Version Control & Integration",
      items: techData.versionControl,
      icon: HiCode,
    },
    {
      title: "Package Management & Deployment",
      items: techData.packageTools,
      icon: HiOutlineCloudDownload,
    },
    {
      title: "SEO, Testing & Debugging",
      items: techData.seoTesting,
      icon: HiSearch,
    },
    {
      title: "DevOps & Tools",
      items: techData.devops,
      icon: HiLightningBolt,
    },
    {
      title: "Game Development",
      items: techData.game,
      icon: HiFire,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />

      <div className="relative z-10 flex flex-col items-start text-white px-6 sm:px-12 lg:px-24 py-12 max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-10">What tech stack I use</h1>
        <Timeline>
          {categories.map((cat, index) => (
            <TimelineItem key={cat.title}>
              <TimelinePoint icon={cat.icon} />
              <TimelineContent>
                <div ref={(el) => setRef(el, index)}>
                  <LogoRow title={cat.title} items={cat.items} />
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
