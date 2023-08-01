import { Request, Response } from "express";
import sellersService, { SellersService } from "../service/sellers.service";

export class TansactioController {
  constructor(private sellersService: SellersService) {}

  ListTransactions = async (req: Request, res: Response) => {
    try {
      const response = await this.sellersService.list();
      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };
}

export default new TansactioController(sellersService);
