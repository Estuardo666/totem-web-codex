import type { Metadata } from "next";

import { AboutHeroSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/AboutHeroSection";
import { CollageSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/CollageSection";
import { MissionIntroSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/MissionIntroSection";
import { TeamGridSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/TeamGridSection";
import { VisionSection } from "@/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/VisionSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";

export const metadata: Metadata = {
  description:
    "Tótem Mass Media integra estrategia, creatividad y tecnología para transformar negocios.",
  title: "Tótem Mass Media — Agencia creativa y tecnológica",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal fadeOnly>
          <AboutHeroSection />
        </Reveal>
        <Reveal>
          <VisionSection />
        </Reveal>
        <Reveal>
          <MissionIntroSection />
        </Reveal>
        <Reveal fadeOnly>
          <CollageSection />
        </Reveal>
        <Reveal>
          <TeamGridSection />
        </Reveal>
        <Reveal fadeOnly>
          <ContactCtaSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
