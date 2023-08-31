(()=>{
    const $axios = document.getElementById("axios"), $fragment = document.createDocumentFragment();


axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        let json = res.data;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment)
    })
    .catch((err)=>{
        console.log(err.response)
    })
    .finally(()=>{
        console.log("Se ejecuta igual")
    });
})();
(()=>{
    const $axios = document.getElementById("axios-async"), $fragment = document.createDocumentFragment();
    
   

    async function getData(){
        try {
            let res = await axios
            .get("https://jsonplaceholder.typicode.com/users")
            json = await res.data; 
            
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment)
            

        } catch (error) {
            console.log(error.response)
            let error1 = error.response
            let message = error1.statusText || "Ocurrio un error";

            $axios.innerHTML = `Error ${error1.status}: ${message}`
        }finally{
             console.log("Se ejecuta igual") 
        }


    }


    getData();
})();