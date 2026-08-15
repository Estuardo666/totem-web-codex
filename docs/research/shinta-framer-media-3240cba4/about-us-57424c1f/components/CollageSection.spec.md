# CollageSection Specification ("Building contents that matters")

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/about-us-57424c1f/CollageSection.tsx`
- **Interaction model:** **scroll-driven parallax** (this is the one genuinely scroll-linked section on the page). Do NOT build it as a static grid, and do NOT use click/hover triggers.

## DOM Structure
section > Container(col) > [ h2, ParallaxImages(relative, 1000x924) > 5 absolutely-positioned image tiles ]

## Computed Styles (desktop >=1200px)

### section
- display: flex; justify-content: center; align-items: center
- padding: 120px 20px; position: relative
- height 1334.4px

### Container
- display: flex; flex-direction: column; gap: 100px
- width: 100%; max-width: 1000px

### h2
- font-size: 64px; font-weight: 700; line-height: 70.4px; letter-spacing: -2.56px; color: #1c1917
- Centered, full container width. Split per word for the stagger reveal (see below).

### ParallaxImages container
- position: relative; display: block
- width: 1000px; height: 924px

### The five tiles (all `position: absolute`, `overflow: hidden`, inner `img` `object-fit: cover`)
| name | top | left | width | height | border-radius | image |
|------|-----|------|-------|--------|---------------|-------|
| Image big | 156px | 295px | 410px | 729px | 32px | `collage-large.jpg` |
| Image 1 | 183px | 210px | 194px | 320px | 24px | `collage-tall-right.jpg` |
| Image 2 | 0px | 890px | 302px | 226.988px | 24px | `collage-wide-bottom.jpg` |
| Image 3 | 963px | 56px | 252px | 189px | 24px | `collage-wide-top.jpg` |
| Image 4 | 1016px | 760px | 194px | 345px | 24px | `collage-tall-left.jpg` |

## States & Behaviors

### Scroll parallax — the core behaviour
A single shared linear progress `p` (0 -> 1) drives every tile as the section travels through the viewport.
Measured on the live site (`scrollY -> translateY` of "Image big"): 2400 -> 7.04, 2900 -> 29.88, 3400 -> 52.72, 3900 -> 75.56.
That is exactly linear (slope 0.045683 px/px) and clamped at both ends. Every other tile is a fixed multiple of it.

| tile | translateX (constant) | translateY at p=0 | translateY at p=1 |
|------|----------------------|-------------------|-------------------|
| Image big | 0 | 0 | **+100** |
| Image 1 | **-97** | 0 | **-300** |
| Image 2 | **-151** | 0 | **-50** |
| Image 3 | 0 | 0 | **-800** |
| Image 4 | 0 | 0 | **-400** |

Implementation:
```tsx
const sectionRef = useRef<HTMLElement>(null);
const { scrollYProgress } = useScroll({
  offset: ["start end", "end start"],
  target: sectionRef,
});
const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // per-tile end value
```
Use one `useTransform` per tile with its own end value; `translateX` is a static class, not animated.
When `useReducedMotion()` is true, pin every tile at its `p=0` position.

### Heading reveal (one-shot, on view)
- The source splits the h2 into per-word `display:inline-block` spans and staggers them.
- opacity 0 / translateY 22px -> opacity 1 / translateY 0; stagger ~0.045s, delayChildren ~0.08s, spring (stiffness 180, damping 24).
- Mirror the existing pattern in `root-8a5edab2/MissionSection.tsx`.

### Hover states
- N/A.

## Assets — all under `/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/`
`collage-large.jpg`, `collage-tall-left.jpg`, `collage-tall-right.jpg`, `collage-wide-top.jpg`, `collage-wide-bottom.jpg`.
Use `next/image` with `fill` + `unoptimized`, matching sibling components.

Suggested alt text (all decorative-adjacent portfolio stills, keep them descriptive):
- big: `A portrait of a woman with white hair surrounded by daisies`
- 1: `A neon-lit portrait in blue and orange light`
- 2: `A silhouette framed by swirling purple light trails`
- 3: `A close-up of hands typing against an orange backdrop`
- 4: `A model in a bomber jacket posing on a yellow backdrop`

## Text Content (verbatim)
- h2: `Building contents that matters`

## Responsive Behavior
- **Desktop (`xl:`):** absolute 1000x924 collage exactly as tabulated, full parallax.
- **Tablet (`md:`):** keep the absolute composition but scale it down — wrap the collage in a `scale-[0.72] origin-top` container inside a `h-[665px]` box, h2 44px/48px tracking -1.76px, container gap 72px.
- **Mobile (base):** the absolute composition does not fit. Replace it with a 2-column CSS grid, `gap-3`, tiles in source order, each `rounded-[16px] aspect-[3/4]` (`Image 2` and `Image 3` span `aspect-[4/3]`), no parallax offsets. h2 34px/38px tracking -1.36px, centered; container gap 48px; section padding 72px 20px.
