# BlogTitleSection Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogTitleSection.tsx`
- **Interaction model:** static + one-shot word-stagger reveal.
- This is the page's heading band. It sits directly under the navbar and above the post grid.

## DOM Structure
section > Container(row, align-end) > [ Title(col) > [eyebrow pill, h1], paragraph ]

This is the identical heading pattern already used by the about-us hero and team sections — the same 1280px
container, `align-items:flex-end`, `gap:24px`, left title column plus a right-hand supporting paragraph.

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 0 20px
- height 104.8px (content-driven — do not hard-code)

### Container
- display: flex; flex-direction: row; align-items: flex-end; gap: 24px
- width: 100%; max-width: 1280px

### Title column
- display: flex; flex-direction: column; gap: 8px
- Takes the left side; the paragraph takes `max-width: 40%` on the right (measured 512px of 1280).

### Eyebrow pill
- inline-flex; padding 4px 8px; border-radius 40px; background #ffa8f2 (`bg-shinta-pink`)
- text: 12px / 600 / line-height 16.8px / letter-spacing 0.96px / uppercase / #1c1917
- Use `SectionEyebrow` from `../shared/ShintaPrimitives` for the text.

### h1
- font-size: 72px; font-weight: 700; line-height: 72px; letter-spacing: -2.88px; color: #1c1917

### paragraph
- font-size: 18px; font-weight: 400; line-height: 27px; color: #44403c (`text-shinta-stone`)
- width 512px = `max-w-[40%]` of the 1280px container

## States & Behaviors

### Heading word-stagger reveal (one-shot, on view)
- Per-word `display:inline-block` spans: `opacity 0.001` + `scale(0.9)` -> `opacity 1` + `scale(1)`.
- Stagger ~0.045s, delayChildren ~0.08s, spring (stiffness 180 / damping 24).
- Mirror the pattern in `root-8a5edab2/MissionSection.tsx` and `contact-4eb95063/ContactHeroSection.tsx`.

### Eyebrow and paragraph reveal
- `opacity: 0.001` + `scale(0.8)` -> `opacity: 1` + `scale(1)`, same viewport trigger.
- framer-motion, `viewport={{ once: true, amount: 0.4 }}`, respect `useReducedMotion()`.

### Hover states
- N/A.

## Assets
None.

## Text Content (verbatim)
- Eyebrow: `BLOG`
- h1: `Insight & Ideas` — **singular "Insight"**. The home page's `BlogSection` says `Insights & Ideas`; this page does not. Do not "correct" it.
- Paragraph: `Insights on social content, creators, and strategy, written from inside the work, not theory.`

## Responsive Behavior
- **Desktop (`xl:`):** row, `align-items:flex-end`, gap 24, h1 72px, paragraph `max-w-[40%]`.
- **Tablet (`md:`):** row retained, gap 20; h1 52px/54px tracking -2.08px; paragraph `max-w-[45%]`.
- **Mobile (base):** stacks to a column, `items-start`, gap 16; h1 40px/42px tracking -1.6px; paragraph 16px/24px `max-w-full`; section padding `0 20px`.
