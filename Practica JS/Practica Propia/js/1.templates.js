const $section1 = document.querySelector("#sect-1"), $section2 = document.querySelector("#sect-2"), $fragment = document.createDocumentFragment(), $template = document.getElementById("template-1"), $templateContent = document.getElementById("template-1").content, $apiImage = 
[
    {
       nombre: "Juan",
       img: "https://placeimg.com/200/200/people"
    },
    {
        nombre: "Pedro",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        nombre: "Hernan",
        img: "https://placeimg.com/200/200/people"
    }
];

$apiImage.forEach(el => {
    $templateContent.querySelector("img").setAttribute("src", el.img);
    $templateContent.querySelector("figcaption").textContent = el.nombre


    
    

    let $clone = document.importNode($templateContent, true);
    $fragment.appendChild($clone);
});

$section1.appendChild($fragment);

