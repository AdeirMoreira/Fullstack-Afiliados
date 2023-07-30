import { DataSource } from "typeorm";
import { User } from "../repositories/users/entity/user.entity";
import { Transaction } from "../repositories/transactions/entity/transaction.entity";
import { CreateTableTransactions1690680771837 } from "./migrations/1690680771837-createTableTransactions";
import { CreateTableUsers1690683179201 } from "./migrations/1690683179201-createTableUsers";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "test",
  database: "mysql",
  entities: [User, Transaction],
  migrations: [CreateTableUsers1690683179201,
    CreateTableTransactions1690680771837,
  ],
});
