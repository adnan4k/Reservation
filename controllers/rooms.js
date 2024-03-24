import Hotel from "../models/Hotel.js";
import room from "../models/Hotel.js";
import Room from "../models/Room.js"


export const createRoom = async(req,res,next) =>{
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);
    try {
         
       const savedRoom = await newRoom.save();
      await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
      return res.status(201).json(savedRoom)
    } catch (error) {
        next(error);
    }
}


export const getRoom = async(req,res,next) =>{
     
    try {
         const room = await room.findById(req.params.id);
         return res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}
export const getRooms = async(req,res,next) =>{
     
    try {
         const rooms = await room.find();
         return res.status(200).json(rooms)
    } catch (error) {
        next(error)
    }
}
export const deleteRoom = async(req,res,next) =>{
      const hotelId = req.params.hotelId
    try {
         const rooms = await Room.findByIdAndDelete(req.params.id);
         await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})

         return res.status(200).json("room has been deleted")
    } catch (error) {
        next(error)
    }
}
export const updateRoom = async(req,res,next) =>{
     
    try {
         const rooms = await room.findByIdAndUpdate(req.params.id);
         return res.status(200).json(rooms)
    } catch (error) {
        next(error)
    }
}