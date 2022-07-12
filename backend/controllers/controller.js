import {School} from "../models/schoolModel.js";
import {Department}  from "../models/departmentModel.js";
import {Class}  from "../models/classModel.js";
import {Course}  from "../models/courseModel.js";
import {User}  from "../models/userModel.js";
import {Project}  from "../models/projectsModel.js";
import { Handout } from "../models/handoutModel.js";


export const home = async (req,res) =>{
    try {
        const schools = await School.find()
        res.status(200).json(schools)
    } catch (err) {
        
    }
}



export const add_department = async (req,res) =>{
    try {
        const department = await Department.create(req.body)
        const school = await School.findById(req.params.id)
        school.departments.push(department)
        await school.save()
        res.status(201).json({ department})
    } catch (err) {
        
    }
}

export const get_departments = async (req,res) =>{
    const departments = await Department.findById(req.params.id)
    res.status(200).json(department)
}

export const get_department = async (req,res) =>{
    try {
        const department = await Department.findById(req.params.id).name
        const classes = await Department.findById(req.params.id).populate('classes')
        res.status(200).json({department,classes})
    } catch (err) {
        console.log(err)
    }
}

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


