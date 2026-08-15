# MissionIntroSection Specification ("What We're Here to Do")

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/MissionIntroSection.tsx`
- **Interaction model:** static split layout + one-shot reveal + scroll-drawn decorative stroke
- Mirror image of `VisionSection`: text on the LEFT, tall portrait image on the RIGHT.

## DOM Structure
section > Container(row) > [ decorative ScribbleStroke (absolute), Content(col) > [eyebrow pill, h2, p], Image mask > img ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 150px 20px; position: relative
- height 940px (content-driven, do not hard-code)

### Container
- display: flex; flex-direction: row; justify-content: center; align-items: center
- gap: 130px; width: 100%; max-width: 1000px; position: relative
- Children are 410px + 362px; with `justify-content:center` this leaves 49px of slack each side. Do not add explicit offsets.

### Content (left)
- display: flex; flex-direction: column; gap: 32px
- width: 410px; max-width: 410px

### Eyebrow pill
- inline-flex; padding 4px 8px; border-radius 40px; background #ffa8f2 (`bg-shinta-pink`)
- text: 12px / 600 / line-height 16.8px / letter-spacing 0.96px / uppercase / #1c1917
- Use `SectionEyebrow` from `../shared/ShintaPrimitives`.

### h2
- font-size: 64px; font-weight: 700; line-height: 70.4px; letter-spacing: -2.56px; color: #1c1917

### p
- font-size: 18px; font-weight: 400; line-height: 27px; color: #44403c (`text-shinta-stone`)

### Image mask (right)
- width: 362px; height: 640px; flex-shrink: 0
- The mask itself has NO border radius; the inner image wrapper has `border-radius: 24px`.
- img: **object-fit: contain** (transparent-bounds PNG mockup) — not cover.

## States & Behaviors

### Decorative scroll-drawn stroke (lavender)
- **Component already exists — import it, do not re-implement:**
  `import { ScribbleStroke } from "./ScribbleStroke";`
  `<ScribbleStroke variant="lavender" className="..." />`
- Position relative to the Container: `top:-365px; left:281px; width:1560px; height:1202px`, behind the content.
  -> `className="-top-[365px] left-[281px] -z-10 h-[1202px] w-[1560px]"`, Container is `relative`.
- Hide below `xl:`: add `hidden xl:block`.

### Reveal (one-shot, on entering view)
- Eyebrow pill: opacity 0 -> 1, `scale(0.8)` -> `scale(1)`.
- Image: `scale(0.9)` -> `scale(1)` on the mask, `scale(1.2)` -> `scale(1)` on the inner image, opacity 0 -> 1.
- Heading/paragraph: opacity 0, translateY 22px -> opacity 1, translateY 0.
- framer-motion, `viewport={{ once: true, amount: 0.4 }}`, respect `useReducedMotion()`.

### Hover states
- N/A.

## Assets
- `/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/mission-phone-mockup.png`
  Use `next/image` with `fill` + `unoptimized` and `object-contain`.

## Text Content (verbatim)
- Eyebrow: `OUR MISSION`
- h2: `What We’re Here to Do`
- p: `We create short-form, scroll-first content designed for the platform, guided by real audience behavior and performance data. Every idea is tested, refined, and scaled with one goal in mind: content that people actually want to watch.`
- Image alt: `A Shinta crew filming a creator on a tripod-mounted camera`

## Responsive Behavior
- **Desktop (`xl:`):** row, gap 130px, content 410px, image 362x640.
- **Tablet (`md:`):** row retained, gap 48px, content `flex-1`, image `w-[320px] h-[566px]`, h2 44px/48px tracking -1.76px, section padding 110px 20px.
- **Mobile (base):** stacks to a column with the text first, gap 40px, image `w-full max-w-[320px] self-center aspect-[362/640]`, h2 34px/38px tracking -1.36px, p 16px/24px, section padding 80px 20px. Decorative stroke hidden.
