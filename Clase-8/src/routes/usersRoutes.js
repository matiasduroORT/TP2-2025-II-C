import express from 'express'
import { getUsers, createUser, getUsersSearch, actualizarProfilePic } from '../controllers/usersController.js'
import { protegerRuta } from '../middlewares/authMiddlewares.js'
import { allowUpload } from '../middlewares/uploadMiddleware.js'

const router = express.Router()


// /api/users/
router.get("/", getUsers)
router.get("/search", getUsersSearch)

router.post("/", createUser)

router.put('/', protegerRuta, allowUpload ,actualizarProfilePic)


// MONGODB USER matiasduro y pass TP2
export default router