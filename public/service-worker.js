//install service worker

self.addEventListener('install', evt => {
    console.log('service worker installed');

});

//service worker activated

self.addEventListener('activate', evt => {
    console.log('service worker activated');
})

