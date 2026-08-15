# Blog — Page Topology

Source: https://shinta.framer.media/blog
Route: `/blog` -> `src/app/blog/page.tsx`
Page height: 3243px. Framer site, Lenis smooth scroll active.

`<main>` has `padding: 120px 0 0`, `display:flex; flex-direction:column`, background `#f4f4f3`.
Navbar is a fixed overlay above main (reused).

| # | Section | y-range | Component | Interaction model |
|---|---------|---------|-----------|-------------------|
| 0 | Navbar | fixed | `shared/Navbar` (reused) | scroll hide/show |
| 1 | Title | 120-225 | `BlogTitleSection` (new) | static + reveal |
| 2 | Blog grid | 225-1476 | `BlogGridSection` + `BlogPostCard` (new) | static, no hover |
| 3 | Contact CTA | 1476-2273 | `shared/ContactCtaSection` (reused, identical) | hover |
| 4 | Footer | 2073-3043 | `shared/FooterSection` (reused, identical) | hover |

## Layout
- **Title**: `padding: 0 20px`, height 104.8px, `flex; justify-content:center; align-items:center`.
  Container `max-width:1280px; flex-direction:row; align-items:flex-end; gap:24px` — the same heading pattern used by
  the about-us hero and team sections: eyebrow pill + h1 on the left, supporting paragraph on the right.
- **Blog grid**: `padding: 64px 20px 120px`, height 1250.7px.
  Container `max-width:1280px; flex-direction:column; gap:32px`; inside it a
  `grid-template-columns: repeat(3, 410.667px)` with `row-gap:72px; column-gap:24px` and two rows of 497.347px.

## Reused, do not rebuild
`Navbar`, `ContactCtaSection` and `FooterSection` from the site-level `shared/` namespace cover sections 0, 3 and 4.
The CTA section measures 797px here, matching the reused component exactly.

## Not reusable
`root-8a5edab2/BlogSection.tsx` is the **home page** variant: three posts, its own pink eyebrow pill and a trailing
arrow CTA button, and the heading `Insights & Ideas`. This page is a different component — six posts, no CTA button,
a separate title section, and the heading is the singular `Insight & Ideas`. Build fresh; do not modify the root one.
