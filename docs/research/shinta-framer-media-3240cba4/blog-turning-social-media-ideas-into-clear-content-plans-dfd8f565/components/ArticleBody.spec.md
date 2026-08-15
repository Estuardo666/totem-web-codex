# ArticleBody Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/blog-turning-social-media-ideas-into-clear-content-plans-dfd8f565/ArticleBody.tsx`
- **Interaction model:** static. No reveals, no hover, no scroll behaviour.

## DOM Structure
A single `max-width: 640px` column containing 40 blocks in order: 8 `h2` and 32 `p`.

## Computed Styles (desktop >=1200px)

### Column
- width 640px; `max-width: 640px`
- Spacing comes entirely from block margins, not flex gap.

### h2
- font-size 40px; font-weight 700; line-height 48px; letter-spacing -1.6px; color #1c1917
- `margin-top: 40px`, `margin-bottom: 0` — **except the very first block, which is `margin-top: 0`**

### p
- font-size 18px; font-weight 400; line-height 27px; letter-spacing normal; color #44403c (`text-shinta-stone`)
- `margin-top: 20px`, `margin-bottom: 0`

Implementation note: model the content as a typed array of blocks and render `h2`/`p` from it, applying
`first:mt-0` (or an index check) for the leading margin. Do not hand-write 40 JSX elements with ad-hoc classes.

## States & Behaviors
N/A — the body is completely static. Confirmed: no reveal animation, no hover, no scroll-linked effects.

## Assets
None. The body contains no images.

## Text Content (verbatim, in exact order)

1. **h2** — Every strong post starts before the design
2. p — Great social media content does not start in design tools.
3. p — It starts with thinking.
4. p — Social media agencies spend a lot of time planning before anything is posted. They look at goals audience behavior and brand voice. This thinking stage is what separates random posting from intentional growth.
5. p — Without strategy content feels busy. With strategy content feels calm and focused.
6. **h2** — Strategy gives content a clear direction
7. p — Social media agencies begin by defining direction.
8. p — They decide what the brand should talk about and what it should avoid. This keeps messaging clear and prevents mixed signals.
9. p — **Four lines separated by three `<br>` elements inside ONE paragraph:**
   - `Strategy helps answer simple questions`
   - `What does this brand stand for`
   - `Why should people care`
   - `What action should they take`
10. p — When direction is clear content becomes easier to create and easier to understand.
11. **h2** — Content planning reduces stress
12. p — Many brands struggle because they create content last minute.
13. p — Agencies avoid this by planning content ahead of time. They use calendars to map out posts weeks in advance.
14. p — This reduces stress and creates space to think creatively. When content is planned there is no panic or rushing.
15. p — Planning also helps brands stay consistent even during busy periods.
16. **h2** — Focus improves content quality
17. p — When agencies plan content they focus on fewer stronger ideas.
18. p — Instead of posting everything they choose what matters most. This helps content feel intentional instead of noisy.
19. p — Focused content is easier to read and easier to remember.
20. p — Less content with more meaning often performs better.
21. **h2** — Strategy and creativity work together
22. p — Strategy does not limit creativity. It supports it.
23. p — When direction is clear creative ideas flow faster. Designers and writers know the boundaries and can experiment inside them.
24. p — Social media agencies balance structure with creativity. This keeps content fresh while staying on brand.
25. p — Good strategy gives creativity a place to grow.
26. **h2** — Workspaces shape the creative process
27. p — Where people work affects how they think.
28. p — Quiet focused workspaces help strategists write plan and review content deeply. This focused time improves decision making.
29. p — Social media agencies protect this thinking time. It allows better ideas to surface without distraction.
30. p — Clear thinking leads to clear content.
31. **h2** — Data guides future decisions
32. p — After content goes live agencies review performance.
33. p — They look at what people saved shared and commented on. This data helps improve future strategy.
34. p — Over time content becomes sharper because decisions are based on real behavior not assumptions.
35. p — Small improvements compound into big results.
36. **h2** — Why strategy matters for your brand
37. p — If your social media feels scattered the problem is rarely effort.
38. p — It is usually a lack of direction.
39. p — Social media agencies turn ideas into systems. They help brands move from random posts to meaningful content.
40. p — With the right strategy social media stops feeling overwhelming and starts driving real impact.

That is 8 `h2` + 32 `p` = 40 blocks. The prose is deliberately unpunctuated in places (no commas in
"goals audience behavior and brand voice", no question marks on the four questions) — reproduce it exactly as written.

## Responsive Behavior
- **Desktop (`xl:`):** column 640px, h2 40px/48px tracking -1.6px, p 18px/27px, margins 40/20.
- **Tablet (`md:`):** h2 34px/40px tracking -1.36px; margins 32/18.
- **Mobile (base):** column `w-full`; h2 28px/34px tracking -1.12px; p 16px/25px; margins 28/16.
