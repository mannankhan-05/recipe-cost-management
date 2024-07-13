import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // Assuming you have a database connection setup
import Menu from "./menu";
import Ingredient from "./ingredient";

class MenuIngredient extends Model {}
MenuIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    menu_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "menu_ingredient",
  }
);

MenuIngredient.belongsTo(Menu, { foreignKey: "menu_id" });
MenuIngredient.belongsTo(Ingredient, { foreignKey: "ingredient_id" });

export default MenuIngredient;
