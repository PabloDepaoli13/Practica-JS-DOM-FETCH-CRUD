//Crear variable que captura las 3 divs que estan en los eventos flujo

const $divsEventos = document.querySelectorAll(".eventos-flujos div");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target}`);

}

$divsEventos.forEach(div => {
    //AddEventListener tiene 3 parametros y el utlimo es un boolean que sirve para cambiar el efecto burbuja.
    //Fase de burbuja false es para desde el mas interno ir al mas externo en la propagacion
    div.addEventListener("click", flujoEventos, false);
    //Fase de burbuja true es para ir del elemento mas externo al mas interno en la propagacion.
    div.addEventListener("click", flujoEventos, true);
});