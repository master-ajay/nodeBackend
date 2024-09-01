// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {

    app.on('error',(error)=>{
        console.error("Error starting server",error);
    })

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server started on http://localhost:${process.env.PORT || 8000}`
      );
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  });

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
