# ContactHeroSection Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/contact-4eb95063/ContactHeroSection.tsx`
- **Interaction model:** static + one-shot word-stagger reveal + a decorative stroke that draws itself once on load.
- This is the section wrapper. It owns the decorative stroke and the left column, and renders `ContactFormCard` on the right.

## DOM Structure
section > [ decorative stroke layer (absolute inset-0), Container(row) > [ Left(col, space-between) > [ Title block > [h1, p], Logo block > [caption, clipped logo row] ], ContactFormCard ] ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center; gap: 10px
- padding: 0 20px 120px; position: relative; overflow: clip
- height 664px (content-driven — do not hard-code)

### Decorative stroke layer
- `position:absolute; inset:0; z-index:0`, pointer-events none, behind the container (give the Container `relative z-10`).
- Inside it, an SVG that is `width:100%` with `aspect-ratio:1` and **vertically centred** (measured offset `y = -309px = (664 - 1282) / 2`). Centre it — e.g. the layer is a `grid place-items-center` and the SVG is `w-full aspect-square`.
- `viewBox="0 0 1170 1170"`, `fill="none"`, `stroke="#e7e5e4"`, `stroke-width="10"`, `stroke-linecap="butt"`.
- Do NOT set `preserveAspectRatio` — the source has no such attribute, so the default `xMidYMid meet` must apply.
- Draw-on-appear: `stroke-dasharray = 1533.5` (the path length) and `stroke-dashoffset` animates `1533.5 → 0` **once, on load**, not tied to scroll progress. The source measures `stroke-dashoffset: 0` while the page sits at the top, i.e. the stroke is already complete at rest; because this section is pinned to the top of the page it never has a scroll range to travel. Use a plain framer-motion `initial`/`animate` on the path (~1.6s, `cubic-bezier(0.22, 1, 0.36, 1)`, ~0.2s delay). Pin `strokeDashoffset` at 0 when `useReducedMotion()` is true.

Path `d`:
```
M 0 92.158 C 124.286 -3.096 331.666 20.54 280.209 56.516 C 205.354 108.848 329.739 94.962 405.624 75.751 C 481.608 56.516 524.244 43.192 543.751 22.57 C 579.343 -15.052 493.19 -1.191 472.852 31.616 C 446.193 74.621 591.28 77.333 718.317 40.674 C 1032.987 -50.129 946.116 66.255 1087.503 88.481 C 1125.422 94.441 1181 75.751 1181 75.751
```

### Container
- display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 24px
- width: 100%; max-width: 1280px; height: 544px
- 612 + 24 + 644 = 1280 exactly.

### Left column
- display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start
- width 612px → use `flex-1` (the card takes its fixed 644px); height 100%

### Title block
- display: flex; flex-direction: column; gap: 24px
- h1: font-size 72px; font-weight 700; line-height 72px; letter-spacing -2.88px; color #1c1917
- p: font-size 18px; line-height 27px; color #44403c (`text-shinta-stone`); spans the full 612px column (it wraps to two lines there). **No max-width** — a 490px reading is the pre-reveal `scale(0.8)` box, not the layout box.

### Logo block
- display: flex; flex-direction: column; justify-content: center; gap: 15px
- Caption: font-size 12px; font-weight 600; line-height 16.8px; letter-spacing 0.96px; text-transform uppercase; **color #78716c** (`text-shinta-muted` — note this eyebrow is muted grey, not ink, and has no pink pill).
  Use `SectionEyebrow` from `../shared/ShintaPrimitives` with a colour override.
- Logo row wrapper: `height:30px; overflow:hidden`. The row's intrinsic width is 731px (5x127 + 4x24); give the left column and the wrapper `min-w-0` so that width is clipped rather than forcing the flex column wider than 612px, with a horizontal fade mask:
  `[mask-image:linear-gradient(270deg,transparent_0%,black_15.537%,black_85.816%,transparent_100%)]` plus the
  `[-webkit-mask-image:...]` twin, matching how `root-8a5edab2/LogoStrip.tsx` writes its mask.
- `ul`: `display:flex; gap:24px`; five `li` each 127×30, logo image rendered 102×24, vertically centred.
- **The row is static.** Verified across 2.5s with the pointer away: no transform change, `animation-name: none`.
  Do NOT add a marquee animation. The overflow past 612px is simply clipped and faded.

## States & Behaviors

### Heading word-stagger reveal (one-shot, on view)
- The source splits the h1 into per-word `display:inline-block` spans: `opacity 0.001` + `scale(0.9)` → `opacity 1` + `scale(1)`.
- Mirror the stagger pattern in `root-8a5edab2/MissionSection.tsx` (stagger ~0.045s, delayChildren ~0.08s, spring stiffness 180 / damping 24), but animate **scale**, not translateY, to match this page.

### Paragraph and logo block reveal
- `opacity: 0.001` + `scale(0.8)` → `opacity: 1` + `scale(1)`, same viewport trigger.
- framer-motion, `viewport={{ once: true, amount: 0.4 }}`, respect `useReducedMotion()`.

### Hover states
- N/A in this component (the submit button's hover lives in `ContactFormCard`).

## Assets — five brand logos, already in the repo
Import `shintaAsset` from `../shared/site` and use `next/image` with `fill` + `unoptimized`, matching siblings.
In source order:
1. `images/26f35051812b2aae.png`
2. `images/7253d2f6ec5e14e6.png`
3. `images/b13b3ba827797b0f.png`
4. `images/ebd7dec76b75c1e2.png`
5. `images/e0e1fd5214a17d82.png`

`root-8a5edab2/LogoStrip.tsx` already lists these five with alt text — reuse its alt strings verbatim so the two pages agree.

## Text Content (verbatim)
- h1: `Let’s talk content that actually works.`
- p: `Share your goals and we’ll help shape content that fits how people actually scroll today.`
- Caption: `30+ Brands leveled up their content game` (rendered uppercase by CSS — keep this casing in the markup)

## Responsive Behavior
- **Desktop (`xl:`):** row, gap 24, left `flex-1`, card 644px, h1 72px.
- **Tablet (`md:`):** row retained, gap 20; h1 52px/54px tracking -2.08px; card `w-[46%] max-w-[680px]`; section padding `0 20px 96px`; container height auto.
- **Mobile (base):** stacks to a column, `items-stretch`, gap 32; h1 40px/42px tracking -1.6px; paragraph 16px/24px `max-w-full`; the logo block sits below the card in the column; section padding `0 20px 72px`; decorative stroke hidden (`hidden xl:block` on the layer) since it is sized for the desktop composition.
