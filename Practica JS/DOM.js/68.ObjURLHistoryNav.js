//Objetos: Diferentes partes que forman el objeto location

console.log("*********** Objeto URL (location) **************");
//Location: Tiene varias propiedades y metodos:
console.log(location);
//.origin: Te da la ruta y puerto de la cual se origina la pagina.
console.log(location.origin);
//Te muestra el protocolo
console.log(location.protocol);
//.host: Muestra el host 127.0.0.1, incluyendo el numero de puerto en este caso.
console.log(location.host);
//.hostname: Muestra el host solo sin el puerto
console.log(location.hostname);
//.port: Muestra el puerto
console.log(location.port);
//.href Muestra todo el link del href;
console.log(location.href);
//.hash: Muestra el hashtag de la URL, detecta el valor de lo que esta despues del hashtag;
console.log(location.hash);
//.pathname: Muestra el archivo al cual estamos consultando
console.log(location.pathname);
//.reaload(): Metodo que permite reiniciar la pagina pero CUIDADO SE HACE BUCLE.
// location.reload();
console.log("*********** Objeto Historial (history) **************");
//Esta propiedad history, lo importante es su atributo .lenght que es la cantidad de paginas hacia las que puedo ir hacia adelante o hacia atras.
console.log(history);
console.log(history.length);

//Dentro de este podemos utilizar distintos metodos para devolvernos a las paginas anteriores o posteriores ejemplo
//history.back(number), history.forward(number), history.go(num+ or  num-);

console.log("*********** Objeto Navegador (navigator) **************");
console.log(navigator);
//Conecction: da informacion de la coneccion del usuario ejemplo: velocidad de internet
console.log(navigator.connection)
//geolocation: Brinda la localizacion en el mundo del usuario pero es privada 
console.log(navigator.geolocation)
//.mediaDevices: Dispositivos que el usuario tiene
console.log(navigator.mediaDevices)
//mimeTypes: Tipos de formatos que soportan los navegadores web
console.log(navigator.mimeTypes)
//onLine: Es de si esta en linea o esta sin conexion
console.log(navigator.onLine)
//serviceWorker: Elemento API que nos permite transformar un simple sitio web en un sitio instalable, ejmplo Youtube, como si fuera una app de escritorio.
console.log(navigator.serviceWorker)
//Storage: Almacenamiento
console.log(navigator.storage)
//usb: Detecta dispositivos usb cuando se conectan y desconectan
console.log(navigator.usb)
//userAgent: Nos brinda informacion de sist operativo, tipo de navegador etc.
console.log(navigator.userAgent)


