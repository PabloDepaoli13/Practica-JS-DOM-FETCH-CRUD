const d = document;

export default function contactFormValidation(){
   const $form = d.querySelector(".contact-form"),
   $inputs = d.querySelectorAll(".contact-form [required]");

   $inputs.forEach((input)=>{
      const $span = d.createElement('span');
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error","none")
      input.insertAdjacentElement('afterend', $span);
   });

   d.addEventListener("keyup", (e) => {
      if(e.target.matches(".contact-form [required]")){
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

        if(pattern && $input.value != ""){
          let regex = new RegExp(pattern);
          //console.log("Tiene patron");
          return !regex.exec($input.value)?
          d.getElementById($input.name).classList.add("is-active"):
          d.getElementById($input.name).classList.remove("is-active");
        }else{
            d.getElementById($input.name).classList.remove("is-active"); 
        }

        if(!pattern){
            return $input.value == ""?
          d.getElementById($input.name).classList.add("is-active"):
          d.getElementById($input.name).classList.remove("is-active");
        }
      }
   });

   d.addEventListener("submit", (submit)=> {
    // submit.preventDefault();
    


    const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");
    
    setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();
    }, 3000);
    setTimeout(() => {
        $response.classList.add("none");
    }, 5000);
    
   });
}