import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // Assuming you have a database connection setup

class Ingredient extends Model {}
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "ingredient",
  }
);

export default Ingredient;
