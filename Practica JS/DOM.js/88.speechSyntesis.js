const w = window, d =document, synth = w.speechSynthesis;

export default function voiceList(){
    const speechMessage =  new SpeechSynthesisUtterance(), $selector = d.getElementById("speech-select"), $textArea = d.getElementById("speech-text"), $btn = d.getElementById("speech-btn");


    let voices = [];

    d.addEventListener("DOMContentLoaded", e =>{
        w.speechSynthesis.addEventListener("voiceschanged", e => {
            voices = w.speechSynthesis.getVoices();


            voices.forEach((voice) => {
              const $option = d.createElement('option');
              $option.value = voice.name;
              $option.textContent = `${voice.name} : ${voice.lang}`

              $selector.appendChild($option);
            })
        })
    });
    d.addEventListener("change", e =>{
        if(e.target === $selector){
           speechMessage.voice = voices.find(voice => voice.name === e.target.value)
           
        }
        

        
    })
    d.addEventListener("click", e =>{
        if(e.target === $btn){
            speechMessage.text = $textArea.value;
            w.speechSynthesis.speak(speechMessage);
            
        }
    })
}