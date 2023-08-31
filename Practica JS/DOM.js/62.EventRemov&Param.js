function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

const eventoSemantico = document.getElementById("evento-semantico"), eventoMultiple =  document.getElementById("evento-multiple"), eventoRemover = document.getElementById("evento-remover");
eventoSemantico.onclick = holaMundo;
eventoSemantico.onclick = function (e){
    alert("Hola Mundo, manejador de eventos semantico")
    console.log(e); 
}
eventoMultiple.addEventListener("click", holaMundo);
eventoMultiple.addEventListener("click", (e)=>{
   alert("Hola mundo manejador de eventos multiples");
   console.log(e);
   console.log(e.type);
   console.log(e.target);
});
//REMOVER EVENTOS Y PASAR PARAMETROS EN EVENTOS

//Agregar parametros en eventos
function Saludar(persona = "Desconocido"){
    
    alert(`Hola ${persona}`)
}
// eventoMultiple.addEventListener("click",Saludar)
//El problema con la funcion saludar y el evento multiple es que los parametros que pide la funcion siempre va a ser (event) y no va a tomar el valor de persona. Porque asi estan configuradas las funciones, es decir, la funcion tomaria un valor como este Saludar(event); y no Saludar(persona).


//Solucion a este Problema es el siguiente: Crear una funcion flecha que ejecute la funcion.
eventoMultiple.addEventListener("click",()=>{
    Saludar();
    Saludar("Pablo");
})

//Remover eventos:
//Con una funcion anonima o Arrow Function no se puede.
// eventoRemover.addEventListener("dblclick", (e) => {
//    alert(`Removiendo el evento de tipo: ${e.type}`);
//    console.log(e)
//    eventoRemover.removeEventListener("dblclick")
// });

//Por eso debemos generar una funcion para darle al evento.
const RemoverDobleClick = (e)=>{
    alert(`Removiendo el evento de tipo: ${e.type}`);
    console.log(e);
    eventoRemover.removeEventListener("dblclick", RemoverDobleClick);
    //Agregamos disabled que hace que este desabilitado el boton;
    eventoRemover.disabled = true;
};
eventoRemover.addEventListener("dblclick", RemoverDobleClick);

//Una vez que sucede todo el ciclo de la funcion, removeEventListener Elimina la funcion de addEventListener y ya no se puede volver a usar a menos que se recargue la pagina.



