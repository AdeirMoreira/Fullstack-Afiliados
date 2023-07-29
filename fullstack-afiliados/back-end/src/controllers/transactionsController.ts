import { Request, Response } from "express";
import transactionsService, {
  TransactionsService,
} from "../service/transactionsService";

export class TansactioController {
  constructor(private transactionsService: TransactionsService) {}

  ListTransactions = async (req: Request, res: Response) => {
    try {
      const response = await this.transactionsService.list();
      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };
}

export default new TansactioController(transactionsService);
