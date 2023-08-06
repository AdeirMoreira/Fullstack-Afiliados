import { DataSource, DataSourceOptions } from "typeorm";
import { Seller } from "../entities/seller/seller.entity";
import { Transaction } from "../entities/transactions/transaction.entity";
import { CreateTableTransactions1690680771837 } from "./migrations/1690680771837-createTableTransactions";
import { CreateTableSellers1690683179201 } from "./migrations/16906805179201-createTableSellers";
import { CreateTableDOMTypeTransaction1690719361711 } from "./migrations/1690719361711-createTableDOM_Type_Transaction";
import { AddForeikeyIdsellerTableTransactions1690717597123 } from "./migrations/1690717597123-addRoreikeyIdsellerTableTransactions";
import { PopulateTableDOMTypeTransaction1690722280817 } from "./migrations/1690722280817-populateTableDOM_Type_Transaction";
import { User } from "../entities/users/user.entity";
import { CreateTableUsers1691236333033 } from "./migrations/1691236333033-createTableUsers";

const dataSourceOptions:DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Seller, Transaction, User],
  synchronize: false,
  migrations: [
    CreateTableSellers1690683179201,
    CreateTableTransactions1690680771837,
    AddForeikeyIdsellerTableTransactions1690717597123,
    CreateTableDOMTypeTransaction1690719361711,
    PopulateTableDOMTypeTransaction1690722280817,
    CreateTableUsers1691236333033,
  ],
}

export const AppDataSource = new DataSource(dataSourceOptions);
