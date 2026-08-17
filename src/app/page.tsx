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
        <Reveal>
          <MissionSection />
        </Reveal>
        <Reveal fadeOnly>
          <FeaturePerformanceSection />
        </Reveal>
        <Reveal fadeOnly>
          <FeatureCreatorsSection />
        </Reveal>
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
