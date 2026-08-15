import type { Metadata } from "next";

import { AboutHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/AboutHeroSection";
import { CollageSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/CollageSection";
import { MissionIntroSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/MissionIntroSection";
import { TeamGridSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/TeamGridSection";
import { VisionSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/VisionSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";

export const metadata: Metadata = {
  description:
    "We’re the ones who pause a Reel just to analyze the hook, send TikToks to each other with “this is smart,” and debate why one video popped while another didn’t.",
  title: "About us",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <AboutHeroSection />
        <VisionSection />
        <MissionIntroSection />
        <CollageSection />
        <TeamGridSection />
        <ContactCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
