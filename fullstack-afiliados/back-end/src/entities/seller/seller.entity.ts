import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "../transactions/transaction.entity";

@Entity({ name: "Sellers" })
export class Seller {
  @PrimaryGeneratedColumn("increment", { name: "idSeller" })
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
    length: 250,
    unique: true,
    nullable: false,
  })
  name!: string;

  @Column({
    name: "balance",
    type: "int",
    nullable: false,
  })
  balance!: number;

  @CreateDateColumn({ name: "createdAt" })
  createadAt?: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt?: string;

  @DeleteDateColumn({ name: "deletedAt" })
  deleteaAt?: string;

  @OneToMany(() => Transaction, (transaction) => transaction.idSeller)
  transactions!: Transaction[];
}
