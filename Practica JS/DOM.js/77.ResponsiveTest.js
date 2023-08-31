const d = document;


export default function ResponsiveTester(form){
   const $form = d.getElementById(form);
   let tester;

   d.addEventListener("submit",(e)=>{
      if(e.target === $form){
         e.preventDefault();
         //Nota: Con las etiquetas de html, se puede seleccionar a sus hijos a traves su atributo name, es decir, que si ponemos $form.valordelAtributoname podemos seleccionar la etiqueta directamente.
         tester = window.open(
            $form.direccion.value, 
            "tester", 
            `innerWidth=${$form.ancho.value}`,
            `innerHeight=${$form.alto.value}`
        );
      }
   });
   d.addEventListener("click", (e)=>{
    if(e.target == ($form.cerrar)){
          tester.close();
          
    }
   })
}