//METODOS QUE YA NO SE UTILIZAN
console.log(document.getElementsByTagName("li"));//Trae un documento dependiendo del nombre de elemento
console.log(document.getElementsByClassName("card"));//Encuentra el documento segun la clase.
console.log(document.getElementsByName("nombre"));//Trae el documento por su atributo name. Devuelve un nodelist.
console.log(document.getElementById("menu"));

//Remplazados por:
console.log(document.querySelector("#menu"));//ID
console.log(document.querySelector("a"));//Name
console.log(document.querySelectorAll("a").length);//Comparte el .length y te muestra cuantos hay.
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll("a")[2]);

console.log(document.querySelectorAll("#menu li"));

