import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // Assuming you have a database connection setup

class Menu extends Model {}
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
  },
  {
    sequelize,
    modelName: "menu",
  }
);

export default Menu;
