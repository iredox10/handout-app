import express  from "express";
import * as controller from '../controllers/controller.js'
const route = express.Router()

route.get('/', controller.home)

route.post('/add-school', controller.add_school)

route.get('/get-schools', controller.get_schools)

route.get('/get-school/:id', controller.get_school)

route.post('/add-department/:id', controller.add_department)

route.get('/get-department/:id', controller.get_departments)

route.get('/get-departments/:id', controller.get_department)

route.post('/add-class/:id', controller.add_class)

route.post('/add-course/:id', controller.add_course)

export default route;