import { DataSource } from "typeorm";
import AppDataSource from "../server";
import { User } from "../entities/users/user.entity";
import validateService, { ValidateService } from "./validate.service";
import { DatabaseErrorhandling } from "../common";

export class UsersService {
  constructor(
    private appDataSource: DataSource,
    private validatorService: ValidateService
  ) {}

  createUser = async (newUser: User) => {
    try {
      await this.validatorService.validateUser(newUser)
      return this.appDataSource.manager.save(User, newUser)
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}

export default new UsersService(
    AppDataSource, validateService
    );
