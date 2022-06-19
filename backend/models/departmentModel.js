import mongoose from "mongoose";

const departmentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    }],
})

export const Department = mongoose.model('department', departmentModel)