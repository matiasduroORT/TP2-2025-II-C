
// identificar palindromos



function invertirTexto(palabra){

    return  palabra.split("").reverse().join("")
}

function esPalindromo(palabras){

    let palindromos = []
    
    for (const palabra of palabras) {
        let palabraminiscula = palabra.toLowerCase()

        let palabraInvertida = invertirTexto(palabraminiscula)
        console.log("palabraInvertida: ", palabraInvertida);
        if(palabraminiscula === palabraInvertida){
            palindromos.push(palabra)
        }
        
    }

    // palabras.forEach(element => {
    //     let palabraminiscula = element.toLowerCase()

    //     let palabraInvertida = invertirTexto(palabraminiscula)
    //     console.log("palabraInvertida: ", palabraInvertida);
    //     if(palabraminiscula === palabraInvertida){
    //         palindromos.push(palabra)
    //     }
        
    // });

    return palindromos
}
const palabras = ["Sol", "Ana", "Oso", "Saludo", "Reconocer", "Soldado", "Neuquen"]

const resultado = esPalindromo(palabras)

console.log("Palabras Palindromo: ", resultado);

