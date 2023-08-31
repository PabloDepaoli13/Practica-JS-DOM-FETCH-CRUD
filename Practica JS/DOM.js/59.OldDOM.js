//Estos metodos son antiguos para interactuar con el DOM

const $cards = document.querySelector(".cards"), 
$newCard = document.createElement("figure"), $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//Replace Child sirve para remplazar los hijos, por el elemento que nosotros elegimos.
// $cards.replaceChild($newCard, $cards.children[2]);


//Insert Before sirve para insertar nuestro nuevo elemento detras de algun elemento que ya exista en la pagina.
// $cards.insertBefore($newCard, $cards.firstElementChild);


//remover nodos
// $cards.removeChild($cards.lastElementChild)

//Metodo para clonar


document.body.appendChild($cloneCards);







