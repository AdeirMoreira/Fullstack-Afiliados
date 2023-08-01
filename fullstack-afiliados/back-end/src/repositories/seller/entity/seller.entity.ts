import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "../../transactions/entity/transaction.entity";

@Entity({ name: "Sellers" })
export class Seller {
  @PrimaryGeneratedColumn("identity", { name: "idSeller" })
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  name!: string;

  @Column({
    name: "balance",
    type: "int",
    nullable: false,
  })
  balance!: number;

  @CreateDateColumn({name: 'createdAt'})
  createadAt?: string;

  @UpdateDateColumn({name: 'updateddAt'})
  updatedAt?: string;

  @DeleteDateColumn({name: 'deletedAt'})
  deleteaAt?: string;

  @OneToMany(() => Transaction, (transactions) => transactions.idSeller)
  transactions!: Transaction[]
}
