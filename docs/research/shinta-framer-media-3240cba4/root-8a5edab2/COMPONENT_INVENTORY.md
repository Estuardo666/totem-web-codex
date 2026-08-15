# Component inventory

Nineteen page components are specified in `components/*.spec.md`. Page-exclusive code lives under `src/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/`; shared atoms live one level up in `shared/`.

- Navigation: `Navbar`
- Opening: `HeroSection`, `LogoStrip`
- Story: `PainPointsSection`, `MissionSection`, `FeaturePerformanceSection`, `FeatureCreatorsSection`
- Work: `ProjectsSection`, `MoreWorksSection`
- Offer: `ServicesSection`, `ComparisonSection`, `ProcessSection`
- Trust: `TestimonialsSection`, `TeamSection`
- Conversion: `PricingSection`, `BlogSection`, `FaqSection`, `ContactCtaSection`
- Close: `FooterSection`

Reusable atoms are a pill link, section eyebrow, arrow glyph, flower mark, media frame, and a consistent rounded card shell. Interactive components own their state locally; the server page only composes them.
