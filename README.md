# IGERS-BD-01 Live Air Traffic Professional Update v2

This update preserves the existing IGERS-BD-01 website sections and improves the Air Traffic panel.

## Improvements
- Uses the maintained Airplanes.live live map as the primary aircraft map.
- Centers the live map on Bangladesh and provides a clean, stable full-panel map view.
- Keeps aircraft count, positioned-aircraft count, data age, aircraft list and selected-aircraft details.
- Refreshes the lightweight aircraft data feed every 20 seconds while the page is visible.
- Retries in the background every 60 seconds and refreshes immediately when the tab becomes visible again.
- Keeps the previous earthquake, weather, environment, time and IGERS sections intact.
- No fabricated aircraft positions are added when live data is unavailable.

## Deployment
Upload the contents of `igers_site_build/` to GitHub Pages or another HTTPS static host.

## Data notes
The visual live map is provided by Airplanes.live, a community ADS-B/MLAT aggregation service. Coverage depends on receiver availability and aircraft visibility. The site's own summary/list feed depends on the public API being reachable from the visitor's browser/network.

Official source: https://airplanes.live/
