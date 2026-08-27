# dotravel

Static, framework-free product prototype for a premium Indonesia travel service.
It has no build step and can be served from any static host.

## Product routes

- `index.html` — editorial homepage with Seasonal, Signature, and Compose entry points
- `seasonal.html` — filterable departure directory across Indonesia
- `signature-journeys.html` — original dotravel routes
- `journey.html` — journey story, itinerary, traveller pricing, and reservation CTA
- `compose.html` — custom-trip brief with an auto-saved browser draft
- `checkout.html` — interactive demo checkout and order confirmation
- `account.html` — sign in/register, My Trips, itinerary, wishlist, payments, profile, and settings
- `destinations.html` — regional Indonesia destination index
- `notes.html` — editorial travel content and SEO landing page
- `help.html` — traveller help and SOS directory
- `404.html`, `robots.txt`, `sitemap.xml` — discovery and error handling

## Demo account

Use `demo@dotravel.co` with password `demo1234`, or click **Use demo**.

Authentication, wishlist, itinerary, profile, and order state use `localStorage` so
the complete conversion flow can be tested without a backend. Checkout is explicitly
a demo and never sends or stores card data. Production requires a real identity
provider, database, payment service provider, transactional email, and server-side
validation.

## Local preview

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/` in a browser.

## Design system

- Palette: cream `#F3EFE7`, ink `#14130F`, orange `#FF4A17`
- Display type: Schibsted Grotesk
- Body type: Instrument Sans
- Shared tokens: `css/tokens.css`
- Components and responsive layout: `css/styles.css`
- Shared UI and interactions: `js/main.js`

Images are self-hosted in `assets/img/`. Google Fonts and Lucide icons currently
load from CDNs; self-host those assets before using the site in an offline product.
