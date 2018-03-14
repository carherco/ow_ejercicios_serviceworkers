// Registro
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/scripts/sw.js')
  .catch(err => console.error('Ha ocurrido un error',err))
}

// Cambiar el scope por defecto
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/scripts/sw.js',{scope: '/otrodir'})
  .catch(err => console.error('Ha ocurrido un error',err))
}

//Observar la petición del SW
//header automático de la petición Service-Worker: script
//header manual de la respuesta Service-Worker-Allowed: /

// Otra forma de registro solamente en Chorme 54+
<link rel="serviceworker" href="/scripts/sw.js" scope="/brand" />

// Otra forma => header de la respuesta  Link: </scripts/sw.js>; rel="serviceworker"; socpe="/brand"




// Instalación
self.addEventListener('install', function(event) {
  event.waitUntil(
    // Debemos devolver una promesa para installar el SW
  );
});

// Activación
self.addEventListener('activate', function(event) {
  event.waitUntil(
    // Debemos devolver una promesa para activar el SW
  );
});

// Uso: responder con la request original
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
  );
});