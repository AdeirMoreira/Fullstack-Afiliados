import { Transaction } from "typeorm";

export interface TransactionsData {
  transactionType: number;
  date: string;
  product: string;
  value: number;
  seller: string;
}

export interface Type_Transaction {
  idTransaction: number;
  description: string;
  nature: string;
}

export type PartialTransaction = Partial<Transaction>