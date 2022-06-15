import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    departments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department' 
    }]
})

export const School = mongoose.model('school', schoolSchema)