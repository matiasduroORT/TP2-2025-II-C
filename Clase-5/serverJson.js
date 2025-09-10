const http = require("http")

const PORT = 3000

const alumnos = [
    {
        nombre: 'Augusto',
        edad: 28,
    },
    {
        nombre: 'Pedro',
        edad: 35,
    },
]

http.createServer((req, res) => {

try {
    
    res.writeHead(201)
    res.write(JSON.stringify(alumnos))
    res.end()

} catch (error) {

    res.writeHead(500);
    res.write("Error interno: ", error)
    res.end()
        // para tirar el servidor, es ctrl + c
}

}).listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:",PORT);
    
})

