import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
    comments:{
        type: String,
    },
    year:{
        type: Date,
        required: true
    }
})

export const Project = mongoose.model('project', projectSchema)