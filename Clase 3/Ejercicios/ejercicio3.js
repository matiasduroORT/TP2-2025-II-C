const usuariosDB = {
    1: { nombre: "Ana", edad: 25 },
    2: { nombre: "Pedro", edad: 30 },
    3: { nombre: "Lucia", edad: 28 },
    4: { nombre: "Juan", edad: 22 },
};


function obtenerUsuario(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const usuarios = usuariosDB[id]

            // validar si viene el usuario, resolve, y sino, reject
            
        }, 500);
    })
}


// crear funcion asincrona con async/await

function mostrarUsuarios(ids){
    const resultados = []

    // obtenerUsuario(id)
}

mostrarUsuarios([1, 2, 3])