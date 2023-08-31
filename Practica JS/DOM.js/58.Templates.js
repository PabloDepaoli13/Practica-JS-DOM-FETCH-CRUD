//Template: Es como un modelo a seguir en el cual uno estructura el contenido HTML que uno quiera mediante JavaScript este se convierta en dinamico y es otra forma tambien de poder interactuar con el DOM.

const $cards = document.querySelector(".cards"), $template =  document.getElementById("template-card").content, $fragment = document.createDocumentFragment(), 
cardContent = [
   {
    title: "Tecnologia",
    img:"https://placeimg.com/200/200/tech",
   },
   {
    title: "Animales",
    img:"https://placeimg.com/200/200/animals",
   },
   {
    title: "Arquitectura",
    img:"https://placeimg.com/200/200/arch",
   },
   {
    title: "Gente",
    img:"https://placeimg.com/200/200/people",
   },
   {
    title: "Naturaleza",
    img:"https://placeimg.com/200/200/nature",
   }, 
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //Clon: Se crea un clon para poder multiplicar el template, ya que tenemos 5 imagenes pero solo 1 template entonces, tenemos que clonar el template para que se generen las 5 imagines con sus titulos en el template. Entonces generamos un $clone con su document import Node, donde se pasa el template y un true para que copie toda la estructura, si le ponemos false, solo va a clonar las etiquetas de cierre y apertura template, en cambio con true copia todo lo que hay dentro tambien y lo clona.
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

});

$cards.appendChild($fragment);