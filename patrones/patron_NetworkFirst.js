event.respondWith( function() {
    fetch(event.request)
    .then( fetchResponse => {
        caches.open('v1').then( cache => {
	           if(!fetchResponse.ok)
                           return cache.match(event.request)
                       else {
                           caches.put(event.request, fetchResponse.clone())
                           return fetchResponse;
                       }
                           
                   })			
    })
});
