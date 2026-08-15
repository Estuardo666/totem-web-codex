# Blog post: "Turning Social Media Ideas Into Content Plans" — Page Topology

Source: https://shinta.framer.media/blog/turning-social-media-ideas-into-clear-content-plans
Route: `/blog/turning-social-media-ideas-into-clear-content-plans`
-> `src/app/blog/turning-social-media-ideas-into-clear-content-plans/page.tsx`
Page height: 6656px. Framer site, Lenis smooth scroll active.

`<main>` has `padding: 120px 0 0`, `display:flex; flex-direction:column`, background `#f4f4f3`.
Navbar is a fixed overlay above main (reused). This is a nested route under the existing `/blog` index —
`src/app/blog/page.tsx` is untouched.

| # | Section | y-range | Component | Interaction model |
|---|---------|---------|-----------|-------------------|
| 0 | Navbar | fixed | `shared/Navbar` (reused) | scroll hide/show |
| 1 | Article header + hero image | 120-~660 | `ArticleHeroSection` (new) | static + reveal |
| 2 | Article body | ~660-3992 | `ArticleBody` (new) | static |
| 3 | Related posts | 3992-4889 | `RelatedPostsSection` (new) + `shared/BlogPostCard` | static, no card hover |
| 4 | Contact CTA | 4889-5686 | `shared/ContactCtaSection` (reused, identical) | hover |
| 5 | Footer | 5486-6456 | `shared/FooterSection` (reused, identical) | hover |

Sections 1 and 2 are one `Content` section in the source (`padding: 0 20px 120px`, height 3872px) whose container is
`max-width: 840px; flex-direction: column; gap: 40px; align-items: center` with exactly three children:
Heading (840x225), Image mask (840x526.24), Text (640 wide, `max-width:640px`).
They are split into two components here only to keep each builder brief small; the page re-assembles them inside
one `<section>` so the 40px container gap is preserved.

## Reused, do not rebuild
- `shared/Navbar`, `shared/ContactCtaSection`, `shared/FooterSection` — the CTA measures 797px here, matching exactly.
- `shared/BlogPostCard` — the related-post cards are pixel-identical to the `/blog` index cards
  (410.667x497.347, gap 24, cover radius 24 at aspect 1.33442, same type scale, no hover treatment).
  The card was promoted from `blog-8caafe43/` to `shared/` during this run; `BlogGridSection` was updated to import it
  from its new location and is otherwise unchanged.

## Not reusable
`root-8a5edab2/BlogSection.tsx` has the same header design (BLOG pill + `Insights & Ideas` + a "More Articles" CTA)
but hardcodes a different three-post set and its cards carry a hover arrow badge that this page does not have.
Build `RelatedPostsSection` fresh; leave the root component alone.
