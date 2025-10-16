import { users } from "../data/users.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const getUsers = async (req, res) => {


    try {

        const user = await User.find()
        res.json(user)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener alumnos", errorMsg: error})
    }
}

export const getUsersSearch = async (req, res) => {

    const {nombre} = req.query

    try {

        const user = await User.find({
            nombre: { 
                $regex: `^${nombre}`,
                $options: 'i'}
        })
        res.json(user)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener alumnos", errorMsg: error})
    }
}

export const createUser = async (req, res) => {




    if (!req.body.nombre && !req.body.edad && !req.body.email && !req.body.password) {
        res.status(400).json({
            error: "Faltan Datos"
        })
    }

    
    // hashear la password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    // no deberia poder llegar hasta aca, si no estoy logeado

    const nuevoUsuario = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        password: hashedPassword
    };


    try {

        const newUser = await User.create(nuevoUsuario)
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({ error: "Error al crear Alumno", errorMsg: error })
    }

}
