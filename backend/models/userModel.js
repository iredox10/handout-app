import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
        unique: true
    },
    regNumber: {
        type: String,
        required: true,
        unique: true
    },
    deparment:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('user', userSchema)