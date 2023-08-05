import { DataSource } from "typeorm";
import AppDataSource from "../server";
import { User } from "../entities/users/user.entity";
import validateService, { ValidateService } from "./validate.service";
import hashManagerService, { HashManagerService } from "./hashManager.service";

export class UsersService {
  constructor(
    private appDataSource: DataSource,
    private validatorService: ValidateService,
    private hashManagerService: HashManagerService
  ) {}

  createUser = async (newUser: User) => {
    try {
      await this.validatorService.validateUser(newUser);

      const hashPassword = this.hashManagerService.hash(newUser.password);
      newUser.password = hashPassword;

      return this.appDataSource.manager.save(User, newUser);
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  async findUser(email: string) {
    try {
      return this.appDataSource.manager.findOneBy(User, { email });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new UsersService(
  AppDataSource,
  validateService,
  hashManagerService
);
