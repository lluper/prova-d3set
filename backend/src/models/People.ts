import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm"
import { PeoplePhone } from "./PeoplePhone"

@Entity({name:'pessoa'})
export class People {

    @PrimaryGeneratedColumn()
    id: number|string

    @Column({name:'nome'})
    name: string

    @Column({name:'data_aniversario',type:'date'})
    dateBirthday : Date

    @OneToMany(() => PeoplePhone, (phone) => phone.people,{
        eager: true,
    })
    @JoinTable()
    phones: PeoplePhone[]


}
