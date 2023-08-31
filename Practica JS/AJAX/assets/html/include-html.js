document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = (e, url) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", el => {
            if(xhr.readyState !== 4) return;

            if(xhr.status >= 200 && xhr.status < 300){
                e.outerHTML = xhr.responseText;
            }else{
               let message = xhr.statusText || "Ocurrio un error";
               e.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`
            }
        });

        xhr.open("GET", url);
        xhr. setRequestHeader("Content-typle", "text/html; charset=utf-8");
        xhr.send();
    }

    document
    .querySelectorAll("[data-include]")
    .forEach(el => {
        includeHTML(el, el.getAttribute("data-include"));
    });

})