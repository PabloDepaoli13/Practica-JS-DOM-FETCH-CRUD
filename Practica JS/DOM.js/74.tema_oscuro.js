const d = document, ls = localStorage;


export default function darkTheme(btn, classDark, stage){
    const $themeBtn = document.querySelector(btn), $selectors = d.querySelectorAll("[data-dark]");
    //NOTA: esta forma de seleccionar a todas las etiquetas que quiera modificar que contengan el atributo que se llama en este caso dark-mode y se pone entre [] obviamente con el selector All;
    let moon = "🌑", sun = "☀️";
    const ligthMode = () => {$selectors.forEach(el => {
        el.classList.remove(classDark);
        $themeBtn.textContent = moon;
        stage.classList.remove("white");
        ls.setItem("theme","light");
    })}
    const darkMode = () => {$selectors.forEach(el => {
        el.classList.add(classDark)
        $themeBtn.textContent = sun;
        stage.classList.add("white");
        ls.setItem("theme","dark");
      })};


    
    d.addEventListener("click", (e) =>{
        if (e.target.matches(btn)) {
            if($themeBtn.textContent === moon){
               darkMode(); 
            }else{
                ligthMode();    
            }
        }
    })
    d.addEventListener("DOMContentLoaded", e => {
        //Metodo para obtener una variable de tipo local storage es .getItem y lo unico que se le pasa es la variable.
        //Metodo para establecer una variable de tipo local storage es setItem("nombredelavariable","valor")
        if(ls.getItem("theme") === null)ls.setItem("theme","light");
        if(ls.getItem("theme") === "light")ligthMode();
        if(ls.getItem("theme") === "dark")darkMode();
        
    })
}