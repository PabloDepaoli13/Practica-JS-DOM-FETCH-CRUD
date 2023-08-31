const d = document, n = navigator;

export default function getGeolocation(id){
   const $div = d.getElementById(id),
   option = {
    enableHighAccuracy: true,
    timeout:5000,
    maximunAge: 0
   };

   const success = position => {
     let coords = position.coords;

     $div.innerHTML = `<p> Tu posicion actual es:</p>
     <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy}klm</b></li>
     </ul>
     <a href="https://www.google.com/maps/@${coords.latitud}.${coords.longitude}.20z target="_blanc" rel="noopener">Ver en Google Maps</a>`;
   }
   const error = (err) => {
    console.log(`Error ${err.code}:${err.message}`)
   }

   n.geolocation.getCurrentPosition(success, error, option)
   //Este metodo recibe 2 funciones y un objeto con distinta propiedades que se pueden buscar tranquilamente, con este metodo encontramos nuestra geolocalizacion . Tambien existe una WatchPosition que permite hacer un seguimiento del trayecto en google maps
   
}