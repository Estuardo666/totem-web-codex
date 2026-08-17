import type { Metadata } from "next";

import { BlogGridSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogGridSection";
import { BlogTitleSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogTitleSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";

export const metadata: Metadata = {
  description:
    "Proyectos, capacidades e ideas de Tótem sobre estrategia, creatividad y tecnología.",
  title: "Proyectos y capacidades — Tótem Mass Media",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <BlogTitleSection />
        </Reveal>
        <Reveal>
          <BlogGridSection />
        </Reveal>
        <Reveal>
          <ContactCtaSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
