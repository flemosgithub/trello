import { Column, Entity, ManyToOne, OneToMany, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";
import { User } from "./user.entity";

@Entity()
export class UserList extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name" })
    name: string;

    @ManyToOne(type => User, user => user.userLists)
    user: User;

    @OneToMany(type => Task, task => task.userList, { eager: true})
    tasks: Task[];
    
}

