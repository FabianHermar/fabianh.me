const CACHE_NAME = 'cache-v1'
const STATIC_ASSETS = [
	'/',
	'/index.html',
	'/favicon/favicon.ico',
	'/FabianHerrera_CV.pdf',
	'/me.avif',
	'/portfolio_mockup.webp',
	'/src/globals.css',
	'/src/styles/Bento.css',
	'/projects/DuneUI.webp',
	'/projects/UTNA.webp',
	'/fonts/Gilroy-Bold.woff2',
	'/fonts/Gilroy-SemiBold.woff2',
	'/fonts/Gilroy-Regular.woff2',
]

self.addEventListener('install', (event) => {
	console.log('Service Worker installing.')
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Caching static assets')
			return cache.addAll(STATIC_ASSETS).catch((error) => {
				console.error('Failed to cache:', error)
			})
		})
	)
})

self.addEventListener('activate', (event) => {
	console.log('Service Worker activating.')
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						console.log('Deleting old cache:', cacheName)
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
})

self.addEventListener('fetch', (event) => {
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse
				}
				return caches.open(CACHE_NAME).then((cache) => {
					return fetch(event.request).then((response) => {
						// Solo almacenar en caché las solicitudes GET
						if (event.request.method === 'GET') {
							cache.put(event.request, response.clone())
						}
						return response
					})
				})
			})
		)
	}
})
