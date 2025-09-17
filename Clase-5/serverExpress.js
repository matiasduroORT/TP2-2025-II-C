const express = require("express");

const PORT = 3000
const app = express()


const alumnos = [
    {
        id: 1,
        nombre: 'Augusto',
        edad: 28,
    },
    {
        id:2,
        nombre: 'Pedro',
        edad: 35,
    },
]


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

app.post("/api/alumnos", (req, res) => {

    console.log("req.body: ", req.body);


    if(!req.body.id && !req.body.nombre && !req.body.edad){
        res.status(400).json({
            error: "Faltan Datos"
        })
    }

    const nuevoAlumno = {
        id: Number(req.body.id),
        nombre: req.body.nombre,
        edad: req.body.edad
    };
    alumnos.push(nuevoAlumno)
    res.status(201).json(alumnos)
    res.json({mensaje: "Esto es post"})
})




// }else if(req.url === "/api/alumnos"){

//     res.writeHead(200, {"Content-Type":"application/json"})
//     res.write(JSON.stringify(alumnos))



app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:",PORT);
})


