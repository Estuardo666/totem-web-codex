# BlogGridSection + BlogPostCard Specification

## Overview
- **Target files:**
  - `src/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogPostCard.tsx`
  - `src/components/sites/shinta-framer-media-3240cba4/blog-8caafe43/BlogGridSection.tsx`
- **Interaction model:** static grid. **No hover treatment** (verified — see below).

## DOM Structure
section > Container(col) > Grid(3 cols x 2 rows) > 6x BlogPostCard
BlogPostCard = a > [ Image mask > img, Title(col) > [date p, h3], Author row > [avatar, "By", name] ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center
- padding: 64px 20px 120px
- height 1250.7px (content-driven — do not hard-code)

### Container
- display: flex; flex-direction: column; gap: 32px
- width: 100%; max-width: 1280px

### Grid
- display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) (measured 410.667px each)
- **row-gap: 72px; column-gap: 24px** (they differ — the shorthand is `gap: 72px 24px`)
- 2 rows, measured 497.347px each — content-driven, do not hard-code the row height.

### BlogPostCard root (`<a>`)
- display: flex; flex-direction: column; gap: 24px
- width 410.667px; height 497.347px; no padding; no background; no border-radius
- Height breakdown: content 433.347 + gap 24 + author row 40.

### Image mask
- border-radius: 24px; overflow: hidden; position: relative
- **aspect-ratio: 1.33442** (410.667 / 307.736). Use `aspect-[1.33442]` — `aspect-[4/3]` is off by ~0.3px.
- inner img: `object-fit: cover`, fills the mask.

### Title block
- display: flex; flex-direction: column; gap: 8px
- Date `p`: font-size 12px; font-weight 600; line-height 16.8px; letter-spacing 0.96px; text-transform uppercase; color #78716c (`text-shinta-muted`)
  Use `SectionEyebrow` from `../shared/ShintaPrimitives` with a muted colour override — it encodes exactly these type values.
- `h3`: font-size 32px; font-weight 700; line-height 38.4px; letter-spacing -1.28px; color #1c1917

### Author row
- display: flex; align-items: center; gap: 8px; height: 40px
- Avatar: 40px x 40px; `border-radius: 100%`; inner img `object-fit: cover`
- `By`: font-size 16px; font-weight 400; line-height 22.4px; color #78716c (`text-shinta-muted`)
- Name: font-size 18px; font-weight 400; line-height 27px; color #1c1917

## States & Behaviors

### Hover — NONE
Hovered a card for 2s and re-sampled `transform`, `opacity`, `border-radius` and `filter` on the link, the image mask
and the inner image, plus the `h3` colour and `text-decoration`: **every value was unchanged.** The `<a>` carries
`transition: all` but nothing targets it on hover.

Do NOT add a hover treatment, and specifically do NOT copy the white circular arrow badge from
`root-8a5edab2/BlogSection.tsx` — that is the home-page variant and this page has no such element in the DOM.
Add only a `focus-visible` ring for keyboard users, per project convention.

### Reveal (one-shot, on entering view)
- Cards: `opacity: 0.001` + `scale(0.8)` -> `opacity: 1` + `scale(1)`, staggered ~90ms in source order.
- framer-motion, `viewport={{ once: true, amount: 0.2 }}`, respect `useReducedMotion()`.

## Per-post content (verbatim, in source order)

| # | Title | Date | Author | href | Cover |
|---|-------|------|--------|------|-------|
| 1 | Why Good Copywriting Matters a Lot | January 27, 2026 | Kristanto Mahera | `/blog/why-good-copywriting-matters` | `shintaAsset("images/90da175d3b991e31.jpg")` |
| 2 | Turning Social Media Ideas Into Content Plans | January 27, 2026 | Budi Pandu | `/blog/turning-social-media-ideas-into-clear-content-plans` | `shintaAsset("images/d8288cb19a756a51.jpg")` |
| 3 | Why Social Media Is Never a One Person Job | January 27, 2026 | Karina Kumala | `/blog/why-great-social-media-is-never-a-one-person-job` | `shintaAsset("images/01c3e56a4e3063a0.jpg")` |
| 4 | How a Social Media Agency Helps Brands | January 27, 2026 | Kristanto Mahera | `/blog/how-a-social-media-agency-helps-brands-grow-faster` | `/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg` |
| 5 | How to Improve Social Media Content Quality | January 27, 2026 | Budi Pandu | `/blog/why-video-calls-improve-social-media-content-quality` | `/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-improve-content-quality.jpg` |
| 6 | How Podcasts Help Brands Build Trust | January 27, 2026 | Karina Kumala | `/blog/how-podcasts-help-brands-build-trust-on-social-media` | `/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-podcasts-build-trust.jpg` |

Avatars (each shared by two posts), all via `shintaAsset()`:
- Kristanto Mahera — `images/e202cc3fcb7f8b83.png`
- Budi Pandu — `images/062febe8ad7682a7.png`
- Karina Kumala — `images/187a0bff84102aca.png`

The date renders uppercase via CSS; keep `January 27, 2026` casing in the markup.
The detail routes do not exist in this clone — keep the hrefs verbatim so they stay correct if those pages are cloned later.

Alt text: cover -> the post title; avatar -> `Portrait of <author>`.

## Assets
Three page-local covers plus three root-namespace covers and three root-namespace avatars — see the table above and `ARTIFACT_MANIFEST.md`.
Use `next/image` with `fill` + `unoptimized`, matching siblings.

## Responsive Behavior
- **Desktop (`xl:`):** 3 columns, `gap: 72px 24px`, h3 32px.
- **Tablet (`md:`):** 2 columns, `gap: 56px 20px`; h3 26px/31px tracking -1.04px.
- **Mobile (base):** 1 column, `gap: 40px`; h3 24px/29px tracking -0.96px; date and author row metrics unchanged; section padding `48px 20px 72px`; container gap 24.
