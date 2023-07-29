import { Request, Response } from "express";
import uploadService, { UploadService } from "../service/uploadService";

export class UploadController {
  constructor(private uploadService: UploadService) {}

  UploadFile = async (req: Request, res: Response) => {
    try {
      const response = await this.uploadService.execute();
      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}

export default new UploadController(uploadService);
