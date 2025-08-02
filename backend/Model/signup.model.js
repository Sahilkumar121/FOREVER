import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const userData = new mongoose.model("signUp", userSchema);

export default userData;