import db from "../config/database";
import Sequelize from "sequelize";

const menu = db.define(
  "menu",
  {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    photo: {
      type: Sequelize.STRING,
    },
    recipe: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "menu",
    timestamps: true,
  }
);

export default menu;
