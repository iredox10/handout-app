import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    resourses:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'handout'
    }]
})

export const Class = mongoose.model('class', classSchema)