const d = document;
export default function countsdown(id, limitDate, FinalMesage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();


    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours =("0"+ Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0"+Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds = ("0"+Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2); 

        
        $countdown.innerHTML = `<h3>Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`

        if(limitDate < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${FinalMesage}</h3>`
        }
    }, 1000);
}