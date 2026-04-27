import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Samyak Bajracharya, a Frontend Engineer based in Kathmandu, Nepal with 3+ years building React, Next.js, and TypeScript applications.",
};

export default function AboutPage() {
  return <AboutContent />;
}
