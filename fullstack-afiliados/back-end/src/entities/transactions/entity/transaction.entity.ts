import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Seller } from "../../seller/entity/seller.entity";

@Entity({ name: "Transactions" })
export class Transaction {
  @PrimaryGeneratedColumn("increment", { name: "idTransaction" })
  id!: number;

  @Column({
    name: "originFileName",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  originFileName!: string;

  @Column({ name: "typeTransaction", type: "int", nullable: false })
  type!: number;

  @Column({
    name: "description",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  description!: string;

  @Column({ name: "dateTransaction", type: "datetime", nullable: false })
  date!: string;

  @Column({
    name: "product",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  product!: string;

  @Column({
    name: "value",
    type: "int",
    nullable: false,
  })
  value!: number;

  @Column({
    name: "seller",
    type: "varchar",
    length: 250,
    nullable: false,
  })
  seller!: string;

  @CreateDateColumn({ name: "createdAt" })
  createadAt?: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt?: string;

  @DeleteDateColumn({ name: "deletedAt" })
  deleteaAt?: string;

  @ManyToOne(() => Seller, (seller) => seller.transactions)
  idSeller!: number;
}
