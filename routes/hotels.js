import express, { Router } from "express"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js"
import { verifyAdmin } from "../utils/VerifyToken.js"

 const router = express.Router()
     router.post('/',verifyAdmin,createHotel)
     router.get('/find/:id',getHotel)
     router.get('/',getHotels)
     router.get('/countByType',countByType)
     router.get('/countByCity',countByCity)
     router.delete('/:id',verifyAdmin,deleteHotel)
     router.put('/:id',verifyAdmin,updateHotel)

 export default router