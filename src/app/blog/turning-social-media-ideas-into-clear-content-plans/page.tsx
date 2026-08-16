import type { Metadata } from "next";

import { ArticleBody } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleBody";
import { ArticleHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleHeroSection";
import { RelatedPostsSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/RelatedPostsSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";

export const metadata: Metadata = {
  description:
    "Cómo Tótem conecta marca, contenido y tecnología para construir soluciones completas.",
  title: "De la idea al sistema que la hace crecer — Tótem Mass Media",
};

export default function TurningSocialMediaIdeasIntoClearContentPlansPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <article className="flex justify-center px-5 pb-18 md:pb-24 xl:pb-[120px]">
          <div className="flex w-full max-w-[840px] flex-col items-center gap-8 md:gap-10">
            <ArticleHeroSection />
            <ArticleBody />
          </div>
        </article>
        <RelatedPostsSection />
        <ContactCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
