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

export const add_school = async (req,res) =>{
    try {
        const school = await School.create(req.body)
        res.status(201).json(school)
    } catch (err) {
        console.log(err)
    }
}

export const get_schools = async (req,res) =>{
    try {
        const schools = await School.find()
        res.status(200).json({schools})
    } catch (err) {
        
    }
}

export const get_school = async (req,res,next) =>{
    try {
        const school = await School.findById(req.params.id)
        const department = await School.findById(req.params.id).populate('departments')
        !school ? next() : res.status(200).json({school,department})
    } catch (err) {
        console.log(err)
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
        const classs = await classs.findById(req.params.id)
        classs.courses.push(course)
        await classs.save()
        res.status(201).json({course,classs})
    } catch (err) {
        console.log(err)
    }
}

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
