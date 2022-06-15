import express from "express";
import route from './routes/route.js'
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(route)

app.listen(5000)
