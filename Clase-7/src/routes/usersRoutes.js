import express from 'express'
import { getUsers, createUser, getUsersSearch } from '../controllers/usersController.js'
import { protegerRuta } from '../middlewares/authMiddlewares.js'

const router = express.Router()


// /api/users/
router.get("/", getUsers)
router.get("/search", getUsersSearch)

router.post("/", protegerRuta, createUser)


// MONGODB USER matiasduro y pass TP2
export default router