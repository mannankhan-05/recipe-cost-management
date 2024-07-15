import express from "express";
import logger from "./logger";
import db from "./config/database";
import router from "./routes/routes";
import cors from "cors";
const app = express();

const PORT: number = 5000;

// connecting to postgres database
db.authenticate()
  .then(() => logger.info("Connected to database(postgresql)"))
  .catch(() => logger.error("Error connecting to database(postgresql)"));

db.sync()
  .then(() => logger.info("Database synced"))
  .catch(() => logger.error("Error syncing database"));

// middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// to use router in the application
app.use(router);

app.listen(PORT, (): void => {
  logger.info(`Server is running on port ${PORT}`);
});
