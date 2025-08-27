// Las promesas representan un valor que va a existir en el futuro
// va a estar disponible mas adelante, de la ejecucion

// Estados:
// 1- Pending
// 2- resolve // el resultado es positivo 
// 3- reject // el resultado es negativo (false)

function obtenerUsuarioPromise(id){

    // console.log("Inicio");
    
    return new Promise((resolve, reject) => {
        // console.log(`Buscando usuario... ${id}`);
        
        setTimeout(() => {
            if(id === 3){
                return reject("Usuario 3 no encontrado")
            }
        resolve({id, nombre: `Usuario ${id}`})
        }, 1500);
    })
}

// setTimeout(() => {
//     console.log(obtenerUsuarioPromise(4));
// }, 1000);

// uso basico
// then - Se utiliza para ir avanzando en la promesa
// catch - Atrapar cualquier error que haya
// finally - Se ejecuta al final independientemente de que pase

obtenerUsuarioPromise(7)
    .then((user) => {
        // console.log("Usuario Encontrado: ", user);
    })
    .catch((error) => {
        // console.log("Promesa Rechazada: ", error);
    })
    .finally(() => {
        // console.log("Siempre se ejecuta al final");
    
    })


// obtenerUsuarioPromise(1)
// .then((u1) => {
//     console.log("Usuario 1: ", u1);
//     return obtenerUsuarioPromise(2) // devolve otra promesa
// })
// .then((u2) => {
//     console.log("Usuario 2: ", u2);
//     return obtenerUsuarioPromise(3) // devolve otra promesa mas
// })
// .then((u3) => {
//     console.log("Usuario 3: ", u3);
// })
// .catch((err) => {
//     console.log("error: ", err);
    
// })


//  Promise.All
// Ejecuta todas las promesas de una
// Si falla una, todo el proceso se rechaza

Promise.all([obtenerUsuarioPromise(1), obtenerUsuarioPromise(2), obtenerUsuarioPromise(3)])
.then(([u1, u2, u3]) => {
    // console.log("Promise All: ", u1, u2, u3);
})
.catch((err) => {
    // console.log("Fallo uno, ", err)
})


// Async / Await

// async function probarAsincronia(){
// }

const probarAsincronia = async () => {

    try {
        
    const u1 = await obtenerUsuarioPromise(1)
    console.log("Usuario 1: ", u1);
    const u2 = await obtenerUsuarioPromise(2)
    console.log("Usuario 2: ", u2);
    const u3 = await obtenerUsuarioPromise(3)
    console.log("Usuario 3: ", u3);

    console.log("Se encontraron todos");
    return
} catch (error) {
        console.log("Error: ", {
            error
        });
        
}

}

probarAsincronia()