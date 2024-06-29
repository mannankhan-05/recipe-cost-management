import express from "express";
import logger from "./logger";
import db from "./config/database";
import router from "./routes/routes";
const app = express();

const PORT: number = 5000;

// connecting to postgres database
db.authenticate()
  .then(() => logger.info("Connected to database(postgresql)"))
  .catch(() => logger.error("Error connecting to database(postgresql)"));

// middleware to parse JSON bodies
app.use(express.json());

// to use router in the application
app.use(router);

app.listen(PORT, (): void => {
  logger.info(`Server is running on port ${PORT}`);
});

// Sync database (be careful with force: true, it will drop and recreate tables)
// db.sync({ force: false })
//   .then(() => {
//     logger.info("Database synced");
//   })
//   .catch((err) => {
//     logger.error("Error syncing database", err);
//   });
