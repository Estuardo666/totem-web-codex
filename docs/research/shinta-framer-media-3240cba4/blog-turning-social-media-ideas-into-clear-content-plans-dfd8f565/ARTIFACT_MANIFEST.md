# Blog post — Asset Manifest

## Downloaded fresh
**None.** Every asset this page uses already exists in the repo.

## Reused (verified by source-URL match)
| source | local | usage |
|--------|-------|-------|
| r2x5juiviagvZesFV13a9pVaR4.jpg | `shintaAsset("images/d8288cb19a756a51.jpg")` | article hero image |
| QJRZerULrXfNrY08IEi5N1xnB0.png | `shintaAsset("images/062febe8ad7682a7.png")` | author avatar, Budi Pandu |
| cNhxMCAtBg1pCkLonOn6wBwPzA.jpg | `shintaAsset("images/90da175d3b991e31.jpg")` | related cover 1 |
| LjqUtvyQXNfWUeK0iqaOyoetDg.jpg | `shintaAsset("images/01c3e56a4e3063a0.jpg")` | related cover 2 |
| vrsTB9iCMqt035VA9x2UzaBTWY.jpg | `/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg` | related cover 3 |
| j2SDQqAkQ3arXM8IQ1jnCBB6S0.png | `shintaAsset("images/e202cc3fcb7f8b83.png")` | avatar, Kristanto Mahera |
| 3TCXEPjCw7AbpdVqOwb0J3keQNA.png | `shintaAsset("images/187a0bff84102aca.png")` | avatar, Karina Kumala |

Related cover 3 lives in the `/blog` index's page-local namespace because that page downloaded it first; it is
referenced by literal path rather than duplicated.

No download script was needed for this page, so none was created.

## Generated fallback assets
None. No Atlas Cloud fallback was used; every asset is an exact original.

## Inline SVG
One decorative path, transcribed into the component rather than downloaded — see `BEHAVIORS.md`.
