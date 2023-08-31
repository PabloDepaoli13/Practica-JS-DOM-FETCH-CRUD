//Data Atributes
//Interactuar con los atributos
//Maneras:

//**Notacion del punto**//
console.log(document.documentElement.lang); //Accedemos a html, atributo lang.
console.log(document.documentElement.getAttribute("lang"));//Lo mismo pero no siempre. 
console.log(document.querySelector(".link-dom").href);

document.documentElement.lang = "en"; //Cambiar el atributo desde el document element.
document.documentElement.setAttribute("lang", "es-MX")//Lo mismo que arriba pero de la forma SET o GET.

const $linkDOM = document.querySelector(".link-dom");//Guardamos el elemento del html. 
//Guardo en constantes porque no importa si le hago modificaciones, ese elemento no va a cambiar. 
//Simbolo $: se utiliza para identificar las variables que contienen elementos del DOM.

$linkDOM.setAttribute("target", "_blank"); //Le podemos agregar atributos que no tiene.
$linkDOM.setAttribute("href", "http://youtube.com/jonmircha");//Cambiarle los atributos.
$linkDOM.setAttribute("rel", "noopener");

//Validar si un elemento existe en un atributo
console.log($linkDOM.hasAttribute("rel"));//true porque ya se lo agregamos.

$linkDOM.removeAttribute("rel");//Eliminamos un atributo.

//*********DATA-ATRIBUTTES*********//

console.log($linkDOM.getAttribute("data-desciption"));

console.log($linkDOM.dataset);//Te muestra un mapa del tipo de objeto con sus atributos.

//Como modificar el dataAtributte
console.log($linkDOM.dataset.desciption);
//Establecer nuevos valores
$linkDOM.setAttribute("data-desciption", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.desciption);

$linkDOM.dataset.desciption = "Programador en proceso"
console.log($linkDOM.dataset.desciption);