const n = navigator, d = document, w = window;

export default function EstadoConexion(text){
    const $text = d.getElementById(text);
    const isOnline = () => {
        if(n.onLine){
            
                $text.innerHTML = "<h2>CONEXION RESTABLESCIDA</h2>";
                $text.classList.remove("offline");
                $text.classList.add("online"); 
            
                setTimeout(() => {
                    $text.classList.remove("online");
                    $text.innerHTML = "";
                }, 2000);
            
            
            
            
        }else{
            
                
                $text.innerHTML = "<h2>SE PERDIO LA CONEXION</h2>";
                $text.classList.add("offline");
                $text.classList.remove("online");  
                setTimeout(() => {
                    $text.classList.remove("offline");
                    $text.innerHTML = "";
           
                }, 2000);
            
            
        }
        
    }
    w.addEventListener("online", (e) => isOnline())
    w.addEventListener("offline",(e) => isOnline())
    
    
        
   
}