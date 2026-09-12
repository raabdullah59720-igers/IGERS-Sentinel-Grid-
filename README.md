# IGERS-BD-01 Graphics Upgrade - Final Safe Build

This package is a presentation-only layer for the existing IGERS-POWERCORE website.

## Safety changes

- No API or data-feed code is included or modified.
- No existing section is added, removed, renamed, or reordered.
- No `body > *` stacking/z-index rules.
- No global `header/nav/topbar` backdrop/filter rules.
- No global button/link transform rules.
- No global `section { overflow:hidden }` rule.
- No broad `.live`, `.status-live`, `.value`, `.number`, `.card`, or `.panel` selectors.
- JavaScript does not query or rewrite existing links, buttons, maps, cards, or feeds.
- JavaScript only adds one harmless document class for future scoped styling.
- Bangladesh-inspired background is implemented only as a body background layer.

## Included files

- `upgrade.css` - visual styling layer
- `upgrade.js` - harmless visual hook

## Install

In the existing repository:

1. Upload `upgrade.css` to the repository root.
2. In `<head>` after the site's current stylesheet(s), add:

```html
<link rel="stylesheet" href="upgrade.css">
```

3. Upload `upgrade.js` to the repository root.
4. Before `</body>`, add:

```html
<script src="upgrade.js"></script>
```

## Validation performed

- JavaScript syntax check: pass
- CSS curly-brace balance: pass
- CSS parenthesis balance: pass
- ZIP archive integrity: pass
- Static review for unsafe global selectors: pass

## Important

This pack intentionally does not attempt to repair or replace existing live weather, earthquake, time, or air-traffic providers. It only improves presentation while leaving those systems under the original website code.


## Bangladesh flag visual
The package includes `bangladesh-flag-overlay.svg`. It is used only as a top-level visual background layer for the landing/first viewport. It does not replace HTML content or modify live-data logic.

## Safe integration
Load `upgrade.css` after the site's existing stylesheet. Load `upgrade.js` after the existing page scripts or at the end of the body. Do not remove the site's current CSS or JavaScript files.
