import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required: true,
        // unique: true
    },
    courseCode: {
        type: String,
        required: true,
        // unique: true
    },
    handouts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'handout' 
    }]
})

export const Course = mongoose.model('course', courseSchema)