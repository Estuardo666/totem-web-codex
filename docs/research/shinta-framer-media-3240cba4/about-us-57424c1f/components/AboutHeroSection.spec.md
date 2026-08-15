# AboutHeroSection Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/AboutHeroSection.tsx`
- **Interaction model:** static layout + one-shot word-stagger reveal on mount

## DOM Structure
section > Container(col) > [ Heading(row) > [ Title(col) > [eyebrow pill, h1], paragraph ], Image mask > img ]

## Computed Styles (getComputedStyle, desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 0px 20px 120px
- position: relative; overflow: clip
- height 1312.1px (content-driven, do not hard-code)

### Container
- display: flex; flex-direction: column; gap: 80px
- max-width: 1280px; width: 100%
- align-items: flex-start

### Heading (row)
- display: flex; flex-direction: row; justify-content: center; align-items: flex-end; gap: 24px
- width: 100%

### Title (col)
- display: flex; flex-direction: column; gap: 8px
- width: 721.45px at a 1242px container → use `w-[58%]`, `max-w-[721px]`

### Eyebrow pill
- display: inline-flex; justify-content: center; align-items: center; gap: 10px
- padding: 4px 8px; border-radius: 40px; background: #ffa8f2 (`bg-shinta-pink`)
- inner text: font-size 12px; font-weight 600; line-height 16.8px; letter-spacing 0.96px; text-transform uppercase; color #1c1917
- Use the existing `SectionEyebrow` primitive from `../shared/ShintaPrimitives` for the text.

### h1
- font-size: 72px; font-weight: 700; line-height: 72px; letter-spacing: -2.88px; color: #1c1917

### paragraph wrapper
- width: 496.95px; max-width: 40%
- p: font-size 18px; line-height 27px; font-weight 400; color: #44403c (`text-shinta-stone`)

### Image mask
- width: 100% (1242px); height: 863.3px → `aspect-[1242/863]`
- border-radius: 40px; overflow: hidden
- img: object-fit: cover; fills the mask

## States & Behaviors

### Heading word-stagger reveal (one-shot, on view)
- The source splits the h1 into per-word `display:inline-block` spans and staggers them.
- **State A:** opacity 0, translateY 22px. **State B:** opacity 1, translateY 0.
- Stagger ~0.045s between words, delayChildren ~0.08s, spring (stiffness 180, damping 24).
- Mirror the exact pattern already used in `root-8a5edab2/MissionSection.tsx` (framer-motion `Variants` + word split). Respect `useReducedMotion()`.

### Image reveal
- Mask: `scale(0.9)` → `scale(1)`; inner image: `scale(1.2)` → `scale(1)`; opacity 0 → 1. Once, on entering view.

### Hover states
- N/A.

## Assets
- `/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/hero-team-portrait.jpg` (1257×707 natural)
  Import via `next/image` with `fill` + `unoptimized`, matching sibling components.

## Text Content (verbatim)
- Eyebrow: `ABOUT US`
- h1: `Built by people who won’t ship content they’d skip`
- Paragraph: `We’re the ones who pause a Reel just to analyze the hook, send TikToks to each other with “this is smart,” and debate why one video popped while another didn’t. That obsession is kind of the point.`
- Image alt: `The Shinta team standing together against a grey studio backdrop`

## Responsive Behavior
- **Desktop (>=1280px / `xl:`):** as measured above.
- **Tablet (`md:`):** Heading stays a row but the h1 drops to ~52px/54px, tracking -2.08px; paragraph keeps `max-w-[40%]`; container gap 56px.
- **Mobile (base):** Heading stacks to a column, `items-start`, gap 24px; h1 40px/42px, tracking -1.6px; paragraph `max-w-full`, 16px/24px; container gap 40px; image mask `rounded-[24px]`, `aspect-[4/5]`.
