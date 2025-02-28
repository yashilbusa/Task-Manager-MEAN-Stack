import mongoose from "mongoose";
import _, { reject } from 'lodash';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    session:{
        token:{
            type:String,
            required:true
        },
        expiresAt:{
            type:Number,
            required:true
        }
    }
})

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    return _.omit(userObject,['password','session']);
}

userSchema.methods.generateAccessAuthToken = function() {
    const user = this;
    return new Promise((resolve,reject)=>{
        jwt.sign(
            { _id: user._id },
            process.env.jwtsecretkey,
            { expiresIn : '20m' },
            (err,token)=>{
                if(!err){
                    resolve(token);
                }
                else{
                    reject();
                }
            }
        )
    })
}

userSchema