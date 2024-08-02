import { Request, Response } from "express";
import logger from "../logger";
import menu from "../models/menu";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "menuImages/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// to get all the items from the menu table
export const getAllMenuItems = (req: Request, res: Response) => {
  menu
    .findAll()
    .then((menuItems) => {
      logger.info("Fetched all the items in the menu.");
      res.json(menuItems);
    })
    .catch(() => {
      logger.error("Error fetching all the items in the menu!!.");
      res.sendStatus(500);
    });
};

// to get a item from the menu table by id
export const getMenuItemById = (req: Request, res: Response) => {
  const id = req.params.id;

  menu
    .findByPk(id)
    .then((menuItem) => {
      logger.info(`Fetched the menuItem where id of item is ${id}`);
      res.json(menuItem);

      if (!menuItem) {
        logger.info("We are unable to find the ID you provided!!.");
      }
    })
    .catch(() => {
      logger.error(`Error when fetching the menuItem whose id is ${id}`);
      res.sendStatus(500);
    });
};

// to add a item in the menu table
export const addMenuItem = (req: Request, res: Response) => {
  upload.single("menuImage")(req, res, (err) => {
    if (err) {
      logger.error("Error uploading menuImage");
    }

    const { name, price, recipe } = req.body;
    const photo = req.file ? req.file.filename : null;

    if (!name || !price || !recipe) {
      logger.info("Make sure to add all the fields!!.");
      return 0;
    }

    menu
      .create({
        name: name,
        price: price,
        photo: photo,
        recipe: recipe,
      })
      .then(() => {
        logger.info("Added the menuItem in the menu table");
        res.sendStatus(200);
      })
      .catch(() => {
        logger.error("Error when adding the menuItem");
        res.sendStatus(500);
      });
  });
};

// to update a item in the menu table
export const updateMenuItemById = (req: Request, res: Response) => {
  const { name, price, photo, recipe } = req.body;
  const id = req.params.id;
  menu
    .update(
      {
        name: name,
        price: price,
        photo: photo,
        recipe: recipe,
      },
      {
        where: { id: id },
      }
    )
    .then(() => {
      logger.info(`Updated the menuItem where id is ${id}`);
      res.sendStatus(200);
    })
    .catch(() => {
      logger.error(`Error when updating the menuItem of id ${id}`);
      res.sendStatus(500);
    });
};
