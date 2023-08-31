const d = document, 
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$agregar = d.getElementById("crud"),
$fragment = d.createDocumentFragment();

const ajax = (options) => {
    
    let {url, method, success, error, data} = options;
    const xhr = new XMLHttpRequest();


    xhr.addEventListener('readystatechange', (e)=>{
       if(xhr.readyState !== 4)return;
       if(xhr.status >= 200 && xhr.status < 300){
         let json = JSON.parse(xhr.responseText);
         success(json);
       }else{
        let message = xhr.statusText || "Ocurrio un error";
        error(`Error ${xhr.status}: ${message}`);
       }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
};

const getAllUser = () => {
    
    ajax({
        url: "http://localhost:5000/usuario",
        success: (res) => {
            console.log(res);
           res.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".edad").textContent = el.Edad;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.Edad = el.Edad;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
           });
           
           $agregar.appendChild($fragment);
        },
        error: (err) => {
            console.log(err);
            let menError = d.createElement("p")
            menError.innerHTML = err;
            $agregar.insertAdjacentElement("afterend", menError);
        },
    })
};

d.addEventListener("DOMContentLoaded", getAllUser);

d.addEventListener("submit", e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //CREATE POST
            ajax({
                url:"http://localhost:5000/usuario",
                method: "POST",
                success: (res) => {location.reload()},
                error: (err) => {$form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)},
                data: {
                    nombre:e.target.nombre.value,
                    Edad:e.target.edad.value
                }
            });
        }else{
            //UPDATE PUT
            ajax({
                url:`http://localhost:5000/usuario/${e.target.id.value}`,
                method: "PUT",
                success: (res) => {location.reload()},
                error: (err) => {$form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)},
                data: {
                    nombre:e.target.nombre.value,
                    Edad:e.target.edad.value
                }
            });
            
        }

       
    }
})
d.addEventListener("click", e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Usuario";
        $form.nombre.value = e.target.dataset.name;
        $form.edad.value = e.target.dataset.Edad;
        $form.id.value = e.target.dataset.id;
    }else if(e.target.matches(".delete")){
        let isDelete = confirm(`Estas seguro de que quieres eliminar el usuario ${e.target.dataset.id}`);

        if(isDelete){
            ajax({
                url:`http://localhost:5000/usuario/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => {location.reload()},
                error: (err) => alert(err)
            });
        }
    }
})