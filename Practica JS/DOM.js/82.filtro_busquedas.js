const d = document;
 //Explicacion: Con esta funcion esperamos a que se suelte la tecla del click como estandar para el evento, una vez que se produce, preguntamos si el selector coincide con el input ya seleccionado como parametro, si es asi lo importante ahora es el valor que se encuentra dentro de ese input que nos va a servir para comparar con los textos de las figures.
export default function searchFilters(input, selector){
     d.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            // console.log(e.key);
            // console.log(e.target.value);
            if(e.key === "Escape")e.target.value = "";
            
            d.querySelectorAll(selector).forEach((el) =>
              el.textContent.toLowerCase().includes(e.target.value.toLowerCase())? 
              el.classList.remove("filter"): 
              el.classList.add("filter")
            );
        }
     });
}