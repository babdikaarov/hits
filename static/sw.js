importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js`,
);

const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate, NetworkOnly } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/admin/") ||
    url.pathname.startsWith("/version.json"),
  new NetworkOnly(),
);

registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image" ||
    request.destination === "document",

  new StaleWhileRevalidate({
    cacheName: "image-cache",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 1 * 60 * 60,
      }),
    ],
  }),
);
