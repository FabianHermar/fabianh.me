const CACHE_NAME = 'image-cache-v1'

const IMAGE_REGEX = /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/

self.addEventListener('install', (event) => {
	// console.log('[SW] Instalado')
	event.waitUntil(self.skipWaiting()) // Salta la espera
})

self.addEventListener('activate', (event) => {
	// console.log('[SW] Activado')
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						console.log(`[SW] Eliminando caché antiguo: ${cacheName}`)
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
	self.clients.claim()
})

self.addEventListener('fetch', (event) => {
	const { request } = event

	if (request.url.match(IMAGE_REGEX)) {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return cache.match(request).then((cachedResponse) => {
					if (cachedResponse) {
						// console.log(`[SW] Sirviendo desde caché: ${request.url}`)
						return cachedResponse // Devuelve la imagen desde el caché
					}

					// console.log(`[SW] Descargando y almacenando: ${request.url}`)
					return fetch(request).then((networkResponse) => {
						cache.put(request, networkResponse.clone())
						return networkResponse
					})
				})
			})
		)
	}
})
