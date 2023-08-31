const d = document;

export default function draw(btn, selector){
    
    const getWinner = (selector) =>{
        const $players = d.querySelectorAll(selector), random = (Math.random() * $players.length), 
        winner = $players[Math.floor(random)];

        console.log($players, random, winner)

        return `El ganador es ${winner.textContent}`;
    }
   d.addEventListener("click", e => {
    if(e.target.matches(btn)){
      let result = getWinner(selector);
      alert(result);
      console.log(result)
    }
   });
}

const getWinnerComment = (selector) => {
    const $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

    return `El ganador es ${winner.textContent}`;
}
//Este ejemplo ultimo sirve para utilizarlo en youtube o otras redes sociales para hacer un pequeño sorteo, solamente hay que usar de parametro los seleccionadores que tiene una etiqueta y que nos de como resultado el contenido.