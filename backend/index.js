import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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