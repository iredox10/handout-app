import { Handout } from "../models/handoutModel.js";
import {Course}  from "../models/courseModel.js";

export const add_handout = async (req,res) =>{
    try {
        const handout = await Handout.create(req.body)
        const course = await Course.findById(req.params.id)
        course.resources.push(handout)
        await course.save()
        res.status(201).json(course)
    } catch (err) {
        console.log(err)
    }
}