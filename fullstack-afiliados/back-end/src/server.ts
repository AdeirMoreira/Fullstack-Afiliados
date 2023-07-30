import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import "reflect-metadata"
import { AppDataSource } from "./datasource/datasource";

dotenv.config();

export const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.API_PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const  openConnection = async () => {
  try {
    await AppDataSource.initialize()
    console.log('successful database connection');
    
  } catch (error) {
    console.log(error);
  }
}

openConnection()

export default AppDataSource
