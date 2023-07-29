import { Router } from "express";
import transactionsController from "../controllers/transactionsController";

export const TransactionsRouter = Router()

TransactionsRouter.get('', transactionsController.ListTransactions)

