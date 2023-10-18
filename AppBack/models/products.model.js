import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
}, { _id: false });


const productsSchema = mongoose.Schema({
    categories: {
        type:Number,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    color: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    size: [sizeSchema],
    img: [
        String   
    ],
});

export default mongoose.model("productos", productsSchema);