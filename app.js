import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express();

//middleware


mongoose.connect("mongodb://127.0.0.1:27017/Reservation")
  .then(() => {
    app.listen(2303, () => {
      console.log("App is listening on port", 2303);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
