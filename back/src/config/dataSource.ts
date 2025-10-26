import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource(
  DATABASE_URL
    ? {
        type: "postgres",
        url: DATABASE_URL,
        synchronize: true,
        dropSchema: false,
        logging: false,
        entities: [User, Credential, Order, Product, Category],
        subscribers: [],
        migrations: [],
      }
    : {
        type: "postgres",
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        synchronize: true,
        dropSchema: false,
        logging: false,
        entities: [User, Credential, Order, Product, Category],
        subscribers: [],
        migrations: [],
      }
);
