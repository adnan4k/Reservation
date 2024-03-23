import express, { Router } from "express"
import { createHotel } from "../controllers/hotels.js"

 const router = express.Router()
     router.post('/',createHotel)

 export default router