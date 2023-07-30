import { Router } from "express";
import transactionsController from "../controllers/transactions.controller";

export const TransactionsRouter = Router()

TransactionsRouter.get('', transactionsController.ListTransactions)

