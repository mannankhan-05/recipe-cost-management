import express from "express";
import logger from "./logger";
const app = express();

const PORT: number = 5000;

app.listen(PORT, (): void => {
  logger.info(`Server is running on port ${PORT}`);
});
