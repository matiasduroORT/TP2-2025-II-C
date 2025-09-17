import express from 'express'
import { getUsers } from '../controllers/usersController.js'

const router = express.Router()

// /api/users/
router.get("/", getUsers)
// router.post("/", )


export default router