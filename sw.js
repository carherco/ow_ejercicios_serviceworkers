var version = 4;

// Instalación
self.addEventListener('install', function(event) {
  console.log('SW '+version+' instalado a las ', new Date().toLocaleTimeString());
});

// Activación
self.addEventListener('activate', function(event) {
  console.log('SW '+version+' activado a las ', new Date().toLocaleTimeString());
});

// Fetch
self.addEventListener('fetch', function(event) {
  if(!navigator.onLine) {
    event.respondWith(new Response('<h1>Estás sin conexión</h1>', {headers: { 'Content-Type': 'text/html'}}));
  } else {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
  }
  
});

