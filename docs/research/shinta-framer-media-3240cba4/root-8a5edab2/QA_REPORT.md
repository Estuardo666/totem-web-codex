# Shinta clone QA report

Date: 2026-08-15  
Route: `/`  
Local QA URL: `http://localhost:3001/`

## Automated project gate

- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- Next.js output: statically prerendered `/` and `/_not-found`

## Geometry comparison

| Viewport | Source document | Clone document | Delta |
| --- | ---: | ---: | ---: |
| 1440×900 | 21,669px | 21,668px | -1px |
| 768×900 | 27,410px | 27,411px | +1px |
| 390×844 | 24,934px | 24,934px | 0px |

Desktop section heights match the recorded source topology. At mobile, the project, service, pricing, FAQ, and CTA bands match the source heights exactly. No horizontal document overflow was detected at 390px or 768px.

## Interaction sweep

- Hero: all three videos begin paused and muted; the play control starts only the front layer and its second state pauses it.
- Navigation: visible at the top, hides after downward wheel input, and returns after upward input; compact menu exposes the correct ARIA state.
- Pain points: sticky stage and scroll-progress state progression verified in the assembled document.
- Services: four sticky panels replace one another at the recorded 900px offsets.
- Pricing: Monthly/Yearly radiogroup updates active weight/color while prices remain unchanged, matching the source.
- FAQ: first item opens by default; choosing the second item closes the first and exposes only the selected answer.
- Browser console: no application-generated React or network errors were observed. The in-app browser's Tab Suspender emitted message-channel noise when it detached an inactive QA tab; this is extension-owned and not emitted by the clone.

## Captures

Final clone captures are stored beside the originals in `docs/design-references/shinta-framer-media-3240cba4/root-8a5edab2/` with the `clone-` prefix. They cover the opening viewport, projects, two service states, comparison, testimonials, pricing, FAQ, CTA, footer, tablet, and mobile.
