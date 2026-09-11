# IGERS-BD-01 Earthquake Alert Update

Professional earthquake-monitoring update for the existing IGERS-BD-01 web app.

## Included
- Existing IGERS website preserved.
- Live USGS past-hour GeoJSON earthquake feed.
- Asia-region presentation filter.
- 30-second polling while the page is visible.
- 90-second polling while the page is backgrounded, with an immediate refresh when the page becomes visible again.
- 12-second feed timeout so a stalled request does not hang the interface.
- Live feed state and last successful sync timestamp.
- Browser notification permission flow.
- M2.5+, M4.5+, M5.0+ and Significant alert thresholds.
- Duplicate earthquake suppression with localStorage.
- Initial-feed priming so old events do not generate a burst of alerts.
- Test notification button.
- Service worker notification click handling.
- PWA manifest and icon.

## Important delivery behavior
USGS real-time feeds are updated on a regular cadence, so this interface is designed for prompt monitoring rather than second-level seismic warning. Browser foreground/background execution can also be throttled by the operating system or browser. The included service worker handles notifications and clicks, but it does not pretend to be a background earthquake server.

For true push delivery while the browser is completely closed, deploy a server-side Web Push watcher that polls the USGS feed, stores Web Push subscriptions and sends VAPID-authenticated pushes when a new qualifying event appears. A static GitHub Pages deployment alone cannot provide that always-on server process.

## Deployment
1. Upload/extract the contents of this folder to the same location as the existing website.
2. Serve over HTTPS in production. `localhost` is suitable for development.
3. Open the site and press **Enable alerts**.
4. Choose the magnitude threshold.
5. Press **Test** to verify the browser notification channel.
6. Keep browser/device notification permission enabled.

## Source
Earthquake event data is pulled directly from the USGS real-time GeoJSON feed in the browser.
