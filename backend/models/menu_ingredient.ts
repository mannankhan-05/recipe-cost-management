import db from "../config/database";
import Sequelize from "sequelize";

const menu_ingredient = db.define(
  "menu_ingredient",
  {
    menu_id: {
      type: Sequelize.INTEGER,
    },
    ingredient_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "menu_ingredient",
    timestamps: true,
  }
);

export default menu_ingredient;
