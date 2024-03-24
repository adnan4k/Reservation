import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
dotenv.config();


//middleware
app.use('/auth',authRoute)
app.use('/hotels',hotelsRoute)
app.use('/rooms',roomsRoute)
app.use('/users',usersRoute)

app.use((err,req,res,next) =>{
   const errorStatus = err.status || 500;
   const errorMessage = err.message ||" something went wrong";

   return res.status(errorStatus).json({
    status:errorStatus,
    success:false,
    message:errorMessage,
    stack:err.stack
   })
})

mongoose.connect("mongodb://127.0.0.1:27017/Reservation")
  .then(() => {
    app.listen(2303, () => {
      console.log("App is listening on port", 2303);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
