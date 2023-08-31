const $figure = document.createElement("figure"), $img = document.createElement("img"), $figcaption = document.createElement("figcaption"), $figcaptionText =  document.createTextNode("Animals"), $cards =  document.querySelector(".cards"), $figure2 = document.createElement("figure"), $figure3 = document.createElement("figure");
$img.setAttribute("src","http://placeimg.com/200/200/amimals");
//Agregar un hijo dentro de la clase cards;
$img.setAttribute("alt", "Animals");
$figcaption.appendChild($figcaptionText);
 $figure.classList.add("card");

$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;
$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/rock" alt="Rock">
  <figcaption>Rock</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);
$figure3.classList.add("card");
$cards.appendChild($figure3);


const estaciones = ["Primavera","Verano","Otoño","Invierno"], $ul = document.createElement("ul");


document.write("<h3>Estaciones del año</h3>")

document.body.appendChild($ul);


//Agregar elementos dentro de un elemento creado, y crear elementos dentro de un bucle forEach.
estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})


//Crear un elemento HTML y un arreglo continente, vamos a atraves de un innerHTML vamos a rellenar el contenido 
const Continentes = ["Africa","America","Asia","Europa", "Oceania"], $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</3>");
document.body.appendChild($ul2);
//Es muy importante que inicialicemos el contenido de nuestra etiqueta ul vacio
$ul2.innerHTML = "";

Continentes.forEach(el => {$ul2.innerHTML += `<li> ${el} </li>`});

const obj = {
    hola: "hola"
};

//Fragmentos: Sirven para no sobrecargar la pagina de operaciones con el DOM, basicamente con la creacion de fragmentos, podemos quitarle operaciones al DOM y que se guarden en un pequeño fragmento para mejorar el rendimiento.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
], $ul3 = document.createElement("ul"),$fragment = document.createDocumentFragment();//Creacion de Fragmento

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);//Manera mas optima para pedir menos cantidad de recursos al usuario que esta usando nuestra aplicacion.