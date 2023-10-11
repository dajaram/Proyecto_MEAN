import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
}, { _id: false });

const productsSchema = mongoose.Schema({
    product: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: [sizeSchema],
});

export default mongoose.model("productos", productsSchema);