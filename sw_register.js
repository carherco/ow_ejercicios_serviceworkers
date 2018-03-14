if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then('Service Worker registrado')
  .catch(console.error);
} else {
  console.log('Tu navegador no soporta Service Workers');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: './'})
  .then(function(registration) {
    console.log('Service worker registrado: ', registration);
  }).catch(function(error) {
    console.log('Registro de Servicer Worker fallido:', error);
  });
} else {
  console.log('Tu navegador no soporta Service Workers');
}