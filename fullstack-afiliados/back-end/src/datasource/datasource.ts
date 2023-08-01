import { DataSource } from "typeorm";
import { Seller } from "../repositories/seller/entity/seller.entity";
import { Transaction } from "../repositories/transactions/entity/transaction.entity";
import { CreateTableTransactions1690680771837 } from "./migrations/1690680771837-createTableTransactions";
import { CreateTableSellers1690683179201 } from "./migrations/16906805179201-createTableSellers";
import { CreateTableDOMTypeTransaction1690719361711 } from "./migrations/1690719361711-createTableDOM_Type_Transaction";
import { AddForeikeyIdsellerTableTransactions1690717597123 } from "./migrations/1690717597123-addRoreikeyIdsellerTableTransactions";
import { PopulateTableDOMTypeTransaction1690722280817 } from "./migrations/1690722280817-populateTableDOM_Type_Transaction";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  entities: [Seller, Transaction],
  synchronize: false,
  migrations: [
    CreateTableSellers1690683179201,
    CreateTableTransactions1690680771837,
    AddForeikeyIdsellerTableTransactions1690717597123,
    CreateTableDOMTypeTransaction1690719361711,
    PopulateTableDOMTypeTransaction1690722280817,
  ],
});
