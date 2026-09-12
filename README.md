# IGERS-POWERCORE Final Safe Visual Enhancer

This is a **visual-only, drop-in enhancement** for the existing IGERS-POWERCORE static website.

## What this version does

- Adds a clearly visible Bangladesh national-flag visual to the existing first hero section (`#home.hero`).
- Adds a small Bangladesh flag identity mark beside the existing `.brand` element when that element exists.
- Adds a tiny non-blocking `IGERS LIVE` badge.
- Uses only enhancer-owned scoped CSS selectors.
- Embeds the flag as SVG data, so there is no external flag file path to break.
- Uses `pointer-events:none` on the decorative layers so they cannot block clicks.

## What this version deliberately does NOT do

It does **not** create duplicate Weather, Environment, Earthquake, Air Traffic, or clock API polling.

The existing IGERS website already contains its own live-data logic. Keeping that logic as the single source avoids duplicate requests, provider rate limits, race conditions, overwritten DOM values, and other integration bugs.

Therefore, this enhancer does not replace or delete `index.html`, `script.js`, `style.css`, `styles.css`, or any existing inline scripts.

## Install

Upload `igers-live-enhancer.js` to the repository root and add exactly this line immediately before `</body>` in `index.html`:

```html
<script src="igers-live-enhancer.js"></script>
```

Do not remove existing scripts or styles.

## Safety checks performed

- JavaScript syntax checked with Node.js.
- ZIP archive integrity checked with `unzip -t`.
- No network `fetch()` calls in the enhancer.
- No `setInterval()` or `setTimeout()` polling loops in the enhancer.
- No global `button`, `a`, `header`, `nav`, `section`, `.card`, `.panel`, or `.live` selectors.
- No `overflow:hidden` rule.
- No existing DOM section is replaced.
- Decorative flag layers do not receive pointer events.
