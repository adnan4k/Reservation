import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export const register  = async(req,res,next) =>{
 const {
    username,
    email,
    name,
    password
 } = req.body
 var salt = bcrypt.genSaltSync(10);
 var hash = bcrypt.hashSync(password, salt);
 try {
     const newUser = new User({
        password:hash,
        username:username,
        name:name,
        email:email
     })
     await newUser.save()
     return res.status(201).json('user has been created')
 } catch (error) {
    next(error)
 }
}

export const login = async(req,res,next) =>{
    
   try {

      const user = await User.findOne({username:req.body.username})
       if(!user) return createError(404,"user not found");
        
       const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
       if(!isPasswordCorrect) return createError(400,"username or password incorrect")
         const {password,isAdmin,...otherDetails} = user._doc
       return res.status(200).json({...otherDetails});
   } catch (error) {
      next(error)
   }
}