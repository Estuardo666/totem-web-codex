# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tótem Mass Media serves businesses and organizations in Ecuador that need audiovisual production, digital marketing, content strategy, and web development. The TotemHub product page also serves people evaluating or using the TotemHub Windows desktop application.

## Product Purpose

The website explains Tótem Mass Media's services, work, and contact options. The TotemHub surface explains the desktop file manager and provides the public privacy information required for its Google Drive integration.

## Positioning

Tótem combines creative production and technical delivery in one team. TotemHub extends that approach into a desktop workspace that brings local files and Google Drive into one visual file-management experience.

## Operating Context

Visitors browse a public Spanish-language marketing site. TotemHub users work in a Windows desktop application, connect their own Google Account through OAuth, browse Drive, and may keep selected files available offline on a location they choose.

## Capabilities and Constraints

- The public website is a statically exported Next.js site deployed on the existing Vercel project and `totemmassmedia.com` domain.
- TotemHub requests `openid`, `email`, `profile`, and Google Drive access so it can identify the account and provide two-way file operations selected by the user.
- Google OAuth tokens and Drive working data are stored locally on the user's computer; the public website does not receive Drive files.
- Public claims must stay within functionality evidenced by the TotemHub implementation and must not imply Google endorsement or completed verification.

## Brand Commitments

The public identity is Tótem Mass Media. Existing Spanish voice, logos, color system, typography, light/dark themes, rounded forms, and expressive but restrained motion remain authoritative for new pages.

## Evidence on Hand

- Existing marketing pages, shared navigation, footer, design tokens, and branded assets in this repository.
- The implemented TotemHub Google Drive integration and its tested local behavior.
- No testimonials, public usage figures, certifications, or Google partnership claims are available and none should be fabricated.

## Product Principles

- Explain capabilities in plain language before asking for trust.
- Be precise about access to personal files and where data is stored.
- Keep legal and privacy information easy to find and readable.
- Extend the established Tótem identity rather than introducing a separate visual brand.

## Accessibility & Inclusion

Pages must remain keyboard accessible, responsive, readable at enlarged text sizes, and compatible with reduced-motion preferences.
