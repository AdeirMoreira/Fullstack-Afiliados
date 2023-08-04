import { DataSource } from "typeorm";
import { Seller } from "../entities/seller/entity/seller.entity";
import AppDataSource from "../server";

export class SellersService {
  constructor(private datasource: DataSource) {}
  list = () => {
    try {
      return this.datasource.manager.find(Seller, {
        relations: { transactions: true },
      });
    } catch (error) {
      console.log(error);
      return Promise.reject(error)
    }
  };
}

export default new SellersService(AppDataSource);
