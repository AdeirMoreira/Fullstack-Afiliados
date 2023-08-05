import { NextFunction, Request, Response } from "express";
import authenticationService, {
  AuthenticationService,
} from "../service/authentication.service";
import { ErrorObject } from "../common";

export class AuthenticationCrontoller {
  constructor(private authenticationService: AuthenticationService) {}

  Login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const response = await this.authenticationService.login(email, password);
      res.status(200).send(response);
    } catch (error: any) {
      const { obj, status } = ErrorObject("Falha ao fazer login", error, 401);
      res.status(status).send(obj);
    }
  };

  ValidateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        const { obj, status } = ErrorObject("Token inválido", new Error(), 401);
        res.status(status).send(obj);
      }

      this.authenticationService.validateToken(token as string);

      next();
    } catch (error: any) {
      if (error.toString().includes("jwt expired")) {
        error = ErrorObject("Token expirado", error, 401);
      }
      const { obj, status } = ErrorObject("Falha ao fazer login", error, 401);
      res.status(status).send(obj);
    }
  };
}

export default new AuthenticationCrontoller(authenticationService);
