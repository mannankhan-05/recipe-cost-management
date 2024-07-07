import menu from "../models/menu";
import ingredient from "../models/ingredient";
import { Request, Response } from "express";
import menu_ingredient from "../models/menu_ingredient";

// to get all the menus with it's ingredients
export const getAllMenusWithIngredients = (req: Request, res: Response) => {
  menu_ingredient
    .findAll({
      include: [
        {
          model: menu,
          // through: {
          //   attributes: ["quantity"],
          // },
        },
        {
          model: ingredient,
          // through: {
          //   attributes: ["quantity"],
          // },
        },
      ],
    })
    .then((menus) => {
      res.status(200).json(menus);
    })
    .catch((err) => {
      console.error("Error fetching menus with ingredients:", err);
      res.status(500).json({ error: err.message }); // Send detailed error message
    });
};
