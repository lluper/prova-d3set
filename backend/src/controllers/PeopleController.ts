import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { People } from "../models/People";

export class PeopleController {
  async getAll(req: Request, res: Response) {
    const peoples = await AppDataSource.manager.find(People);
    if (req.query.onlyMoreTwo) {
      res.json(peoples.filter((people) => people.phones.length > 2));
    } else res.json(peoples);
  }

  async getById(req: Request, res: Response) {
    const people = await AppDataSource.manager.getRepository(People).findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!people) res.status(404).json("");
    else res.json(people);
  }
}
