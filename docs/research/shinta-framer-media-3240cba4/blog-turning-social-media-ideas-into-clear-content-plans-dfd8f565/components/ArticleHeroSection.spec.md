# ArticleHeroSection Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleHeroSection.tsx`
- **Interaction model:** static + one-shot word-stagger reveal.
- Renders the centred article header (date, title, byline) and the wide hero image. The page places it and `ArticleBody` inside one shared `<section>`, so this component renders only its two blocks — not the section wrapper.

## DOM Structure
[ Heading(col, centred) > [ Title(col) > [date p, h1], Author(row) > [avatar, "By", name] ], Image mask > img ]

## Computed Styles (desktop >=1200px)

### Heading
- display: flex; flex-direction: column; gap: 24px; align-items: center
- width 840px (the section container's max-width), height 225px

### Title block
- display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center
- height 161px

### Date `p`
- font-size 12px; font-weight 600; line-height 16.8px; letter-spacing 0.96px; text-transform uppercase; color #78716c (`text-shinta-muted`); text-align center
- Use `SectionEyebrow` from `../shared/ShintaPrimitives` with a muted colour override — it encodes exactly these type values. There is **no pink pill** here.

### h1
- font-size 64px; font-weight 700; line-height 64px; letter-spacing -2.56px; color #1c1917; text-align center

### Author row
- display: flex; flex-direction: row; gap: 8px; align-items: center; justify-content: center; height 32px
- Avatar wrapper: 40px x 40px; `border-radius: 100%`; inner img `object-fit: cover`
  (it measures 32px mid-reveal — 40px is the settled value)
- `By` (`p`): font-size 16px; font-weight 400; line-height 22.4px; color #78716c
- Name (`h6`): font-size 18px; **font-weight 700**; line-height 25.2px; color #1c1917
  Note the byline name is BOLD here, unlike the regular-weight name on the blog cards.

### Image mask (hero)
- width 840px (full container); height 526.237px -> **`aspect-[1.59623]`**
- border-radius: 24px; overflow: hidden
- inner img: `object-fit: cover`

## States & Behaviors

### Heading word-stagger reveal (one-shot, on view)
- Per-word `display:inline-block` spans: `opacity 0.001` + `scale(0.9)` -> `opacity 1` + `scale(1)`.
- Stagger ~0.045s, delayChildren ~0.08s, spring (stiffness 180 / damping 24).
- Mirror the pattern in `blog-8caafe43/BlogTitleSection.tsx`.

### Date, byline and hero image reveal
- `opacity: 0.001` + `scale(0.8)` -> `opacity: 1` + `scale(1)`, same viewport trigger.
- framer-motion, `viewport={{ once: true, amount: 0.4 }}`, respect `useReducedMotion()`.

### Hover states
- N/A.

## Assets
- Hero image: `shintaAsset("images/d8288cb19a756a51.jpg")`
- Avatar: `shintaAsset("images/062febe8ad7682a7.png")`
- Import `shintaAsset` from `../shared/site`; use `next/image` with `fill` + `unoptimized`, matching siblings.

## Text Content (verbatim)
- Date: `January 27, 2026`
- h1: `Turning Social Media Ideas Into Content Plans`
- Byline: `By` + `Budi Pandu`
- Hero image alt: `Turning Social Media Ideas Into Content Plans`
- Avatar alt: `Portrait of Budi Pandu`

## Responsive Behavior
- **Desktop (`xl:`):** as measured — h1 64px, heading gap 24, title gap 16, hero `aspect-[1.59623]` radius 24.
- **Tablet (`md:`):** h1 44px/48px tracking -1.76px; heading gap 20; hero radius 20.
- **Mobile (base):** h1 32px/36px tracking -1.28px; heading gap 16; title gap 12; hero `aspect-[4/3]` radius 16; byline name 16px/24px.
