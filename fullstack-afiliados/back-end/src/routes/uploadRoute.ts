import { Router } from "express";
import uploadController from "../controllers/uploadController";




export const UploadRoutes = Router()

UploadRoutes.get('', uploadController.UploadFile)