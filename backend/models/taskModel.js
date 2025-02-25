import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    listId:{
        type:mongoose.Types.ObjectId,
        require:true
    }
})

export const Task = mongoose.Model('Task', TaskSchema)