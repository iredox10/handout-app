import mongoose from "mongoose";

const handoutSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    file:{
        type: String,
        required: true
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
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