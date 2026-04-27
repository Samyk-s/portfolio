export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export const siteConfig = {
  name: "Samyak Bajracharya",
  role: "Frontend Engineer",
  email: "samykbajr919@gmail.com",
  location: "Kathmandu, Nepal",
  github: "https://github.com/samyk-s",
  linkedin: "https://linkedin.com/in/samyakbajracharya",
  twitter: "https://twitter.com/samykbajr",
  url: "https://samyakbajracharya.dev",
  description:
    "Frontend Engineer based in Kathmandu, Nepal. I build fast, beautiful, and accessible web experiences using React, Next.js, and TypeScript.",
  ogImage: "/og-image.png",
};
