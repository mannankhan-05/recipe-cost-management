import menu from "../models/menu";
import ingredient from "../models/ingredient";
import { Request, Response } from "express";
import menu_ingredient from "../models/menu_ingredient";
import logger from "../logger";
import { where } from "sequelize";

// to get all the menus with it's ingredients
export const getAllMenusWithIngredients = (req: Request, res: Response) => {
  menu_ingredient
    .findAll({
      include: [menu, ingredient],
    })
    .then((menus) => {
      res.status(200).json(menus);
    })
    .catch((err) => {
      console.error("Error fetching menus with ingredients:", err);
      res.status(500).json({ error: err.message }); // Send detailed error message
    });
};

// to get a single menu with all it's ingredients
export const getSingleMenuWithIngredients = (req: Request, res: Response) => {
  const id = req.params.id;
  menu_ingredient
    .findAll({
      where: { menu_id: id },
      include: [menu, ingredient],
    })
    .then((menuItem) => {
      logger.info(`Fetched ingredients of menu where menu_id = ${id}`);
      res.status(200).json(menuItem);
    })
    .catch((err) => {
      logger.error(`Error fetching ingredients of menu where menu_id = ${id}`);
      res.sendStatus(500);
    });
};

// to add a new menu with ingredients
export const addMenuWithIngredients = (req: Request, res: Response) => {
  const { menuId, ingredientId, quantity } = req.body;

  menu_ingredient
    .create({
      menu_id: menuId,
      ingredient_id: ingredientId,
      quantity: quantity,
    })
    .then(() => {
      logger.info("Menu with ingredients added successfully");
      res.sendStatus(200);
    })
    .catch((err) => {
      logger.error("Error adding menu with ingredient : ", err);
      res.sendStatus(500);
    });
};
