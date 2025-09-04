
const fs = require('fs')
const path = require('path')


const archivoGrande = path.join(__dirname, 'data', 'archivo-grande.txt')
const archivoGrande2 = path.join(__dirname, 'data', 'archivo-grande2.txt')


if(!fs.existsSync(archivoGrande)){
    const writeStream = fs.createWriteStream(archivoGrande, 'utf8')

    for (let i = 0; i < 10000; i++) {
        // console.log("Linea de codigo numero " + i);
        
        writeStream.write("\nLinea de codigo numero " + i)
    }

    writeStream.end();

}


const readFileSync = fs.readFileSync(archivoGrande, 'utf8')

// console.log('readFileSync: ', readFileSync);



const stream = fs.createReadStream(archivoGrande2, 'utf8')


stream.on('data', chunk => {
    console.log("chunk: ", chunk);
}) 


stream.on("end", () => {
    console.log("Termino el stream");
    
})


stream.on("error", (err) => {
    console.log("Sucedio un error: ", err.message);
    
})
