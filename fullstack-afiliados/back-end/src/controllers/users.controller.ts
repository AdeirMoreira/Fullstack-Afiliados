import { Request, Response } from "express";

import { DatabaseErrorhandling, ErrorObject } from "../common";
import usersService, { UsersService } from "../service/users.service";
import { User } from "../entities/users/user.entity";

export class UsersController {
  constructor(private usersService: UsersService) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password, admin } = req.body;

      const newUser = new User()
      newUser.name = name,
      newUser.email = email,
      newUser.password = password,
      newUser.admin = admin

      const response = await this.usersService.createUser(newUser);
      res.status(201).send(response);
    } catch (error: any) {
      error = DatabaseErrorhandling(error)
      const { obj, status } = ErrorObject("Falha ao criar o usuário", error);
      res.status(status).send(obj);
    }
  }
}

export default new UsersController(usersService);
