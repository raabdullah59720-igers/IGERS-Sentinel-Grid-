# IGERS-BD-01 Graphics Upgrade Pack

This is a non-destructive visual layer for the current IGERS-POWERCORE GitHub Pages site.

## What it changes

- premium dark engineering dashboard styling
- sharper cards/panels and spacing
- better hover states and navigation polish
- subtle grid/lighting background
- improved map/air-traffic surface treatment
- responsive mobile refinements
- preserves existing text, sections, data feeds and interactions

## Install

Add these two files to the repository:

- `upgrade.css`
- `upgrade.js`

Then, inside `<head>` after the existing CSS files, add:

```html
<link rel="stylesheet" href="upgrade.css">
```

Before `</body>`, add:

```html
<script src="upgrade.js"></script>
```

The current live page was reviewed first. Its major sections include Concept, Energy, Journey, Environment, Applications, Sentinel Grid, Deployment, Live Time, Air Traffic, Weather and Inventor, and the visual layer is intended to leave those sections intact.

## Validation

- No JavaScript syntax changes to application/data logic
- No API endpoints changed
- Removed broad `[class*=live]` matching that could restyle unrelated widgets
- Removed global `section { overflow:hidden }` to prevent clipping dropdowns, maps and positioned UI
- Air-traffic visual targeting is now limited to known container IDs

## Safety

This pack does not replace the site's air-traffic API, weather feed, earthquake feed, time engine, or content. It is CSS/JS presentation only.
