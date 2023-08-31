//Metodos nuevos:

/*
Metodos .insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

  POSICIONES QUE ESTAS TIENEN:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)



*/

const $cards =  document.querySelector(".cards"), $newCard = document.createElement("figure");//Creamos un elemento

//Creamos una variable que va a contener contenido HTML
let $contentCard = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption></figcaption>
`;
//Le agregamos al elemento creado la clase con los estilos
$newCard.classList.add("card");


//Insertamos dentro del elemento creado el contenido html
$newCard.insertAdjacentHTML("beforeend", $contentCard);
//Insertamos dentro del elemento creado el contenido textual
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//Insertamos el elemento dentro de nuestra section tarjetas.
// $cards.insertAdjacentElement("beforeend", $newCard);


$cards.prepend($newCard)//Manera de agregar a la pagina nuestro nuevo elemento como PRIMER HIJO. Tambien existe .before() .append() .after() para agregar elementos.
