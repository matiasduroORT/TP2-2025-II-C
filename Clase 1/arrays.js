// Arrays


//Metodos de Arrays

let frutas = ['Banana', 'Manzana', 'Frutilla']

// Agrega un elemento al final
frutas.push('Uva')

// Remueve el primer elemento del array
frutas.shift()

// agrega un elemento al comienzo
frutas.unshift('Kiwi')
// console.log("Frutas: ", frutas);


// console.log("Frutas: ", frutas.pop());

// console.log("Frutas: ", frutas);


let numeros = [5, 7, 1, 27, 23]

const alCuadrado = numeros.map(num => num * 2)

// console.log("alCuadrado: ", alCuadrado);

const menos5 = numeros.map(function(num, elIndex){

    // console.log("cada num: ", num);
    // console.log("elIndex: ", elIndex);
    
    
    return num - 5
})
// console.log("menos5: ", menos5);


// filter, se encarga de filtrar un array, y te lo devuelve

const mayoresa7 = numeros.filter(n => n > 7)

let alumnos = ['Mateo', 'Sofia', 'Martin', 'Manuel']

const EstaMateo = alumnos.filter(nombre => nombre === 'Mateo')

// console.log("Esta? ", EstaMateo);


// console.log("mayores a 7: ", mayoresa7);

// console.log("numeros: ", numeros);


// Reduce, tiene un acumulador

let suma = numeros.reduce(function(acc, num){



    // console.log("Acumulador: ", acc );

    return acc + num
    
})

let suma2 = numeros.reduce((acc, num) => acc + num, 10)


// console.log("suma: ", suma);
// console.log("suma2: ", suma2);


// Find, devuelve el primero que cumpla con la condicion
const primerMayorA7 = numeros.find(number => number > 7)
console.log("Primer Mayor a 7: ", primerMayorA7);

// Some, Si alguno cumple con la condicion, retorna true
const algunoCumple = numeros.some(num => num === 7)
console.log("Alguno cumple con que sea igual a 7? ", algunoCumple);


const todosCumplen = numeros.every(num => num > 4)
console.log("Todos cumple con que sean mayores a 4? ", todosCumplen);



// Join, convierte a string un array, y podes elegir el separador
let elJoin = numeros.join('//')

console.log("ElJoin es: ", elJoin);

// Slice, devuelve un array con los indices desde y hasta que eligas, el primero es inclusivo, el segundo no
const resultadoSlice = numeros.slice(0, 3)

console.log("resultadoSlice: ", resultadoSlice);

// Splice
const resultadoSplice = numeros.splice(1, 4, 77)

console.log("resultadoSplice: ", resultadoSplice);

console.log("Numeros Actuales: ", numeros);


// SPLIT
let palabra = 'Casa'

const resultado = palabra.split('')

console.log("resultado: ", resultado);

console.log("resultado al reves: ", resultado.reverse());











