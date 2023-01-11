// Agregamos el objeto

const soldados = `[
    {
        "modelo": "Soldado Rudo",
        "valor": 300,
        "estructura": "plastico-resistente"
    },

    {
        "modelo": "Soldado Flaco",
        "valor": 150,
        "estructura": "plastico-debil"
    },
    {
        "modelo": "Soldado Lider",
        "valor": 450,
        "estructura": "metal"
    }
]`

// Creamos una variable que va a leer los objetos dentro de soldados

const JsonData = JSON.parse(soldados)
// console.log(typeof(JsonData))

// Filtramos los soldados que vamos a cambiar
const soldadoNuevo = JsonData.filter((soldado) => soldado.valor < 200);

// console.log(soldadoNuevo)

const newCars = JSON.stringify(soldadoNuevo);

// Una vez cambiado el valor de objeto a cadena ya lo podemos enviar;

// Maneras de conectar nuestra pagina .json a con nuestra pagina .js ....fetch()






