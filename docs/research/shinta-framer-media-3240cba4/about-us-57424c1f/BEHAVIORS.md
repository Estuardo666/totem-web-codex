# About Us — Behavior Bible

## Global
- **Lenis smooth scroll** is active (`.lenis` present on the source). The existing root clone does not use Lenis; keep parity with the root page (native scroll) unless the user asks otherwise — noted as a known gap.
- Framer "appear" animations are viewport-triggered and run **once**. Initial (out-of-view) states were captured directly:
  - Eyebrow pill: `opacity:0; transform:scale(0.8)` → `opacity:1; scale(1)`
  - Image masks: `scale(0.9)` → `scale(1)`, with the inner image `scale(1.2)` → `scale(1)` (zoom-out reveal)
  - Headings: split per-word into `display:inline-block` spans → staggered fade/rise
- Programmatic `window.scrollTo` does NOT trigger these; only real wheel scroll does. (Relevant only to re-inspection.)

## Scroll-drawn decorative squiggles
Two absolutely-positioned SVG strokes sit behind the Vision and MissionIntro sections.
`stroke-dasharray == path length`, `stroke-dashoffset` animates `pathLength → 0` linearly with scroll progress.

| id | colour | size | offset (relative to its section Container) | viewBox | stroke-width | path length |
|----|--------|------|--------------------------------------------|---------|--------------|-------------|
| pink | `#ffa8f2` (`shinta-pink`) | 1070×824 | `top:-231px; left:-572px` | `0.948 0.458 180.684 137.684` | 1.684 | 341.4 |
| lavender | `#aa94ff` (`shinta-lavender`) | 1560×1202 | `top:-365px; left:281px` | `4.377 4.378 60.247 150.246` | 1.247 | 255.1 |

Both: `fill:none; stroke-linecap:round; preserveAspectRatio:xMidYMid meet`.

Pink `d`:
`M180.79 1.30042C163.471 65.6046 110.061 102.919 78.3233 105.455C51.3324 107.612 61.0037 65.4235 78.3233 76.7446C89.9026 84.3135 103.169 118.769 59.3715 133.984C33.4678 142.984 1.79041 130.815 1.79041 130.815`

Lavender `d`:
`M63.9999 5.00122C47.0795 12.4205 11.734 36.6747 5.71552 74.3371C0.138539 109.237 28.6566 98.5154 39.3176 87.1384C43.0379 83.1683 46.2823 77.1531 43.446 74.9339C41.1216 73.1153 36.2184 78.3559 34.7325 85.3414C31.9664 98.3458 35.1567 124.208 61.0698 154.001`

## Collage parallax (Mission section) — the one genuinely scroll-driven section
A 1px×2188.8px scroll-tracker element spans the section. All five images translate on a **single shared linear progress `p` (0→1)** as the section travels through the viewport. Measured samples (`scrollY → translateY` of the big image): 2400→7.04, 2900→29.88, 3400→52.72, 3900→75.56 — perfectly linear, slope 0.045683 px/px, clamped at both ends.

Every other image is an exact multiple of that value:

| item | x (constant) | y at p=0 | y at p=1 | multiple of big |
|------|--------------|----------|----------|-----------------|
| Image big | 0 | 0 | **+100** | 1× |
| Image 1 | −97 | 0 | **−300** | −3× |
| Image 2 | −151 | 0 | **−50** | −0.5× |
| Image 3 | 0 | 0 | **−800** | −8× |
| Image 4 | 0 | 0 | **−400** | −4× |

Implement with `useScroll({ target: sectionRef, offset: ["start end", "end start"] })` + `useTransform(p, [0,1], [0, N])`.

## Hover states
- Team card social buttons: 48px circles, `background:#1c1917`, `border-radius:50px`, white glyph, `transition: all`.
- Nav / CTA hover behaviour is already implemented in the reused shared components.

## Responsive
Source breakpoints `<810` / `810–1199` / `>=1200`. The live viewport could not be narrowed below 1298px during inspection (browser side panel), so mobile/tablet values are derived from the source CSS breakpoints and mirrored from the sibling root-page components rather than measured. Flagged as a known limitation.
