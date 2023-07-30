import { DataSource } from "typeorm";
import { User } from "../repositories/users/entity/user.entity";
import { Transaction } from "../repositories/transactions/entity/transaction.entity";
import { CreateTableTransactions1690680771837 } from "./migrations/1690680771837-createTableTransactions";
import { CreateTableUsers1690683179201 } from "./migrations/1690683179201-createTableUsers";
import { CreateTableDOMTypeTransaction1690719361711 } from "./migrations/1690719361711-createTableDOM_Type_Transaction";
import { AddForeikeyIduserTableTransactions1690717597123 } from "./migrations/1690717597123-addRoreikeyIduserTableTransactions";
import { PopulateTableDOMTypeTransaction1690722280817 } from "./migrations/1690722280817-populateTableDOM_Type_Transaction";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "test",
  database: "mysql",
  entities: [User, Transaction],
  migrations: [
    CreateTableUsers1690683179201,
    CreateTableTransactions1690680771837,
    AddForeikeyIduserTableTransactions1690717597123,
    CreateTableDOMTypeTransaction1690719361711,
    PopulateTableDOMTypeTransaction1690722280817
  ],
});
