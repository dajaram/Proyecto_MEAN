import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    product: {
        type: String,
        require: true,
    },
    size: {
        type: String,
        require: true,
    },
    stock: {
        type: String,
        require: true,
    },

}
)

export default mongoose.model("productos", productsSchema)