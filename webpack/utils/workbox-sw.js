workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
    /\.(js)$/,
    new workbox.strategies.NetworkFirst({
        cacheName: "js-cache",
    }),
);

workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "css-cache",
    }),
);

workbox.routing.registerRoute(
    /\/manifest\.json$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "manifest-cache",
    }),
);

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "image-cache",
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
                maxEntries: 20,
            }),
        ],
    }),
);

// matched urls
workbox.routing.registerRoute(
    /\//,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "page-cache",
        plugins: [
            new workbox.cacheableResponse.Plugin({
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                },
                statuses: [200],
            }),
        ],
    }),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.routing.registerNavigationRoute("/");
