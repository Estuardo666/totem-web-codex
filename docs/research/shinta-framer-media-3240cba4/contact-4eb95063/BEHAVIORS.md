# Contact — Behavior Bible

## Global
- **Lenis smooth scroll** is active on the source. The clone stays on native scroll, matching `/` and `/about-us`. Known gap.
- Framer appear animations are viewport-triggered, run once, and are only fired by real wheel scroll — never by `window.scrollTo`. Initial (pre-reveal) states captured directly:
  - h1 words: `opacity: 0.001; transform: scale(0.9)` → `opacity: 1; scale(1)`, per-word `display:inline-block` spans
  - Paragraph, logo block, form card: `opacity: 0.001; transform: scale(0.8)` → `opacity: 1; scale(1)`
- **Measurement trap:** sampling before a reveal settles returns the *scaled* box, not the layout box (e.g. the FAQ list reads 504px = 630 × 0.8). Every number in these specs is a settled value.

## Scroll-drawn decorative squiggle (Contact section)
A single pale-grey stroke sweeps behind the left column. Same mechanism as the `/about-us` strokes: `stroke-dasharray` equals the path length and `stroke-dashoffset` runs `pathLength → 0` with scroll progress.

- Wrapper: `position:absolute; inset:0; z-index:0` over the whole 664px section; the section is `overflow:clip`.
- SVG: `width:100%; aspect-ratio:1` (1282×1282 at a 1282px-wide section) and **vertically centred** in the wrapper — measured offset `y = -309px = (664 - 1282) / 2`. A centred square, not a top-aligned one.
- `viewBox="0 0 1170 1170"`, no `preserveAspectRatio` attribute (so the default `xMidYMid meet` applies).
- `stroke: #e7e5e4`, `stroke-width: 10`, `stroke-linecap: butt`, `fill: none`.
- Path length 1533.5.

```
M 0 92.158 C 124.286 -3.096 331.666 20.54 280.209 56.516 C 205.354 108.848 329.739 94.962 405.624 75.751 C 481.608 56.516 524.244 43.192 543.751 22.57 C 579.343 -15.052 493.19 -1.191 472.852 31.616 C 446.193 74.621 591.28 77.333 718.317 40.674 C 1032.987 -50.129 946.116 66.255 1087.503 88.481 C 1125.422 94.441 1181 75.751 1181 75.751
```

## Logo row (bottom of the left column)
- **It does not animate.** Sampled twice across 2.5s with the pointer away from it: `transform` held at `matrix(1,0,0,1,-2.34733,0)`, `animation-name: none`. This is a static, clipped row — *not* the ticker used by the home page's `LogoStrip`. Do not add a marquee animation here.
- `ul`: `display:flex; gap:24px`; five `li`, each 127×30. Total 5×127 + 4×24 = 731px inside a 612px column, so the right end is clipped.
- Wrapper: `height:30px; overflow:clip` with a horizontal fade mask:
  `linear-gradient(270deg, transparent 0%, #000 15.537%, #000 85.8161%, transparent 100%)`
- Each logo image renders 102×24 inside its 127px `li`.

## Form behaviours
- Native HTML validation only: `Name` and `Email` are `required`, `Email` is `type="email"`. The message field is not required.
- The source ships eight absolutely-positioned honeypot inputs (`website`, `company`, `message`, `subject`, `title`, `description`, `feedback`, `notes`). These are spam traps for Framer's backend. **Omit them** — this clone has no backend, and reproducing them adds nothing visual.
- The source's message `<textarea>` carries `name="Email"`, colliding with the email input. That is a bug in the original; the clone uses `name="message"`.
- `textarea` has `resize: vertical`.
- Submit is a `<button>` whose two children are the dark pill and the lavender circle. Note the DOM order is [circle, pill] while the visual order is [pill, circle] — build it in visual order rather than reproducing the source's ordering hack.

## Hover states
- Submit button reports only `transition: all`; use the project convention already established in `ShintaPrimitives` (translate-y lift plus a rotating arrow) so it matches the other Shinta CTAs.
- FAQ accordion and footer hover behaviour live in the reused components.

## Responsive
Source breakpoints `<810` / `810–1199` / `>=1200`. The live viewport could not be narrowed below ~1298px (the browser extension side panel holds the window open), so mobile and tablet values are derived from those breakpoints and mirrored from the sibling Shinta components rather than measured. Same limitation as the `/about-us` clone.
