const express = require("express");

const PORT = 3000
const app = express()

app.use(express.json())

 
app.get("/", (req, res) => {

    res.send("<h1>Home de la API</h1>")
})

app.get("/api/alumnos", (req, res) => {
    
    res.json(alumnos)
})


app.get("/api/alumno", (req, res) => {

    if(req.query.id){
        
        let id = Number(req.query.id)

        const alumno = alumnos.find((alumno) => {
            console.log("alumno: ", alumno.id);
            console.log("id params: ", id);
            console.log("===", alumno.id === id);
            console.log("==", alumno.id == id);

            return alumno.id === id
        })

        if(alumno){
            res.json(alumno)
        }else{

            res.status(404).json({
                id: 0,
                error: 'Alumno no existe'
            })
        }
    }else{
        res.status(400).json({
            error: "Falta ID"
        })
    }
    
})

app.get("/api/alumno/:id", (req, res) => {

    console.log({
        params: req.params,
        query: req.query
    });
    
 
    if(req.params.id){
        
        let id = Number(req.query.id)

        const alumno = alumnos.find((alumno) => {
            console.log("alumno: ", alumno.id);
            console.log("id params: ", id);
            console.log("===", alumno.id === id);
            console.log("==", alumno.id == id);

            return alumno.id === id
        })

        if(alumno){
            res.json(alumno)
        }else{

            res.status(404).json({
                id: 0,
                error: 'Alumno no existe'
            })
        }
    }else{
        res.status(400).json({
            error: "Falta ID"
        })
    }
    
})

app.post("/api/alumnos", )




// }else if(req.url === "/api/alumnos"){

//     res.writeHead(200, {"Content-Type":"application/json"})
//     res.write(JSON.stringify(alumnos))



app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:",PORT);
})


