import express, { Router } from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js"
import { verifyAdmin } from "../utils/VerifyToken.js"

 const router = express.Router()
     router.post('/:hotelId',verifyAdmin,createRoom)
     router.get('/:id',getRoom)
     router.get('/',getRooms)
     router.delete('/:id',verifyAdmin,deleteRoom)
     router.put('/:id',verifyAdmin,updateRoom)

 export default router