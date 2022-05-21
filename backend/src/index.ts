import "reflect-metadata";
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { configRoutes } from "./routes";
import { AppDataSource } from "./db";

dotenv.config();
const app: Express = express();
app.use(cors());

configRoutes(app);

const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => console.log(error));
