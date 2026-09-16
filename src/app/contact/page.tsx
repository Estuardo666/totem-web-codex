import type { Metadata } from "next";

import { ContactHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/contact-4eb95063/ContactHeroSection";
import { FaqSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FaqSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";
import { buildPageMetadata } from "@/lib/seo";

const title = "Cuéntanos tu proyecto";
const description =
  "Cuéntanos tu proyecto: contenido audiovisual, campañas digitales o el sitio web que tu negocio necesita.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: "/contact",
  title,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <ContactHeroSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
