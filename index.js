import express from "express"
import mongoose from "mongoose"
import route from "./routes/downloadRoute.js";


const app = express();

const PORT = 5000;
const URL = "mongodb://localhost:27017/download_file";

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully")

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${{PORT}}`)
    })

}).catch((error)=>console.log(error))

app.use("/api", route)