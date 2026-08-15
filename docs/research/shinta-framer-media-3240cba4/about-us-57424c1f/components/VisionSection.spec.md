# VisionSection Specification ("What We Stand For")

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/VisionSection.tsx`
- **Interaction model:** static split layout + one-shot reveal + scroll-drawn decorative stroke

## DOM Structure
section > Container(row) > [ decorative ScribbleStroke (absolute), Image mask > img, Content(col) > [eyebrow pill, h2, p] ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 120px 20px; position: relative
- height 604.6px (content-driven, do not hard-code)

### Container
- display: flex; flex-direction: row; justify-content: center; align-items: center
- gap: 130px; width: 100%; max-width: 1000px; position: relative
- 460 + 130 + 410 = 1000 exactly.

### Image mask (left)
- width: 460px; height: 280.788px  ->  `w-[460px] aspect-[460/280.79]`
- border-radius: 24px; overflow: hidden; flex-shrink: 0
- img: object-fit: cover

### Content (right)
- display: flex; flex-direction: column; gap: 32px
- width: 410px; max-width: 410px

### Eyebrow pill
- inline-flex; padding 4px 8px; border-radius 40px; background #ffa8f2 (`bg-shinta-pink`)
- text: 12px / 600 / line-height 16.8px / letter-spacing 0.96px / uppercase / #1c1917
- Use `SectionEyebrow` from `../shared/ShintaPrimitives` for the text.

### h2
- font-size: 64px; font-weight: 700; line-height: 70.4px; letter-spacing: -2.56px; color: #1c1917

### p
- font-size: 18px; font-weight: 400; line-height: 27px; color: #44403c (`text-shinta-stone`)

## States & Behaviors

### Decorative scroll-drawn stroke (pink)
- **Component already exists — import it, do not re-implement:**
  `import { ScribbleStroke } from "./ScribbleStroke";`
  `<ScribbleStroke variant="pink" className="..." />`
- Position it relative to the Container: `top:-231px; left:-572px; width:1070px; height:824px`, behind the content.
  -> `className="-top-[231px] -left-[572px] -z-10 h-[824px] w-[1070px]"`, and the Container must be `relative`.
- Hide it below `xl:` (it overflows narrower layouts): add `hidden xl:block`.

### Reveal (one-shot, on entering view)
- Eyebrow pill: opacity 0 -> 1, `scale(0.8)` -> `scale(1)`.
- Image mask: `scale(0.9)` -> `scale(1)`; inner image `scale(1.2)` -> `scale(1)`; opacity 0 -> 1.
- Heading/paragraph: opacity 0, translateY 22px -> opacity 1, translateY 0.
- Use framer-motion with `viewport={{ once: true, amount: 0.4 }}` and respect `useReducedMotion()`.

### Hover states
- N/A.

## Assets
- `/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/vision-desk.jpg`
  Use `next/image` with `fill` + `unoptimized`, matching sibling components.

## Text Content (verbatim)
- Eyebrow: `OUR VISION`
- h2: `What We Stand For`
- p: `Social media moves fast. Audiences are sharp. If your content feels forced, they scroll past. We wanted to build a team that understands platforms from the inside out, and helps brands keep up without losing their voice.`
- Image alt: `Two Shinta creators reviewing storyboards at a lit studio desk`

## Responsive Behavior
- **Desktop (`xl:`):** row, gap 130px, image 460px, content 410px, h2 64px.
- **Tablet (`md:`):** row retained, gap 48px, image `w-[45%]`, content `flex-1`, h2 44px/48px tracking -1.76px, section padding 96px 20px.
- **Mobile (base):** stacks to a column, gap 32px, image `w-full aspect-[460/281]`, content `w-full max-w-full`, h2 34px/38px tracking -1.36px, p 16px/24px, section padding 72px 20px. Decorative stroke hidden.
