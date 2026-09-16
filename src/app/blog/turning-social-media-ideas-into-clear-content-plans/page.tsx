import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";

import { ArticleBody } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleBody";
import { ArticleHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleHeroSection";
import { RelatedPostsSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/RelatedPostsSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { absoluteUrl, buildPageMetadata, OG_IMAGE, SITE_URL } from "@/lib/seo";

const title = "De la idea al contenido que la hace crecer";
const description =
  "Cómo Tótem conecta estrategia, contenido audiovisual, marketing y desarrollo web en una sola solución.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: "/blog/turning-social-media-ideas-into-clear-content-plans",
  title,
  type: "article",
});

const PATH = "/blog/turning-social-media-ideas-into-clear-content-plans";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  author: { "@id": `${SITE_URL}/#organization` },
  dateModified: "2026-08-17T02:55:48-05:00",
  datePublished: "2026-08-15T16:36:57-05:00",
  description,
  headline: title,
  image: absoluteUrl(OG_IMAGE.url),
  inLanguage: "es",
  mainEntityOfPage: absoluteUrl(PATH),
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", item: SITE_URL, name: "Inicio", position: 1 },
    {
      "@type": "ListItem",
      item: absoluteUrl("/blog"),
      name: "Servicios y proyectos",
      position: 2,
    },
    { "@type": "ListItem", name: title, position: 3 },
  ],
};

export default function TurningSocialMediaIdeasIntoClearContentPlansPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
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
