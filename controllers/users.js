import User from "../models/User.js"

export const register  = async(req,res,next) =>{
 const {
    username,
    email,
    name,
    password
 } = req.body

 try {
     const newUser = new User({
        password:password,
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