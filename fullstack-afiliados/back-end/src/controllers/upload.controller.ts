import { Request, Response } from "express";
import uploadService, { UploadService } from "../service/upload.service";
import { ErrorObject } from "../common";
export class UploadController {
  constructor(private uploadService: UploadService) {}

  UploadFile = async (req: Request, res: Response) => {
    try {
      const file: Express.Multer.File | undefined = req.file;
      if (!file?.buffer) {
        res.status(404).send({ message: "Arquivo não enviado." });
      } else {
        const { buffer, originalname } = file;
        const response = await this.uploadService.execute(buffer, originalname);
        res.status(201).send(response);
      }
      
    } catch (error: any) {
      const { obj, status } = ErrorObject("Falha ao processar o arquivo", error);
      res.status(status).send(obj);
    }
  };
}

export default new UploadController(uploadService);
