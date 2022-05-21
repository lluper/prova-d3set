import express, { Router, Request, Response } from "express";
import { PeopleController } from "../../controllers/PeopleController";

const peopleController = new PeopleController();
const router: Router = express.Router();

router.get("/people", peopleController.getAll);

router.get("/people/:id", peopleController.getById);

export default router;
