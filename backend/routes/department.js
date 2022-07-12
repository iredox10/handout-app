import express  from "express";
const route = express.Router()
import * as department from '../controllers/department.js'

route.post('/add-department/:id', department.add_department)

route.get('/get-department/:id', department.get_departments)

route.get('/get-departments/:id', department.get_department)

export const departmentRoute = route