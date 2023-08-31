const d = document,
n = navigator,
ua = n.userAgent;

/* Explicacion: Creamos una funcion que va a recibir el id de lo que seria un div, en donde vamos a colocar el contenido que tenemos que recibir en navigator.userAgent... Para lograr eso primero tenemos que crear varios objetos, segun el tipo de dispositivo que se use, sea celular,PC y tambien el buscador que seria la aplicacion, dentro de ellos vamos a agregar distintos tipos de propiedades con funciones dentro que van a detectar con el metodo matches si es que,  */
export default function UserAgent(id){
    const $div = d.getElementById(id),
    isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();
        }
    },
    isDesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBrowser={
        chrome: ()=>ua.match(/chrome/i),
        firefox: ()=>ua.match(/firefox/i),
        safari: ()=>ua.match(/safari/i),
        opera: ()=>ua.match(/opera|opera mini/i),
        ie: ()=>ua.match(/msie|eimobile/i),
        edge: ()=>ua.match(/edge/i),
        any:function(){
            return (
                this.opera()|| this.chrome() || this.edge() || this.ie() || this.safari() || this.safari()
            )
        }
    }
 $div.innerHTML = `
   <ul>
     <li>User Agent:<b>${ua}</b></li>
     <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
     <li>Navegador: <b>${isBrowser.any()}</b></li>
   </ul>
 `;


 /*Contenido Exclusivo*/
 if(isBrowser.chrome()){
    $div.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`; 
 } 
}