import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    listId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

export const Task = mongoose.model('Task',taskSchema)