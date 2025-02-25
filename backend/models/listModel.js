import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    }
})

export const List = mongoose.Model('List',listSchema)