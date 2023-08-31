//BOM(browser object model): Serie de metodos o objetos que cuelgan directamente de Windows.

//resize: Cada vez que cambiemos el tamaño del navegador, se va a activar el evento.
window.addEventListener("resize", e =>{
     console.clear();
     console.log("******Evento Resize*******");
     // Inner: Viewport del navegador.
     //Hace referencia al tamaño del ancho del viewport de la ventana
     console.log(window.innerWidth);
     //Hace referencia al tamaño del altura del viewport de la ventana
     console.log(window.innerHeight);

     // Outer: Hace referencia al tamaño que tiene la ventana del navegador con las pestañas y todo.
     console.log(window.outerWidth);
     console.log(window.outerHeight);

    

     console.log(e);
});

window.addEventListener("scroll", (el)=>{
     console.log("*****EVENTO SCROLL******");
     console.clear();
     //Dan el valor de cuanto se aleja la barra de desplazamiento de su punto de partida.
     console.log(window.scrollX);
     console.log(window.scrollY);
     console.log(el);
});

window.addEventListener("load", (e)=>{
     console.log("*****Evento Load*******");
     //Da el valor de cuanto esta alejada la pantalla del maximo de pantalla disponible.
     console.log(window.screenX);
     console.log(window.screenY);
     console.log(e);
});

//TECNICA DE DELEGACION DE EVENTOS
document.addEventListener("DOMContentLoaded", e => {
     console.log("*****Evento DomContentLoaded*******");
     console.log(window.screenX);
     console.log(window.screenY);
     console.log(e);
});
//Una clara ventaja de la delegacion de eventos a traves del document, es su  velocidad, realmente es mucho mas veloz, incluso que el window. Es mucho mas conveniente utilizar DOMContentLoad;


