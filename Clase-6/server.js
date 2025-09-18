// const express = require("express"); // llamar paquete con commonjs 
import express from "express" // llamar paquete con ESM (ECMAScript modules)
import dotenv from "dotenv"
// Para crear el package.json se usa npm init -y
import { users } from "./src/data/users.js"
import usersRoutes from './src/routes/usersRoutes.js' 
import conectarDB from "./src/config/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

conectarDB()


app.use(express.json())

app.use("/api/users", usersRoutes)

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
})

