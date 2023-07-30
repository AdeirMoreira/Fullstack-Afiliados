import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Transaction" })
export class Transaction {
  @PrimaryGeneratedColumn("identity", { name: "idTransaction" })
  id!: number;

  @Column({ name: "typeTransaction", type: "int", nullable: false })
  type!: number;

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

  @CreateDateColumn({name: 'createdAt'})
  createadAt?: string;

  @UpdateDateColumn({name: 'updateddAt'})
  updatedAt?: string;

  @DeleteDateColumn({name: 'deletedAt'})
  deleteaAt?: string;
}
