import {Department}  from "../models/departmentModel.js";

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