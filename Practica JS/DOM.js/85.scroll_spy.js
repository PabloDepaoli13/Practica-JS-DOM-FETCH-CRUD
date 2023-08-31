const d = document;

export default function scrollSpy(){
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
    //    console.log("Entries:",entries);
       entries.forEach(entry => {
        // console.log("entry", entry)
        if(entry.isIntersecting){
            const id = entry.target.getAttribute("id");
          d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
        }else{
            const id = entry.target.getAttribute("id");
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        }
    })
    };

   //Entries: son todos los objetos que tienen asignados el observador



    const observer = new IntersectionObserver(cb,{
        //root

        // rootMargin: "-250px",//Nota se pone -250 px porque es un observador por lo tanto debemos bajar la observacion osea el angulo en el que queremos que observe, para que detecte menos zonas y pueda ser mas especifico en la zona en la que estoy, en vez de seleccionarme 2 juntas, solo va a ver 1 sola porque tamaño de observacion es menor.

        threshold: [0.5,0.75] //Esta propiedad dice que para que el contenido se vea como true, tiene que estar un 50% visible hasta el 75% de su anchura, de lo contrario no va a dar true la propiedad. SE CONSIDERA MEJOR PORQUE: esta propiedad trabaja con porcentajes, la otra propiedad rootMargin funciona dependiendo la pantalla, en caso de que la pantalla sea muy grande volveriamos a tener el problema de que detecta 2 componentes a la misma vez
    })
    

    $section.forEach(el => observer.observe(el));
}