import Sequelize from "sequelize";
import db from "../config/database";

const ingredient = db.define(
  "ingredient",
  {
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
