import express  from "express";
const route = express.Router()
import * as school from '../controllers/school.js'


route.post('/add-school', school.add_school)

route.get('/get-schools', school.get_schools)

route.get('/get-school/:id', school.get_school)

export const schoolRoute = route