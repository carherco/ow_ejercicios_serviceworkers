
// Crear la request
var request = new XMLHttpRequest();

// Programar la reacción cuando se complete:
// - Comprobar que request.readyState = 4 => 'request done'
// - Comprobar que request.status = 2XX
request.onreadystatechange = function() {
  if (request.readyState === 4) { 
    if (request.status >= 200 && request.status <= 299) {
      console.dir(JSON.parse(request.responseText));
    } else {
      console.error('Ha ocurrido un error');
    }
  }
}

// Inicializar la request con el método .open()
request.open('GET', 'http://algundominio.es/nombre', true);

// Enviar la petición
request.send();

