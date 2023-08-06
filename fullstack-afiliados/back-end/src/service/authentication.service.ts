import * as jwt from "jsonwebtoken";
import { Payload } from "../common/types";
import usersService, { UsersService } from "./users.service";
import { ErrorObject } from "../common";
import hashManagerService, { HashManagerService } from "./hashManager.service";

export class AuthenticationService {
  constructor(
    private userService: UsersService,
    private hashManager: HashManagerService
  ) {}

  login = async (email: string, password: string) => {
    try {
      const user = await this.userService.findUser(email);
      if (!user) {
        return Promise.reject(
          ErrorObject("Usuário não encontrado", new Error(), 404)
        );
      }

      const correctPassword = this.hashManager.compare(password, user.password);
      if (!correctPassword) {
        return Promise.reject(ErrorObject("Senha incorreta", new Error(), 401));
      }

      const token = this.generateToken({
        name: user.name,
        email: user.email,
        admin: user.admin,
      });

      return Promise.resolve({ token });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  generateToken = (payload: Payload): string => {
    const token = jwt.sign(
      {
        payload,
      },
      process.env.JWT_KEY as jwt.Secret,
      {
        expiresIn: process.env.EXPIRESIN,
      }
    );
    return token;
  };

  validateToken = (token: string): string => {
    return jwt.verify(token, process.env.JWT_KEY as jwt.Secret) as any;
  };
}

export default new AuthenticationService(usersService, hashManagerService);
