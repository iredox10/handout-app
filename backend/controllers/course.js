import {Class}  from "../models/classModel.js";
import {Course}  from "../models/courseModel.js";

export const add_class = async (req,res) =>{
    try {
        const classs = await Class.create(req.body)
        const department = await Department.findById(req.params.id)
        department.classes.push(classs)
        await department.save()
        res.status(201).json(classs)
    } catch (err) {
        console.log(err)
    }
}

export const add_course = async (req,res) =>{
    try {
        const course = await Course.create(req.body)
        const level = await Class.findById(req.params.id)
        level.courses.push(course)
        await level.save()
        res.status(201).json({course,level})
    } catch (err) {
        console.log(err)
    }
}

export const get_courses = async (req,res) =>{
    try{
        const level = await Class.findById(req.params.id)
        const courses = await Class.findById(req.params.id).populate('courses')
        res.json({courses})
    }catch (err) {
        console.log(err)
    }
}