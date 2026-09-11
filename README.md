# IGERS-BD-01 Professional Live Monitoring Update

This package updates the existing IGERS-BD-01 website without replacing its existing concept, time, weather, environmental-intelligence or earthquake-monitoring sections.

## Added in this update
- Live air-traffic section inside the existing Environmental / monitoring experience.
- Leaflet interactive map with OpenStreetMap basemap.
- ADS-B-derived aircraft positions through Airplanes.live when the provider is reachable.
- Bangladesh-centered regional view with a 250 nautical-mile monitoring radius.
- Aircraft count, position-bearing target count and newest-data age.
- Aircraft markers with heading/track rotation.
- Clickable aircraft markers and a live aircraft list.
- Selected-aircraft panel with callsign/hex, registration when available, type, altitude, speed, track and position.
- 20-second foreground refresh and 60-second background refresh, with immediate refresh when the page becomes visible.
- Live connection state and last-sync indicator.
- No fabricated aircraft positions: if the provider is unavailable, the panel reports the feed as offline.

## Existing features preserved
- IGERS-BD-01 conceptual engineering sections.
- Bangladesh deployment concepts.
- Live Bangladesh/local/world time.
- Open-Meteo weather panel.
- Environmental intelligence dashboard.
- USGS Asia-region earthquake feed.
- Browser earthquake alerts, thresholds, test notification and service-worker notification handling.

## Data / deployment note
The air-traffic layer is an ADS-B-derived live-data integration. Coverage depends on receiver/network visibility, so it should not be presented as a complete air-traffic-control picture. Airplanes.live provides live tracking and API documentation on its official site.

For operational, commercial or mission-critical use, review the provider's current terms, API policy and licensing requirements before deployment.

The map uses Leaflet and OpenStreetMap tiles. Internet access is required for live map tiles and the aircraft data feed. The rest of the website remains usable if the aircraft provider is unavailable.

## Deployment
1. Extract the package and upload the contents of `igers_site_build` to the same website location.
2. Keep HTTPS enabled in production.
3. Open the site and scroll to **Live air traffic**.
4. The map and aircraft data will populate automatically when the external feeds are reachable.

## Important realism note
The browser cannot guarantee uninterrupted live coverage. Provider outages, network failure, browser throttling, regional receiver coverage and API policy can affect updates. This implementation intentionally shows connection and last-sync state instead of inventing data.
