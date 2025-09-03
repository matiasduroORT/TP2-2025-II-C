

// tenemos un archivo de usuarios
// separarlos hombres por un lado en un txt, y mujeres por otro

const fs = require('fs')
const path = require('path')

function separarUsuarios(){

    const ruta = path.join(__dirname, 'data', 'usuarios.json')
    const ruta2 = path.join(__dirname, 'data', 'usuarios2.json')

    const existe = fs.existsSync(ruta)

    console.log("existe?: ", existe);

    const data = fs.readFileSync(ruta, 'utf8')


    // JSON.parse() convierte un string a JSON
        // console.log("data: ", data);

    console.log("data: ", JSON.parse(data).total);

    let usuarios2 = {
        total: 5,
        lista: [
          { name: 'Juan Pérez', sexo: 'M', email: 'juan@example.com' },
          { name: 'María López', sexo: 'F', email: 'maria@example.com' },
          { name: 'Ana Martínez', sexo: 'F', email: 'ana@example.com' },
          { name: 'Carlos Díaz', sexo: 'M', email: 'carlos@example.com' },
          { name: 'Lucía Gómez', sexo: 'F', email: 'lucia@example.com' }
        ]
      }
    
      fs.writeFileSync(ruta2, JSON.stringify(usuarios2, null, 2))
      

}

separarUsuarios()