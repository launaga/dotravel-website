# Images

All imagery is now **self-hosted** in this folder — the pages load no remote images.
Each journey has two crops: a square-ish `*-card` (used in card grids and rows) and
a wide `*-hero` (used for sliders, page heros, and full-bleed features).

| File                  | Journey / use                              | Crop        |
|-----------------------|--------------------------------------------|-------------|
| `bali-card.jpg`       | Bali — cards & gallery rows                 | square      |
| `bali-hero.jpg`       | Bali — wide backgrounds                     | wide        |
| `flores-card.jpg`     | Flores — cards & rows                        | square      |
| `flores-hero.png`     | Flores — home slider                         | wide        |
| `java-card.png`       | Java — cards & rows                          | square      |
| `java-hero.png`       | Java — home slider + trip-detail map backdrop| wide        |
| `sumba-card.jpg`      | Sumba — gallery row                          | square      |
| `sumba-hero.png`      | Sumba — compose hero shot                    | wide        |
| `toba-card.jpg`       | Lake Toba — gallery row                      | square      |
| `rajaampat-card.jpg`  | Raja Ampat — gallery row                     | square      |
| `rambusolo-card.png`  | Rambu Solo' — (account/thumb use)            | square      |
| `rambusolo-hero.png`  | Rambu Solo' — home slider/feature + seasonal page hero | wide |

## Still using placeholders (supply real photography before launch)
No photo was provided for these journeys, so they don't yet appear as dedicated
pages in this static package — add a `*-card` / `*-hero` pair here when you have art:
**Banda Islands, Derawan, Wakatobi, Mentawai**, and the custom "Lombok & the Gilis"
composed journey.

## Notes
- The trip-detail route map (`journey.html`) currently uses `java-hero.png` as a
  muted backdrop behind the "Leaflet in production" chip — production renders the
  real route with Leaflet (`leaflet@1.9.4`), as in the source app.
- Confirm licensing on all photography before launch.
