import { digitalClock, alarm} from "../70.reloj_digital.js";
import hamburguerMenu from "../69.Menu_Hamburguesa.js";
import { moveBall, shortcut } from "../71.teclado-shorcuts.js";
import countsdown from "../72.cuenta_regresiva.js";
import scrollTopButton from "../73.btn_scroll.js";
import darkTheme from "../74.tema_oscuro.js";
import ResponsiveAdvert from "../76.ResponsiveDesing.js";
import ResponsiveTester from "../77.ResponsiveTest.js";
import UserAgent from "../78.UserAgent.js";
import EstadoConexion from "../79.Conexion.js";
import DetecccionCamara from "../80.DetecCam.js";
import getGeolocation from "../81.Geolocalizacion.js";
import searchFilters from "../82.filtro_busquedas.js";
import draw from "../83.sorteo.js";
import slider from "../84.respSlider.js";
import scrollSpy from "../85.scroll_spy.js";
import smartVideo from "../86.videoInteligente.js";
import contactFormValidation from "../87.validacionesForm.js";
import voiceList from "../88.speechSyntesis.js";


const d =  document, $stage = document.querySelector(".stage");



d.addEventListener("DOMContentLoaded", e=>{
    
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
    alarm("","#activar-alarma","#desactivar-alarma"); 
    countsdown("countdown","Julio 03,2023 00:01:00", "¡Feliz Cumpleaños Pablito querido! (♦u♦)");
    scrollTopButton(".scroll-top-btn");
    // ResponsiveAdvert("youtube","(min-width: 800px)", `<a href="https://youtu.be/6IwUl-4pAzc">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    // ResponsiveAdvert("gmaps","(min-width: 800px)", `<a href="https://goo.gl/maps/rA2LmVQq2GsSWQyZ8">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565521!2d-99.16869369207907!3d19.42702312622355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sar!4v1679515546686!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    ResponsiveTester("responsive-tester");

    UserAgent("user-device");

    DetecccionCamara("webcam");

    getGeolocation("geolocation");

    searchFilters(".card-filter", ".card");

    draw("#winner-btn", ".player");
    
    slider();

    scrollSpy();

    smartVideo();

    contactFormValidation();

    
});



d.addEventListener("keydown", e =>{
    shortcut(e);
    moveBall(e, ".bol", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode", $stage);

EstadoConexion("conexion"); 

voiceList();
