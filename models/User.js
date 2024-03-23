import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    isAdmin:{
        type:Boolean,
       default:false
    },
  
})

export default mongoose.model("User", userSchema);
