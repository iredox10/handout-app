import express from "express";
import route from './routes/route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.LocalConnection)
.then(res => console.log('connect'))
.catch(err => console.log(err))


const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(route)

app.use((err,req,res,next) =>{
    const errMsg = err.messager || 'something went wrong'
    const errStatus = err.status || 500
    return res.status(errstatus).json({
        success : false,
        message : errMsg,
        status: errStatus
    })
    next()
})

app.listen(5000)
