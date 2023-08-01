import { Seller } from "../repositories/seller/entity/seller.entity";
import repositoryService, { RepositoryService } from "./datasource.service";

export class SellersService {
  constructor(private repositoryService: RepositoryService) {}
  list = () => {
    try {
        const options = { relations: { transactions: true } }
        return this.repositoryService.fintAll(Seller,options)
    } catch (error) {
      console.log(error);
    }
  };
}

export default new SellersService(repositoryService);
