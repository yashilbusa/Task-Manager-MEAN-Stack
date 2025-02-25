import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import List from './models/listModel.js'
import Task from './models/taskModel.js'


const app = express()
const port = 3030

app.use(cors());
app.use(express.json())
dotenv.config()

try{
    await mongoose.connect(process.env.url)
    console.log('Connected to MongoDB');

    app.listen(port,(req,res)=>{
        console.log(`Server Running on http://localhost:${port}`);
    });
}catch(err){
    console.log(`Error Connecting to MongoDB ${err.message}`)
}

app.get("/lists",(req,res)=>{
    res.send("Hello World")
})

app.post("/lists",(req,res)=>{

})

app.patch("/lists/:id",(req,res)=>{

})

app.delete("/lists/:id",(req,res)=>{
    
})