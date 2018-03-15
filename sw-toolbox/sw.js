importScripts('../node_modules/sw-toolbox/sw-toolbox.js');

const myCache = {
  'static': 'static-v5',
  'dynamic': 'dynamic-v5'
}

// Instalación
self.addEventListener('install', function(event) {
  console.log('SW '+myCache.static+' instalado a las ', new Date().toLocaleTimeString());
});


toolbox.router.get('/miweb/*', toolbox.cacheFirst, {
  cache: {
    name: myCache.static,
    maxAgeSeconds: 60 * 60 * 24 * 365 //1 año
  }
});
// En IndexedDB se pueden ver los elementos cacheados con su tiempo de expiración


toolbox.router.get('/directorio2/*', toolbox.networkFirst, {
  cache: {
    name: myCache.dynamic,
    maxEntires: 50
  }
});
// Solamente guarda 5 elementos


toolbox.router.get('/directorio3/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 1,
  cache: {
    name: myCache.dynamic,
    maxEntires: 5
  }
});
// Solamente espera a la red durante 1 segundo

toolbox.router.get('/directorio4/*', function(request, values, options) {
  return toolbox.networkFirst(request, values, options)
  .catch(function (error) {
    return caches.match(new Request('contenido_offline.html'))
  });
},{
  networkTimeoutSeconds: 1,
  cache: {
    name: myCache.dynamic,
    maxEntires: 5
  }
});
// Función personalizada de respuesta: networkFirst + contenido offline si tampoco está en la caché


