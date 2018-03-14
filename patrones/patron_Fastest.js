event.respondWith( function() {
    var promises = [ caches.match(event.request), fetch(event.request) ];

    return new Promise( (resolve, reject) => {
        promises.map( p => Promise.resolve(promise));
        promises.forEach( p => p.then(resolve));
        promises.reduce( (a,b) => a.catch( () => b))
        .catch( () => reject(new Error('Ambas promesas han fallado')))

    })
});
