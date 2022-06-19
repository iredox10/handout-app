import mongoose from "mongoose";

const handoutSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    img:{
        type: String,
        required: true
    },
    file:{
        type: String,
        required: true
    },
    comment:{
        type: String,
    },
    year:{
        type: Date,
        required: true
    }
})

export const Handout = mongoose.model('handout', handoutSchema)