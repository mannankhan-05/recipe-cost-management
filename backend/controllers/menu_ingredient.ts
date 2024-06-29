// import menu from "../models/menu";
// import ingredient from "../models/ingredient";
// import { Request, Response } from "express";
// // import menu_ingredient from "../models/menu_ingredient";

// // to get all the menus with it's ingredients
// export const getAllMenusWithIngredients = (req: Request, res: Response) => {
//   menu
//     .findAll({
//       include: [
//         {
//           model: ingredient,
//           through: {
//             attributes: ["quantity"],
//           },
//         },
//       ],
//     })
//     .then((menus) => {
//       console.log(JSON.stringify(menus, null, 2));
//     });
// };
