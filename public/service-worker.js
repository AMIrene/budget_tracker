const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/db.js",
    "/index.js",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/styles.css",

];


const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

//install service worker

self.addEventListener('install', event => {
    // console.log('service worker installed');
    event.waitUntil(
        caches
            .open(STATIC_CACHE)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

//service worker activated, takes care of cleaning up old caches

self.addEventListener('activate', event => {
    // console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', event => {
    // console.log('fetch event', evt);
});