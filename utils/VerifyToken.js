import jwt from 'jsonwebtoken';
import { createError } from "./error.js";

export const verifyToken = async(req,res,next) =>{
    const token = req.cookies.access_token
    if(!token) return createError(401,"you are not authorized")
     
     jwt.verify(token,process.env.JWT,(error,user) =>{
        if(error) return createError(401,"token is not valid")
        req.user = user
         next()
     })
}

export const verifyUser = async(req,res,next) =>{
   verifyToken(req,res,next,()=>{
       if(req.user.id === req.params.id || req.user.isAdmin){
        next()
       }else{
        createError(402,"unauthorized")
       }
   })
}
export const verifyAdmin = async(req,res,next) =>{
   verifyToken(req,res,next,()=>{
       if(req.user.isAdmin){
        next()
       }else{
        createError(402,"unauthorized")
       }
   })
}