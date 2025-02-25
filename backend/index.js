import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { List } from './models/listModel.js'
import { Task } from './models/taskModel.js'

import bodyparser from'body-parser'

const app = express()
const port = 3030
dotenv.config()

app.use(bodyparser.json())

app.use(cors());

try{
    await mongoose.connect(process.env.url)
    console.log('Connected to MongoDB');

    app.listen(port,(req,res)=>{
        console.log(`Server Running on http://localhost:${port}`);
    });
}catch(err){
    console.log(`Error Connecting to MongoDB ${err.message}`)
}

app.get("/lists",async(req,res)=>{
   const allList = await List.find()
   res.status(200).send(allList)
})

app.post("/lists",(req,res)=>{

    const newList = new List({
        title:req.body.title
    })
    newList.save()
    res.status(200).send(newList)
})

app.patch("/lists/:id",(req,res)=>{

})

app.delete("/lists/:id",(req,res)=>{
    
})