var version = 'v2';

// Instalación
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version)
    .then(function(cache) {
      return cache.addAll([
        'sw.html',
        'sw.js',
        'sw_register.js'
      ]);
    })
  );
});

// Activación
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
    .then(function(keys) {
      return Promise.all(keys.filter(function(key){
        return key !==version;
      }).map(function (key) {
        return caches.delete(key);
      }))
    })
  );
});

// Activación
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if(response) {
        return response;
      }
      if(!navigator.onLine) {
        return caches.match(new Request('paginaoffline.html'));
      } 
      return fetch(event.request);
    })
  );
 
  
  
});

