const $cards = document.querySelector(".cards");

console.log($cards);

//Referencia a sus hijos
console.log($cards.children);
//Acceder a los hijos de cards.
console.log($cards.children[2]);
//Devolver el padre de nuestro elemento.
console.log($cards.parentElement);
//Detectar el primer hijo
console.log($cards.firstElementChild);
//ultimo hijo
console.log($cards.lastElementChild);
//Hermano previo del .cards
console.log($cards.previousElementSibling);
//Hermano siguiente
console.log($cards.nextElementSibling);
//Buscador de etiquetas mas cercana
console.log($cards.closest("div"));
console.log($cards.closest("p"));
console.log($cards.closest("section"));
console.log($cards.children[3].closest("section"));

//ESTO SE LLAMA RECORRER DOM, o Dom Traverser
