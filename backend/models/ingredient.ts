import db from "../config/database";
import Sequelize from "sequelize";

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
