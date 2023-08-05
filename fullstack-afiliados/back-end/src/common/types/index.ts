import { Transaction } from "typeorm";
import { ErrorRequest } from "..";

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

export type Error_Object = {
  obj : ErrorRequest
  status: number
}

export type Payload = {
  email: string,
  name: string,
  admin: boolean
}