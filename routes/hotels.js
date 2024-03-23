import express, { Router } from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js"

 const router = express.Router()
     router.post('/',createHotel)
     router.get('/:id',getHotel)
     router.get('/',getHotels)
     router.delete('/:id',deleteHotel)
     router.put('/:id',updateHotel)

 export default router