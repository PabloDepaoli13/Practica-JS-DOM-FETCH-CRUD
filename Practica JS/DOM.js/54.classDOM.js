const $card = document.querySelector(".card");



//Preguntar cosas en el console.
console.log($card);
console.log($card);
console.log($card.classList.contains("rotate-45"));//Preguntamos si contiene esa clase si no la contiene devolvera false.


//Agregar Clases a CSS
$card.classList.add("rotate-45");
//Eliminar clase
$card.classList.remove("rotate-45");
//Agregar si no la tiene, eliminar si la tiene.
$card.classList.toggle("rotate-45");
//Remplazar 
$card.classList.replace("rotate-45", "rotate-135");
//Agregar muchas
$card.classList.add("opacity-80","sepia");