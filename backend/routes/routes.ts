import express from "express";
import { getAllIngredients, addIngredient } from "../controllers/ingredient";
const router = express.Router();

router.get("/ingredients", getAllIngredients);

router.post("/addIngredient", addIngredient);

export default router;
