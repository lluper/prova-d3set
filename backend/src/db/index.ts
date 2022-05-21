import "reflect-metadata"
import { DataSource } from "typeorm"
import { People } from "../models/People"
import { PeoplePhone } from "../models/PeoplePhone"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database:'./src/db/db.db',
    synchronize: true,
    logging: false,
    entities: [People,PeoplePhone],
    migrations: [],
    subscribers: [],
})
