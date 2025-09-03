const path = require("path")
const fs = require('fs')

const ruta = path.join(__dirname, 'data', 'diario.txt')


// console.log("La ruta: ", ruta);

// console.log("dirname: ", __dirname);


// fs.existSync // verificamos que el archivo exista, de forma sincronica
// fs.writeFileSync // escribimos el archivo. Y si no existe el archivo, lo crea

if(fs.existsSync(ruta)){
    console.log("Existe");
    
}else{
    console.log("No existe");
    fs.writeFileSync(ruta, "Hola")
}


// const contenido = fs.readFileSync(ruta, 'utf8')

// console.log("contenido: ", contenido);


// lectura Asincronica:

fs.readFile(ruta, (err, data) => {
    if(err) throw err;
    console.log("Lectura Asincronica: ", data.toString())
})

let mensaje = 'Adios'

// fs.writeFileSync(ruta, 'Adios')
fs.appendFileSync(ruta, "\n" + mensaje)

const contenido = fs.readFileSync(ruta, 'utf8')

const archivoRenombre = path.join(__dirname, 'data', 'mensajes.txt')


if(!fs.existsSync(archivoRenombre)){
    fs.renameSync(ruta, archivoRenombre)
    console.log("Archivo renombrado");
}else{
    console.log("Ya tiene ese nombre");
    
}

fs.renameSync(ruta, archivoRenombre)