import { digitalClock, alarm} from "../70.reloj_digital.js";
import hamburguerMenu from "../69.Menu_Hamburguesa.js";


const d =  document;



d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
    alarm("../assets/alarm-clock.mp3","#activar-alarma","#desactivar-alarma");

    
})




