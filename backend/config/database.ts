import { Sequelize } from "sequelize";

const db = new Sequelize("recipe_cost_sys", "postgres", "amk@postgre", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
