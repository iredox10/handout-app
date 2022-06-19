import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className:{
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    courses:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
})

export const Class = mongoose.model('class', classSchema)