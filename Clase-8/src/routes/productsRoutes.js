import express from 'express'
import { protegerRuta } from '../middlewares/authMiddlewares.js'
import { crearProducto, filtarProductos } from '../controllers/productController.js'
import { allowMultipleUpload } from '../middlewares/uploadMiddleware.js'

const router = express.Router()

router.post("/", protegerRuta, allowMultipleUpload, crearProducto)
router.get("/search", filtarProductos)

export default router