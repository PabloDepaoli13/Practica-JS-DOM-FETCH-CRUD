const d = document, 
$agregar = d.getElementById("t-body"),
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAllUser = async () => {
    try {
        let res = await fetch("http://localhost:5000/usuario"),
        json = await res.json();

        if(!res.ok) throw {status: res.status, statusText:res.statusText}; 
        console.log(json);
        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".edad").textContent = el.Edad;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.edad = el.Edad;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $agregar.appendChild($fragment);
        
    } catch (err) {
        console.log(err)
        let message = err.statusText || "Ocurrio un error";
        $agregar.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener("DOMContentLoaded", getAllUser);

d.addEventListener("submit",async el => {
    if(el.target == $form){
        el.preventDefault();

       if(!el.target.id.value){
          //CREATE POST;
          try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    nombre: el.target.nombre.value,
                    Edad: el.target.edad.value
                })

            },
            res = await fetch("http://localhost:5000/usuario", options);
    
            if(!res.ok) throw {status: res.status, statusText:res.statusText}; 
            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
       }else{
          //UPDATE PUT;
          try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    nombre: el.target.nombre.value,
                    Edad: el.target.edad.value
                })

            },res = await fetch(`http://localhost:5000/usuario/${el.target.id.value}`, options);
    
            if(!res.ok) throw {status: res.status, statusText:res.statusText}; 
            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
       }
    }
})

d.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Usuario";
        $form.nombre.value = e.target.dataset.name;
        $form.edad.value = e.target.dataset.edad;
        $form.id.value = e.target.dataset.id;
    }
    if(e.target.matches(".delete")){
        let isDelete = confirm(`Estas seguro de que quieres eliminar el usuario ${e.target.dataset.id}`);
        
        if(isDelete){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }},
                    res = await fetch(`http://localhost:5000/usuario/${e.target.dataset.id}`, options);
        
                if(!res.ok) throw {status: res.status, statusText:res.statusText}; 
                location.reload();
              } catch (err) {
                console.log(err)
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
              }
        }
       
    }
})