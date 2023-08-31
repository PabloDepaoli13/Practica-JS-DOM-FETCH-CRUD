//Metodos:
// alert();//envia mensaje
// confirm();//devuelve un bool
// prompt();//devuelve un texto o number

const $botonAbrir = document.getElementById("abrir-ventana"), $botonCerrar = document.getElementById("cerrar-ventana"), $botonImprimir = document.getElementById("imprimir-ventana");

//Creamos una variable vacia para poder almacenar el metodo open y cuando usemos el .close no nos cierre nuestra propia ventana. NOTA: Este metodo no es estandar que quiere decir que en ciertos navegadores no es compatible.
let ventana;

$botonAbrir.addEventListener("click", (e)=> {
    //Se puede abrir pestañas a parte
    ventana = window.open("https://www.google.com/");
});
$botonCerrar.addEventListener("click", (e)=> {
    //window.close();
    ventana.close();
});
$botonImprimir.addEventListener("click", (e)=> {
    //Abre la ventana para imprimir la pagina.
    window.print();
});