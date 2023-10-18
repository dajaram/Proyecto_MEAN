import mongoose from "mongoose";

const productSelectedSchema = new mongoose.Schema({
    productId: {
        type : mongoose.ObjectId, ref: 'productos' 
   },
    size: {
        type: String,
        require: true
    },
},{ _id: false })


const orderSchema = mongoose.Schema ({
   
    userId:{
         type : mongoose.ObjectId, ref: 'usuarios' 
    },
    productsId: [productSelectedSchema],
    total: {
        type: Number,
        require: true
    },
})

export default mongoose.model("ordenes", orderSchema);