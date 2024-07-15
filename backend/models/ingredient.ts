import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

// This declares a new class Ingredient which extends Model from Sequelize. By extending Model, Ingredient inherits Sequelize's built-in methods for interacting with the database.
class Ingredient extends Model {}

// initializing the Ingredient model and defining its attributes
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
    modelName: "ingredient",
  }
);

export default Ingredient;
