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
          model: ingredient,
          through: {
            attributes: ["quantity"],
          },
        },
        {
          model: menu,
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    })
    .then((menus) => {
      res.status(200).json(menus);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
