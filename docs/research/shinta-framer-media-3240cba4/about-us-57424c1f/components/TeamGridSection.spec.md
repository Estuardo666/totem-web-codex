# TeamGridSection Specification ("Small Team, Big Impact")

## Overview
- **Target files:**
  - `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/TeamMemberCard.tsx`
  - `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/TeamGridSection.tsx`
- **Interaction model:** static grid + one-shot reveal; social buttons have hover transitions only.
- NOTE: this is a **different** component from `root-8a5edab2/TeamSection.tsx` (that one is a rotated photo collage). Do not modify or reuse it.

## DOM Structure
section > Container(col) > [ Heading(row) > [ Title(col) > [eyebrow pill, h2], paragraph ], Grid(3 cols) > 6x TeamMemberCard ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 120px 20px; position: relative; overflow: clip
- height 1551.5px (content-driven)

### Container
- display: flex; flex-direction: column; gap: 64px
- width: 100%; max-width: 1280px

### Heading (row)
- display: flex; flex-direction: row; align-items: flex-end; gap: 24px; width: 100%
- Title column: width 721.45px of a 1242px container -> `w-[58%] max-w-[721px]`, `flex flex-col gap-2` (8px)
- Paragraph: width 496.95px, `max-w-[40%]`; p is 18px / 27px / #44403c (`text-shinta-stone`)

### Eyebrow pill
- inline-flex; padding 4px 8px; border-radius 40px; background #ffa8f2 (`bg-shinta-pink`)
- text: 12px / 600 / line-height 16.8px / letter-spacing 0.96px / uppercase / #1c1917
- Use `SectionEyebrow` from `../shared/ShintaPrimitives`.

### h2
- font-size: 64px; font-weight: 700; line-height: 70.4px; letter-spacing: -2.56px; color: #1c1917

### Grid
- display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px
- Rows measured at 560.15px each (content-driven — do not hard-code the row height).

## TeamMemberCard

### Card root
- display: flex; flex-direction: column; justify-content: center; gap: 10px
- padding: 8px; border-radius: 24px; background: #ffffff
- width 398.125px x height 560.138px at desktop (grid-driven)

### Image mask
- border-radius: 16px; overflow: hidden; position: relative
- 382.125 x 452.737 -> `aspect-[382/453]`, full card width minus the 8px padding
- img: object-fit: cover. The source photos already carry the lavender background and pink squiggle — do not recreate them in CSS.

### Social overlay
- position: absolute; top: 16px; right: 16px
- display: flex; align-items: center; justify-content: center; gap: 4px; width: 100px; height: 48px
- Two links, each 48x48: `border-radius: 50px`, `background: #1c1917`, glyph centered in white
- Icons: X (Twitter) and Instagram. `hrefs`: `https://x.com` and `https://instagram.com`
- Provide an `aria-label` per link, e.g. `Dahlia Saraswati on X`.
- Hover: lift/scale is not specified by the source beyond `transition: all` — use the project's existing convention
  (`transition-transform duration-300 hover:-translate-y-0.5`) plus a visible `focus-visible` ring, matching `ShintaPrimitives`.

### Text block
- display: flex; flex-direction: column; padding: 8px; width fills the card
- Name (`h3`): font-size 32px; font-weight 700; line-height 38.4px; letter-spacing -1.28px; color #1c1917
- Role (`p`): font-size 18px; font-weight 400; line-height 27px; color #78716c (`text-shinta-muted`)

## States & Behaviors

### Reveal (one-shot, on entering view)
- Cards fade/rise in: opacity 0, translateY 22px -> opacity 1, translateY 0, staggered ~90ms per card in source order.
- The social overlay animates in with its card (it is NOT hover-gated — `opacity` is 1 at rest).
- framer-motion, `viewport={{ once: true, amount: 0.3 }}`, respect `useReducedMotion()`.

### Hover states
- Social buttons only (see above). Cards themselves have no hover treatment.

## Per-member content (verbatim, in source order)

| # | Name | Role | Image (`shintaAsset("images/...")`) |
|---|------|------|--------------------------------------|
| 1 | Dahlia Saraswati | Founder & Director | `79687116559292ab.jpg` |
| 2 | Arjuna Gombes | Social Media Strategist | `47f89ced261416df.jpg` |
| 3 | Pipit Olivia | Content Lead | `34844c23286ab253.jpg` |
| 4 | Bhagas Diki | Creator Manager | `3180f8ad3e321358.jpg` |
| 5 | Melati Ungu | Data Analyst | `36db82b98440ca02.jpg` |
| 6 | Khrisna Bejo | Graphic Designer | `c1c60606144d1f73.jpg` |

These photos already exist in the repo (shared with the root clone). Address them with
`import { shintaAsset } from "../shared/site";` then `shintaAsset("images/79687116559292ab.jpg")`.
Use `next/image` with `fill` + `unoptimized`, matching sibling components. Alt text: `Portrait of <name>, <role> at Shinta`.

## Text Content (verbatim)
- Eyebrow: `TEAM`
- h2: `Small Team, Big Impact`
- Paragraph: `Our team comes from content creation, design, social strategy, and growth. Some of us have built brands. Some have scaled social accounts.`

## Responsive Behavior
- **Desktop (`xl:`):** 3 columns, gap 24px, heading as a row, h2 64px.
- **Tablet (`md:`):** 2 columns, gap 20px; heading stays a row but the h2 drops to 44px/48px tracking -1.76px; name 26px/31px tracking -1.04px; section padding 96px 20px; container gap 48px.
- **Mobile (base):** 1 column, gap 16px; heading stacks to a column, `items-start`, gap 16px, paragraph `max-w-full`; h2 34px/38px tracking -1.36px; name 24px/29px; role 16px/24px; social buttons 40x40 inside an `h-10 w-[84px]` overlay at `top-3 right-3`; section padding 72px 20px; container gap 40px.
