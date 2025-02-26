import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    }
})

export const List = mongoose.model('List',listSchema)