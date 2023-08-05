import { Router } from "express";
import AuthController from "../controllers/authentication.controller";

export const AuthRouter = Router()

AuthRouter.post('', AuthController.Login)