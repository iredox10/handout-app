import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

import route from './routes/route.js'
import {courseRoute} from './routes/course.js'
import {departmentRoute} from './routes/department.js'
import {schoolRoute} from './routes/school.js'
import {projectRoute} from './routes/project.js'
import {handoutRoute} from './routes/handout.js'


mongoose.connect(process.env.LocalConnection)
.then(res => console.log('connect'))
.catch(err => console.log(err))


const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api', route)
app.use('/api/course', courseRoute)
app.use('/api/department', departmentRoute)
app.use('/api/project', projectRoute)
app.use('/api/school', schoolRoute)
app.use('/api/handout', handoutRoute)

app.use((err,req,res,next) =>{
    const errMsg = err.messager || 'something went wrong'
    const errStatus = err.status || 500
    return res.status(errstatus).json({
        success : false,
        message : errMsg,
        status: errStatus,
        stack : err.stack
    })
})

app.listen(5000)
