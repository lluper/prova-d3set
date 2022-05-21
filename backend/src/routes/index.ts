import peopleRouter from "./people";
import { Express } from "express";

function configRoutes(app: Express) {
  app.use("/", peopleRouter);
}

export { configRoutes };
