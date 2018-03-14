event.respondWith(
	caches.match(event.request)
);
