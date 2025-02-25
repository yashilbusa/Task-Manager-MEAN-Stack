import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
})

export const List = mongoose.model('List',listSchema)