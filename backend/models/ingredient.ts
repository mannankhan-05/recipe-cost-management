import Sequelize from "sequelize";
import db from "../config/database";

const ingredient = db.define(
  "ingredient",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    type: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "ingredient",
    timestamps: true,
  }
);

export default ingredient;
