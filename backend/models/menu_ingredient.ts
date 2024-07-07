import db from "../config/database";
import menu from "./menu";
import ingredient from "./ingredient";
import Sequelize from "sequelize";

const menu_ingredient = db.define(
  "menu_ingredient",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    menu_id: {
      type: Sequelize.INTEGER,
      references: {
        model: menu,
        key: "id",
      },
    },
    ingredient_id: {
      type: Sequelize.INTEGER,
      references: {
        model: ingredient,
        key: "id",
      },
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "menu_ingredient",
    timestamps: true,
  }
);

// explained below both the lines in menu_ingredients_doc.txt file
menu.belongsToMany(ingredient, {
  through: menu_ingredient,
  foreignKey: "menu_id",
});
ingredient.belongsToMany(menu, {
  through: menu_ingredient,
  foreignKey: "ingredient_id",
});

export default menu_ingredient;
