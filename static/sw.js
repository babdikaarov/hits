importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js",
);

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox - expiration;

registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image",
  new CacheFirst({
    cacheName: "static-assets",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache items for a week
      }),
    ],
  }),
);

self.addEventListener("install", (event) => {
  const urlsToCache = [
    "/",
    "/index.html",
    "/sevice/index.html",
    "/404.html",
    "/css/style.css",
    "/js/main.js",
    "/media/defaults/icons/favicon/favicon-196x196.png",
  ];

  event.waitUntil(
    caches.open("precache-v1").then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});