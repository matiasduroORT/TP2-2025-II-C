
// OBJETOS

const nombre = 'Matias Duro'

const materias = ['PNT2', 'TP2']

function saludo(){
    return 'Hola'
}

const familia = {
    padre: {
        nombre,
        edad: 28
    },
    madre: 'Mar'
}

// console.log("Familia: ", familia.padre.nombre);

let rol = 'client'

const usuario = {
    nombre,
    materias,
    edad: 28,
    activo: true,
    hablar: function () { return 'Hablo'},
    saludo,
    familia,
    aprobadas: null,
    "sistema operativo": 'Windows',
    presentar(){
        return `Soy ${this.nombre}, tengo ${this.edad} y curso en ${this.materias}`
    },
    [rol]: false
}

console.log("Usuario: ", usuario);


