import { Sequelize } from "sequelize";
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_NAME || "default",
  process.env.DATABASE_USERNAME || "default",
  process.env.DATABASE_PASSWORD || "default",
  {
    host: "db",
    dialect: "postgres",
  }
);

export default db;
