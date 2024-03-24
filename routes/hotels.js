import express, { Router } from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js"
import { verifyAdmin } from "../utils/VerifyToken.js"

 const router = express.Router()
     router.post('/',verifyAdmin,createHotel)
     router.get('/:id',getHotel)
     router.get('/',getHotels)
     router.delete('/:id',verifyAdmin,deleteHotel)
     router.put('/:id',verifyAdmin,updateHotel)

 export default router