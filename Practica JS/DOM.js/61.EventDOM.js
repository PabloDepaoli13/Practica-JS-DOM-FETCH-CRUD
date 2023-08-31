//Evento HTML:
//Funcion que se esta ejecutando en el evento HTML(No recomendable / fuera de uso). 
function holaMundo(){
    alert("Hola Mundo");
    console.log(event);//Manera de acceder al evento y verlo en la consola
}

//Evento Semantico:
const eventoSemantico = document.getElementById("evento-semantico"), eventoMultiple =  document.getElementById("evento-multiple");

//Cuando se define un evento como si fuera semantico simplemente se iguala. No se debe 
eventoSemantico.onclick = holaMundo;
eventoSemantico.onclick = function (e){
    alert("Hola Mundo, manejador de eventos semantico")
    console.log(e); // La (e) representa el evento es lo mismo poner event o e;
}
//Estas 2 formas de establecer eventos tienen un inconveniente, estos eventos tienen una limitante que solamente pueden ejecutar una sola funcion, es decir, si le queremos agregar mas funciones a una variable, no se podra. Por cada evento solamente le puedes agregar una funcion no mas.

//Manejador de Eventos Multiples:
//Ventajas: Se puede ejecutar mas funciones a un solo elemento con ya funciones.
eventoMultiple.addEventListener("click", holaMundo);//SOLO SE NOMBRA LA FUNCION. Los parentesis significan ejecucion INMEDIATA por eso apenas inicie la pagina se va a ejecutar sin llegar a hacer "click".
eventoMultiple.addEventListener("click", (e)=>{
   alert("Hola mundo manejador de eventos multiples");
   console.log(e);
   console.log(e.type);
   console.log(e.target);

});