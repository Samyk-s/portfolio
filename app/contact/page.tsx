import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Samyak Bajracharya - Frontend Engineer based in Kathmandu, Nepal. Open to full-time roles and freelance projects.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
