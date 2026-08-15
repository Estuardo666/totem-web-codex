# Shinta Clone Output Plan

- **Source URL:** `https://shinta.framer.media/`
- **Normalized origin:** `https://shinta.framer.media`
- **Normalized pathname:** `/`
- **App root:** `.`
- **Site key:** `shinta-framer-media-3240cba4`
- **Page key:** `root-8a5edab2`
- **Destination route:** `/`
- **Route file:** `src/app/page.tsx`
- **Artifact root:** `docs/research/shinta-framer-media-3240cba4/root-8a5edab2/`
- **Screenshot root:** `docs/design-references/shinta-framer-media-3240cba4/root-8a5edab2/`
- **Component root:** `src/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/`
- **Shared component root:** `src/components/sites/shinta-framer-media-3240cba4/shared/`
- **Asset root:** `public/sites/shinta-framer-media-3240cba4/root-8a5edab2/`
- **Shared asset root:** `public/sites/shinta-framer-media-3240cba4/shared/`
- **Asset downloader:** `scripts/download-assets-shinta-framer-media-3240cba4-root-8a5edab2.mjs`

## Collision and Preservation Check

- `src/app/page.tsx` is the untouched template scaffold and may be replaced under the clone workflow defaults.
- No existing `src/components/sites/` namespace collides with this target.
- No existing research, screenshot, or public asset namespace collides with this target.
- The existing `docs/design-references/comparison.png` remains untouched.
- Pre-existing `package.json` and `package-lock.json` changes that add `framer-motion` remain untouched and will be treated as user-owned changes.

## Planned Shared Foundation Changes

- Update `src/app/layout.tsx` only for clone-wide metadata and fonts that apply to the sole route.
- Merge Shinta-specific tokens and base behavior into `src/app/globals.css` without removing the scaffold's shadcn/Tailwind token contract.
- Replace the untouched scaffold content in `src/app/page.tsx` with the assembled clone.

