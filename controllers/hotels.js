import Hotel  from "../models/Hotel.js";

export  const createHotel = async(req,res,next) =>{
   const newHotel = new Hotel(req.body)
    try {
        const  savedHotel = await newHotel.save();
        return res.status(201).json(savedHotel);
    } catch (error) {
        next(error)
    }
}