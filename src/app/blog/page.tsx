import type { Metadata } from "next";

import { BlogGridSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogGridSection";
import { BlogTitleSection } from "@/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogTitleSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";

export const metadata: Metadata = {
  description:
    "Insights on social content, creators, and strategy, written from inside the work, not theory.",
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <BlogTitleSection />
        <BlogGridSection />
        <ContactCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
