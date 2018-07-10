"use strict";

let version = 'VERSION';
workbox.setConfig({
  debug: SW_DEBUG
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.core.setCacheNameDetails({
  prefix: 'hn-pwa',
  suffix: `v2.${version}`,
  precache: 'precache',
  runtime: 'runtime'
}); // Application

workbox.routing.registerRoute(/^\/images\/.*/, workbox.strategies.cacheFirst());
workbox.routing.registerRoute('/manifest.json', workbox.strategies.staleWhileRevalidate());
workbox.routing.registerRoute(/\/api\/.*/, workbox.strategies.networkFirst({
  cacheName: `hn-pwa-api-v2.${version}`
})); // Precaching

workbox.precaching.precache(['/']);
workbox.precaching.precacheAndRoute(self.__precacheManifest);