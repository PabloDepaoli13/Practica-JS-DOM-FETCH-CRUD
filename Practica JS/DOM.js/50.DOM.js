//DOM(Document object model): es una interfaz de programacion para documentos HTML y XML. Facilita una representacion estructurada del documento y define de que manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. (Es una interfaz de programacion que nos permite crear, cambiar, o remover elementos del documento).
console.log("Hola Mundo vamos a trabajar con DOM");
console.log("******ELEMENTOS DEL DOM******");
console.log(document);
console.log(document.head);//<head>
console.log(document.body);//<body>
console.log(document.documentElement);//<HTML>
console.log(document.doctype);//<!doctype html>
console.log(document.charset)
console.log(document.title);
console.log(document.links);//Links de la pagina
console.log(document.images)//imagenes 
console.log(document.styleSheets)
console.log(document.scripts)

setTimeout(() => {
    console.log(document.getSelection().toString)//Transforma en un string lo que seleccionaste en la pagina
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</2>")//Esto se escribe en la ultima parte del documento. Se escribre luego de la etiqueta <script>



