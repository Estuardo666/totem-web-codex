# ContactFormCard Specification

## Overview
- **Target file:** `src/components/sites/shinta-framer-media-3240cba4/contact-4eb95063/ContactFormCard.tsx`
- **Interaction model:** static + one-shot reveal; native form validation; hover on the submit button only.
- This is the pink panel on the right of the Contact section.

## DOM Structure
Card(pink, col) > [ Title bar > h4, Form(white card, col) > [ Field(FULL NAME), Field(EMAIL), Field(MESSAGE), Footer row > [legal paragraph, submit button] ] ]

## Computed Styles (desktop >=1200px)

### Card root
- display: flex; flex-direction: column; align-items: flex-end; gap: 8px
- padding: 16px; border-radius: 40px; background: #ffa8f2 (`bg-shinta-pink`)
- width: 644px; max-width: 680px; height: 544px
- In the section's flex row the card must not shrink: `xl:w-[644px] xl:shrink-0 xl:h-[544px]`

### Title bar
- display: flex; justify-content: center; align-items: center; gap: 10px
- padding: 8px 16px; width: 100% (612px)
- h4: font-size 32px; font-weight 700; line-height 38.4px; letter-spacing -1.28px; color #1c1917
- The h4 is left-aligned within the bar (the bar's `justify-content:center` centres the single full-width child, not the text).

### Form (the white card)
- display: flex; flex-direction: column; gap: 16px
- padding: 24px; border-radius: 32px; background: #ffffff
- width: 100% (612px)

### Field label (one per field)
- display: flex; flex-direction: column; align-items: flex-start; gap: 10px; width: 100% (564px inside the 24px padding)
- Caption: font-size 12px; font-weight 600; line-height 16.8px; letter-spacing 0.96px; text-transform uppercase; color #1c1917
  Use `SectionEyebrow` from `../shared/ShintaPrimitives` for the caption — it already encodes exactly these values.

### Text input wrapper (FULL NAME, EMAIL)
- display: flex; align-items: center; padding: 16px; height: 58px
- border-radius: 16px; background: #f4f4f3 (`bg-shinta-canvas`)
- input: font-size 18px; line-height 21.6px; color #1c1917; transparent background; no border; no default outline ring (use a `focus-visible` ring on the wrapper or the input, project convention)

### Textarea wrapper (MESSAGE)
- border-radius: 16px; background: #f4f4f3; the wrapper has **no padding** — the textarea itself carries `padding: 16px`
- textarea: height 100px; `resize: vertical`; font-size 18px; line-height 21.6px; color #1c1917
- Give the textarea `display:block` (or `align-top`) — as an inline element its line-box adds ~6px and the label block measures 133px instead of 126.8px, which pushes the whole card past 544px

### Footer row
- Legal paragraph on the left, submit button on the right, vertically centred.
- Legal `p`: font-size 16px; line-height 22.4px; color #78716c (`text-shinta-muted`)
- The two inline links inside it: color #1c1917, `text-decoration: none`, and they read visually bolder than the surrounding text.

### Submit button
- Total 274px × 57.2px; `display:flex; align-items:center; justify-content:center`
- **Visual order: dark pill first, then lavender circle.** (The source's DOM order is reversed; build it in visual order.)
- Pill: width 217px; height 57.2px; border-radius 44px; padding 16px 24px; background #1c1917 (`bg-shinta-ink`); label `Submit` in white, bold, centred.
- Circle: 57px × 57px; border-radius 50px; background #aa94ff (`bg-shinta-lavender`); contains a dark up-right arrow glyph (`ArrowUpRight` from `lucide-react`, `text-shinta-ink`), matching the arrow buttons in `ShintaPrimitives` and `shared/ContactCtaSection`.

## States & Behaviors

### Reveal (one-shot, on entering view)
- Whole card: `opacity: 0.001` + `scale(0.8)` → `opacity: 1` + `scale(1)`.
- framer-motion, `viewport={{ once: true, amount: 0.3 }}`, respect `useReducedMotion()`.

### Form validation
- `Name` — `required`, `type="text"`
- `Email` — `required`, `type="email"`
- `message` — not required
- Native validation only. There is no backend: `onSubmit` must call `event.preventDefault()` and do nothing else.
- Do NOT reproduce the source's eight hidden honeypot inputs.

### Hover states
- Submit button: the source only reports `transition: all`. Use the established project convention —
  `transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1` on the button and
  `group-hover:rotate-45 group-hover:scale-110` on the arrow circle, exactly as `shared/ContactCtaSection` does.
- Inputs: visible `focus-visible` ring, project convention.

## Assets
None.

## Text Content (verbatim)
- Card title: `Let us know about you.`
- Labels: `FULL NAME`, `EMAIL`, `MESSAGE`
- Placeholders: `Enter full name`, `Enter email address`, `Let us know about your ideas or challenges`
- Legal: `By submitting, you agree to our Terms and Privacy Policy.`
  - `Terms` → `/legal/terms-of-service`
  - `Privacy Policy` → `/legal/privacy-policy`
- Button: `Submit`

## Responsive Behavior
- **Desktop (`xl:`):** as measured — card 644px wide, `max-w-[680px]`, radius 40, form radius 32.
- **Tablet (`md:`):** card becomes `w-full max-w-[680px]`; keep every internal metric; footer row stays a row.
- **Mobile (base):** card `w-full`, radius 28, padding 12; form radius 24, padding 16, gap 14; inputs stay 58px tall with radius 16; title h4 24px/29px tracking -0.96px; footer row stacks to a column, `items-stretch`, gap 16, legal text 14px/20px, submit button `w-full` with the pill `flex-1`.
