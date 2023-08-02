import { DataSource } from "typeorm";
import { TransactionsData, Type_Transaction } from "../common/types";
import { Seller } from "../entities/seller/entity/seller.entity";
import AppDataSource from "../server";
import { Transaction } from "../entities/transactions/entity/transaction.entity";

export class TransactionsService {
  constructor(private dataSource: DataSource) {}

  async createTransaction(
    transactionsData: TransactionsData[],
    fileName: string
  ) {
    try {
      const transactionsTypes: Type_Transaction[] = await this.dataSource.query(
        "SELECT * FROM DOM_Type_Transaction"
      );

      for (const transaction of transactionsData) {
        let seller = await this.dataSource.manager.findOne(Seller, {
          where: { name: transaction.seller },
        });

        if (!seller) {
          seller = await this.dataSource.manager.save(Seller, {
            name: transaction.seller,
            balance: 0,
            transactions: [],
          });
        }

        const typeTransaction = transactionsTypes.find(
          (t) => t.idTransaction === transaction.transactionType
        );

        const newTransaction: Partial<Transaction> = {
          type: transaction.transactionType,
          description: typeTransaction?.description,
          date: transaction.date,
          originFileName: fileName,
          product: transaction.product,
          seller: transaction.seller,
          value: transaction.value,
          idSeller: seller.id,
        };

        await this.dataSource.manager.save(Transaction, newTransaction);

        let newBalance = seller.balance;
        if (typeTransaction?.nature === "+") {
          newBalance += transaction.value;
        } else {
          newBalance -= transaction.value;
        }

        await this.dataSource.manager.update(Seller, seller.id, {
          balance: newBalance,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  findTransaction(where: Partial<Transaction>) {
    try {
      return this.dataSource.manager.findOne(Transaction, { where });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TransactionsService(AppDataSource);
