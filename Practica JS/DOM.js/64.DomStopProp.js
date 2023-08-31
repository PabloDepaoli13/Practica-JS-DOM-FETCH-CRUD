
const $divsEventos = document.querySelectorAll(".eventos-flujos div"), $link = document.querySelector(".eventos-flujos a");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target}`);
    e.stopPropagation();//Este stop propagation lo que hace es eliminar la propagacion de los hijos o padres.

}

$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$link.addEventListener("click",(e) => {
    alert("Hola soy tu amigo pablo");
    e.preventDefault();//Lo que hace prevent default es cancelar la accion que tiene por defecto, por ejemplo, la accion de un link es redirigirte al href, si nosotros quitamos eso, podemos 
    e.stopPropagation();
});

