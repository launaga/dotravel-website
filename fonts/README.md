# Fonts

The site uses two families, both free & open-source:

| Role    | Family              | Weights used            | Source |
|---------|---------------------|-------------------------|--------|
| Display | **Schibsted Grotesk** | 400, 500, 600, 700, 800, 900 | https://fonts.google.com/specimen/Schibsted+Grotesk |
| Body    | **Instrument Sans**   | 400, 500, 600 + italic 400   | https://fonts.google.com/specimen/Instrument+Sans |

## Self-hosting (recommended for production)

The pages currently load these from the Google Fonts CDN so the package previews
out of the box. To self-host, download the families and drop the **variable-weight
`.woff2` files** into this folder with these exact names (matching `css/fonts.css`):

```
fonts/
├── SchibstedGrotesk-VariableFont_wght.woff2
├── InstrumentSans-VariableFont_wdth,wght.woff2
└── InstrumentSans-Italic-VariableFont_wdth,wght.woff2
```

Download from Google Fonts (the "Get font" → download zip gives you the
`*-VariableFont_*.woff2` / `.ttf` files; convert TTF→WOFF2 if the zip ships TTF).

Then, in each HTML file, replace the CDN `<link>` in `<head>`:

```html
<!-- remove the fonts.googleapis.com <link> and add: -->
<link rel="stylesheet" href="css/fonts.css">
```

`css/fonts.css` already contains the matching `@font-face` rules (variable weight,
`font-display: swap`). If you prefer static instances over variable fonts, add one
`@font-face` per weight and update the `src` filenames accordingly.
