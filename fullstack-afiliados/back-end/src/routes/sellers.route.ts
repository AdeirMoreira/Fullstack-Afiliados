import { Router } from "express";
import SellersController from "../controllers/sellers.controller";

export const SellersRouter = Router()

SellersRouter.get('', SellersController.ListTransactions)

