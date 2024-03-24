import { query } from "express";
import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    return res.status(201).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    return res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getHotels = async (req, res, next) => {
    const {min,max,featured} = req.query
  try {
    const hotels = await Hotel.find({featured:featured,cheepestPrice:{$gt:min || 1,$lt:max || 99}}).limit(req.query.limit);
    console.log(hotels,'hotels')
    return res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    return res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const appartmentCount = await Hotel.countDocuments({ type: "hotel" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });

    return res
      .status(200)
      .json([{type:"appartments",count:appartmentCount}, 
      {type:"villas",count:villaCount},
       {type:"cabins",count:cabinCount},
        {type:"hotels",count:hotelCount},
         {type:"resorts",count:resortCount}]);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.delete(req.params.id);
    return res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.findByIdAndUpdate(req.params.id);
    return res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
