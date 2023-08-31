const d = document;
let x=0,y=0;

export function moveBall(e, ball, stage){
    const $ball = document.querySelector(ball), $stage = document.querySelector(stage), limitsBall = $ball.getBoundingClientRect(), limitsStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode);
    //LimitStage y LimitsBall son funciones que permiten ver que dimenciones ocupan los objetos que creamos dentro de la pagina. De esta forma vamos a poder ver 
    // console.log(limitsBall)
    // console.log(limitsStage)

  

    switch (e.keyCode) {
        case 37: 
            e.preventDefault()
            
            if(limitsBall.x > limitsStage.x +10){
                
                x--;
            }
           
            break;
        case 38:  
            
            e.preventDefault()
            if(limitsBall.y > limitsStage.y +10){
                
                y--;
            }
           
            break;
        case 39:
            

            e.preventDefault()
            if(limitsBall.x < limitsStage.width - 40){
                x++;
            }
            
            break;
        case 40:
            
            e.preventDefault()
            if(limitsBall.y < limitsStage.bottom - 70  ){
                y++;
            }
            
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcut(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.code);
    // console.log(e.keyCode)
    // console.log(e.ctrlKey)//Retrorna un bool dependiendo si estoy presionando la tecla
    // console.log(e.altKey)//Retrorna un bool dependiendo si estoy presionando la tecla
    // if(e.key === "a" && e.altKey) console.log("Tocaste la A :3")
}

