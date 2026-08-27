# dotravel — Website Handoff Package

Static, framework-free front-end for **dotravel** (formerly NAVIGO). Every page
opens directly in a browser — no build step, no dependencies.

## Structure

```
website/
├── index.html                 Home — hero slider, marquee, signature grid, seasonal feature
├── signature-journeys.html    Gallery — full list of signature journeys (rows)
├── journey.html               Trip detail — sticky map + pricing rail (see "Sticky rail")
├── seasonal.html              Seasonal event detail — sticky price card + calendar grid
├── compose.html               Compose flow — landing, four-step brief, CTA
├── css/
│   ├── fonts.css              @font-face for self-hosted variant files
│   ├── tokens.css             Design tokens (colour, type, radius, spacing) — single source of truth
│   └── styles.css             All component + layout styles (references tokens)
├── js/
│   └── main.js                Mobile nav, language toggle, hero slider (vanilla JS)
├── fonts/
│   └── README.md              Which .woff2 variant files to drop in + sources
└── assets/
    └── img/
        └── README.md          Image manifest — remote sources to localise
```

### Files added beyond the original brief (and why)
- **journey.html** — the trip-detail page. This is where the sticky map + pricing
  rail lives, so it needed its own page.
- **css/tokens.css** — colour/type tokens split out so a developer can retheme in one file.
- **fonts/** + **assets/img/** READMEs — the package references self-hosted fonts
  and local images; these tell you exactly what to drop in.
- The gallery file is `signature-journeys.html` (hyphen, not a space) — spaces in
  URLs must be percent-encoded and break links, so the filename was normalised.

## Brand & style
- **Wordmark:** `dotravel` (lowercase) + a solid orange dot. See `.brand` in styles.css.
- **Type:** Display = **Schibsted Grotesk**; Body = **Instrument Sans**. (Replaced Bricolage Grotesque.)
- **Palette:** cream `#F3EFE7`, ink `#14130F`, brand orange `#FF4A17`. Full set in `css/tokens.css`.

## Sticky rail (trip detail — key pattern)
On `journey.html` and `seasonal.html` the right column **freezes** while the left
document scrolls. The mechanism:
- The rail uses `position: sticky; top: 90px` (`.detail__aside` / `.price-aside`).
- **Critical:** no ancestor may use `overflow: hidden` — that silently creates a
  scroll container and kills sticky. `body` uses `overflow-x: clip` instead, which
  clips horizontally without breaking sticky. Keep this if you refactor.
- On the trip detail, the map fills the rail (`flex: 1`) and the pricing panel sits
  under it; on mobile (`≤960px`) the rail switches to `position: static` and stacks.

## Notes for the build
- **Fonts** load from the Google Fonts CDN in each page's `<head>` so the package
  previews immediately. To self-host, drop the `.woff2` files into `/fonts` and
  swap the CDN `<link>` for `<link rel="stylesheet" href="css/fonts.css">`.
- **Images** are self-hosted in `assets/img/` (no remote image loads). The pages
  use optimized `*-web.jpg` variants; original source images are kept for future exports.
- **Language toggle** (EN/ID) sets visual state + `<html lang>` only; wire it to
  your i18n layer. The full bilingual copy lives in the source app.
- **Route map** on the trip detail is a placeholder image; production uses Leaflet
  (`leaflet@1.9.4`) as in the app.
- The static preview includes an interactive four-question **compose brief** and
  live traveller pricing. Checkout, submissions, translation, maps, and the SOS
  directory still need to be connected to production services.
