import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    }
})

export const List = mongoose.Model('List', ListSchema)