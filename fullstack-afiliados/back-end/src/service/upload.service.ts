import { ErrorObject } from "../common";
import { TransactionsData } from "../common/types";
import transactionService, { TransactionsService } from "./transaction.service";

export class UploadService {
  constructor(private transactionService: TransactionsService) {}

  execute = async (buffer: Buffer, fileName: string) => {
    try {
      const alreadyProcessed = await this.transactionService.findTransaction({
        originFileName: fileName,
      });

      if (alreadyProcessed) {
        return Promise.reject(
          new Error(`This file ${fileName} is already processed`)
        );
      }

      const [transactionsData, errors] = this.checkContent(buffer);

      if (errors.length) {
        return Promise.reject(new Error(errors.toString()));
      }

      await this.transactionService.createTransaction(
        transactionsData as TransactionsData[],
        fileName
      );
      return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  checkContent(content: Buffer) {
    const transactionsData: TransactionsData[] = [];
    const errors: string[] = [];

    const lines = content.toString().split("\r");
    lines.forEach((f, index) => {
      f = f.trim();
      const transactionType = f.substring(0, 1);
      const date = f.substring(1, 26);
      const product = f.substring(26, 56);
      const value = f.substring(56, 66);
      const seller = f.substring(66, f.length);

      if (!transactionType || isNaN(+transactionType)) {
        errors.push(` transaction type on line ${index} `);
      }

      if (!date || isNaN(new Date(date).getTime())) {
        errors.push(` transaction date on line ${index} `);
      }

      if (!product) {
        errors.push(` product seller on line ${index} `);
      }

      if (!value || isNaN(+transactionType)) {
        errors.push(` transaction amount on line ${index} `);
      }

      if (!seller) {
        errors.push(` transaction seller on line ${index} `);
      }

      transactionsData.push({
        transactionType: +transactionType,
        date,
        product: product.trim(),
        value: +value,
        seller,
      });
    });

    return [transactionsData, errors];
  }
}

export default new UploadService(transactionService);
