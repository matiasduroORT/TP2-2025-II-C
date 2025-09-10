const http = require("http")


// console.log("http: ", http);

const PORT = 3000

http.createServer((req, res) => {

    // req = request
    
    res.write("Hola Mundo")

    res.end()
}).listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: ", PORT);
    
})


