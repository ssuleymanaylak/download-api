import express from "express";
import upload from "../middleware/downloadMiddleware.js";
import {downloadFile, uploadFile} from "../controller/downloadController.js";

const route = express.Router();

route.post("/upload", upload.single("file"), uploadFile)
route.get("/download/:filename", downloadFile)


export default route;