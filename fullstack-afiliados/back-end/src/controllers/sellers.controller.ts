import { Request, Response } from "express";
import sellersService, { SellersService } from "../service/sellers.service";
import { ErrorObject } from "../common";

export class SellersController {
  constructor(private sellersService: SellersService) {}

  ListSellers = async (req: Request, res: Response) => {
    try {
      const response = await this.sellersService.list();
      res.status(200).send(response);
    } catch (error: any) {
      const { obj, status } = ErrorObject("Failed to list sellers", error);
      res.status(status).send(obj.error);
    }
  };
}

export default new SellersController(sellersService);
