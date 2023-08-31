const d = document, w = window;

export default function ResponsiveAdvert(id , mq, mobileContent, desktopContent){
   let breackpoint = w.matchMedia(mq);//Objeto matchMedia es el que va a detectar el tamaño de la pestaña o resolucion..
   console.log("MQ",breackpoint.matches)

    const responsive = () => {
        if(breackpoint.matches){//e.matches devuelve un true o un false dependiendo si la w.matchMedia es igual a la condicion que contiene en los parentesis en este caso una resolucion de pantalla.
            d.getElementById(id).innerHTML = desktopContent;
     
         }else{
            d.getElementById(id).innerHTML = mobileContent;
         }
    }
    responsive();  
}