import {School} from "../models/schoolModel.js";



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
