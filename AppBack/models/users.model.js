import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type:String,
        require:true
    },
    role:{
        type:String,
        default: 'regular'
    }

})

export default mongoose.model("usuarios", userSchema)