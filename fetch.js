
fetch('url')

// Comprobar éxito de la respuesta
.then(response => {
  if (response.ok){
    return response;
  }

  throw new Error('Ha ocurrido un error');
})

// Transformar respuesta de string a json
.then(response => response.json())

// Sacar por consola la respuesta y devolverla por si alguien más se quiere encadenar al .then()
.then(response => console.dir(response) || response)

// Gestionar errores en cualquiera de los .then()
.catch(console.error);



// -------Leer la respuesta de un get--------

fetch('https://httpbin.org/html')

.then( response => {
  if (response.ok){
    return response;
  }

  throw new Error('Ha ocurrido un error');
})

.then(response => response.json())
.then(response => console.dir(response) || response)
.catch(console.error);

// --------Leer cabeceras---------

fetch('https://httpbin.org/html')

.then( response => {
  if (response.ok){
    return response;
  }

  throw new Error('Ha ocurrido un error');
})

.then(response => {
  for(var h of request.headers.entries()){
    console.log(h[0],h[1]);
  }
  return response;
})

.then(response => console.dir(response) || response)
.catch(console.error);

// Solamente aparece una cabecera!!!!
// Si hacemos la petición con el navegador, vemos que hay más cabeceras

//console.info(response.type); => "cors"


// ---------Leer la respuesta de un POST--------
var data = new FormData();
data.append('var1', 'asdfasd');
data.append('var2', 'asdfasdasdf');

fetch('https://httpbin.org/html', {
  method: "POST",
  body: data
})

.then( response => {
  if (response.ok){
    return response;
  }

  throw new Error('Ha ocurrido un error');
})

.then(response => response.json())
.then(response => console.log(response) || response)
.catch(console.error);

// ---------Clonar la respuesta --------

var data = new FormData();
data.append('var1', 'asdfasd');
data.append('var2', 'asdfasdasdf');

var promesa = fetch('https://httpbin.org/html', {
  method: "POST",
  body: data
})

.then( response => {
  if (response.ok){
    return response;
  }

  throw new Error('Ha ocurrido un error');
});

promesa
.then(response => response.clone())
.then(response => response.json())
.then(response => console.log(response.form) || response);

promesa
.then(response => response.clone())
.then(response => response.blob())
.then(response => console.log(response.form) || response);

