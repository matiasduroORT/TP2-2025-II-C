import supabase from "../config/supabase.js";
import Product from "../models/Product.js";

export const crearProducto = async (req, res) => {

    const { titulo, descripcion, precio } = req.body;

    const { usuario } = req

    const files = req.files;

    console.log("Files: ", files);


    if (!titulo || !descripcion || !files || !precio) {
        return res.status(400).json({ error: "Faltan Datos" })
    }

    try {


        let imagenesUrls = []
        if (files && files.length > 0) {

            for (const file of files) {
                const fileName = `${Date.now()}_${file.originalname}`
                const filePath = `productos/${usuario.id}/${titulo}/${fileName}`

                const { data, error } = await supabase.storage
                    .from(process.env.SUPABASE_BUCKET)
                    .upload(filePath, file.buffer, {
                        contentType: file.mimetype,
                        upsert: true
                    })

                if (error) {
                    return res.status(500).json({
                        error: "error al subir la imagen a supabase",
                        errorMensaje: error
                    })
                }

                const { data: publicUrlData } = supabase.storage.from(process.env.SUPABASE_BUCKET).getPublicUrl(filePath)

                imagenesUrls.push(publicUrlData.publicUrl)

            }
        }


        const nuevoProducto = await Product.create({
            titulo,
            descripcion,
            precio,
            imagenes: imagenesUrls,
            userId: usuario.id
        })


        res.status(201).json(nuevoProducto)

    } catch (error) {
        res.status(500).json({ error: "algo fallo" })
    }
}

export const filtarProductos = async (req, res) => {
    const { keyword, userId, desde, hasta } = req.params;

    console.log("keyword: ", keyword);
    

    const query = {}

    if(desde || hasta){
        query.createdAt = {}
        if(desde){
            query.createdAt.$gte = new Date(desde)

        }
        if(hasta){
            query.createdAt.$lte = new Date(hasta)
        }
    }

    if(userId){
        query.userId = userId
    }

    if(keyword){
        query.$or = [
            { titulo: { $regex: keyword, $options: 'i'}},
            {descripcion: { $regex: keyword, $options: 'i'}}
        ]
    }

    try {

        console.log("query: ", query);
        
        const productos = await Product.find(query).populate("user", "")

        res.json(productos);
        
    } catch (error) {
        res.status(500).json({
            error: "Error al filtrar productos"
        })
    }

}