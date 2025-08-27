

function suma(a, b){
    return a + b
}

function operacionMatematica(num1, num2, callback){
    // console.log("Callback: ", callback);
    

    return callback(num1, num2)
}

const resultado1 = operacionMatematica(5, 10, suma)
const resultado2 = operacionMatematica(5, 10, (x, y) => x * y)


// console.log("Resultado Suma: ", resultado1);
// console.log("Resultado Multiplicacion: ", resultado2);


// Metodos de ararys que usan callbacks (map, for each, filter)

const numeros = [5, 10, 15, 6, 3]

const porCinco = numeros.map((num, posicion) =>{
    // console.log("num: ", num);
    // console.log("posicion", posicion);
    return num * 5
})

// console.log("map x 5: ", porCinco);

numeros.forEach((num) => {
    if(num > 7){
        // console.log("numero: ", num);
        
    }
})



// callbacks asincronicos
// ejemplo con "error first"
function obtenerUsuario(id, callback){
    // console.log(`Buscando usuario ${id}`);

    // console.log("callback", callback);
    

    setTimeout(() => {
        if(id === 3){
            return callback("Usuario 3 no encontrado", null)
        }

        callback(null, {id, nombre: `Usuario ${id}`})
    }, 500);
}

const findUser = (error, usuario) => {
    if(error){
        // console.log("Sucedio un error");
        return 
    }
    // console.log("Usuario: ", usuario);

}

for (let i = 0; i < 10; i++) {
    obtenerUsuario(i, findUser)
}


// CALLBACK HELL
// cuando tenemos anidacion de funciones, en gran cantidad, se vuelve
// dificil de leer, mantener y manejar errores

function llamandoUsers(){
    obtenerUsuario(1, (err, u1) =>{
        if(err){
            console.log("error");
            return
        }
        console.log("todo ok ", u1);
        
        obtenerUsuario(2, (err, u2) =>{
            if(err){
                console.log("error");
                return
            }
            console.log("todo ok", u2);
            obtenerUsuario(3, (err, u3) =>{
                if(err){
                    console.log("error");
                    return
                }
                console.log("todo ok ", u3);
                
                obtenerUsuario(4, (err, u4) =>{
                    if(err){
                        console.log("error");
                        return
                    }
                    console.log("todo ok ", u4);
        
                })
            })
        })
    })
}

llamandoUsers()