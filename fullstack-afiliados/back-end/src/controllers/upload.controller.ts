import { Request, Response } from "express";
import uploadService, { UploadService } from "../service/upload.service";
export class UploadController {
  constructor(private uploadService: UploadService) {}

  UploadFile = async (req: Request, res: Response) => {
    try {
      const file: Express.Multer.File | undefined = req.file;
      if (!file?.buffer) {
        res.status(404).send({ message: "Arquivo não enviado." });
      } else {
        const { buffer } = file;
        const response = await this.uploadService.execute(buffer);
        res.status(201).send(response);
      }
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };
}

export default new UploadController(uploadService);
