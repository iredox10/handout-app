import express  from "express";
import * as controller from '../controllers/controller.js'
const route = express.Router()

route.get('/', controller.home)



export default route;