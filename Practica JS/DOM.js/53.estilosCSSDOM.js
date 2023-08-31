const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
//Diferencias..
console.log($linkDOM.getAttribute("style"));
//Hacen lo mismo pero dan menos informacion
$linkDOM.style.backgroundColor = "black"; //Cambiar el valor
$linkDOM.style.backgroundColor = "yellow";

//Acceder a ellos
console.log($linkDOM.style.backgroundColor )
console.log(window.getComputedStyle($linkDOM))//En esta forma aparecen los estilos pre-determinados que ya vienen en el navegador.
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));//Acceder a una propiedad especifica que quiero modificar.


//**ESTABLECER VALORES**//
$linkDOM.style.setProperty("text-decoration", "none");//Le quitamos la decoracion a la palabra DOM.
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginTop = "10px"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"

//**Variables CSS-Custom Properties CSS **//
const $html = document.documentElement, $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#000");

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor)
