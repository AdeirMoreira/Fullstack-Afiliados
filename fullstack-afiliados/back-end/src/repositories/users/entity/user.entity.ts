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

@Entity({ name: "Users" })
export class User {
  @PrimaryGeneratedColumn("identity", { name: "idUser" })
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

  @OneToMany(() => Transaction, (transactions) => transactions.idUser)
  transactions!: Transaction[]
}
