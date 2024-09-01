// require("dotenv").config();
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()



/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");

    app.on("error",(error)=>{
        console.error("Error starting server",error);
    })

    app.listen(3000, () => {
      console.log("Server started on http://localhost:3000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
})();
*/