
const fs = require('fs')
const path = require('path')


const ruta = path.join(__dirname, 'data', 'bloq.txt')

// console.log("ruta: ", ruta);


try {
    
    if(!fs.existsSync(ruta)){
        fs.writeFileSync(ruta, 'Primera Linea', 'utf8')
    }

    const contenido = fs.readFileSync(ruta, 'utf8')

    // console.log("Contenido: ", contenido);

    fs.appendFileSync(ruta, "\nNueva linea (sync)", 'utf8')
    
    // console.log("Append Terminado");


} catch (error) {
    
}


const Promesas = async () => {

    try {

        const contenido = await fs.promises.readFile(ruta, 'utf8')

        console.log("Contenido: ", contenido);

        fs.promises.appendFile(ruta, '\nNueva Linea (async/await)', 'utf-8')
        
        
        const contenido2 = await fs.promises.readFile(ruta, 'utf8')

        console.log("Contenido: ", contenido2);

    } catch (error) {
        
    }
}


Promesas()