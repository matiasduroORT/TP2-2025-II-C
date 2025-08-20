
// let numero = 5
// console.log("Es 5?: ", numero !== 5);

// if(!numero){
//     console.log("Es 5?: ", numero);
// }

// let edad = 16

// if(edad < 18){
//     console.log("Menor de edad");
// } else if(edad < 21){
//     console.log("Joven Adulto");
// } else{
//     console.log("Adulto");
// }

// Operador Ternario (Version compacta de if/else)

let edad = 19
//              Condicion  | si se cumple | Si no se cumple
let licencia = (edad < 18) ? "Denegada"  : "Permitida"

let licenciaEspecial = (edad < 18) ? "Denegada"  : (edad <= 21) ? "Permitido con tutor" : "Permitido"


// console.log("Licencia: ", licencia);


// == vs ===
// == compara valor (convierte los tipos), provoca que se confunda
// === compara valor y TIPO

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(0 == false);
// console.log(0 === false);

// CONSEJO: SIEMPRE USEN ===
// if(""){
//     console.log("si se muestra");
// }else{
//     console.log("No se muestra");
// }

let permiso = true;

if(permiso){
    // console.log("permitido");
}


// && (AND) ejecuta la derecha solo si la izquierda es positiva truthy 

// permiso && console.log("Puede entrar");

let nombre = ""
// nombre !== "Matias" && console.log("Puede entrar");

// || (OR) devuelve el primer valor verdadero/positivo/truthy

let elNombre = nombre || "Sin el Nombre"

// console.log("elNombre es: ", elNombre);

let usua = {
    nombre: nombre || 'Sin nombre',
}


// ?? Nullish (si la condicion es null/undefined, entonces ejecuta lo siguiente)
let userInput = ''

let conOperadorOR = userInput || nombre || "valor por defecto"

let conTernario = userInput ? userInput : "Por Defecto"
let conNullish = userInput ?? "Por defecto"

// console.log({
//     conOperadorOR,
//     conTernario,
//     conNullish
// });



//  Optional Chaining (?.) para leer propiedades profundas sin que rompa

const usuario = {
    nombre: "Mateo",
}

console.log("Calle: ", usuario.direccion?.calle);

console.log("Hola");

setTimeout(() => {
    usuario.direccion = {
        calle: "La Plata",
        altura: 29,
    }
    
}, 1);









