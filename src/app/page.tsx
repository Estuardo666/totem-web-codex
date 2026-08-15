import { BlogSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/BlogSection";
import { ComparisonSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ComparisonSection";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ContactCtaSection";
import { FaqSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FaqSection";
import { FeatureCreatorsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FeatureCreatorsSection";
import { FeaturePerformanceSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FeaturePerformanceSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FooterSection";
import { HeroSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/HeroSection";
import { LogoStrip } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/LogoStrip";
import { MissionSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/MissionSection";
import { MoreWorksSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/MoreWorksSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/Navbar";
import { PainPointsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/PainPointsSection";
import { PricingSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/PricingSection";
import { ProcessSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ProcessSection";
import { ProjectsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ProjectsSection";
import { ServicesSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/ServicesSection";
import { TeamSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/TeamSection";
import { TestimonialsSection } from "@/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <PainPointsSection />
        <MissionSection />
        <FeaturePerformanceSection />
        <FeatureCreatorsSection />
        <ProjectsSection />
        <MoreWorksSection />
        <ServicesSection />
        <ComparisonSection />
        <ProcessSection />
        <TestimonialsSection />
        <TeamSection />
        <PricingSection />
        <BlogSection />
        <FaqSection />
        <ContactCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
