// const express = require("express"); // llamar paquete con commonjs 
import express from "express" // llamar paquete con ESM (ECMAScript modules)
// Para crear el package.json se usa npm init -y
import { users } from "./src/data/users.js"
import usersRoutes from './src/routes/usersRoutes.js' 

const PORT = 3000
const app = express()


app.use(express.json())

console.log("users: ", users);



app.use("/api/users", usersRoutes)

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:",PORT);
})

