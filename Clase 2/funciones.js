// Hoisting: Permite el uso de variables o funciones previas a su declaracion

// console.log("a: ", a);
var a = 20;
let b = 10;

// console.log("b: ", b);
console.log( sumar(a, b));

function sumar(x, y){
    return x + y
}
// console.log( typeof restar);

var restar = (x, y) => { return x - y}


// 1- Funcion Declarada
// Se puede llamar antes de su definicion por hoisting
function saludar(nombre){

    if(nombre){
        return "Hola " + nombre 
    }

    if(nombre = "Joaquin"){
        return "Hola amigo"
    }

    console.log("No vino nombre");
    
    return "Quien sos?"

}
// console.log(saludar("Matias"))

let user = {
    nombre: "Felipe",
    saludar
}

console.log("user: ", user);



// Funcion expresada
// No tiene hosisting, no podees llamarla antes de declararla
const despedir = function(nombre) {

    if(!nombre){
        return "No se quien sos"
    }
    
    return `Adios ${nombre}`
}
let nomb = null
console.log("despedir: ", despedir(nomb));




// Funcion Flecha (arrow function)
// Tiene una sintaxis corta, se puede hacer en una sola linea, y el return es implicito

const sumar1 = (a) => a + 1

console.log(sumar1(16));

const sumar2 = (a) => {

    console.log("Cuanto vino en A? ", a);
    
    return a + 2
}
console.log(sumar2(16));


