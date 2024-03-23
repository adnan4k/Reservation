import mongoose from "mongoose";
import { Schema } from "mongoose";

const hotelSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
       default:false
    },
    rating:{
        type:Number,
        required:true
    },
    cheepestPrice:{
        type:Number,
        required:true
    },
    rooms:{
        type:[String],
        required:true
    },
    photo:{
        type:[String],
    },
})

export  const Hotel = mongoose.model("Hotel",hotelSchema);