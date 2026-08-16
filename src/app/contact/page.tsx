import type { Metadata } from "next";

import { ContactHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/contact-4eb95063/ContactHeroSection";
import { FaqSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FaqSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";

export const metadata: Metadata = {
  description:
    "Cuéntanos tus objetivos y te ayudaremos a crear contenido adaptado a cómo las personas navegan hoy.",
  title: "Contacto",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <ContactHeroSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  );
}
