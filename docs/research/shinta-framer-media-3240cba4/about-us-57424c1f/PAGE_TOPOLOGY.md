# About Us — Page Topology

Source: https://shinta.framer.media/about-us
Route: `/about-us` → `src/app/about-us/page.tsx`
Page height: 7714px @ 1298px viewport. Framer site, Lenis smooth scroll active.

`<main>` has `padding: 120px 0 0`, `display:flex; flex-direction:column`, background `#f4f4f3`.
Navbar is a fixed overlay above main (reused from root clone).

| # | Section | y-range | Component | Interaction model |
|---|---------|---------|-----------|-------------------|
| 0 | Navbar | fixed | `shared/Navbar` (reused, promoted from root) | scroll hide/show |
| 1 | Hero | 120–1432 | `AboutHeroSection` | static + word-stagger reveal |
| 2 | What We Stand For | 1432–2037 | `VisionSection` | reveal + scroll-drawn SVG |
| 3 | What We're Here to Do | 2037–2977 | `MissionIntroSection` | reveal + scroll-drawn SVG |
| 4 | Mission (collage) | 2977–4311 | `CollageSection` | **scroll-driven parallax** |
| 5 | Team | 4311–5863 | `TeamGridSection` | reveal + hover |
| 6 | Contact CTA | 5863–6660 | `shared/ContactCtaSection` (reused, identical to root) | hover |
| 7 | Footer | 6660–7630 | `shared/FooterSection` (reused, identical to root) | hover |

## Layout system
- Section wrapper: `display:flex; justify-content:center; align-items:center; padding:120px 20px` (Hero `0 20px 120px`, MissionIntro `150px 20px`).
- Two content widths: **1000px** (Vision, MissionIntro, Collage) and **1280px max** (Hero, Team).
- Split sections use `justify-content:center` with `gap:130px`.
- Breakpoints from source CSS: `<810` mobile, `810–1199` tablet, `>=1200` desktop.
  This project's existing Shinta components approximate these with Tailwind `md:` (768) and `xl:` (1280) — keep that convention for consistency.

## Reused, do not rebuild
`Navbar`, `ContactCtaSection`, `FooterSection` are byte-identical in content/markup to the root clone. They are promoted to
`src/components/sites/shinta-framer-media-3240cba4/shared/` and imported by both routes.
Team member photos, CTA image, logo and footer artwork already exist under the root asset namespace and are addressed via `shintaAsset()`.
