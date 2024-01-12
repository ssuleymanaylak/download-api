import mongoose from "mongoose";

const downloadSchema = new mongoose.Schema({
    filename: String,
    filePath: String
})


export default mongoose.model("Download", downloadSchema)