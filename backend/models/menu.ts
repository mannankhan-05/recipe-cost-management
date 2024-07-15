import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

// This declares a new class Menu which extends Model from Sequelize. By extending Model, Menu inherits Sequelize's built-in methods for interacting with the database.
class Menu extends Model {}

// initializing the Menu model and defining its attributes
Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    photo: DataTypes.STRING,
    recipe: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "menu",
  }
);

export default Menu;
