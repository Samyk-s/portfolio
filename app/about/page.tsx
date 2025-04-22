"use client";

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

// Define the logo type
type LogoItem = {
  src: string;
  alt: string;
};

// Reusable logo row component
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

// All tech stack images grouped
const techData: {
  [category: string]: LogoItem[];
} = {
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
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />

      {/* Content - Left aligned */}
      <div className="relative z-10 flex flex-col items-start text-white px-6 sm:px-12 lg:px-24 py-12 max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-10">What tech stack I use</h1>
        <Timeline>
          <TimelineItem>
            <TimelinePoint icon={HiOutlinePencilAlt} />
            <TimelineContent>
              <LogoRow title="UI/UX Styling" items={techData.uiux} />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiDeviceMobile} />
            <TimelineContent>
              <LogoRow title="Frontend Development" items={techData.frontend} />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiCode} />
            <TimelineContent>
              <LogoRow
                title="Version Control & Integration"
                items={techData.versionControl}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiOutlineCloudDownload} />
            <TimelineContent>
              <LogoRow
                title="Package Management & Deployment"
                items={techData.packageTools}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiSearch} />
            <TimelineContent>
              <LogoRow
                title="SEO, Testing & Debugging"
                items={techData.seoTesting}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiLightningBolt} />
            <TimelineContent>
              <LogoRow title="DevOps & Tools" items={techData.devops} />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint icon={HiFire} />
            <TimelineContent>
              <LogoRow title="Game Development" items={techData.game} />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
