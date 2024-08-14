import express from "express";
import {
  getAllIngredients,
  addIngredient,
  getIngredientId,
} from "../controllers/ingredient";
import {
  getAllMenuItems,
  addMenuItem,
  getMenuItemById,
  updateMenuItemById,
} from "../controllers/menu";
import {
  getAllMenusWithIngredients,
  addMenuWithIngredients,
  getSingleMenuWithIngredients,
} from "../controllers/menu_ingredient";

const router = express.Router();

router.get("/ingredients", getAllIngredients);

router.post("/addIngredient", addIngredient);

router.get("/getIngredientId", getIngredientId);

router.get("/menuItems", getAllMenuItems);

router.get("/menuItem/:id", getMenuItemById);

router.post("/addMenuItem", addMenuItem);

router.put("/updateMenuItem/:id", updateMenuItemById);

router.get("/getMenuIngredients", getAllMenusWithIngredients);

router.get("/getMenuIngredient/:id", getSingleMenuWithIngredients);

router.post("/addMenuIngredient", addMenuWithIngredients);

export default router;
