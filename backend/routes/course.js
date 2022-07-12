import express  from "express";
const route = express.Router()
import * as course from '../controllers/course.js'

route.post('/add-class/:id', course.add_class)

route.post('/add-course/:id', course.add_course)

route.get('/get-courses/:id', course.get_courses)

export const courseRoute= route