import { Column, Entity, ManyToOne, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserList extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "userid" })
    userId: number;

    @ManyToOne(type => User, user => user.userLists)
    user: User;

}