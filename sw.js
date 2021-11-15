const CACHE_ELEMENTS = [
    "./",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    "./styles.css",
    "./components/Contador.js",
    "./register.js"
]

const CACHE_NAME = "v1_cache_contador_react"

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
                self.skipWaiting()
            }).catch(console.log)
        })
    )
})


self.addEventListener("activate", (e) => {
    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    return (
                        cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
                    )
                })
            )
        })
    )
})


self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(res =>
                res ? res : fetch(e.request))
    )
})