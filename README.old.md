# IGERS-BD-01 Final Safe Live Enhancer

This is a **drop-in enhancement** for the existing `raabdullah59720-igers/IGERS-POWERCORE` static site.

## What it does

- Adds a clearly visible Bangladesh national-flag visual to the existing first hero section (`#home.hero`).
- Adds a small Bangladesh flag mark beside the existing IGERS brand.
- Keeps the current HTML sections and existing site architecture intact.
- Keeps live clock values updating every second.
- Independently refreshes Dhaka weather/environment data from Open-Meteo.
- Independently refreshes Asia earthquake data from the USGS past-hour GeoJSON feed.
- Independently refreshes Dhaka-region ADS-B aircraft state data from Airplanes.live.
- Uses request timeouts and isolated failures, so one provider outage does not stop the rest of the page.
- Uses only scoped visual CSS injected by the script. It does not add global `section`, `button`, `a`, `header`, `.card`, `.panel`, or `.live` rules.
- Uses no external image file for the flag. The flag is embedded as an SVG data URI, eliminating broken relative paths.

## Install

Upload `igers-live-enhancer.js` to the repository root.

Then, in `index.html`, add **one line only** immediately before `</body>`:

```html
<script src="igers-live-enhancer.js"></script>
```

Do **not** remove the current `style.css`, `styles.css`, `script.js`, or the existing inline script. This file is intended to sit on top of the current application.

## Why this is safer

The current site already contains live-data logic for time, weather, environmental readings, earthquakes, and Airplanes.live aircraft data. This enhancer mirrors those providers with independent, timeout-protected refreshes while preserving the existing element IDs and section structure.

The flag layer is inserted only inside `#home.hero`, with `pointer-events:none`. It cannot become a click-blocking overlay.

## Static QA

Before delivery, this package was checked for:

- JavaScript syntax via Node.js
- balanced template literals/braces/parentheses at source level
- no forbidden broad selectors in the injected CSS string
- no external flag asset dependency
- no DOM rewrite of the navigation or unrelated sections
- only one file required to integrate

## Important live-data limitation

A browser cannot guarantee that an external public data provider is reachable at every moment. When a provider is unavailable, the corresponding panel shows a retry/offline state and the other systems continue operating.

## Current repository context verified

The current IGERS repository already contains `index.html`, `script.js`, `style.css`, `styles.css`, an existing Airplanes.live integration, Open-Meteo weather/environment calls, USGS earthquake polling, and a world/local time engine. The live site also exposes those sections.

This package does not claim to replace those existing systems. It is a safer final presentation + live-refresh layer.
