import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { People } from "./People";

@Entity({ name: "pessoa_telefone" })
export class PeoplePhone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "phone" })
  phone: string;

  @ManyToOne(() => People, (people) => people.phones)
  people: People;
}
