import { Request, Response } from "express";
import ingredient from "../models/ingredient";
import logger from "../logger";
import fs from "fs";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "ingredientImages/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// to fetch all ingredients from ingredients table
export const getAllIngredients = (req: Request, res: Response) => {
  ingredient
    .findAll()
    .then((ingred) => {
      logger.info("Fetched all the ingredients.");

      const result = ingred.map((ing: any) => {
        if (ing.picture) {
          ing.picture = `http://localhost:5000/ingredientImages/${ing.picture}`;
        }
        return ing;
      });

      res.json(result);
    })
    .catch(() => {
      logger.error("Error fetching ingredients!..");
      res.sendStatus(500);
    });
};

// to add a ingredient in ingredients table
export const addIngredient = (req: Request, res: Response) => {
  upload.single("ingredientImage")(req, res, (err) => {
    if (err) {
      logger.error("Error uploading ingredientImage");
      // res.sendStatus(500);
    }
    const { name, price, type } = req.body;
    const picture = req.file ? req.file.filename : null;

    if (!name || !price || !type) {
      logger.info("Make sure to add all the fields!!.");
      return;
    }

    ingredient
      .create({
        name: name,
        price: price,
        type: type,
        picture: picture,
      })
      .then(() => {
        logger.info("Added a ingredient in the ingredient table");
        console.log(picture);
        res.sendStatus(200);
      })
      .catch(() => {
        logger.error("Error adding a ingredient");
        res.sendStatus(500);
      });
  });
};

// to get the id of the ingredient from the ingredient selected in the frontend
export const getIngredientId = (req: Request, res: Response) => {
  const { name } = req.query;

  ingredient
    .findOne({
      where: {
        name: name,
      },
    })
    .then((result) => {
      logger.info(
        `Fetched the id of the ingredient where ingredient name is ${name}`
      );
      res.json(result);
    })
    .catch(() => {
      logger.error(
        `Error fetching the id of the ingredient where ingredient name is ${name}`
      );
      res.sendStatus(500);
    });
};

// to get the prices of the ingredients selected in the frontend
export const getIngredientPrice = (req: Request, res: Response) => {
  const { name } = req.query;

  ingredient
    .findOne({
      where: {
        name: name,
      },
    })
    .then((result) => {
      logger.info(
        `Fetched the price of the ingredient where ingredient name is ${name}`
      );
      res.json(result);
    })
    .catch(() => {
      logger.error(
        `Error fetching the price of the ingredient where ingredient name is ${name}`
      );
      res.sendStatus(500);
    });
};
