import { Request, Response } from "express";
import ingredient from "../models/ingredient";
import logger from "../logger";

// to fetch all ingredients from ingredients table
export const getAllIngredients = (req: Request, res: Response) => {
  ingredient
    .findAll()
    .then((ingredients) => {
      logger.info("Fetched all the ingredients.");
      res.json(ingredients);
    })
    .catch(() => {
      logger.error("Error fetching ingredients!..");
      res.sendStatus(500);
    });
};

// to add a ingredient in ingredients table
export const addIngredient = (req: Request, res: Response) => {
  const { name, price, type } = req.body;

  if (!name || !price || !type) {
    logger.info("Make sure to add all the fields!!.");
    return;
  }

  ingredient
    .create({
      name: name,
      price: price,
      type: type,
    })
    .then(() => {
      logger.info("Added a ingredient in the ingredient table");
      res.sendStatus(200);
    })
    .catch(() => {
      logger.error("Error adding a ingredient");
      res.sendStatus(500);
    });
};
