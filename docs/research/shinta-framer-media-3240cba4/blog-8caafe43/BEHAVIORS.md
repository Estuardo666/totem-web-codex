# Blog — Behavior Bible

## Global
- **Lenis smooth scroll** is active on the source. The clone stays on native scroll, matching the other three pages. Known gap.
- Framer appear animations are viewport-triggered, run once, and only fire on real wheel scroll — never on `window.scrollTo`.
- **Measurement trap (bit this project twice already):** sampling an element before its reveal settles returns the
  *scaled* box, not the layout box. Every number in these specs is a settled value.

## Card hover — there is none
Hovered a card for 2s and re-sampled `transform`, `opacity`, `border-radius`, `filter` on the link, the image mask and
the inner image, plus the `h3` colour and `text-decoration`. **Nothing changed.** The `<a>` carries `transition: all`
but no hover rule targets it.

Do NOT invent a hover treatment here, and in particular do not copy the one from
`root-8a5edab2/BlogSection.tsx` — that home-page component reveals a white circular arrow badge on hover
(`opacity-0 -> 100`, `translate-y-2 -> 0`). This page has no such badge in the DOM at all.

Cursor is the browser default for a link. Keep a visible `focus-visible` ring for keyboard users (project convention).

## Reveals
Title block and cards fade/scale in once as they enter the viewport, consistent with the rest of the site:
`opacity: 0.001` + `scale(0.8)` -> `opacity: 1` + `scale(1)`, and the h1 splits per word.

## Grid
Static two-row, three-column grid. No pagination, no "load more", no filtering, no tabs — six posts, all rendered.
The six card links point at `./blog/<slug>` detail routes that are out of scope for this clone; keep the hrefs verbatim
so they remain correct if those pages are cloned later.

## Responsive
Source breakpoints `<810` / `810-1199` / `>=1200`. The live viewport could not be narrowed below ~1298px (the browser
extension side panel holds the window open), so mobile and tablet values are derived from those breakpoints and
mirrored from the sibling Shinta components rather than measured. Same limitation as the other pages.
