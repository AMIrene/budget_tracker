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


// const STATIC_CACHE = "static-cache-v1";
// const RUNTIME_CACHE = "runtime-cache";

//install service worker

self.addEventListener('install', evt => {
    console.log('service worker installed');

});

//service worker activated

self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});