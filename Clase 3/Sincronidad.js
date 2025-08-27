// Sincronia vs asincronia


console.log("A- Inicio sincronico");

let usuario
setTimeout(() => { // simulemos que el settimeout es una consulta a una api
    console.log("B- Medio sincronico");
    usuario = {
        nombre: "Mateo"
    }
}, 27);

setTimeout(() => {
    console.log("usuario: ", usuario);
}, 35);


console.log("C- Final sincronico");
