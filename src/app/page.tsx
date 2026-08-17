import { BlogSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/BlogSection";
import { ComparisonSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ComparisonSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FaqSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FaqSection";
import { FeatureCreatorsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FeatureCreatorsSection";
import { FeaturePerformanceSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FeaturePerformanceSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { HeroSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/HeroSection";
import { LogoStrip } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/LogoStrip";
import { MissionSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/MissionSection";
import { MoreWorksSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/MoreWorksSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { PainPointsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/PainPointsSection";
import { PricingSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/PricingSection";
import { ProcessSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ProcessSection";
import { ProjectsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ProjectsSection";
import { ServicesSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ServicesSection";
import { TeamSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/TeamSection";
import { TestimonialsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/TestimonialsSection";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";
import { ScrollDrawCurve } from "@/components/sites/shinta-framer-media-3240cba4/shared/ScrollDrawCurve";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main>
        <HeroSection />
        <Reveal>
          <LogoStrip />
        </Reveal>
        <Reveal fadeOnly>
          <PainPointsSection />
        </Reveal>
        <div className="relative">
          <ScrollDrawCurve
            className="top-[250px] left-[-210px] z-10 h-[430px] w-[560px] md:top-[210px] md:left-[-260px] md:h-[570px] md:w-[740px] lg:top-[520px] lg:left-[-300px] lg:h-[860px] lg:w-[1120px]"
            drawFrom={0.25}
            drawUntil={0.94}
            shape="sweepRight"
            strokeWidth={2.05}
            tone="pink"
          />
          <ScrollDrawCurve
            className="top-[1120px] right-[-20px] z-10 h-[650px] w-[260px] md:top-[1210px] md:h-[820px] md:w-[328px] lg:top-[1150px] lg:right-[-30px] lg:h-[1200px] lg:w-[480px]"
            shape="sweepLeft"
            strokeWidth={1.7}
            tone="lavender"
          />

          <Reveal className="relative z-20">
            <MissionSection />
          </Reveal>
          <Reveal className="relative z-20" fadeOnly>
            <FeaturePerformanceSection />
          </Reveal>
          <Reveal className="relative z-20" fadeOnly>
            <FeatureCreatorsSection />
          </Reveal>
        </div>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <MoreWorksSection />
        </Reveal>
        <Reveal fadeOnly>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <ComparisonSection />
        </Reveal>
        <Reveal>
          <ProcessSection />
        </Reveal>
        <Reveal fadeOnly>
          <TestimonialsSection />
        </Reveal>
        <Reveal>
          <TeamSection />
        </Reveal>
        <Reveal>
          <PricingSection />
        </Reveal>
        <Reveal fadeOnly>
          <BlogSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal fadeOnly>
          <ContactCtaSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
