// for, for each, for...of, for...in, while, do, do while + arrays


// For clasico (cuando sabes cuanto va a durar)
for (let i = 0; i <= 5; i++) {
    console.log("i = ", i);
 
}

// WHILE: (no sabemos cuanto va a durar)
// Se va a ejecutar siempre que la condicion se cumpla

let n = 0

while(n < 1){
    console.log("N es: ", n);
    n = n + 1
}

// Do... while (se ejecuta al menos una vez)

let num = 0
do {
    console.log("num = ", num);
 num++;   
} while(num < 1)


// For...OF (para recorrer arrays o string)

const frutas = ["Manzana", "Banana", "Frutilla"]


for (const element of frutas) {
    console.log("Frutas: ", element);
}

// FOR...IN (para recorrer objetos, mediante claves/key de objetos)

const persona = {
    nombre: "Manuel",
    edad: 28,
    estado: true,
    materias: 'tp2'
}

for (const llave in persona) {
    // console.log("llave: ", llave);
    
    const variable = persona[llave]

    // console.log("element: ", variable);
    
}

// for (const element of object) {
    

//     console.log("element: ", element);
// }


// Metodos de arrays: 

const numeros = [2, 4, 7, 28, 45]


// for each -> recorre el array (no devuelve uno nuevo)
numeros.forEach(n => console.log("For Each: ", n))


// map -> recorre el array, pero tambien devuelve uno nuevo

const dobles = numeros.map(n => n * 2)
console.log("map dobles: ", dobles);

// filter -> devuelve solo los que cumplan la condicion

// % calcula el modulo
const pares = numeros.filter(n => n % 2 === 0)

console.log("pares: ", pares);
