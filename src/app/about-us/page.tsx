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
import { ScrollDrawCurve } from "@/components/sites/shinta-framer-media-3240cba4/shared/ScrollDrawCurve";

export const metadata: Metadata = {
  description:
    "Tótem Mass Media integra producción audiovisual, marketing digital, estrategia de contenido y desarrollo web para hacer crecer negocios.",
  title: "Tótem Mass Media — Agencia creativa y digital",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <div className="relative">
          <ScrollDrawCurve
            className="top-[900px] left-[-210px] z-10 h-[430px] w-[560px] md:top-[1040px] md:left-[-260px] md:h-[570px] md:w-[740px] xl:top-[1160px] xl:left-[-300px] xl:h-[860px] xl:w-[1120px]"
            drawFrom={0.25}
            drawUntil={0.94}
            shape="sweepRight"
            strokeWidth={2.05}
            tone="pink"
          />
          <ScrollDrawCurve
            className="top-[1530px] right-[-20px] z-10 h-[650px] w-[260px] md:top-[1670px] md:h-[820px] md:w-[328px] xl:top-[1790px] xl:right-[-30px] xl:h-[1200px] xl:w-[480px]"
            shape="sweepLeft"
            strokeWidth={1.7}
            tone="lavender"
          />

          <Reveal className="relative z-20" fadeOnly>
            <AboutHeroSection />
          </Reveal>
          <Reveal className="relative z-20">
            <VisionSection />
          </Reveal>
          <Reveal className="relative z-20">
            <MissionIntroSection />
          </Reveal>
          <Reveal className="relative z-20" fadeOnly>
            <CollageSection />
          </Reveal>
          <Reveal className="relative z-20">
            <TeamGridSection />
          </Reveal>
        </div>
        <Reveal fadeOnly>
          <ContactCtaSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
