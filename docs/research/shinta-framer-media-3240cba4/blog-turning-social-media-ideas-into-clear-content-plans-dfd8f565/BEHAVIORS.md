# Blog post — Behavior Bible

## Global
- **Lenis smooth scroll** is active on the source. The clone stays on native scroll, matching the other four pages. Known gap.
- Framer appear animations are viewport-triggered, run once, and only fire on real wheel scroll — never on `window.scrollTo`.
- **Measurement trap:** sampling before a reveal settles returns the *scaled* box (`scale(0.8)`), not the layout box.
  Every number in these specs is a settled value — the article avatar, for example, reads 32px mid-reveal and 40px settled.

## Card hover — there is none
Hovered a related-post card and re-sampled `transform`, `opacity`, `border-radius` on the link and the image mask
plus the `h3` colour: all unchanged (`transform: none`, `opacity: 1`). Identical finding to the `/blog` index, which
is why `shared/BlogPostCard` is reused verbatim.

Do NOT add the hover arrow badge from `root-8a5edab2/BlogSection.tsx` — that element does not exist in this DOM.

## Draw-on-load decorative squiggle (related-posts section)
A large pale-grey stroke loops behind the related-posts header. Same treatment as the contact page's stroke:
`stroke-dasharray` equals the path length and `stroke-dashoffset` sits at 0.

**It is not scroll-linked.** Sampled `stroke-dashoffset` at scrollY 3100, 3700 and 4300 — it held at `0px` every time
while the section travelled through the viewport. Animate it once when the section enters view; do not drive it from
scroll progress.

- Wrapper: `position:absolute; top:-150px; left:-102px; width:1446.4px; height:653.15px; z-index:0`, positioned
  relative to the section's 1280px Container (which therefore needs `position:relative` and a `z-10` content layer).
- SVG: square, `1446x1446`, **vertically centred** in the wrapper — measured offset `y = -397px ≈ (653 - 1446) / 2`.
- `viewBox="0 0 1170 1170"`, no `preserveAspectRatio` attribute (default `xMidYMid meet` applies).
- `stroke: #e7e5e4`, `stroke-width: 10`, `stroke-linecap: butt`, `fill: none`. Path length **2124.1**.

```
M 0 60.513 C 475.401 -182.756 521.461 396.277 880.344 242.812 C 1039.017 187.021 1033.094 70.262 936 60.511 C 864.476 53.329 800.556 96.75 762.531 170.2 C 715 262.012 710.754 555.991 1178 425.513
```

## Article body rhythm
The body is a Framer rich-text block with exactly 40 children: 8 `h2` and 32 `p`, in a `max-width: 640px` column.
Spacing comes from margins, not flex gap:
- `h2`: `margin-top: 40px` (the **first** block is `margin-top: 0`), `margin-bottom: 0`
- `p`: `margin-top: 20px`, `margin-bottom: 0`

One paragraph (the "Strategy helps answer simple questions" block) contains **3 `<br>` elements** rather than being
four separate paragraphs — that is why the block count is 32 and not 35.

## "More Articles" button
The source renders three children: a stray 16x16 lavender `Icon after`, the 173x57 dark pill `Content`, and the
57x57 pink circle `Icon before`. Visual order is [pill][pink circle] and the total is 230x57.2 — the 16px element is
not visible in the layout. Build it as pill + circle only, in visual order, matching the CTA convention already used
by `shared/ContactCtaSection`.

## Responsive
Source breakpoints `<810` / `810-1199` / `>=1200`. The live viewport could not be narrowed below ~1298px (the browser
extension side panel holds the window open), so mobile and tablet values are derived from those breakpoints and
mirrored from the sibling Shinta components rather than measured. Same limitation as the other pages.
