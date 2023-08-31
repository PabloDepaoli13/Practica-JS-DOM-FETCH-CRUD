const d = document, n = navigator;

export default function DetecccionCamara(id){
    const $video = d.getElementById(id);

    // console.log(n.mediaDevices.getUserMedia)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((error)=>{console.log(`¡Sucedio el siguiente error!: ${error}` )
        $video.insertAdjacentHTML("beforebegin",`<p>¡Sucedio el siguiente error!:<mark>${error}</mark></p>` );
        }); 
        
        
       //Esta funcion recibe un objeto, con propiedades  como video y audio en la cual hay que definir si son verdaderas(activas) o falsas(no activas);
    }

}