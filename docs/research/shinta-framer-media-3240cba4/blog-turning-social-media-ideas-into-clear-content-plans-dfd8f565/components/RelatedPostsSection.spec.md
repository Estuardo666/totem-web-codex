# RelatedPostsSection Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/RelatedPostsSection.tsx`
- **Interaction model:** static grid + a decorative stroke that draws itself once on view. No card hover.

## DOM Structure
section > Container(col, relative) > [ decorative stroke layer (absolute), Header(row) > [ Title(col) > [eyebrow pill, h2], "More Articles" button ], Grid(3 cols) > 3x shared BlogPostCard ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center
- padding: 120px 20px
- height 896.6px (content-driven — do not hard-code)

### Container
- display: flex; flex-direction: column; gap: 56px
- width: 100%; max-width: 1280px
- **`position: relative`** — the decorative stroke is positioned against it. Give the header and grid a `z-10` layer.

### Header row
- display: flex; flex-direction: row; align-items: flex-end; justify-content: space-between; width 100%
- Left: title column, `display:flex; flex-direction:column; gap:8px`
- Right: the "More Articles" button

### Eyebrow pill
- inline-flex; padding 4px 8px; border-radius 40px; background #ffa8f2 (`bg-shinta-pink`)
- text: 12px / 600 / line-height 16.8px / letter-spacing 0.96px / uppercase / #1c1917
- Use `SectionEyebrow` from `../shared/ShintaPrimitives`.
- Wrap it in a `flex` (not `block`) element — a block wrapper adds a 1.33px line box around the inline-flex pill.

### h2
- font-size 64px; font-weight 700; line-height 70.4px; letter-spacing -2.56px; color #1c1917

### "More Articles" button
- Total 230px x 57.2px; `display:flex; align-items:center`
- **Visual order: dark pill first, then pink circle.** (The source's DOM order is reversed and it also carries a stray
  16x16 lavender element that is not visible — omit that.)
- Pill: width 173px; height 57px; border-radius 44px; padding 16px 24px; background #1c1917 (`bg-shinta-ink`); label `More Articles` in white, bold.
- Circle: 57px x 57px; border-radius 50px; background #ffa8f2 (`bg-shinta-pink`); contains `ArrowUpRight` from `lucide-react` in `text-shinta-ink`.
- Hover: the project convention — `transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1` on the link and `group-hover:rotate-45 group-hover:scale-110` on the circle, exactly as `shared/ContactCtaSection.tsx` does.
- `href`: `/blog`

### Grid
- display: grid; grid-template-columns: repeat(3, minmax(0,1fr)) (measured 410.667px each)
- `gap: 24px` (row and column are both 24 here — unlike the `/blog` index, which uses `72px 24px`)

### Cards
Use `shared/BlogPostCard` unchanged. Verified pixel-identical to the `/blog` index cards: 410.667x497.347, gap 24,
cover radius 24 at `aspect-[1.33442]`, date 12/16.8/0.96 uppercase muted, h3 32/38.4/-1.28, avatar 40px round,
`By` 16/22.4 muted, name 18/27 ink, and **no hover treatment**.

## States & Behaviors

### Decorative stroke — draw once on view (NOT scroll-linked)
Sampled `stroke-dashoffset` at scrollY 3100, 3700 and 4300 while the section crossed the viewport: it held at `0px`
every time. Animate `stroke-dashoffset` from the path length to 0 once when the section enters view — a plain
framer-motion `initial`/`animate` (~1.6s, `cubic-bezier(0.22, 1, 0.36, 1)`, ~0.2s delay). Pin at 0 when
`useReducedMotion()` is true. Do NOT drive it from `useScroll`.

- Wrapper: `position:absolute; top:-150px; left:-102px; width:1446.4px; height:653.15px; z-index:0`, pointer-events none, positioned against the Container.
- SVG inside it: square `1446x1446`, **vertically centred** (measured offset `y = -397px ≈ (653 - 1446) / 2`) — e.g. the wrapper is `grid place-items-center` and the SVG is `h-[1446px] w-[1446px]`.
- `viewBox="0 0 1170 1170"`, `fill="none"`, `stroke="#e7e5e4"`, `stroke-width="10"`, `stroke-linecap="butt"`.
- Do NOT set `preserveAspectRatio` — the source has no such attribute.
- Path length **2124.1**.
- Hide below `xl:` (`hidden xl:grid`) — it is sized for the desktop composition.

Path `d`:
```
M 0 60.513 C 475.401 -182.756 521.461 396.277 880.344 242.812 C 1039.017 187.021 1033.094 70.262 936 60.511 C 864.476 53.329 800.556 96.75 762.531 170.2 C 715 262.012 710.754 555.991 1178 425.513
```

### Reveals
Header and cards fade/scale in once (`opacity 0.001` + `scale(0.8)` -> `1`), `viewport={{ once: true, amount: 0.2 }}`.
`BlogPostCard` already implements its own reveal via a `delay` prop — pass `index * 0.09`.

### Hover states
Button only (above). Cards have none.

## Per-post content (verbatim, in source order)

| # | Title | Date | Author | href | Cover | Avatar |
|---|-------|------|--------|------|-------|--------|
| 1 | Why Good Copywriting Matters a Lot | January 27, 2026 | Kristanto Mahera | `/blog/why-good-copywriting-matters` | `shintaAsset("images/90da175d3b991e31.jpg")` | `shintaAsset("images/e202cc3fcb7f8b83.png")` |
| 2 | Why Social Media Is Never a One Person Job | January 27, 2026 | Karina Kumala | `/blog/why-great-social-media-is-never-a-one-person-job` | `shintaAsset("images/01c3e56a4e3063a0.jpg")` | `shintaAsset("images/187a0bff84102aca.png")` |
| 3 | How a Social Media Agency Helps Brands | January 27, 2026 | Kristanto Mahera | `/blog/how-a-social-media-agency-helps-brands-grow-faster` | `/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg` | `shintaAsset("images/e202cc3fcb7f8b83.png")` |

Note the current post is excluded from its own related list. Cover 3 lives in the `/blog` index's namespace and is
referenced by literal path — that mixed form is intentional, matching how `BlogGridSection` does it.

## Text Content (verbatim)
- Eyebrow: `BLOG`
- h2: `Insights & Ideas` — **plural "Insights"** here, unlike the `/blog` index page's singular `Insight & Ideas`.
- Button: `More Articles`

## Responsive Behavior
- **Desktop (`xl:`):** 3 columns, `gap: 24px`, header a row with `justify-between`, h2 64px, stroke visible.
- **Tablet (`md:`):** 2 columns, `gap: 24px`; header stays a row; h2 44px/48px tracking -1.76px; section padding `96px 20px`; container gap 40. Stroke hidden.
- **Mobile (base):** 1 column, `gap: 32px`; header stacks to a column, `items-start`, gap 20, button `w-full` with the pill `flex-1`; h2 34px/38px tracking -1.36px; section padding `72px 20px`; container gap 32. Stroke hidden.
