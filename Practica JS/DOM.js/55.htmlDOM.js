const $whattsDOM = document.getElementById('que-es');

console.log($whattsDOM);

let text= `
<p>
Dom es el modelo de objetos del documento (<b><i> DOM - Documento Object Model </i>), es una API para documentos HTML y XML
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante el codigo JS
</p>
<mark>El DOM no es parte de la especificaicon de  JavaScript, es uina API para los navegadores</mark>
</p>
`;



// $whattsDOM.innerText = text; //Agrega contenido textual a un elemento. Aunque ya no se usa mas.

//Propiedad estandar:
$whattsDOM.textContent = text;//No interpreta las etiquetas html, solo cambia el contenido
//Para que leea las propiedades se usa innerHTML.
$whattsDOM.innerHTML = text;
//Elimina todo el contenido html.
$whattsDOM.outerHTML = text;







