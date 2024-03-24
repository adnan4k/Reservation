import express, { Router } from "express"
import {deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js"

 const router = express.Router()
    
 router.get('/authentication',verifyToken,(req,res)=>{
    res.send("hello user you are logged in")
 })
     router.get('/:id',verifyUser,getUser)
     router.get('/',verifyAdmin,getUsers)
     router.delete('/:id',verifyUser,deleteUser)
     router.put('/:id',verifyUser,updateUser)

 export default router