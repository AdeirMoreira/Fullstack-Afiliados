interface TransactionsData {
  transactionType: number;
  date: string;
  product: string;
  value: number;
  seller: string;
}

export class UploadService {
  execute = (buffer: Buffer) => {
    const [transactionsData, errors] = this.checkContent(buffer);
    console.log("T", transactionsData);
    console.log("E", errors);

    if (errors.length) {
      return Promise.reject(
        new Error(
          `The following errors were found in the file ${errors.toString()}`
        )
      );
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

export default new UploadService();
