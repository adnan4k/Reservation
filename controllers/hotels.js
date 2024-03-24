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

export const getHotel = async(req,res,next) =>{
     
    try {
         const hotel = await Hotel.findById(req.params.id);
         return res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}
export const getHotels = async(req,res,next) =>{
     
    try {
         const hotels = await Hotel.find();
         return res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}
export const countByCity = async(req,res,next) =>{
      const cities = req.query.cities.split(",")
    try {
         const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city:city})
         }));
         return res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}
export const deleteHotel = async(req,res,next) =>{
     
    try {
         const hotels = await Hotel.delete(req.params.id);
         return res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}
export const updateHotel = async(req,res,next) =>{
     
    try {
         const hotels = await Hotel.findByIdAndUpdate(req.params.id);
         return res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}