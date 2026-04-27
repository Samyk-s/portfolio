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
  formSubmitToken: "36633eaf9122298dad457da49df53a86",
  whatsapp: "9779808516437",
  location: "Kathmandu, Nepal",
  github: "https://github.com/Samyk-s",
  linkedin: "https://www.linkedin.com/in/samyak-bajracharya-b3380028a",
  instagram: "https://www.instagram.com/samyk_s7/",
  url: "https://samyakbajracharya.dev",
  description:
    "Frontend Engineer based in Kathmandu, Nepal. I build fast, beautiful, and accessible web experiences using React, Next.js, and TypeScript.",
  ogImage: "/og-image.png",
};
