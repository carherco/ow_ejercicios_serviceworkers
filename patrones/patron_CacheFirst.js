event.respondWith( function(){
    caches.match(event.request)
    .then( cacheResponse => {
        if(cacheResponse) {
            return cacheResponse;
        } else {
            return fetch(event.request).then( fetchResponse => {
                            return caches.open('v1').then( cache => {
                                            caches.put(event.request, fetchResponse.clone()).then( () => {
                                                           return fetchResponse;
                                                       })
                                        })
                        })
			
    });
});
