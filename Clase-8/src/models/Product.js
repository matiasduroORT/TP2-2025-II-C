import mongoose from 'mongoose'

const productScheme = mongoose.Schema({
    titulo: { type: String, required: true},
    descripcion:{ type: String, required: true},
    precio:{type: Number, requred: true},
    imagenes:[{ type: String}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
}, { timestamps: true}) 


export default mongoose.model("Product", productScheme)
