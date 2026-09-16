import type { Metadata } from "next";

import { BlogGridSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogGridSection";
import { BlogTitleSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogTitleSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";
import { buildPageMetadata } from "@/lib/seo";

const title = "Servicios y proyectos";
const description =
  "Servicios y proyectos de Tótem: producción audiovisual, marketing digital, estrategia de contenido y desarrollo web.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: "/blog",
  title,
});

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
