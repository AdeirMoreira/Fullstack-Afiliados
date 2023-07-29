import { Router } from "express";
import uploadController from "../controllers/uploadController";
import multer from "multer";

const upload = multer();

export const UploadRoutes = Router();

UploadRoutes.post("", upload.single("file"), uploadController.UploadFile);
