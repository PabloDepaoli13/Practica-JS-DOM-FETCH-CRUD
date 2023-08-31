//ESTO ES IMPORTANTE PORQUE: Librerias como react, angular, manejan los eventos de esta manera y es importante saberlo. Esto optimiza mucho a nivel de recursos de memoria. Esta enseñanza consta de aprender a formar eventos a traves de un SOLO listener y no muchos individuales, este solo listener lo que hace es ver cual es el elemento que quiere hacer la funcion.

function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target}`);
    e.stopPropagation();
}

document.addEventListener("click", (e)=>{
    console.log("click en", e.target);

    //Matches busca un selector valido
    if(e.target.matches(".eventos-flujos a")){
        alert("Hola soy tu amigo pablo");
        e.preventDefault();
    }
    if(e.target.matches(".eventos-flujos div")){
        flujoEventos(e);
    }
})

//Gracias a esta forma, tan solo con un solo listener y multiples condicionales, podemos agregar las funciones a nuestra pagina. Inlcuso no hay que definir las etiquetas de HTML en constantes, porque con matches podemos seleccionar los elementos o etiquetas a los cuales nos referimos.

