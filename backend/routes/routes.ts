import express from "express";
import { getAllIngredients, addIngredient } from "../controllers/ingredient";
import {
  getAllMenuItems,
  addMenuItem,
  getMenuItemById,
  updateMenuItemById,
} from "../controllers/menu";
const router = express.Router();

router.get("/ingredients", getAllIngredients);

router.post("/addIngredient", addIngredient);

router.get("/menuItems", getAllMenuItems);

router.get("/menuItem/:id", getMenuItemById);

router.post("/addMenuItem", addMenuItem);

router.put("/updateMenuItem/:id", updateMenuItemById);

export default router;
