const d = document, 
$agregar = d.getElementById("t-body"),
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();



const getAllUser = async () => {
    try {
        let res = await axios.get("http://localhost:5000/usuario"), 
        json = await res.data;
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
        $form.insertAdjacentHTML("afterend", `<p><b>Error: ${err.status} : ${message}</b></p>`)
    }
}



d.addEventListener("DOMContentLoaded", getAllUser);


d.addEventListener("submit", async (e)=> {
    if(e.target == $form){
        e.preventDefault();
        
        console.log(e.target);
        if(!e.target.id.value){
           //POST
           try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    nombre: e.target.nombre.value,
                    Edad: e.target.edad.value
                })
                

            },
            res = await axios("http://localhost:5000/usuario", options), 
            json = await res.data;

            location.reload();
          } catch (err) {
            console.log(err)
            let message = err.statusText || "Ocurrio un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        }else{
           //PUT
           try {
            let options = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    nombre: e.target.nombre.value,
                    Edad: e.target.edad.value
                })

            },res = await axios(`http://localhost:5000/usuario/${e.target.id.value}`, options);
    
            location.reload();
          } catch (err) {
            console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        }
    }
 });

 d.addEventListener("click", async (e) => {
      if(e.target.matches(".edit")){
        $title.textContent = "Editar Usuario";
        $form.nombre.value = e.target.dataset.name;
        $form.edad.value = e.target.dataset.edad;
        $form.id.value = e.target.dataset.id;
      }else if(e.target.matches(".delete")){
        let isDelete = confirm(`Estas seguro de que quieres eliminar el usuario ${e.target.dataset.id}`);
        
        if(isDelete){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }},
                    res = await axios(`http://localhost:5000/usuario/${e.target.dataset.id}`, options);
    
                location.reload();
              } catch (err) {
                console.log(err)
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
              }
         } 
     }
 });