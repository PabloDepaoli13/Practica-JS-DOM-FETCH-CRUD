(()=>{
    //METODO XMLHttpRequest:
    //1.Instanciamos los metodos y elementos
    const xhr = new XMLHttpRequest(), 
    $ol = document.getElementById("xhr"), 
    $fragment = document.createDocumentFragment();

    //2.Creamos las funciones necesarias
    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4){
           return; //Mecanismos para lograr que el XHR solo se ejecute cuando el readyState solo sea 4. De esa manera evito que se me ejecuten 4 respuestas.
        }
        // console.log(xhr)
        if(xhr.status >= 200 && xhr.status < 300){
        //    console.log("Exito")
           
           let json = JSON.parse(xhr.responseText)


           json.forEach(element => {
             const $li = document.createElement("li");

             $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;

             $fragment.appendChild($li);

             
           });

           $ol.appendChild($fragment)
        }else{
        //   console.log("Fallo")
          let message = xhr.statusText || "Ocurrio un error";

          $ol.innerHTML = `Error ${xhr.status}: ${message}`
        }
        
       
    });

    //3.Metodo Open: Instruccion que abre la peticion, este recibe el metodo por el cual vamos a comunicarnos.
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");


    //4.Enviar los datos, dependiendo las necesidades.
    xhr.send();
})();

(() => {
    //METODO FETCH
    const $fetch = document.getElementById("fetch"), 
    $fragment = document.createDocumentFragment();

    //.then y .catch, son como un if else, porque el then ejectura la parte positiva si el fetch se resulve y el catch la parte negativa. Los dos reciben como paremetro un archivo que trae el fetch de forma Response, contiene varias propiedades que sirven para ver estados de transferencia de archivos y tal. 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        // console.log(res)
        //Manera correcta de validar un error con fetch
        return   res.ok? res.json() : Promise.reject(res);
        
    }).then((res) =>{
        res.forEach(element => {
            const $li = document.createElement("li");

            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;

            $fragment.appendChild($li);
          });

          $fetch.appendChild($fragment)
    }).catch((error) => {
        console.log("Fallo")
          let message = error.statusText || "Ocurrio un error";

          $fetch.innerHTML = `Error ${error.status}: ${message}`
    }).finally(()=>{
        // console.log("Se ejecuta igual")
    })

    
})();
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"), 
    $fragment = document.createDocumentFragment();
     

    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            json.forEach(element => {
                const $li = document.createElement("li");
   
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
   
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrio un error";

          $fetchAsync.innerHTML = `Error ${error.status}: ${message}`
        }
        
    }

    getData();

    
})()