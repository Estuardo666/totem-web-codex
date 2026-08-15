# Contact — Page Topology

Source: https://shinta.framer.media/contact
Route: `/contact` → `src/app/contact/page.tsx`
Page height: 2584px. Framer site, Lenis smooth scroll active.

`<main>` has `padding: 120px 0 0`, `display:flex; flex-direction:column`, background `#f4f4f3`.
Navbar is a fixed overlay above main (reused).

This is the shortest page of the three Shinta clones — only ONE genuinely new section.

| # | Section | y-range | Component | Interaction model |
|---|---------|---------|-----------|-------------------|
| 0 | Navbar | fixed | `shared/Navbar` (reused) | scroll hide/show |
| 1 | Contact | 120–784 | `ContactHeroSection` + `ContactFormCard` (new) | static + reveal + scroll-drawn stroke |
| 2 | FAQ | 784–1614 | `root-8a5edab2/FaqSection` (reused, identical) | click-driven accordion |
| 3 | Footer | 1614–2584 | `shared/FooterSection` (reused, identical) | hover |

## Contact section layout
- `section`: `display:flex; justify-content:center; align-items:center; padding:0 20px 120px; position:relative; overflow:clip`, height 664px.
- Behind everything: an absolutely inset-0 wrapper holding a square decorative SVG (see BEHAVIORS.md).
- `Container`: `display:flex; flex-direction:row; justify-content:flex-start; align-items:center; gap:24px; max-width:1280px`, height 544px.
  - **Left** 612px (`flex-1`): `flex-direction:column; justify-content:space-between; align-items:flex-start`, full 544px height.
    - Title block: h1 + paragraph, `gap:24px`.
    - Bottom block: eyebrow caption + a clipped, edge-faded row of five brand logos.
  - **Right** 644px, `max-width:680px`: the pink form card (`ContactFormCard`).
  - 612 + 24 + 644 = 1280 exactly.

## Reused, do not rebuild
`Navbar`, `FooterSection` (site-level `shared/`) and `FaqSection` (`root-8a5edab2/`) render this page's remaining
sections. `FaqSection`'s five Q&A pairs, its centred `FAQ` h2 (64/70.4/-2.56), its 630px container and its
`120px 20px` section padding all match the source here exactly.

**Note on an earlier false alarm:** the FAQ accordion list measures 504px wide when sampled before its reveal
animation settles — that is `630 × 0.8`, the animation's initial `scale(0.8)`, not a layout difference. Settled
width is 630px, which is what the reused component renders. Several other measurements on this page are subject
to the same trap; every value recorded in the specs is a settled value.

## Assets
None new. All five brand logos already exist in the repo from the root clone and are addressed via `shintaAsset()`.
