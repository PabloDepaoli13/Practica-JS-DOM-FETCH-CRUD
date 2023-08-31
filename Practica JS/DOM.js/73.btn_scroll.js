const d = document, w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = document.querySelector(btn);

    w.addEventListener("scroll", e =>{
      if(d.documentElement.scrollTop < 200){
        $scrollBtn.classList.add("hidden");
      }else{
        $scrollBtn.classList.remove("hidden");
        
      }
      
    });
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                 //TIENE 3 OPCIONES:
                behavior: "smooth",
                top:0,
                //left:0;
            
            
            });
        }
    });
}