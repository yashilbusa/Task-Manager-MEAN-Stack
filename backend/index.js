import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import {List} from './models/listModel.js'
import {Task}  from './models/taskModel.js'

import bodyparser from'body-parser'

const app = express()
const port = 6060
dotenv.config()

app.use(cors());

app.use(express.json())
app.use(bodyparser.json())

try{
    await mongoose.connect(process.env.url)
    console.log('Connected to MongoDB');

    app.listen(port,(req,res)=>{
        console.log(`Server Running on http://localhost:${port}`);
    });
}catch(err){
    console.log(`Error Connecting to MongoDB ${err.message}`)
}

app.get("/",(req,res)=>{
    res.send("Task Manager")
})

app.get("/lists",async(req,res)=>{
   const allList = await List.find()
   res.status(200).send(allList)
})

app.post("/lists",(req,res)=>{

    const { title } = req.body
    
    const newList = new List({
        title
    })

    newList.save()
    console.log(req.body)
    
    res.status(200).send(newList)
})

app.put("/lists/:listId",async(req,res)=>{
    await List.updateOne({ _id:req.params.listId}, { $set: req.body }).then(()=>{
        res.status(200)
    })
})

app.delete("/lists/:listId",async(req,res)=>{
    await List.deleteOne({ _id:req.params.listId}).then(()=>{
        res.status(200)
    })
})

app.get("/lists/:listId/tasks",async(req,res)=>{
    const allTask = await Task.find({listId:req.params.listId})
    res.status(200).send(allTask)
})

app.post("/lists/:listId/tasks",(req,res)=>{

    const newTask = new Task({
        title:req.body.title,
        listId:req.params.listId
    })
    newTask.save()
    res.status(200).send(newTask)
})

app.put("/lists/:listId/tasks/:taskId", async (req, res) => {
    try {
        await Task.updateOne(
            { _id: req.params.taskId, listId: req.params.listId },
            { $set: req.body }
        );
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error });
    }
});


app.delete("/lists/:listId/tasks/:taskId",async(req,res)=>{
    await Task.deleteOne({ _id:req.params.taskId,listId:req.params.listId}).then(()=>{
        res.status(200)
    })
})
app.delete("/lists/:listId/tasks",async(req,res)=>{
    await Task.deleteMany({listId:req.params.listId}).then(()=>{
        res.status(200)
    })
})

app.get("/lists/:listId/tasks/:taskId",async(req,res)=>{
    const allTask = await Task.find({ _id:req.params.taskId,listId:req.params.listId})
    res.status(200).send(allTask)
})