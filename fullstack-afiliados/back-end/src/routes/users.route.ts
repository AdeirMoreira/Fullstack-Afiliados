import { Router } from "express";
import UsersController from "../controllers/users.controller";

export const UsersRouter = Router()

UsersRouter.post('', UsersController.createUser)