export const PI1 = Math.PI;

export let usuario = "jhon"
let password = "password"

export default function saludar(){
    console.log("Hello world")
}

//Default: sifnifica que cuando se exporte esa funcion saludar, se va a exportar automaticamente, sin siquiera tener que poner el nombre de la funcion en el import; IMPORTANTE: debe tener algo importado para que lo tome por default, ademas solo se tiene que tener 1 sola exportacion de forma default.